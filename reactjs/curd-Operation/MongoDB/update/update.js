let mongodb = require("mongodb");
let mongoclient = mongodb.MongoClient;
let update = require("express").Router().put("/",(req,res)=>{
    mongoclient.connect("mongo://localhost:27017",(err,db)=>{
        if(err) throw err;
        else{
            db.products.updateOne({$set:{"p_name":req.body.p_name,"p_cost":req.body.p_cost}},{"p_id":req.body.p_id},
            (err,result)=>{
                if(err) throw err;
                else{
                    res.send({update:"success"});
                }
            })
        }
    });
});
module.exports  = update;