const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
 // running any function run the database.
    mongoose.connect("mongodb://localhost:27017/project");
    

