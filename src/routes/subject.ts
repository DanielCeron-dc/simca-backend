import { Router } from 'express';
import SubjectController from '../controllers/subject.controller';

class SubjectRoutes {
    public router: Router = Router();
    private subjectController: SubjectController = new SubjectController();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', this.subjectController.getAllSubjects);
        this.router.get('/:id', this.subjectController.getSubjectById);
        this.router.post('/', this.subjectController.createSubject);
        this.router.put('/:id', this.subjectController.updateSubject);
        this.router.delete('/:id', this.subjectController.deleteSubject);
    }
}

const subjectRoutes = new SubjectRoutes();
export default subjectRoutes.router;
