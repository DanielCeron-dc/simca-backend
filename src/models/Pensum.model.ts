import mongoose from 'mongoose';

const PensumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    semesters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester'
    }]
});

export default mongoose.model('Pensum', PensumSchema);

