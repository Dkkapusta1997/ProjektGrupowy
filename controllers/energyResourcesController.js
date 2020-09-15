var express=require('express');
var router=express.Router();

const energyResources=require('../db/serviceDB/energyResourcesDB')

router.get('/showAll',(req,res)=>{
    energyResources.showAll(res);
})


module.exports=router
