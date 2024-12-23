const mongoose =require("mongoose");

/*
  with this command below whathever i have 
  written in env command would stored in the
  process command
*/

require("dotenv").config();

const dbConnect = () =>{
    /*
    here the process stores the .env command
    by using the npm i dotenv which loads the
    env file in the processes folder
     */

    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB connection successful"))
    .catch((error)=>{
        console.log("Issue in connection");
        console.log(error.message);
        process.exit(1);

    });
}
module.exports=dbConnect;  

