const { request } = require('express');
const mongoose =  require('mongoose');
const useSchema = mongoose.Schema({
    name:{
      type:mongoose.Types.ObjectId,
      required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    profile_image:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','charity','donor'],
        default:'donor',
    }
},{timestamps:true});
const USERS = mongoose.model('user',useSchema);