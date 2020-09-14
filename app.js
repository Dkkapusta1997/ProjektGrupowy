const express=require('express')
const app=express()
const port=process.env.PORT || 3000

var categoriesController=require("./controllers/categoriesController");
var userController=require("./controllers/userController")

const knex=require('knex');
const connectionConfig=require('./db/conectionConfig');
const connection=knex(connectionConfig);




app.use('/categories',categoriesController)
app.use('/user',userController)






app.listen(port,()=>{
    console.log("Niby slucham")
})