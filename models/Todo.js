const mongoose=require("mongoose");

const todoSchema =new mongoose.Schema(
    {
        title:{
          type:String,
          required:true,
          maxLength:50,
        },

        description :{
            type:String,
            required:true,
            maxLength:50,
        },

        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

//it means the schema would me exported using modules.export
//and can be used by others with the name Todo
//model would be used by the controller
//40:00 mins left
module.exports = mongoose.exports("Todo",todoSchema);
