import Mongoose from "mongoose";

export interface IProgram extends Mongoose.Document {
    name: string;
    description: string;
    duration: string;
    pensumId: Mongoose.Types.ObjectId;
}

const ProgramSchema = new Mongoose.Schema<IProgram>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    pensumId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Pensum",
        required: true
    },
});

export default Mongoose.model("Program", ProgramSchema);