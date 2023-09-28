import { PrismaClient } from '@prisma/client';

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

async function closeConnection() {
  try {
    prisma.$disconnect;
  } catch (e) {
    console.log(e);
    prisma.$disconnect;
    process.exit(1);
  }
}
