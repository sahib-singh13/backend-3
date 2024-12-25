//import the schema
//controllers defines the logic what happens with the data entered

const Todo=require("../models/Todo");
//this fetches the schema which is stored
//the Todo.js to that we can insert the data
//given in the request in the database of the 
//schema Todo. 

//we always use asynchronous way of calling
//messages to prevent main thread of getting 
//blocked in case of any error

exports.createTodo = async(req,res)=>{
    try{
         //extract title and description
    //from the body of the request
    const {title,description}=req.body;
    //create a new Todo Obj and insert it inside the DB
    const response = await Todo.create({title,description});
    //send a json response with success flag
    res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry created Successfully'
        }
    );

    }
    catch(err){
        console.log(err);
        //500 is used to denote internal server error
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })

    }
   
}