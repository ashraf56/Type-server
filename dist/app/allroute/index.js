"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const student_route_1 = require("../modules/student/student.route");
const academicsemister_route_1 = require("../modules/academicSemister/academicsemister.route");
const academicfaculty_route_1 = require("../modules/academicFaculty/academicfaculty.route");
const department_route_1 = require("../modules/academicDepartment/department.route");
const faculty_route_1 = require("../modules/faculty/faculty.route");
const admin_route_1 = require("../modules/admin/admin.route");
const router = (0, express_1.Router)();
const moduleRoute = [
    {
        path: '/users',
        route: user_route_1.UserRouter
    },
    {
        path: '/students',
        route: student_route_1.StudentRoute
    },
    {
        path: '/academic',
        route: academicsemister_route_1.AcademicSemesterRouter
    },
    {
        path: '/academic-faculty',
        route: academicfaculty_route_1.AcademicFacultyRouter
    },
    {
        path: '/department',
        route: department_route_1.AcademicDepartmentRouter
    },
    {
        path: '/faculty',
        route: faculty_route_1.FacultyRouter
    },
    {
        path: '/admin',
        route: admin_route_1.AddminRouter
    }
];
moduleRoute.forEach(r => router.use(r.path, r.route));
exports.default = router;
