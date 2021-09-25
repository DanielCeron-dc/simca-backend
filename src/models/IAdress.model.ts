import mongoose from 'mongoose';

const AdressSchema = new mongoose.Schema({
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