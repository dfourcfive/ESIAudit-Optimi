const data = require('../models/data');


exports.saveQuery=(req,res)=>{
    let element = new data({
        sql:req.sql,
        result:req.result,
        title:req.title,
        description:req.description,
    });
    element.save();
}

exports.GetSavedQueries=(req,res)=>{
    data.find({},function(err,doc){
        if(!err){
            if(doc != null){
                res.send({doc});
            }else{
                res('no results');
            }
        }else{
            res({err});
            console.log(err);
        }
    });
}