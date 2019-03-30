var mongoose=require('mongoose');
var productchema=new mongoose.Schema({
    name:String,
    description:String,
    image:String,
    oldPrice:Number,
    price:Number,
    category:String,
    top:Number,
    bot:String,
    file:String,
    isActive:Boolean
});  
module.exports=mongoose.model('Product',productchema);