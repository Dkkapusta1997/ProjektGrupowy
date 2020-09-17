var express=require('express');
var router=express.Router();

var statisticsDB=require('../db/serviceDB/statisticDB')

router.get('/showStatisticsByIdOwner',(req,res)=>{
    statisticsDB.showStatisticsByIdOwner(req,res)
})

module.exports=router