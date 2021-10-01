import { Response, Request } from 'express';
import Pensum from '../models/Pensum.model';

class PensumController {
    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const pensums = await Pensum.find();
            res.status(200).json(pensums);
        } catch (error:any) {
            res.status(500).json({ error});
        }
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const pensum = await Pensum.findById(id);
            console.log(pensum);
            if (!pensum) {
                res.status(404).json({ message: 'Pensum not found' });
                return;
            }
            res.status(200).json(pensum);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        const newPensum = {
            ...req.body,
        };
        const pensum = new Pensum(newPensum);
        await pensum.save();
        res.status(200).json({ message: 'Pensum saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const updatedPensum = {
            ...req.body,
        };
        await Pensum.findByIdAndUpdate(id, updatedPensum, {
            new: true,
        });
        res.json({ message: 'Pensum updated' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await Pensum.findByIdAndDelete(id);
        res.json({ message: 'Pensum deleted' });
    }
}

export default PensumController;

