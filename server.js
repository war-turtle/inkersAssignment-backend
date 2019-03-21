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

//
var CronJob = require('cron').CronJob;
new CronJob('11 54 * * *', function() {
  console.log('wee')
  console.log(moment().tz('Asia/Kolkata').format())
}, null, true, 'Asia/Kolkata');

const server = app.listen(config.app.PORT);
console.log(`app running on ${config.app.PORT}`);

export default server;
