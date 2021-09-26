import express from "express";

import ClassRouter from "./class";
import ProgramRouter from "./program";
import StudentRouter from "./student";
import SemesterRouter from "./Semester";
import SubjectRouter from "./subject";
import PersonRouter from "./person";

const appRoute = express.Router();

appRoute.use("/class", ClassRouter);
appRoute.use("/program", ProgramRouter);
appRoute.use("/student", StudentRouter);
appRoute.use("/semester", SemesterRouter);
appRoute.use("/subject", SubjectRouter);
appRoute.use("/person", PersonRouter);
appRoute.get("/", (req, res) => {
    // send html with welcome message
    res.send(`
        <html>
            <head>
                <title>Welcome to the API</title>
            </head>
            <body  style = "display: grid;  place-items:center"; >
                <h1 style = "color:green" >Welcome to the SIMCA BACKEND</h1>
                <p>
                    This is a simple API that allows you to manage your students and their classes.
                </p>
            </body>
        </html>
    `);



});

export default appRoute;


