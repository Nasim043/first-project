import express from 'express';
import { StudentControllers } from './student.controller';
const studentRoutes = express.Router();

studentRoutes.post('/create-student', StudentControllers.createStudent);
studentRoutes.get('/', StudentControllers.getAllStudents);
studentRoutes.get('/:studentId', StudentControllers.getSingleStudent);

export default studentRoutes;
