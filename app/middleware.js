// Middleware for Application
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import mysql from 'mysql';

import CsrfMiddleware from './middlewares/csrfMidlleware';
import config from '../config';

const middleware = (app) => {
  // adding security fixes
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(helmet.noCache({
    noEtag: true,
  })); // set Cache-Control header
  app.use(helmet.noSniff()); // set X-Content-Type-Options header
  app.use(helmet.frameguard()); // set X-Frame-Options header
  app.use(helmet.xssFilter()); // set X-XSS-Protection header
  app.enable('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

  const originUrl = (process.env.NODE_ENV === 'dev') ? 'http://localhost:3000' : 'https://inkers-frontend.herokuapp.com';
  app.use(cors({
    origin: originUrl,
    credentials: true,
  }));

  app.use(bodyParser.urlencoded({
    extended: false,
  })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json

  app.use(CsrfMiddleware);

  const db = mysql.createConnection(config.db);
  db.connect((err) => {
    if(err){
      throw err;
    }
    console.log('Connected to database');
  });
  global.db = db;
};

export default middleware;
