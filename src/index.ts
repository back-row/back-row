import express, { Express } from 'express';

const cors = require('cors');
import dotenv from 'dotenv';
import { endpoints } from './endpoints/endpoints';
import { createAdmin } from './db/db';

const bodyParser = require('body-parser');

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:8000'],
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

// Call createAdmin here to run it at startup
createAdmin()
  .then(() => {
    // The function has executed successfully, so we can start the server
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error creating admin:', error);
    // Handle the error as needed, such as terminating the application
  });
