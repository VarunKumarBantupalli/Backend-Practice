import mongoose from "mongoose"
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:number,
        required:true
    },
    qualifications:{
         type:String,
         requierd:true
    },
    experience:{
        type:number,
        default:0,
        required:true
    },
    worksInHospitals:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"    
    },
    specilazed:{
      type:String
    }
},{timestamps:true})
export const Doctor = mongoose.model("Doctor",doctorSchema)