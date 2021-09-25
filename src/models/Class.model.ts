import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const ClassSchema = new Schema({
    classID: {
        type: String,
        required: true,
        unique: true
    },
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
    teacherID: {
        type: String,
        required: true
    },
});

export default Mongoose.model("Class", ClassSchema);
