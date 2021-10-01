import {Schema, model, Document} from 'mongoose';

interface IPensum extends Document {
    name: string,
    semesters: Schema.Types.ObjectId[]
}

const PensumSchema = new Schema<IPensum>({
    name: {
        type: String,
        required: true
    },
    semesters: [{
        type: Schema.Types.ObjectId,
        ref: 'Semester',
        required: true
    }]
});

export default model('Pensum', PensumSchema);

