import { Router } from "express";
import { StudentController } from "../controllers/student.controller";


class StudentRoutes {
    public router: Router = Router();
    private studentController: StudentController = new StudentController();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', this.studentController.getStudents);
        this.router.get('/:id', this.studentController.getStudentWithID);
        this.router.post('/', this.studentController.addNewStudent);
        this.router.put('/:id', this.studentController.updateStudent);
        this.router.delete('/:id', this.studentController.deleteStudent);
    }
}

const studentRoutes = new StudentRoutes();
export default studentRoutes.router;