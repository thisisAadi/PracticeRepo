const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,resp)=>{
    resp.send("Hi! this is show that this works");
})
app.get('/home',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"public/form1.html"))
})
app.listen(5900);
