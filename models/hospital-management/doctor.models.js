import mongoose, { Schema, model } from "mongoose";

const doctorSchema = new Schema({
    name: { type: String, required: true },
    salary: { type: String, required: true },
    qulafications: { type: String, required: true },
    experience:{type:Number,default:0},
    worksInHospitals:[{
        type: mongoose.Types.ObjectId,
        ref:"Hospital",
    }]
}, { timetsamps: true });
export const doctorModel = model("Doctor", doctorSchema);

