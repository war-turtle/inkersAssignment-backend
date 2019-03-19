// Middleware for Application
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import mysql from 'mysql';

import CsrfMiddleware from './middlewares/csrfMidlleware';
import EmptyContentMiddleware from './middlewares/EmptyContent';
import ContentTypeMiddleware from './middlewares/ContentType';
import config from '../config';

const middleware = (app) => {
  app.set('port', process.env.PORT || config.app.PORT);

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

  app.use(cors({
    origin: 'http://www.obscuranitkkr.co.in',
    credentials: true,
  }));

  app.use(bodyParser.urlencoded({
    extended: false,
  })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json

  app.use(ContentTypeMiddleware);
  app.use(EmptyContentMiddleware);
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
