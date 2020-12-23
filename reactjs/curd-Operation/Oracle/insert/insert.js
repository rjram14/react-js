let oracledb = require("oracledb");
let insert = require("express").Router().post("/",(req,res)=>{
    oracledb.getConnection(require("../config/db_properties"),(err,connection)=>{
        if(err) throw err;
        else{
            connection.execute(`insert into products values(${req.body.p_id},'${req.body.p_name}',${req.body.p_cost})`,
            [],{autoCommit:true},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({insert:"success"});
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
module.exports = insert;