import { Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { password, student: studentData } = req.body;

        // const zodParseData = userValidationSchema.parse(studentData);
        const result = await userServices.createStudentIntoDB(password, studentData);


        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
};

export const userControllers = {
    createStudent
}