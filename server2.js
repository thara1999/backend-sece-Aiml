const express=require('express')
const server = express();
server.get('/',(req,res)=>{
          res.end("the server is runnning")
})

server.get('/about',(req,res)=>{
          res.end("the about page");
})
server.listen(8000);