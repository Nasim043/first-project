import { z } from "zod";
const userNameValidationSchema = z.object({
    firstName: z.string().min(1).max(20),
    middleName: z.string().optional(),
    lastName: z.string().min(1),
});

const guardianValidationSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNo: z.string().min(1),
    motherName: z.string().min(1),
    motherOccupation: z.string().min(1),
    motherContactNo: z.string().min(1),
});

const localGuradianValidationSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().min(1),
    contactNo: z.string().min(1),
    address: z.string().min(1),
});

const studentValidationSchema = z.object({
    id: z.string().min(1),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string(),
    email: z.string(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    presentAddress: z.string(),
    permanentAddres: z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuradianValidationSchema,
    profileImg: z.string(),
    isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;