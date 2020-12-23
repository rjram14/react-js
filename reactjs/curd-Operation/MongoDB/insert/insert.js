let mongodb = require("mongodb");
let mongoclient = mongodb.MongoClient;
let insert = require("express").Router().post("/",(req,res)=>{
    mongoclient.connect("mongo://localhost:27017",(err,db)=>{
        if(err) throw err;
        else{
            db.products.insertOne({"p_id":req.body.p_id,
                                "p_name":req.body.p_name,
                                "p_cost":req.body.p_cost},(err,result)=>{
                     if(err) throw err;
                     else{
                       res.send({insert:"success"});
                 }
              
            });
        }
    });
});
module.exports  = insert;