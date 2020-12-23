let oracledb = require("oracledb");
let remove = require("express").Router().delete("/",(req,res)=>{
    oracledb.getConnection(require("../config/db_properties"),(err,connection)=>{
        if(err) throw err;
        else{
            connection.execute(`delete from products where p_id=${req.body.p_id}`,[],{autoCommit:true},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({delete:"success"});
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
module.exports = remove;