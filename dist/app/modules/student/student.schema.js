"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Studentchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: [true, 'name is required here'],
        maxlength: 20,
        trim: true,
    },
    password: { type: String },
    userid: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'userID is required'],
        unique: true,
        ref: 'UserModel'
    },
    adress: { type: String },
    contactnumber: { type: String, trim: true },
    country: { type: String, trim: true },
    gender: {
        type: String,
        enum: {
            values: ["male", "female"],
            message: "The gender feild must be  only male and female"
        },
        trim: true,
        required: true
    },
    gardian: {
        fathersName: { type: String, trim: true },
        fathersNumber: { type: String, trim: true }
    },
});
// document middleware
// Studentchema.pre('save', async function (next) {
//     const saltNumber = 10
//     this.password = await bcrypt.hash(this.password, saltNumber)
//     next()
// })
// Studentchema.post('save', function (doc, next) {
//     doc.password = ""
//     next()
// })
// //query midleware
// Studentchema.pre("find", function (next) {
//     this.find({ isDeleted: { $ne: true } })
//     next()
// })
const StudentsModal = (0, mongoose_1.model)("Student", Studentchema);
exports.default = StudentsModal;