import express from "express";
import path from "path";

import ClassRouter from "./class";
import ProgramRouter from "./program";
import StudentRouter from "./student";
import SemesterRouter from "./Semester";
import SubjectRouter from "./subject";
import PersonRouter from "./person";
import PensumRouter from "./pensum";


const appRoute = express.Router();

appRoute.use("/pensum", PensumRouter); 
appRoute.use("/class", ClassRouter);
appRoute.use("/program", ProgramRouter);
appRoute.use("/student", StudentRouter);
appRoute.use("/semester", SemesterRouter);
appRoute.use("/subject", SubjectRouter);
appRoute.use("/person", PersonRouter);
appRoute.get("/", (_, res) => res.status(200).sendFile(path.join(__dirname, "../", "views", "welcome.html")));
appRoute.use("*", (_, res) => res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html")));

export default appRoute;


