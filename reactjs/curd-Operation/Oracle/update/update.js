let oracledb = require("oracledb");
let update = require("express").Router().put("/",(req,res)=>{
    oracledb.getConnection(require("../config/db_properties"),(err,connection)=>{
        if(err) throw err;
        else{
            connection.execute(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost}
             where p_id=${req.body.p_id}`,[],{autoCommit:true},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({update:"success"});
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
module.exports = update;