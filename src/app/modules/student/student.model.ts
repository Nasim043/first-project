import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
import config from '../../config';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    maxlength: [20, 'First Name sholud not be more than 20 Characters'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuradianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'ID is required'] },
  password: { type: String, required: [true, 'Password is required'], maxlength: [10, 'Password must be less than 10 character'] },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'UserId is required'],
    unique: true,
    ref: 'User'
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required']
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{Value} is not a valid gender'
    },
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is required'] },
  contactNo: {
    type: String,
    required: true,
    validate: {
      validator: (v: string): boolean => v.length === 11,
      message: props => `${props.value} is not 11 digits`
    }
  },
  emergencyContactNo: { type: String, required: true },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddres: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required']
  },
  localGuardian: {
    type: localGuradianSchema,
    required: [true, 'Local Guardian is required']
  },
  profileImg: { type: String },
});


// middleware

studentSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.saltRounds));
  console.log(this, 'Pre hook');
  next();
})
studentSchema.post('save', function () {
  console.log(this, 'Post hook');
})
export const StudentModel = model<Student>('Student', studentSchema);
