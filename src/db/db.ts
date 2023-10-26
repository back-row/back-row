import { PrismaClient, users } from '@prisma/client';
import { hashPassword } from '../endpoints/auth';

const prisma = new PrismaClient();

export async function createAdmin() {
  const admin = await prisma.users.findUnique({
    where: { usersname: 'admin' }
  });

  if (!admin) {
    console.log('Admin user does not exist, creating admin user');
    try {
      await prisma.users.create({
        data: {
          usersname: 'admin',
          usersemail: 'admin@admin.com',
          userspassword: await hashPassword(process.env.ADMIN_PASSWORD!),
          userstotalscore: 0,
          userslevel: 1,
          usersimage: 'ghoul'
        }
      });
    } catch (e) {
      console.error('Error creating admin:', e);
    }
  }
}

export async function createUsers(user: users) {
  const encryptedPassword = await hashPassword(user.userspassword);
  await prisma.users.create({
    data: {
      usersname: user.usersname,
      usersemail: user.usersemail,
      userspassword: encryptedPassword,
      userstotalscore: 0,
      userslevel: 1,
      usersimage: user.usersimage
    }
  });
  await closeConnection();
}

export async function getAllUsers() {
  return await prisma.users.findMany();
}

export async function getUserByID(id: number) {
  return await prisma.users.findUnique({
    where: {
      usersid: id
    }
  });
}

export async function getUserByIDNoPassword(id: number) {
  const user = await prisma.users.findUnique({
    where: {
      usersid: id
    }
  });
  await closeConnection();

  return {
    usersid: user?.usersid,
    usersname: user?.usersname,
    usersemail: user?.usersemail,
    userstotalscore: user?.userstotalscore,
    userslevel: user?.userslevel,
    usersimage: user?.usersimage
  };
}

export async function getUserByName(name: string) {
  const user = await prisma.users.findUnique({
    where: {
      usersname: name
    }
  });
  await closeConnection();
  return user;
}

export async function deleteUsersById(id: number) {
  const users = await prisma.users.delete({
    where: {
      usersid: id
    }
  });
  await closeConnection();
}

export async function updateUserByID(id: number, data: any) {
  const users = await prisma.users.update({
    where: {
      usersid: id
    },
    data: {
      usersname: data.name,
      usersemail: data.email,
      userslevel: data.level,
      userstotalscore: data.score,
      usersimage: data.avatar
    }
  });

  await closeConnection();
}

export async function getTutorialByMapId(id: number) {
  console.log('Getting tutorial by mapid: ' + id);
  const map = await prisma.map.findUnique({
    where: {
      mapid: id
    },
    include: {
      tutorial: true
    }
  });
  await closeConnection();
  return map?.tutorial;
}

export async function getMap(id: number) {
  console.log('Getting map with id: ', id, ' from db');
  const map = await prisma.map.findUnique({
    where: {
      mapid: id
    }
  });
  await closeConnection();

  return map;
}

export async function getNumberOfMaps() {
  const number = await prisma.map.count();
  console.log('Getting number of maps: ', number, ' from db');
  await closeConnection();

  return number;
}

export async function closeConnection() {
  try {
    prisma.$disconnect;
  } catch (e) {
    console.error(e);
    prisma.$disconnect;
    process.exit(1);
  }
}

export async function getQuestion(id: number) {
  console.log('Getting question with id: ', id, 'from db');
  const question = await prisma.quiz.findUnique({
    where: {
      quizid: id
    }
  });
  await closeConnection();
  return question;
}

export async function createScore(user: number, map: number, score: number) {
  await prisma.userscore.create({
    data: {
      userscoreusersid: user,
      userscoremapid: map,
      userscorescore: score
    }
  });
  await closeConnection();
}

export async function updateScore(userscore: number, score: number) {
  await prisma.userscore.update({
    where: {
      userscoreid: userscore
    },
    data: {
      userscorescore: score
    }
  });
}

export async function getUserScore(user: number, map: number) {
  const userScore = await prisma.userscore.findFirst({
    where: {
      userscoreusersid: user,
      userscoremapid: map
    }
  });
  await closeConnection();
  return userScore;
}

export async function updateUserTotalScore(userId: number) {
  const user = await prisma.users.findUnique({
    where: { usersid: userId },
    include: {
      userscore: {
        select: { userscorescore: true }
      }
    }
  });

  if (user) {
    if (user.userscore) {
      const totalScore = user.userscore.reduce((sum, score) => {
        if (score.userscorescore !== null && score.userscorescore !== undefined) {
          return sum + score.userscorescore;
        } else {
          return sum;
        }
      }, 0);
      await prisma.users.update({
        where: { usersid: userId },
        data: { userstotalscore: totalScore }
      });
    }
  }
}

export async function getHighScores() {
  return await prisma.users.findMany({
    take: 10,
    orderBy: {
      userstotalscore: 'desc'
    },
    select: {
      usersname: true,
      userstotalscore: true
    }
  });
}

export async function getAllMapScores(userId: number) {
  return await prisma.userscore.findMany({
    where: {
      userscoreusersid: userId
    },
    select: {
      userscoremapid: true,
      userscorescore: true
    }
  });
}
