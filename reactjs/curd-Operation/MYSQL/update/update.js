let conn = require("../config/db_connection");
let connection = conn.getConnection();
let update = require("express").Router().put("/",(req , res)=>{
    connection.query(`update products set p_name = '${req.body.p_name}',
                                          p_cost =${req.body.p_cost} where 
                                          p_id=${req.body.p_id}`, (err,result)=>{
        if(err) throw err;
        else{
            res.send({"update" : "success"});
        };
    });

});
module.exports = update ;