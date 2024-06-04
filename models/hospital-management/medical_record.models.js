import mongoose,{Schema,model} from "mongoose";

const medicalRecordsSchema = new Schema({},{timetsamps:true});
export const medicalRecordsModel = model("MedicalRecords", medicalRecordsSchema);

