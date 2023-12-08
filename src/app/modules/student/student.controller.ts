import { NextFunction, Request, Response } from 'express';
import { StudentSevices } from './stuedent.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSevices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error);
  }
};
const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentSevices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error);
  }
};
export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
