const express=require("express");
const path=require("path");
require("./db/connection");
const User=require("./models/webmodel");
const hbs=require("hbs");

const port=process.env.PORT || 8000;
const app=express();

//Setting the path
const cssPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");


//middleware
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(cssPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


//route
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact", async(req,res)=>{
    try{
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(404).send(error);
    }
})


app.listen(port,(req,res)=>{
    console.log("listening...");
})