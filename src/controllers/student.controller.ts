//create a controller for student module
import { Request, Response } from 'express';
import  Student, { IStudent }  from '../models/student.model';


export class StudentController {

    public async addNewStudent(req: Request, res: Response): Promise<void> {
        try {
            const student = new Student();
            await student.save();
            res.status(200).json({ message: 'Student added successfully' });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    public async getStudents(req: Request, res: Response) {
        try {
            const students: IStudent[] = await Student.find();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    public async getStudentWithID(req: Request, res: Response):Promise<void> {
        try {
            const student: IStudent = await Student.findById(req.params.studentId);
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    public async updateStudent(req: Request, res: Response):Promise<void> {
        try {
            const student: IStudent = await Student.findByIdAndUpdate(req.params.studentId, req.body, { new: true });
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    public async deleteStudent(req: Request, res: Response):Promise<void> {
        try {
            const student: IStudent = await Student.findByIdAndDelete(req.params.studentId);
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}


