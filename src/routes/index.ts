import { Application } from 'express';
import apiRoutes from './api';

const routes = (server: Application): void => {
	server.use('/api', apiRoutes.router);
};

export default routes;
