import { ErrorRequestHandler } from "express";
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const GlobalErrorhandller:ErrorRequestHandler = ((error, req, res, next) => {

    const statuscode = error.statuscode || 500
 const  message = error.message || "something error"
    return res.status(statuscode).json({
        success: false,
       message,
        error: error
    })



})

export default GlobalErrorhandller