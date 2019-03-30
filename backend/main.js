var express=require('express');
var cors=require('cors');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');


var home=require('./services/firstpage');
var card=require('./services/card');
var user=require('./services/userservice');
var products=require('./services/productfile');


const swaggerDoc = require('./swaggerDoc');
let router = require('./services/file.router.js');
var app=express();

swaggerDoc(app)


const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));
app.use(bodyparser.json());

mongoose.connect('mongodb://selcuk:selcuk1@ds145194.mlab.com:45194/eticaretdb1',(error)=>{
    if(!error){
        console.log("database conncect");
    }
});

app.use('/products',products.router);
app.use('/main',home.router)
app.use('/user',user.router);
app.use('/card',card.router);
app.use('/',router)



let server =app.listen(8081, () => {

    let host = server.address().address
    let port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port); 
  });  

