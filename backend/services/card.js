var experss=require('express');
var router=experss.Router();
var mongoose=require('mongoose');
var card=require('../models/cardItem');


router.get('/card/:userID',(Request,Response)=>{
    console.log(Request.params.userID)
var user = Request.params.userID

const promise = card.aggregate([
        {
            $match:{'userID':user}
            
       },
       {
            $lookup:{
                from:'products',
                localField:'productID',
                foreignField:'_id',
                as:'Product'
            }
         },
         {
			$unwind: {
				path: '$Product'
			
			}
        },
       
        

    ])
    promise.then((data) => {
		Response.json(data);
	}).catch((err) => {
		Response.json(err);
	});
});
router.delete('/delcard/:cardID',(Request,Response)=>{
    card.findOneAndRemove(Request.params.cardID,(error,data)=>{
        data.remove((error,data)=>{
            Response.json(data)
        })
    })
})
router.post('/postcard',function(Request,Response,Next){
    const cards =new card(Request.body)
    console.log(cards)
    cards.save((error,data)=>{
        if(error){
            Response.json(error);
        }
        else{
            Response.json(data);
        }
    })
});
router.put('/updatecard/:cardID',(Request,Response)=>{
    card.findByIdAndUpdate(Request.params.cardID,Request.body,(error,data)=> {
        Response.json(data)
    })
})

var cards ={router}
module.exports=cards;