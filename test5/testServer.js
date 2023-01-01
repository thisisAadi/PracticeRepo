const express=require('express');
const app=express();
const app=require('app');

app.get('/',(req,resp)=>{
    resp.send("Hi! this msg to show that our server is working")
})
app.get('/home',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"public/Form1.html"))
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"public/Form2.html"))
})
app.listen(4700);
