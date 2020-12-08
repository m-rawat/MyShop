const mongoose=require("mongoose");
const validator=require("validator");

const webSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("INvalid email id")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
       type:String,
       required:true,
       minLength:3 
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User=new mongoose.model("User",webSchema);
module.exports=User;