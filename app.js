const express=require('express')
const app=express()
const port=process.env.PORT || 3000

var categoriesController=require("./controllers/categoriesController");
var userController=require("./controllers/userController")
var energyResourcesController=require('./controllers/energyResourcesController')
var moduleController=require('./controllers/moduleController')
var cors=require('cors');



//app.options('*',cors())
app.use(cors({"origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));

app.use('/categories',categoriesController)
app.use('/user',userController)
app.use('/energyResources',energyResourcesController)
app.use('/module',moduleController)





app.listen(port,()=>{
    console.log("Niby slucham")
})