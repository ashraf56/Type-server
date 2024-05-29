import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academic.interface";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academic.constant";



const academicSemisterSchema = new Schema<TAcademicSemester>({

    name: {
        type: String,
        required: true,
        enum: AcademicSemesterName
    },
    year: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        enum: AcademicSemesterCode,
    },
    startMonth: {
        type: String,
        required: true,
        enum: Months,
    },
    endMonth: {
        type: String,
        required: true,
        enum: Months,
    },
},
    {
        timestamps: true,
    },)

// middleware function for business logic
academicSemisterSchema.pre('save', async function (next) {
    const issemisterExist = await AcademicSemesterModel.findOne({
        year: this.year,
        name: this.name
    })
    if (issemisterExist) {
        throw new Error('Already exist')
    }

    next()

})


export const AcademicSemesterModel = model<TAcademicSemester>('academicsemister', academicSemisterSchema)
