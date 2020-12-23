let conn = require("../config/db_connection");
let connection = conn.getConnection();
let remove = require("express").Router().delete("/",(req , res)=>{
    connection.query(`delete from products where p_id =${req.body.p_id}`, (err,result)=>{
        if(err) throw err;
        else{
            res.send({delete : "success"});
        };
    });

});
module.exports = remove ;