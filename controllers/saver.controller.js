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

exports.flush=(req,res)=>{
    data.deleteMany({},function(err){
        if(!err){
            console.log('all deleted');
        }else{
            res({err});
            console.log(err);
        }
    });
}
exports.getByTitle=(req,res)=>{
    data.find({'title': req.params.title},function(err,doc){
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

exports.removeBytitle=(req,res)=>{
    data.remove({'title': req.params.title},function(err){
        if(!err){
            console.log('all deleted');
        }else{
            res({err});
            console.log(err);
        }
    });
}