
const express=require("express");

//router for index
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("index");
})


module.exports=router