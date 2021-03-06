import mongoose from 'mongoose';

export interface IAddress extends mongoose.Document {
    direction: string;
    street: string;
    city: string;
    department: string;
    country: string;
}


const AdressSchema = new mongoose.Schema<IAddress>({
    direction: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,

    },
    city: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});



export default mongoose.model('Adress', AdressSchema);