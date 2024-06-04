import mongoose, { Schema, model } from "mongoose";

const patientSchema = new Schema({
    name: { type: String, required: true },
    diagonoseWith: { type: String, required: true },
    addresses: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: { type: String, required: true },
    gender: {
        type: String,
        enum: ["M", "F"],
        required: true
    },
    addimittedIn:{
        type: mongoose.Types.ObjectId,
        ref:"Hospital"
    }
}, { timetsamps: true });
export const patientModel = model("Patient", patientSchema);

