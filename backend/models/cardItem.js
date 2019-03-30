var mongoose=require('mongoose');
var cardchema=new mongoose.Schema({
    userID:String,
    productID:mongoose.Types.ObjectId,
});  
module.exports=mongoose.model('Card',cardchema);