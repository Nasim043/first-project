import express from 'express';
import { StudentControllers } from './student.controller';
const studentRoutes = express.Router();

studentRoutes.get('/', StudentControllers.getAllStudents);
studentRoutes.get('/:studentId', StudentControllers.getSingleStudent);

export default studentRoutes;
