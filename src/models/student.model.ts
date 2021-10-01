import { Schema , model, Document} from "mongoose";

export interface IStudent extends Document {
    email: string;
    password: string;
    person: Schema.Types.ObjectId;
    programId: Schema.Types.ObjectId;
    classes: Schema.Types.ObjectId[];
    history: Schema.Types.ObjectId[];
}

const StudentSchema = new Schema<IStudent>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        required: true
    },
    classes: [{
        type: Schema.Types.ObjectId,
        ref: "Class",
        required: true
    }],
    programId: {
        type: Schema.Types.ObjectId,
        ref: "Program",
        required: true
    },
    history: [{
        type: Schema.Types.ObjectId,
        ref: "Semester",
        required: true
    }]
});

export default model("Student", StudentSchema);
