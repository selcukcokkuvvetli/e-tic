var experss=require('express');
var router=experss.Router();
var jwt=require('jwt-simple');
var Userr=require('../models/users');
//router.get('/')


router.post('/register',(Request,Response)=>{
    var userdata=Request.body;
    var user=new Userr(userdata);
 
//MAİL UNİQE OLMAK ZORUNDA MODELDE TANIMLI
    user.save((error,result)=>{
        if(error)
        {
            console.log("register is failed");
            return Response.status(400).send();
        }
        else{
            console.log("register is succesfull");
        }
        
        return Response.status(201).send();
    })
});


router.post('/login',async(Req,Response)=>{
    var userdata=Req.body;
    console.log(userdata)

    var user = await Userr.findOne({mail:userdata.mail})
    console.log(user)
    if(!user){
        return Response.status(401).send({massage:'E-mail or password isn\'t defined'});

    }
    if(userdata.password!=user.password){
        return Response.status(401).send({massage:'E-mail or password isn\'t defined'});
    }
    var paylod={user};
    var token=jwt.encode(paylod,'CollectisDefidedor127');
    console.log(user)
    console.log(token)
    return Response.status(200).send({token,user}); 
});

router.post('/adminlogin',async(Request,Response)=>{
    var userdata=Request.body;
    var user =await Userr.findOne({mail:userdata.mail})
    if(!user){
        return Response.status(401).send({massage:'E-mail or password isn\'t defined'});

    }
    if(userdata.password!=user.password){
        return Response.status(401).send({massage:'E-mail or password isn\'t defined'});
    }
    if(user.admin == true){
        var paylod={user};
        var token=jwt.encode(paylod,'CollectisDefidedor127');
        return Response.status(200).send({token,user}); 
    }
    return Response.status(401).send({massage:'E-mail or password isn\'t defined'});
       

});


var user={router,checkAuthenticated:(Request,Response,Next)=>{
    console.log("Authenticated fonction is running");
    if(Request.header('authorization')){
        return Response.status(400).send({massage:'unauthorization'})
    };
    var token=Request.header('authorization').split(' ')[1];
    var paylod=jwt.decode(token,'CollectisDefidedor127');
    if(!paylod){
        return Response.status(401).send({massage:'token is invalid'});
    }
    Next();
}};
module.exports=user;
