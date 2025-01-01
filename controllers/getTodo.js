const Todo=require("../models/Todo");

exports.getTodo = async(req,res)=>{
    try{
          //fetch all todo items from database
          //mongoose provides lot of functions create,find etc
          const todos=await Todo.find({});
          //response

          res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entire data is fetched",
            }
          );
    }
    catch(err){
         console.error(err);
         console.log(err);
         res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
         });

    }
   
}