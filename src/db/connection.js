const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/webdb",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connecting...");
}).catch((e)=>{
    console.log(e);
})