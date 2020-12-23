let mssql = require("mssql");
let update = require("express").Router().put("/",(req,res)=>{
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err) throw err;
        else{
            let query_obj = new mssql.Request();
            query_obj.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id})`,
                 (err,records)=>{
                if (err) throw err;
                else{
                    res.send({update:"success"});
                }
            });
        }
    });

});
module.exports = update;