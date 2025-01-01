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

exports.deleteTodo = async(req,res)=>{
    try{
          const id=req.params.id;
          await Todo.findByIdAndDelete({_id:id});
          res.json({
            success:true,
            message:"Todo DELETED",
          })
 
    }
    catch(err){
       console.error(err);
       res.status(500).json({
        success:false,
        error:err.message,
        message:'Server Error',
       });
    }
   
}