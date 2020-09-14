const express=require('express')
const app=express()
const port=process.env.PORT || 3000

var categoriesController=require("./controllers/categoriesController");
var userController=require("./controllers/userController")
var cors=require('cors');

const knex=require('knex');
const connectionConfig=require('./db/conectionConfig');
const connection=knex(connectionConfig);


app.use(cors())

app.use('/categories',categoriesController)
app.use('/user',userController)





app.listen(port,()=>{
    console.log("Niby slucham")
})