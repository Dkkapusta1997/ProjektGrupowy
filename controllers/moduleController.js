var express=require('express');
var router=express.Router();

const modulee=require('../db/serviceDB/ModuleDB')

router.get('/add',(req,res)=>{
    modulee.addModule(req,res)
})
router.get('/delete',(req,res)=>{
    modulee.deleteModule(req,res)
})
router.get('/showByIdOwner',(req,res)=>{
    modulee.showByIdOwner(req,res)
})



module.exports=router
