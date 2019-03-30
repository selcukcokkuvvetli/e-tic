var mongoose=require('mongoose');
var userschema=new mongoose.Schema({
    name:String,
    surname:String,
    password:String,
    mail:{type:String,
    unique:true,
    required:true},
    tel:Number,
    city:String,
    country:String,
    postCode:String,
    adress:String,
    isActive:Boolean,
    admin:Boolean  
});  
module.exports=mongoose.model('Users',userschema);
