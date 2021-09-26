import { Router } from 'express';
import PersonController from '../controllers/person.controller';


class PersonRoute {
    public router: Router = Router();
    private personController: PersonController = new PersonController();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/:id', this.personController.getPerson);
        this.router.post('/', this.personController.createPerson);
    }
}

export default new PersonRoute().router;



