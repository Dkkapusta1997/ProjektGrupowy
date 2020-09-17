const express=require('express')
const app=express()
const port=process.env.PORT || 3000


var cors=require('cors');

var userController=require("./controllers/userController")
var moduleController=require('./controllers/moduleController')
var stageController=require('./controllers/stageController')
var lineController=require('./controllers/lineController')
var factoryController=require('./controllers/factoryController')
var statisticController=require('./controllers/statisticController')



//app.options('*',cors())
app.use(cors({"origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));

app.use('/user',userController)
app.use('/module',moduleController)
app.use('/stage',stageController)
app.use('/line',lineController)
app.use('/factory',factoryController)
app.use('/statistics',statisticController)





app.listen(port,()=>{
    console.log("Niby slucham")
})