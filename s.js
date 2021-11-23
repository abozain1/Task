
let projectData = {};



const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000




app.use( bodyParser.json() );     

app.use(bodyParser.urlencoded({     
 extended: true})); 
app.use(cors())
app.use(express.static('src'))

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})
app.get("/g",(req, res)=>{
res.send(projectData);

});
app.post("/p",(req, res)=>{
    projectData=req.body;
    res.send(projectData);
   
});
