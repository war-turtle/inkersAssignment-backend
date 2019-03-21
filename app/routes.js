import auth from './routes/auth';
import notFound from './routes/notFound';

const router = (app) => {
  app.use('/auth', auth);
  app.use('*', notFound);
};

export default router;
