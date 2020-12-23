import React, { Component } from "react";
import Child from './Child';
export default class App extends React.Component{
  constructor(){
    console.log("In parent constroctor.")
    super();
    this.state = {
      name : "react"
    }
  }
  
  componentWillMount(){
    console.log("parent componentWillMount ");
    if(window.innerWidth < 600){
      this.setState ({
        width : window.innerWidth
      })
    }
  };

  render(){
      console.log("parent render") 
      return(
        <div>
          {this.state.name}
          <br></br><br></br>
          {this.state.width}
          <br></br><br></br>
          <Child key1= {this.state.name}></Child>
          <br></br><br></br>
          <button onClick={this.changesub}>change</button>

        </div>
      )
  };

  changesub = ()=>{
    this.setState({
      name : "reactjs"
    })
  }
      /*executio flow
      parent constructor
      parent componentWillMount
      parent render

      child constructor
      child componentWillMount
      chlid render

      //if state/props change detected
      parent render 
      child render 
      */
  componentDidMount(){
    console.log("parent componentDidMount");
  };

  //child componentDidMount
  //parent componentDidMount
  componentWillReceiveProps(){
    console.log("parent componentWillReceiveProps ");
  };
  shouldComponentUpdate(){
    console.log("parent shouldComponentUpdate");
    return true;
  };

  componentWillUpdate(){
    console.log("parent componentWillUpdate")
  };

  componentDidUpdate(){
    console.log("parent componentDidUpdate ");
  };
  componentWillUnmount(){
    console.log("parent componentWillUnmount");
  };
}

