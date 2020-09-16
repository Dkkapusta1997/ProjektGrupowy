var express=require('express');
var router=express.Router()

const lineDB=require('../db/serviceDB/lineDB')


router.get('/showAll',(req,res)=>{
        categories.showAllCategories(res)
    }
)

router.get('/add',(req,res)=>{
    lineDB.addLine(req,res)
})

router.get('/delete',(req,res)=>{
    lineDB.deleteLine(req,res)
})

router.get('/showByIdOwner',(req,res)=>{
    lineDB.showLineByIdOwner(req,res)
})
router.get('/showStageInLineByIdLine',(req,res)=>{
    lineDB.showStageInLineByIdLine(req,res)
})
router.get('/addStageToLine',(req,res)=>{
    lineDB.addStageToLine(req,res)
})
router.get('/deleteStageInLine',(req,res)=>{
    lineDB.deleteStageInLine(req,res)
})

module.exports=router
