const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const StdModel = require('./models/student')
const Mtmodel = require('./models/mentor')
const MenModel = require('./models/mentoracc')
const Meetmodel = require('./models/smeeting')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Mentee")
// app.get('/vmentor',(req,res)=>{
//     Mtmodel.find()
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })
app.get('/metting',(req,res)=>{
    Meetmodel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/viewmentee',(req,res)=>{
    StdModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.post("/login",(req,res)=> {
    const{ email,pass}=req.body;
    StdModel.findOne({email:email})
    .then(user =>{

        if(user){
            if(user.pass===pass){
                res.json("Sucess")
                
            }
            else{
                res.json("The pass is incorrect")
                
            }
        }
        else{
            res.json("No Records exist")
            
        }
    })

})
app.post("/login",(req,res)=> {
    const{ email,pass}=req.body;  
    MenModel.findOne({email:email})
    .then(user =>{

        if(user){
            if(user.pass===pass){
                res.json("Sucess")
                
            }
            else{
                res.json("The pass is incorrect")
                
            }
        }
        else{
            res.json("No Records exist")
            
        }
    })

})


app.post('/signup',(req,res)=>{
    StdModel.create(req.body)

  .then(Mentees => res.json(Mentees))
  .catch(err=>res.json(err))

})
app.post('/schedulemeet',(req,res)=>{
    Meetmodel.create(req.body)

  .then(Mentees => res.json(Mentees))
  .catch(err=>res.json(err))

})



app.listen(3001,() => {
    console.log("server is running")

})