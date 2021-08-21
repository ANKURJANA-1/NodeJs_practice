const mongoose =require("mongoose");
const validator =require("validator");

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3
    },
    email:{
        type: String,
        required:true,
    },
    phone_no:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    }
})

const User =new mongoose.model('User',userSchema);

module.exports= User;