import express  from "express";

const app = express();

app.get("/teste",(request,response)=>{

  return response.json([
    {id:1,name:'Anucio 1'},
    {id:2,name:'Anucio 1'},
    {id:3,name:'Anucio 1'}
  ])
})

app.listen(3001)