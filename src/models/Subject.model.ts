import mongoose from 'mongoose';

export interface ISubject extends mongoose.Document {
    name: string;
    description: string;
    credits: number;
    ubication: string;
    classRoom: string;
}

const SubjectSchema = new mongoose.Schema<ISubject>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Subject', SubjectSchema);