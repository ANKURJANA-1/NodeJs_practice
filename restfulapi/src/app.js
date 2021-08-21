const express = require("express");
require("./db/connection");
const User=require('./models/user')
const app= express()
const port=process.env.port || 3000;

app.use(express.json());

//post request for create account
app.post("/students",(req,res)=>{

    console.log(res.body);
    const user =new User(req.body);
    user.save();

    res.send("post request");
});

//get request
app.get('/students',(req,res)=>{

    
    res.send(res.User);
})

app.listen(port,()=>{
    console.log("connection is setup ...........");
});