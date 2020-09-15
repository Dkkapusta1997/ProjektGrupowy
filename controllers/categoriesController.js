var express=require('express');
var router=express.Router();

const categories=require('../db/serviceDB/categoriesDB')


router.get('/showAll',(req,res)=>{
categories.showAllCategories(res)
    }
)

router.get('/add',(req,res)=>{
    categories.addCategories(req,res)
})



module.exports=router;