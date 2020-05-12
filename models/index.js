var express=require('express');
var mongoose=require('mongoose');

var Schema =mongoose.Schema;
var customer=new Schema({
    name:String,
    mobile:Number,
    familyno:Number,
    vehicleno:Number,
    flatno:Number,
    email:String,
    password:String,
    confirmpassword:String

});
var register=mongoose.model('forms',customer);
// for vehicle slot booking.


var vehicle=new Schema({
    
    flatno:Number,
    vehicleno:String ,
    vehiclemodel:String,
    slotno:Number

});

var seat=new Schema({
    seat:Number,
    flatno:Number,
    selectedtickets:String


});
var comp =new Schema({
    flatno:Number,
    name:String,
    phoneno:Number,
    complaint:String

});
var complaint=mongoose.model('complaint',comp);
var vehicleregister=mongoose.model('vehicle registration',vehicle);
var ticket=mongoose.model('theater seats',seat);
module.exports.register=register;
module.exports.ticket=ticket;
module.exports.vehicleregister=vehicleregister;
module.exports.complaint=complaint;



