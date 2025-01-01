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

exports.updateTodo = async(req,res)=>{
    try{
          const {id}=req.params;
          const {title,description}=req.body;

          const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
          )

          res.status(200).json({
            success:true,
            data:todo,
            message:'updated Successfully'
          });

    }
    catch(err){
      console.log(err);
      res.status(500).json({
        success:false,
        error:err.message,
        message:'server error',
      });
    }
   
}