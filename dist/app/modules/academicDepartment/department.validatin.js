"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentValidation = void 0;
const zod_1 = require("zod");
const createAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Academic department must be string',
            required_error: 'Name is required',
        }).trim(),
        academicFaculty: zod_1.z.string({
            invalid_type_error: 'Academic faculty must be string',
            required_error: 'Faculty is required',
        }),
    }),
});
const updateAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            invalid_type_error: 'Academic department must be string',
            required_error: 'Name is required',
        })
            .optional(),
        academicFaculty: zod_1.z
            .string({
            invalid_type_error: 'Academic faculty must be string',
            required_error: 'Faculty is required',
        })
            .optional(),
    }),
});
exports.academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema,
};
