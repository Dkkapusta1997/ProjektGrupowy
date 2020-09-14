var express=require('express');
var router=express.Router();

const userController=require('../db/serviceDB/usersDB')


router.post('/exist',(req,res)=>{
    userController.existUser(res,req.query.email,req.query.password)
    }
)

router.put('/regist',(req,res)=>{
    console.log("router.put")
    userController.registUser(res,req)
})



module.exports=router