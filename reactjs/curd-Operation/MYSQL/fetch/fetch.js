let conn = require("../config/db_connection");//import conn bcoz its exported
let connection = conn.getConnection();//returning connection
//create fetch module in node js with express module
// is used to create get request
let fetch = require("express").Router().get("/",(req , res)=>{
    //exceute sql query to connect the data bases 
    connection.query(`select * from products`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        };
    });
});
module.exports = fetch ;
