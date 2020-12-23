import React, { Component }from "react";
import axios from "axios";
export default class App extends React.Component{
  componentDidMount(){
      // axios.get("http://localhost:3000/products")
      //    .then((posRes)=>{
      //      console.log(posRes);
      //    }, (errRes)=>{
      //      console.log(errRes);
      //    });


      // axios.get("http://localhost:3000/products/1")
      //    .then((posRes)=>{
      //      console.log(posRes);
      //    }, (errRes)=>{
      //      console.log(errRes);
      //    });


       axios.post("http://localhost:3000/products" ,
        {data : {"id":7,"p_id":"p107","pname":"p_six","p_cost":70000}})
        .then((posRes)=>{
               console.log(posRes);
             }, (errRes)=>{
               console.log(errRes);
            });
  };

  render(){
    return(
      <div>

      </div>
    )
  }
}
