import { Router } from 'express';
import classesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';

const routes = Router();

routes.get('/', (req, res) =>
  res.send('<h1 style="font-family: Arial;">Proffy API</h1>')
);

routes.post('/sessions', SessionsController.create);

routes.post('/users', UsersController.create);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.create);

export default routes;
