//This file is intended to be hidden from versioning systems
//This file is show here only from assignment purposes
const env = process.env.NODE_ENV; // 'dev' or 'prod'

const dev = {
  app: {
    PORT: 8000,
    WEB_TOKEN_SECRET: 'secret',
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
    PORT: 80,
    WEB_TOKEN_SECRET: 'secret',
  },
  db: {
    host     : 'localhost',
    user     : 'warTurtle',
    password : 'warTurtle',
    database : 'inkers'
  },
};

const config = {
  dev,
  prod,
};

export default config[env];
