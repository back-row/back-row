import { PrismaClient, tutorial } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  const tutorial: tutorial = await prisma.tutorial.create({
    data: {
      tutorialdescription: 'Alice',
      tutorialhint: 'test@tst.es'
    }
  });
  console.log(tutorial);
}
