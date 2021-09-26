import { Response, Request } from 'express';
import Semester, { ISemester } from '../models/Semester.model';

class semesterController {
    public async getSemesters(req: Request, res: Response): Promise<Response> {
        const semesters:ISemester[] = await Semester.find();
        return res.json(semesters);
    }
    
    public async getSemester(req: Request, res: Response): Promise<Response> {
        const semester = await Semester.findById(req.params.id);
        return res.json(semester);
    }
    
    public async createSemester(req: Request, res: Response): Promise<Response> {
        const semester:ISemester = new Semester(req.body);
        await semester.save();
        return res.json({
            message: 'Semester saved',
            semester
        });
    }
    
    public async updateSemester(req: Request, res: Response): Promise<Response> {
        const semester:ISemester = await Semester.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json({
            message: 'Semester updated',
            semester
        });
    }
    
    public async deleteSemester(req: Request, res: Response): Promise<Response> {
        await Semester.findByIdAndRemove(req.params.id);
        return res.json({
            message: 'Semester deleted'
        });
    }
}

export default semesterController; 
