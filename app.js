const express=require('express')
const app=express()
const port=process.env.PORT || 3000

var categoriesController=require("./controllers/categoriesController");
var userController=require("./controllers/userController")
var cors=require('cors');



//app.options('*',cors())
app.use(cors({"origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));

app.use('/categories',categoriesController)
app.use('/user',userController)





app.listen(port,()=>{
    console.log("Niby slucham")
})