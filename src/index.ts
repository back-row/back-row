import express, { Express } from 'express';

const cors = require('cors');
import dotenv from 'dotenv';
import { endpoints } from './endpoints/endpoints';
import { createAdmin } from './db/db';

const bodyParser = require('body-parser');

const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PUT'],
  exposedHeaders: ['Authorization'],
  credentials: true
};

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
endpoints(app);

createAdmin()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error creating admin:', error);
  });
