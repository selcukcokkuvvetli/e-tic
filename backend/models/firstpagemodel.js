var mongoose=require('mongoose');
var firstchema=new mongoose.Schema({
    name:String,
    link:String,
    description:String,
    image:String,
    oldPrice:Number,
    price:Number,
    isActive:Boolean
});  
module.exports=mongoose.model('Page',firstchema);