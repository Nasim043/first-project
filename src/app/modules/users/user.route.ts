import express from 'express';
import { userControllers } from './user.controller';
const userRoutes = express.Router();

userRoutes.post('/create-student', userControllers.createStudent);
// userRoutes.post('/create-faculty', UserController.createFaculty);
// userRoutes.post('/create-admin'. UserController.createAdmin);

export default userRoutes;