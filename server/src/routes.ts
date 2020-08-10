import { Router } from 'express';
import classesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = Router();

routes.get('/', (req, res) =>
  res.send('<h1 style="font-family: Arial;">Proffy API</h1>')
);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.post('/connections', ConnectionsController.create);
routes.get('/connections', ConnectionsController.index);

export default routes;
