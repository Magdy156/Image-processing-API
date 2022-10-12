// importing Express to run server and routes
import express from 'express';

import main_route from './routers/index';

// Start up an instance of app
const app: express.Application = express();

const port = 3100;

// the main api endpoint
app.use('/api', main_route);

// this end point is to bind and listen the connections on the specified host and port.
app.listen(port, (): void => {
  console.log(`server works on port ${port}`);
});

export default app;
