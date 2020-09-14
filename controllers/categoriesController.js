var express=require('express');
var router=express.Router();

const showAllCategories=require('../db/serviceDB/categoriesDB')

var cors=require('cors');
//Select
router.get('/showAll',(req,res)=>{
    console.log(req.query);
showAllCategories(res)
    }
)


//Insert
router.get('categories/delete',(req,res)=>{
    res.send("categories/delete");

})

module.exports=router;