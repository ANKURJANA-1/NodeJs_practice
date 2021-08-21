const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/students_data",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connect is establish");
}).catch((e)=>{
    console.log(e);
});