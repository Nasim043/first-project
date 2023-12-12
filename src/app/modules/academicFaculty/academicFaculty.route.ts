import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validationRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.post('/create-academic-faculty', validateRequest(AcademicFacultyValidation.createAcademicFacultyValidationSchema,),
    AcademicFacultyControllers.createAcademicFaculty,
);
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch('/:facultyId', validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema,), AcademicFacultyControllers.updateAcademicFaculty,);
router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;