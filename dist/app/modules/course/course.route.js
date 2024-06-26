"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const course_validation_1 = require("./course.validation");
const course_controller_1 = require("./course.controller");
const router = (0, express_1.Router)();
router.post('/create-course', (0, validateRequest_1.default)(course_validation_1.CourseValidations.createCourseValidationSchema), course_controller_1.CourseControllers.createCourseController);
router.get('/:id', course_controller_1.CourseControllers.getSingleCourseController);
router.delete('/:id', course_controller_1.CourseControllers.deleteCourseController);
router.get('/', course_controller_1.CourseControllers.getAllCourseController);
router.patch('/:id', (0, validateRequest_1.default)(course_validation_1.CourseValidations.updateCourseValidationSchema), course_controller_1.CourseControllers.getUpdateCourseController);
// Course Faculty route
router.delete('/:courseID/remove-course', (0, validateRequest_1.default)(course_validation_1.CourseValidations.facultiesWithCourseValidationSchema), course_controller_1.CourseControllers.RemoveCourseFacultyController);
router.put('/:courseID/assign-course', (0, validateRequest_1.default)(course_validation_1.CourseValidations.facultiesWithCourseValidationSchema), course_controller_1.CourseControllers.AssignCourseFacultyController);
exports.CourseRouter = router;
