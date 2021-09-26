import { Request, Response } from 'express';
import Subject, { ISubject } from "../models/Subject.model";

class SubjectController {
    public async getAllSubjects(req: Request, res: Response): Promise<void> {
        try {
            const subjects: ISubject[] = await Subject.find();
            res.status(200).json(subjects);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async getSubjectById(req:Request, res:Response): Promise<void> {
        try {
            const subject: ISubject = await Subject.findById(req.params.id);
            res.status(200).json(subject);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async createSubject(req: Request, res: Response): Promise<void> {
        try {
            const subject: ISubject = await Subject.create(req.body);
            res.status(201).json(subject);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async updateSubject(req: Request, res: Response): Promise<void> {
        try {
            const subject: ISubject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(subject);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async deleteSubject(req: Request, res: Response): Promise<void> {
        try {
            await Subject.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Subject deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export default SubjectController; 
