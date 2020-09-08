const express=require('express')
const app=express()
const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Witaj znowu w programow11aniu123')
})

app.listen(port,()=>{
    console.log("Niby slucham")
})