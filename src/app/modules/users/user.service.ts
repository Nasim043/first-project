import config from "../../config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: Student) => {


    const userData: Partial<TUser> = {}
    // if password is not given, then use default password
    userData.password = password || (config.default_pass as string)

    // set user role
    userData.role = 'student';
    userData.id = '2023100001';
    // create a user
    const result = await User.create(userData);
    if (Object.keys(result).length) {
        // set id, _id
        studentData.id = userData.id
        studentData.user = result._id
        const newUser = await StudentModel.create(studentData);
        return newUser;
    }
};

export const userServices = {
    createStudentIntoDB
}