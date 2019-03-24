import auth from './routes/auth';
import graph from './routes/graph';
import notFound from './routes/notFound';

const router = (app) => {
  app.use('/auth', auth);
  app.use('/graph', graph);
  app.use('*', notFound);
};

export default router;
