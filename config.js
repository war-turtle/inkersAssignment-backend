//This file is intended to be hidden from versioning systems
//This file is show here only from assignment purposes
const env = process.env.NODE_ENV; // 'dev' or 'prod'

const dev = {
  app: {
    PORT: 8000,
  },
  db: {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'inkers'
  },
};

const prod = {
  app: {
    PORT: 8000,
    SESSION_SECRET: 'secret',
    WEB_TOKEN_SECRET: 'secret',
    jwt_expiry_time: '12h',
  },
  db: {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'inkers'
  },
};

const config = {
  dev,
  prod,
};

export default config[env];
