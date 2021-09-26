
import ClassController from "../controllers/class.controller";
import { Router } from "express";


class ClassRoutes {
    public router: Router = Router();
    private classController: ClassController = new ClassController();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/:idStudent', this.classController.getStudenClasses);
        this.router.post('/', this.classController.createClass);
    }
}

const classRoutes = new ClassRoutes();
export default classRoutes.router;




