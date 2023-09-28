import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { endpoints } from './endpoints/endpoints';
const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

endpoints(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
