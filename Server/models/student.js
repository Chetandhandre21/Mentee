const mongoose = require('mongoose')


const StdSchema=new mongoose.Schema({
    name:String,
    email:String,
    pass:String



})


const StdModel=mongoose.model("Mentees",StdSchema)//table name in mongo
module.exports=StdModel