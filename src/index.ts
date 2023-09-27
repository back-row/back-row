import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { main } from './db/db';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('BACKROW');
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e: Error) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
