/*
import React, { Component } from "react";
export default class App extends React.Component{
  render(){
    return(
      <div> 
        <botton onClick={()=>{this.my_fun("rjram","rjram")}}>
           Login
        </botton>
      </div>
    )
  }
  my_fun=(arg1,arg2)=>{
    if(arg1==="rjram" && arg2==="rjram"){
      alert("Login successfully !")
    }else{
      alert("login fail")
    }
  }
}
*/
import React, { Component } from "react";
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      status:""
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.login}>
          <label>Email</label>
          <input type="email"  placeholder="User Email" ref="uemail" />
          <br></br><br></br>
          <label>Password</label>
          <input type="password" placeholder="Password" ref="upwd" />
          <input type="submit">Login</input>

          <h1> {this.state.status}</h1>
        </form>
      </div>

    )
  }
  login=(event)=>{
    console.log("rj here..!!!");
    event.preventDefault();
    if(this.refs.uemail.value==="rjram" && this.refs.epwd.value==="rj"){
      this.state ({
        status:"login successfull...!!"
      })
    }
       else{
        this.state({
          status:"login fail"
        })
      }
 }
}

