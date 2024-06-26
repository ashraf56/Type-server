"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRouter = void 0;
const express_1 = require("express");
const academicfaculty_controller_1 = require("./academicfaculty.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const faculty_validation_1 = require("./faculty.validation");
const router = (0, express_1.Router)();
router.post('/create-faculty', (0, validateRequest_1.default)(faculty_validation_1.AcdemicFacultyValidation.createAcdemicFacultyValidationSchema), academicfaculty_controller_1.AcademicFacultyControllers.createAcdemicFacultyController);
router.get('/', academicfaculty_controller_1.AcademicFacultyControllers.getAllAcademicFacultyController);
router.get('/:id', academicfaculty_controller_1.AcademicFacultyControllers.getSingleAcademicFacultyController);
router.patch('/:id', academicfaculty_controller_1.AcademicFacultyControllers.updateAcademicFacultyController);
exports.AcademicFacultyRouter = router;
