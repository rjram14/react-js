let mssql = require("mssql");
let remove = require("express").Router().delete("/",(req,res)=>{
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err) throw err;
        else{
            let query_obj = new mssql.Request();
            query_obj.query(`delete from products where p_id=${req.body.p_id}`,
                 (err,records)=>{
                if (err) throw err;
                else{
                    res.send({delete:"success"});
                }
            });
        }
    });

});
module.exports = remove;