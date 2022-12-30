const express=require('express');
var app=express();
var path=require('path');

app.get('/',(req,resp)=>{
    resp.send("Hi! If you are seeing this message then this means that everything went successfull. Now in order to see our webpage try /home and /about")
})

app.get('/home',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Webpage/Q-3-b.html"))
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Webpage/TestBGimg.html"))
})
app.listen(6700);
console.log("server chal gaya");