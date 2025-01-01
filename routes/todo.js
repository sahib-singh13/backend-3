// in routes i try to map the the routes address 
// with what controller logic it needs to mapped
// through to process and do operations on data
// The path where address are linked to their 
// particular controllers

//first of all we need to get an instance
//of express coz after that we can use it 
//to create an instance of router

const express=require("express");
const router=express.Router();

//import controller
const {createTodo}=require("../controllers/createTodo");

//define API routes
//currently we are only creating a route
//for the createTodo path so we mention that

router.post("/createTodo",createTodo);

module.exports=router;