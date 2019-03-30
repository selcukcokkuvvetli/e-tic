var experss = require('express');
var router = experss.Router();
var Products = require('../models/products');
const multer = require('multer');
const mongoose = require("mongoose");

router.post('/new', function (req, Res, Next) {
  
    var gorsel = req.body.image.substr(12,300)
    console.log(gorsel)
    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: gorsel ,
        oldPrice: req.body.oldPrice,
        category: req.body.category,
        top: req.body.top,
        bot: req.body.bot,
        isActive: req.body.isActive
    });

    console.log(product)
    product.save((error, data) => {
        if (error) console.log(error)

        return Res.sendStatus(201)
    })
});


  

router.get('/allProduct', (Request, Response) => {
    Products.find({}, (error, data) => {
        Response.json(data)
    });

});
router.put('/update/:itemID', (Request, Response) => { //test edilcek
    Products.findByIdAndUpdate(Request.params.itemID, Request.body, (error, data) => {
        Response.json(data)
    })
});

router.delete('/delete/:itemID', (Request, Response) => {
    Products.findOneAndRemove(Request.params.itemID, (error, item) => {
        item.remove((error, data) => {
            Response.json(data)
        })
    })
});

router.get('/pCategory/:category', (Request, Response) => {
    var cat = Request.params.category
    Products.find({
        category: cat
    }, (error, data) => {
        Response.json(data)
        console.log(data)
    })

    console.log(Request.params.skip)
    console.log(Request.params.category)
});
router.get('/maxCategory/:category/:skip', (Request, Response) => {
    Products.find({
        category: Request.params.category
    }, (error, data) => {
        Response.json(data)
    }).skip(Request.params.skip).limit(6).short({
        price: -1
    })

});
router.get('/minCategory/:category/:skip', (Request, Response) => {
    Products.find({
        category: Request.params.category
    }, (error, data) => {
        Response.json(data)
    }).skip(Request.params.skip).limit(6).short({
        price: 1
    })

});

router.get('/getProduct/:itemID', (Request, Response) => {
    Products.findById(Request.params.itemID, (error, data) => {
        Response.json(data)
    })
});

router.get('/search/:name', (Request, Response) => {
    Products.find({
        name: Request.params.name
    }, (error, data) => {
        Response.json(data)
    })
});

var product = {
    router
    
}
module.exports = product;