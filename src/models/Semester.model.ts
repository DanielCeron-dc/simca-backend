import { Schema , model, Document} from "mongoose";


export interface ISemester extends Document {
    name: string,
    subjects: Schema.Types.ObjectId[],
    startDate: Date,
    endDate:Date
}

const SemesterSchema = new Schema<ISemester>({
    name: {
        type: String,
        required: true
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: "Subject"
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

export default model("Semester", SemesterSchema);
