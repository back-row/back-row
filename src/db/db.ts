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
/* later add user:users */
export async function createUsers(){
  await prisma.users.create({
    data: {
      usersname: 'Alice', 
      usersemail: 'alice@gmailcom',
      userspassword: '123456',
      userstotalscore: null,
      userslevel: null,
    }
  });
  await closeConnection(); 
 
}

export async function getAllUsers() {
    const users = await prisma.users.findMany();
    console.log("This is printing out all users",  users);

}

export async function getUserByID() {
  const user = await prisma.users.findUnique({
    where: {
      usersid: 23,
    }
  });

  console.log("This is gonna print out just one user: ", user);
}

export async function deletUsers() {
  const users = await prisma.users.deleteMany();
}

export async function deletUsersById() {
  const users = await prisma.users.delete({
    where: {
      usersid: 2,
    }
  })
}

export async function updateUserByID() {
  const users = await prisma.users.update({
      where: {
        usersid: 23,
      },
      data: {
        usersname: 'Robert',
      }
  })
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
