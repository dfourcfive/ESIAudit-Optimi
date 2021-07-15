const request = require('../models/request');
const axios = require("axios");
exports.SearchRequest=(req,res)=>{
    var sql = table.sql;
    var exist = false;
    request.findOne({sql:sql},function(err,doc){
        if(!err){
            if(doc != null){
                console.log({doc});
                exist=doc.result;
                return doc.result;
            }else{
                return false;
            }
        }else{
            console.log(err);
        }
    });
    return exist;
}

exports.CachRequest=(sql,result)=>{
    let element = new request({
        sql:sql,
        result:result
    });
    element.save();
}

exports.GetDataFromServer=async(req,res)=>{
    var content_data = req.body;
   var respo= await axios({
        method: 'post',
        url: 'localhost/api/bi/sql',
        headers: {
            "Content-Type": "application/json",
          },
        data: content_data
      });

      const {data} =  respo;
     return data;
}