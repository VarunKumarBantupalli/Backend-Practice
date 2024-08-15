import mongoose from "mongoose"
const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    floors:{
        type:Number,
        required:false
    },
    noOfDoctors:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
},{timestamps:true})
export const Hospital = mongoose.model("Hospital", hospitalSchema )