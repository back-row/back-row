import { PrismaClient, map, users } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUsers(user: users) {
  await prisma.users.create({
    data: {
      usersname: user.usersname,
      usersemail: user.usersemail,
      userspassword: user.userspassword,
      userstotalscore: 0,
      userslevel: 1,
      usersimage: user.usersimage
    }
  });
  await closeConnection();
}

export async function getAllUsers() {
  const users = await prisma.users.findMany();
  console.log('This is printing out all users', users);
  return users;
}

export async function getUserByID(id: number) {
  const user = await prisma.users.findUnique({
    where: {
      usersid: id
    }
  });
  console.log(user);
  return user;
}

export async function getUserByIDNoPassword(id: number) {
  const user = await prisma.users.findUnique({
    where: {
      usersid: id
    }
  });
  await closeConnection();

  const userNoPassword = {
    usersid: user?.usersid,
    usersname: user?.usersname,
    usersemail: user?.usersemail,
    userstotalscore: user?.userstotalscore,
    userslevel: user?.userslevel,
    usersimage: user?.usersimage
  };
  return userNoPassword;
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

export async function deletUsersById(id: number) {
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
    console.log(e);
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

export async function insertScore(user, map, score) {}

export async function updateScore(user, map, score) {}

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
