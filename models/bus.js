const mongoose=require('mongoose');

var bus=mongoose.model('bus',{
    busno:{type:String},
    vehicleno:{type:String},
    status:{type:String},
    date:{type:String},
    time:{type:String}
});

module.exports={bus};
