const data = require('../models/data');


exports.saveQuery=(req,res)=>{
    let element = new data({
        sql:req.body.sql,
        result:req.body.result,
        title:req.body.title,
        description:req.body.description,
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