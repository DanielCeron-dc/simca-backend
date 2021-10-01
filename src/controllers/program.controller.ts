import { Request, Response } from 'express';
import Program, { IProgram } from '../models/Program.model';
import Student, { IStudent } from '../models/student.model'; 

class ProgramController {
    public async getStudentPrograms(req: Request, res: Response): Promise<void> {
        try {
            const studentId = req.params.idStudent;
            //fetch the student from the database and  use the programID array to fetch the programs
            const student: IStudent = await Student.findById(studentId);
            
            if (!student) {
                res.status(404).json({ msg: 'Student not found' });
            }
            const programs:IProgram[] = await Program.find({ _id:  student.programId  });
            res.status(200).json(programs);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    public async createProgram(req: Request, res: Response): Promise<void> {
        try {
            const newProgram = new Program(req.body);
            const program = await newProgram.save();
            res.json(program);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default ProgramController;