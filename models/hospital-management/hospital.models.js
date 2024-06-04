import { Schema, model, } from "mongoose";

const hospitalSchema = new Schema({
    name: { type: String, required: true },
    addresses: { type: String, required: true }
}, { timetsamps: true });
export const hospitalModel = model("Hospital", hospitalSchema);

