import login from './routes/auth/login';

const router = (app) => {
  app.use(login)
};

export default router;
