var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var request=new Schema({
    sql:{
        type:String,
        require:true  
    },
    result:{
        type:String,
        require:true,
    },   
     expire: { 
         type: Date, 
         index: { expireAfterSeconds: 21600 } 
     }
 
},{
    collection:'requests'
});


module.exports = mongoose.model('request',request);
