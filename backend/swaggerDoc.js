const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition:{
       info: {
        title:'E-commerce Api',
        version: '1.0.1',
        description: 'my api'
       },
       basePath: '/',
    },
    apis : ['./services/firstpage.js','./services/productfile.js','./services/card.js','./services/userservice.js','main.js'],
};

const  specs = swaggerJsdoc(options);

module.exports = (app)=>{
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(specs))
}