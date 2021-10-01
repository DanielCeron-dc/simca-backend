import { Router } from 'express';
import PensumController from '../controllers/pensum.controller';

class PensumRoutes {
    router: Router = Router();
    controller: PensumController = new PensumController();

    constructor() {

        this.config();
    }

    config(): void {
        this.router.get('/', this.controller.getAll);
        //this.router.get('/:id', (req, res) => { res.send('<h1>get one</h1>'); });
    }
}


export default new PensumRoutes().router;
