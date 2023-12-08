import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import studentRoutes from './app/modules/student/student.route';
import userRoute from './app/modules/users/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users/', userRoute);

export default app;
