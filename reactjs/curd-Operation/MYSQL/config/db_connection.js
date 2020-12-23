let obj = require("./db_properties");//import obj (with require function    from db_properties file)
let mysql = require("mysql");//import mysql 
let conn = {  //create json object
     getConnection:()=>{
         return mysql.createConnection(obj);
         //used to create and return the connection object

     }
};
module.exports = conn;