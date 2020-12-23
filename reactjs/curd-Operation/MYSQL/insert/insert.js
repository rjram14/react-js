let conn = require("../config/db_connection");
let connection = conn.getConnection();
let insert = require("express").Router().post("/",(req , res)=>{
    //data coming from react that data will be store in req
    //read the data ${req.body.p_id} coming from react js 
    connection.query(`insert into products values(${req.body.p_id},
                                                    '${req.body.p_name}',
                                                    ${req.body.p_cost})`, (err,records,fields)=>{
        if(err) throw err;
        else{
            res.send({"insert" : "success"});
        };
    });

});
module.exports =insert ;