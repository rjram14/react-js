 let mssql = require("mssql");
 let fetch = require("express").Router().get("/",(req,res)=>{
     mssql.connect(require("../config/db_properties"),(err)=>{
         if(err) throw err;
         else{
             let query_obj = new mssql.Request();
             query_obj.query(`select * from products`,(err,records)=>{
                 if (err) throw err;
                 else{
                     res.send(records);
                 }
             });
         }
     });

 });
 module.exports = fetch;