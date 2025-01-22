const mongoose = require('mongoose')


const MeetSchema=new mongoose.Schema({
    
    date:String,
    time:String,
    agenda:String




})


const Meetmodel=mongoose.model("meeting",MeetSchema)//table name in mongo
module.exports=Meetmodel