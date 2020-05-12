var bodyParser=require('body-parser');
var express=require('express');
var app=express();
var mongodb=require('mongodb');
const mongo = require('mongodb').MongoClient
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
app.set('view engine','ejs');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var database=require('./models/index');// to import routes.
var formdata=database.register;
var vehicle=database.vehicleregister;
var ticket=database.ticket;
var complaint=database.complaint;
var connection=require('./models');

app.use(express.static('views'));// this middleware is used to display static files to the user.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//var urlencodedParser=bodyParser.urlencoded({extended:false});
var name;
var url=mongoose.connect("mongodb+srv://suhas:9844142094@cluster0-5mnpe.gcp.mongodb.net/test?retryWrites=true&w=majority");
/*MongoClient.connect(url,function(err,db)
{
    var collection=db.collection('forms');
   var a= collection.find({})
});*/

/*mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });

/*handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});
*/
// include routes

var mod=mongoose.model('forms');
var comp=mongoose.model('complaint');
var seats=mongoose.model('theater seats');// name given in model
var vehicle=mongoose.model('vehicle registration');
 var slot=1;
 app.get('/music',function(req,res)
 {

     res.render('music');
 });
 app.get('/sports',function(req,res)
 {
     res.render("sports");

 });

   
app.get('/login',function(req,res)
{
    res.render('login');

});

app.post('/login',function(req,res)
{
    var em=req.body.email;
    var pass=req.body.password;
    console.log(em);
    if(em==="admin@gmail.com"&& pass==="admin")
    {
        res.redirect('adminres');
    }
    else{

    

    mod.find({email:em,password:pass}).then(function(doc)
    {
       
       
         if(doc[0].email==em && doc[0].password==pass)
       {
            var d=doc[0].name;
            name=d;
           res.render("dashboard",{data:d});// calls a get request of the dashboard
       }
       
    }).catch(function(err)
    {
        res.send("LOGIN NOT SUCCESFUL");
    });
}

});
    app.get('/dashboard',function(req,res)
    {

        res.render('dashboard',{data:name});
    });



app.get('/register',function(req,res)
    {
        res.render('register');
    });


app.post('/register',function(req,res)
{
    var data=  new formdata(req.body); // both the html and schema should have same names.
       
    data.save().then(()=>{
        res.redirect("login");// using redirect will change the url  and repsective route will be called .but using render will
        // call it as a view and the url doesn't change.
        // use redirect whenever ur calling from other webpage.
    }).catch(err=>{
        res.status(400).send("unable to save to database");
    });
});
    

    
   
   


    
    app.get('/aboutus',function(req,res)
    {
        res.render("aboutus");
    }
    );

    app.get('/mini',function(req,res)
    {
        res.render("mini");
    });

    app.get('/services',function(req,res)
    {
        res.render("services");
    });
    app.post('/mini',function(req,res)
{   
    var seats=new ticket(req.body);
    seats.save().then(function()
    {
        res.redirect('mini')
    });
    
});
app.get('/complaint',function(req,res)
    {
        res.render('complaint');
    });

app.post('/complaint',function(req,res)
{
    const complaints=new complaint(req.body);
    complaints.save().then(function()
    {   
        res.redirect("complaint");

    });
    
});

    app.get('/parking',function(req,res)
    {
        res.render('parking');
    });
    app.post('/parking',function(req,res)
    {   var v=[];
        
        var vec=new vehicle(req.body);
        v.push(vec);
        vec.slot;
        slot++;
        v.push(slot);
        vec.save().then(()=>
       
        res.render("parkingslot",{slot:v}));

    });

app.get('/adminres',function(req,res)
{ var d=[];
    mod.find({},function(err,doc)// for registeres users
    {   console.log(doc[0].password);
         d.push(doc);
         //res.render('adminres',{data:d1});
        
        comp.find({},function(err,doc) // for complaints.
        {
            d.push(doc);

        });
        seats.find({},function(err,doc) // movie ticket 
        {
            d.push(doc)
        });
        vehicle.find({},function(err,doc) // vehicle registration
        {
            d.push(doc);
            console.log(d);
            res.render('adminres',{data:d});
        });
   
    });

  
});




app.listen(3000,()=>
{
    console.log("you are listening to port 3000");

});
