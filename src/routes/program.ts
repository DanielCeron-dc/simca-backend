import { Router } from 'express';
import ProgramController from '../controllers/program.controller';


class ProgramRoutes {
    router: Router = Router();
    programController: ProgramController = new ProgramController();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', this.programController.getStudentPrograms);
    }

}

const programRoutes = new ProgramRoutes();
export default programRoutes.router;
