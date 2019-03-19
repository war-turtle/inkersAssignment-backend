import express from 'express';
import config from './config';
import AppRoutes from './app/routes';
import middleware from './app/middleware';

const app = express();

// Applying middleware for the application
middleware(app);
// Adding routes for the application
AppRoutes(app);

const server = app.listen(config.app.PORT);
console.log(`app running on ${config.app.PORT}`);

export default server;
