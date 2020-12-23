let oracledb = require("oracledb");
let fetch = require("express").Router().get("/",(req,res)=>{
    oracledb.getConnection(require("../config/db_properties"),(err,connection)=>{
        if(err) throw err;
        else{
            connection.execute(`select * from products`,(err,records)=>{
                if(err) throw err;
                else{
                    res.send(records.rows);
                };
                connection.close((err)=>{
                    if(err) throw err;
                    else{
                        console.log("connection closed succecccfully !!!")
                    }
                });
            });
        }
    });
     
});
module.exports = fetch;