var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/arnabKart', {useNewUrlParser: true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

/*db.once('open',function(){
    console.log("We are connected bro/sis...")
});*/

var kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "My name is " + this.name
      : "I don't have a name";
   // console.log(greeting);
  };

  
var Kitten = mongoose.model('arnabKitty', kittySchema);
var arnabKitty = new Kitten({ name: 'arnabKitty' });
var arnabKitty2= new Kitten({ name: 'arnabKitty2' });

/*console.log(arnabKitty.name);
  arnabKitty.speak();*/
  arnabKitty.save(function(err,arnabKitty){
    if (err){
        console.log(err);
    }
    else{
        console.log(arnabKitty);
    }
    //arnabKitty.speak();
}) 
arnabKitty2.save(function(err,k){
    if (err){
        console.log(err);
    }
    else{
      //  console.log(k);
    }
   // k.speak();
}) 
Kitten.find({name:"arnabKitty"},function(err,Kittens){
    if(err) return console.error(err);
    console.log(Kittens);
})