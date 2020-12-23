let mssql = require("mssql");
let insert = require("express").Router().post("/",(req,res)=>{
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err) throw err;
        else{
            let query_obj = new mssql.Request();
            query_obj.query(`insert into products values(${req.body.p_id},'${req.body.p_name}',${req.body.p_cost})`,
                 (err,records)=>{
                if (err) throw err;
                else{
                    res.send({insert:"success"});
                }
            });
        }
    });

});
module.exports = insert;