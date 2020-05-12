const mongoose=require('mongoose');
const Schema =mongoose.Schema;
var customer=new Schema({
    firstname:String,
    mobile:Number

});
var formdata=mongoose.model('form',customer);
