import { PrismaClient, users } from '@prisma/client';

const prisma = new PrismaClient();

export async function addAlice() {
  await prisma.tutorial.create({
    data: {
      tutorialdescription: 'Alice',
      tutorialhint: 'test@tst.es'
    }
  });
  await closeConnection();
}

export async function createUsers(user: users ){
  await prisma.users.create({
    data: {
      usersname: user.usersname, 
      usersemail: user.usersemail,
      userspassword: user.userspassword,
      userstotalscore: 0,
      userslevel: 1,
    }
  });
  await closeConnection(); 
 
}

export async function getAllUsers() {
    const users = await prisma.users.findMany();
    console.log("This is printing out all users",  users);
    return users
}

export async function getUserByID(id: number) {
  const user = await prisma.users.findUnique({
    where: {
      usersid: id,
    }
  });
   
  return user
}


export async function deletUsersById(id: number) {
  const users = await prisma.users.delete({
    where: {
      usersid: id,
    }
  })
  await closeConnection(); 
}

export async function updateUserByID(id: number, data: users) {
  const users = await prisma.users.update({
      where: {
        usersid: id,
      },
      data: {
        usersname: data.usersname, 
    
      }
  })
  await closeConnection(); 
}


// async function getUserByID(tutorialId: number) {
//   const user = await prisma.tutorial.findUnique({
//     where: {
//       tutorialid: tutorialId
//     }
//   });
//   await closeConnection();
//   return user;
// }

  
// (async () => {
//   const user = await getUserByID(2);
//   console.log(user);

// })();


async function closeConnection() {
  try {
    prisma.$disconnect;
  } catch (e) {
    console.log(e);
    prisma.$disconnect;
    process.exit(1);
  }
}
