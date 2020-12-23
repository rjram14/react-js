let express = require("express");               //express master object
                                                // call the express class constructor 
let app = express();                            //is used to collabrate the all modules --app master object
let bodyparser = require("body-parser");        //read client data 
let cors = require("cors");                     // import cors policy
app.use(cors());                                //enable the cors policy
app.use(bodyparser.json());                     //cliet sending data in the from of json 
app.use(bodyparser.urlencoded({extended:false}));//read the client data  
app.use("/fetch",require('./fetch/fetch'));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/delete",require("./delete/delete"));
app.listen(8080, function(){
    console.log("server is listening at port no. 8080");
});