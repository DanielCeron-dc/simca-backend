import { Response, Request, ErrorRequestHandler } from "express";
import Person, { IPerson } from "../models/Person.model";

class PersonController {
    public async getPerson(req: Request, res: Response): Promise<void> {
        try {
            const person:IPerson= await Person.findById(req.params.id);
            if (!person) {
                res.status(404).json({
                    message: "Person not found",
                });
            } else {
                res.json(person);
            }
        } catch (error) {
            res.status(500).json({
                message: "Error retrieving person",
            });
        }
    }

    public async createPerson(req: Request, res: Response): Promise<void> {
        try {
            const newPerson = new Person(req.body);
            await newPerson.save();
            res.status(200).json({
                message: "Person created",
            });
        } catch (error) {
            res.status(500).json({
                message: "Error creating person",
                error: error,
            });
        }
    }

}


export default PersonController;
