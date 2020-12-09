import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './dbConnection';
import routes from './controllers';

const path = require('path');

connectDb();

dotenv.config();

const app = express();

const buildPath = path.join(__dirname, '../..', 'build');
console.log(buildPath);
app.use(express.static(buildPath));

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init routes
app.use('/', routes);

const { PORT = 3100 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server is running on port ${PORT}`);
});
