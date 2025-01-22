const mongoose = require('mongoose')


const MenSchema=new mongoose.Schema({
    name:String,
    email:String,
    pass:String



})


const MenModel=mongoose.model("mentoracc",MenSchema)//table name in mongo
module.exports=MenModel
