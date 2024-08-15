import mongoose from "mongoose"
const patientDataSchema =  new mongoose.Schema({
    age:{
       type:Number,
       required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["m","f","other"],
        required:true
    }

})
const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsedWith:{
        type:String,
        required:true
    },
    patientId:{
        type:number,
        required:true
    },
    patientData:{
        type:[patientDataSchema]        
    },
    admittedBranch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }

},{timestamps:true})
export const Patient = mongoose.model("Patient",patientSchema)