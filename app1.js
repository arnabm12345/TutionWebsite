const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var mongoose=require('mongoose');
const bodyparser=require("body-parser")
mongoose.connect('mongodb://localhost/contactPrivate', {useNewUrlParser: true});
const port = 80;

//Define mongoose Sheme
var contactSchema = new mongoose.Schema({
    name: String,
    age:Number,
    gender:String,
    number:Number,
    address:String,
  });
var contact = mongoose.model('contact', contactSchema);
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    //const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game'}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
  //  const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game'}
    res.status(200).render('contact.pug', params);
})
/*app.post('/contact', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('contact.pug', params);

})*/

app.post('/contact',(req,res)=>{
var myData=new contact(req.body);
myData.save().then(()=>{
    res.send("This item has been saved to the database")
}).catch(()=>{
    res.status(400).send("Item was no saved to the database")
});
//res.status(200).render('contact.pug');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
