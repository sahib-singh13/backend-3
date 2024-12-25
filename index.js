//now after defining everything defined i used
//controllers, databses, models etc 
//I use to define everything and assemble everything
//in the index.js file

//server instantiated taking instance of express
const express=require("express");
const app=express();

 //load config from env file
 require("dotenv").config();
 const PORT=process.env.PORT || 4000;

 //middleware to parse json request body
 app.use(express.json());

//  import routes for TODO API
//now next step would be importing all the routes
//from the files in the routes folder
//and mounting it to the web address of our
//file and mouting all the API routes

//import routes for TODO API
const todoRoutes=require("./routes/todo");
//mount all the API routes mentioned in the file
app.use("/api/v1",todoRoutes);

//now i can start the server
app.listen(PORT,()=>{
    console.log(`server run successfully at ${PORT}`);
})

//connect database
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage</h1>`);
})