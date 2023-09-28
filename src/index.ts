import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { endpoints } from './endpoints/endpoints';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

endpoints(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
