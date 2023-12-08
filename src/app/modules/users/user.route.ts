import express from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middlewares/validationRequest';
import { studentValidations } from '../student/student.validation';
const userRoutes = express.Router();

userRoutes.post('/create-student',validateRequest(studentValidations.createStudentValidationSchema), userControllers.createStudent);
// userRoutes.post('/create-faculty', UserController.createFaculty);
// userRoutes.post('/create-admin'. UserController.createAdmin);

export default userRoutes;