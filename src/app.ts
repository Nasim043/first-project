import cors from 'cors';
import express, { Application } from 'express';
import studentRoutes from './app/modules/student/student.route';
import userRoute from './app/modules/users/user.route';
import globalMiddleware from "./app/middlewares/globalMiddlewares";
import notFound from './app/middlewares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users/', userRoute);

app.use(globalMiddleware);
app.use(notFound);
export default app;
