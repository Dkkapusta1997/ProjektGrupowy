var express=require('express')
var router=express.Router()

const stageDB=require('../db/serviceDB/StageDB')

router.get('/add',(req,res)=>{
    stageDB.addStage(req,res)
})

router.get('/showByIdOwner',(req,res)=>{
    stageDB.showStageByIdOwner(req,res)
})

router.get('/delete',(req,res)=>{
    stageDB.deleteStage(req,res)
})
router.get('/addModuleToStage',(req,res)=>{
    stageDB.addModuleToStage(req,res)
})
router.get('/deleteModuleInStage',(req,res)=>{
    stageDB.deleteModuleInStage(req,res)
})
router.get('/showModuleInStageByIdModule',(req,res)=>{
    stageDB.showModuleInStageByIdModule(req,res)
})
module.exports=router;