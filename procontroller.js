var bodyParser=require('body-parser');
var express=require('express');
var app=express();
app.set('view engine','ejs');

/*var controller=require('./controller/procontroller');*/
app.use(express.static('views'));
app.listen(3000,()=>
{
    console.log("you are listening to port 3000");

});
app.use(bodyParser.json());
var urlencodedParser=bodyParser.urlencoded({extended:false});
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/project");
const Schema =mongoose.Schema;
var customer=new Schema({
    firstname:String,
    mobile:Number,
    familyno:Number,
    vehicleno:Number,
    flatno:Number,
    email:String,
    password:String,
    confirmpassword:String

});
var formdata=mongoose.model('form',customer);

module.exports=function(app){
    app.get('/login',function(req,res)
    {
        res.render('login');
    });

app.post('/login',urlencodedParser,function(req,res)
{
    res.render('login');

});
app.get('/register',function(req,res)
    {
        res.render('register');
    });


app.post('/register',function(req,res)
{
    var data= new formdata(req.body);
    data.save().then(()=>{
        res.send("form saved");

    }).catch(err=>{
        res.status(400).send("unable to save to database");
    });
    
    
    });



}

