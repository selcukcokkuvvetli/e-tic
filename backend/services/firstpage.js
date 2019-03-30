var experss=require('express');
var router=experss.Router();
var Products=require('../models/products');
var Firstmodel=require('../models/firstpagemodel');
const mongoose = require("mongoose");

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.post('/slider',function(req,Response,Next){
    var gorsel = req.body.image.substr(12,300)
    console.log(gorsel)


    
    const slider=new Firstmodel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: gorsel ,
        oldPrice: req.body.oldPrice,
        isActive: req.body.isActive
    });
console.log(slider)


    slider.save((error,data)=>{
        if(error){
            Response.json(error)
        }
        else{
            Response.json(data)
        }
    })    
});

router.put('/update/:sliderID',(Request,Response)=>{
    Firstmodel.findByIdAndUpdate(Request.params.sliderID,Request.body,(error,data)=>{
        Response.json(data)
    })
})

router.get('/topItem',(Request,Response)=>{
    Products.find({},(error,data)=>{
        Response.json(data)
    }).limit(6)

});
router.get('/allSlider',(Request,Response)=>{
    Firstmodel.find({},(error,data)=>{
        Response.json(data)
    })

});
router.get('/OneSlider/:sliderID',(Request,Response)=>{
    Firstmodel.findById(Request.params.sliderID,(error,data)=>{
        Response.json(data)
    })

});
router.get('/getSliders',(Request,Response)=>{
    Firstmodel.find({},(error,data)=>{
        Response.json(data)
    }).limit(3)
});

router.delete('/delSlider/:sliderID',(Request,Response)=>{
    Firstmodel.findOneAndRemove(Request.params.sliderID,(error,data)=>{
        data.remove((error,data)=>{
            Response.json(data)
        })
    })
});

var home ={router}
module.exports=home;