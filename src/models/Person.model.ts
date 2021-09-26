import mongoose from 'mongoose';

export interface IPerson extends mongoose.Document {
    name: string;
    age: number;
    identification: string;
    identificationType: string;
    expeditionCity: string;
    address: mongoose.Schema.Types.ObjectId; 
}


const personSchema = new mongoose.Schema<IPerson>({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    identification: {
        type: String,
        required: true,
    },
    identificationType: {
        type: String,
        required: true,
    },
    expeditionCity: {
        type: String,
        required: true,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
});

export default mongoose.model('Person', personSchema);
