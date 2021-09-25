import Mongoose from "mongoose";

const SemesterSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subjects: [{
        type: Mongoose.Schema.Types.ObjectId,
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

export default Mongoose.model("Semester", SemesterSchema);
