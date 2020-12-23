let mongodb = require("mongodb");
let mongoclient = mongodb.MongoClient;
let fetch = require("express").Router().get("/",(req,res)=>{
    mongoclient.connect("mongo://localhost:27017",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
module.exports  = fetch;