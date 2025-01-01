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

exports.getTodoById=async(req,res) => {
    try{
        //extract Todo Item based on ID
        //extract id from req body
         const id=req.params.id;
         //fetch the data from database whereever _id is equal to id
         const todo=await Todo.findById({_id: id})

         //data not found
         if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data found with given Id",
            })
            //data found
         
         }

         res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} successfully fetched`,
        })
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