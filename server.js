import express from 'express';
import config from './config';
import AppRoutes from './app/routes';
import middleware from './app/middleware';
import moment from 'moment';
import 'moment-timezone';

const app = express();

// Applying middleware for the application
middleware(app);
// Adding routes for the application
AppRoutes(app);

// CronJob for changing password at mid night
var CronJob = require('cron').CronJob;
new CronJob('0 0 * * *', function() {
  const newPassword = moment().tz('Asia/Kolkata').format("DMMMMYYYY").toLowerCase();
  global.db.query(`UPDATE users SET password="${newPassword}" WHERE username="admin"`, (err, res, fields) => {
    if(err){
      console.error(err);
    }
    console.log("password changed successfully");
  });
}, null, true, 'Asia/Kolkata');

const server = app.listen(config.app.PORT);
console.log(`app running on ${config.app.PORT}`);

export default server;
