import mongoose from 'mongoose';

export interface ITeacher extends mongoose.Document {
    person: mongoose.Schema.Types.ObjectId;
    email: string;
    salary: number;
    active: boolean;
}

const TeacherSchema = new mongoose.Schema<ITeacher>({
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
    active: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Teacher', TeacherSchema);
