let mongodb = require("mongodb");
let mongoclient = mongodb.MongoClient;
let remove = require("express").Router().delete("/",(req,res)=>{
    mongoclient.connect("mongo://localhost:27017",(err,db)=>{
        if(err) throw err;
        else{
            db.products.deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else({delete:"success"});
            });
        }
    });
});
module.exports  = remove;