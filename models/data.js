var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var data=new Schema({
    sql:{
        type:String,
        require:true  
    },
    result:{
        type:String,
        require:true,
    },   
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    }
},{
    collection:'data'
});


module.exports = mongoose.model('request',request);
