import { Router } from 'express';
import SemesterController from '../controllers/semester.controller';

class SemesterRoutes {
    public router: Router = Router();
    private semesterController: SemesterController = new SemesterController();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', this.semesterController.getSemesters);
        this.router.get('/:id', this.semesterController.getSemester);
        this.router.post('/', this.semesterController.createSemester);
        this.router.put('/:id', this.semesterController.updateSemester);
        this.router.delete('/:id', this.semesterController.deleteSemester);
    }

}

export default new SemesterRoutes().router;


