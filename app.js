const express=require('express')
const app=express()
const port=process.env.PORT || 3000


var cors=require('cors');

var categoriesController=require("./controllers/categoriesController");
var userController=require("./controllers/userController")
var energyResourcesController=require('./controllers/energyResourcesController')
var moduleController=require('./controllers/moduleController')
var stageController=require('./controllers/stageController')
var lineController=require('./controllers/lineController')
var factoryController=require('./controllers/factoryController')



//app.options('*',cors())
app.use(cors({"origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));

app.use('/categories',categoriesController)
app.use('/user',userController)
app.use('/energyResources',energyResourcesController)
app.use('/module',moduleController)
app.use('/stage',stageController)
app.use('/line',lineController)
app.use('/factory',factoryController)





app.listen(port,()=>{
    console.log("Niby slucham")
})