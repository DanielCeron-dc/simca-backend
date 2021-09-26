import { Schema, model, Document} from "mongoose";

export interface IClass extends Document {
    name: string;
    description: string;
    date: Date;
    subjectID: Schema.Types.ObjectId;
    teacherID: Schema.Types.ObjectId;
}

const ClassSchema = new Schema<IClass>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    subjectID: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    teacherID: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
});

export default model("Class", ClassSchema);
