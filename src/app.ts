import cors from 'cors';
import express, { Application } from 'express';
import globalMiddleware from "./app/middlewares/globalMiddlewares";
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.use(globalMiddleware);
app.use(notFound);
export default app;
