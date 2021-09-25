import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Teacher', TeacherSchema);
