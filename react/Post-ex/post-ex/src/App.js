import React, {Component } from "react";
import axios from "axios";
export default class App extends React.Component{
      constructor(){
        super();
        this.state = {
          result : " "
        };
      };
      render(){
        return(
          <div>
            <input type="text" ref="msg" placeholder="Enter Message" />
            <br></br><br></br>
            <button onClick={this.my_fun}> Send </button>
            <br></br><br></br>
            <h1>{this.state.result}</h1>
          </div>
        )
      };
      my_fun = ()=>{
        let obj={
          "message":this.refs.msg.value
        };
        axios.post("http://test-routes.herokuapp.com/test/uppercase",obj)
            .then((posRes)=>{           
                this.setState({
                  result : posRes.data.message
                })
              },(errRes)=>{
                  console.log(errRes)
                }          
            )
      }
}