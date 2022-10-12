import express from 'express';
const main_route = express.Router();
import proccessor_route from './api/process';

// this endpoint will be excuted when the client use "/api" route
main_route.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Welcome to image proccessor API');
});

// this endpoint will be excuted when the client use "/process" route
main_route.use('/process', proccessor_route);

export default main_route;
