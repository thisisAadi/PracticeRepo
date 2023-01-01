const express=require('express');
var app=express();
var path=require('path');

app.get('/',(req,resp)=>{
    resp.send("<h1>Saloni ki raand jyada porn na dekho aur jaldi se /home and /about check karo</h1>")
})

app.get('/home',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Webpage/Q-3-b.html"))
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Webpage/TestBGimg.html"))
})
app.listen(6700);
console.log("server chal gaya");
