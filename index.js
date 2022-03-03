const express=require ('express');
const bodyparser=require ('body-parser');

const {mongoose}=require ('./db.js');
var buscontroller= require('./controllers/buscontroller.js');

var app=express();
app.use(bodyparser.json());
app.listen(3000,()=>console.log('Server started @ port 3000'));
const cors = require('cors');
app.use(cors());

app.use('/bus',buscontroller);

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
})



var path = require('path');
var public = path.join(__dirname, '/controllers/public');
app.use(express.static(public));

