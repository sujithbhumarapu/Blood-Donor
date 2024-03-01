import mongoose from 'mongoose';
import  { Schema } from 'mongoose';
const DonorSchema = new Schema({
    name: {type:String,required:true},
    bloodGroup: {type:String,required:true},
    address: {type:String,required:true},
    mobile: {type:Number,required:true},
    email:{type:String,required:true,unique:true}
  });
  const Donor = mongoose.('Donor', DonorSchema);
export {Donor};