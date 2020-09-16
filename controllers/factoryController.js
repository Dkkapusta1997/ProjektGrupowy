var express=require('express')
var router=express.Router()

var factoryDB=require('../db/serviceDB/factoryDB')


router.get('/add',(req,res)=>{
    console.log("jp");
    factoryDB.addFactory(req,res)
})
router.get('/addStage_time',(req,res)=>{
    factoryDB.addStageTime(req,res)
})

module.exports=router