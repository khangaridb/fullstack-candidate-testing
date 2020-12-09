import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './dbConnection';
import routes from './controllers';

const express = require('express');

connectDb();

dotenv.config();

const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init routes
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line
  console.log(`server is running on port ${process.env.PORT}`);
});
