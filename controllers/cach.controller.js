const cacher = require('../cach/cachsystem');



exports.cachSystem=async(req,res)=>{
    var result = cacher.SearchRequest(req,res);
    if(result == false){
       var data = cacher.GetDataFromServer(req,res);
       cacher.CachRequest(req.sql,data);
       res.send({result});
    }else{
        res.send({result});
    }
}