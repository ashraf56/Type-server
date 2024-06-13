import { Schema, model } from "mongoose";
import { SemesterRegistrationInterface } from "./semisterRagistration.interface";
import { SemesterRegistrationStatus } from "./semisterRagistration.constants";

const semesterRegistrationSchema = new Schema<SemesterRegistrationInterface>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'AcademicSemester',
    },
    status: {
      type: String,
      enum: SemesterRegistrationStatus,
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minCredit: {
      type: Number,
      default: 3,
    },
    maxCredit: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

export const SemesterRegistration = model<SemesterRegistrationInterface>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);