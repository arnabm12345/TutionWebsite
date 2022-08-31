const express = require("express");
const path= require("path");
const fs=require("fs");
const { name } = require("pug/lib");
const app = express();
const port = 80;
//EXPRESS SPECIFIC SETUP
app.use('/static',express.static('static'))
app.use(express.urlencoded())
//set the template engine as pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))

//Our pug demo endpoint
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/',(req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    number=req.body.number
    address=req.body.address
    let outputTowrite=`the name of the cilent is ${name} ,${age} years old,
    ${gender}, phone number is ${number},resides at ${address}`
    
    fs.writeFileSync('output.txt',outputTowrite);
    const params = {'message': 'Your form has been submitted successfully'}
     res.status(200).render('index.pug',params);
})
//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
  });
  