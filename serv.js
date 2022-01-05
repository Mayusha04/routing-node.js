const fs = require("fs");
const http=require('http');
const url = require('url');

const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName ==='/Home' || pathName ==='/'){
        res.end('WELCOME, Home page describes main content.')
    }else if(pathName ==='/services'){
        res.end('You can find the services provided')}
});
server.listen(3000,'127.0.0.1',() => {
    console.log('listening to port at 3000');
});