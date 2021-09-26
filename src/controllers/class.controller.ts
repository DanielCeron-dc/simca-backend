import { Response, Request } from "express";
import Class, { IClass } from "../models/Class.model";
import Student , {IStudent} from "../models/student.model";

class ClassController {
    public async getStudenClasses(req: Request, res: Response): Promise<void> {
        try {
            //fetch student with the requested id then fetch the classes with the array of classes in the student.classes
            const student: IStudent = await Student.findById(req.params.idStudent);
            if (!student) {
                res.status(404).send("Student not found");
            }
            const classes: IClass[] = await Class.find({ _id: { $in: student.classes } });
            res.status(200).json(classes);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async createClass(req: Request, res: Response): Promise<void> {
        try {
            const newClass: IClass = new Class(req.body);
            const classCreated: IClass = await newClass.save();
            res.status(201).json(classCreated);
        } catch (error) {
            res.status(500).send(error);
        }
    }


}

export default ClassController;


