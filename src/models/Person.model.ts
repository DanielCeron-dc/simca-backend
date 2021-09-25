import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
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
