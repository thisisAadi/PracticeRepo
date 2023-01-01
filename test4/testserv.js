const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,resp)=>{
      resp.send("<h1>Saloni ki raand chal jaldi se /home aur /about try kar </h1>");
})
app.get('/home',(req,resp)=>{
      resp.sendFile(path.join(__dirname,"Webpage/JSprog1.html"))    
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Webpage/JSprog2.html"))
})
app.listen(5600);
console.log("server chal gaya");
