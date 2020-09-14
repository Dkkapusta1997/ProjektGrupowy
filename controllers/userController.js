var express=require('express');
var router=express.Router();

const userController=require('../db/serviceDB/usersDB')


router.get('/exist',(req,res)=>{
    console.log(req.query.email)
    console.log(req.query.password)
    userController.existUser(res,req.query.email,req.query.password)
    }
)

router.get('/regist',(req,res)=>{
    console.log("router.put")
    userController.registUser(res,req)
})



module.exports=router