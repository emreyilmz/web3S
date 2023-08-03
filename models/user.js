const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    likes:[
        {type:ObjectId,ref:"Movie"}
    ],
    saves:[
        {type:ObjectId,ref:"Word"}
    ]
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)