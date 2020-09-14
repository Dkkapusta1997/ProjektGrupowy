var express=require('express');
var router=express.Router();

const showAll=require('../db/serviceDB/categoriesDB')


//Select
router.get('/showAll',(req,res)=>{
showAll(res)
    }
)


//Insert
router.get('categories/delete',(req,res)=>{
    res.send("categories/delete");

})

module.exports=router;