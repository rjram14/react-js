import React, {Component } from "react";
import { connect} from "react-redux";
import * as actions from "./Actions/actions";
import { render } from "react-dom";
class App exports React.Component{
  componentDidMount(){
      this.PaymentResponse.getProducts();
  };

  render(){
    return(
      <div>
        {JSON.stringify(this.PaymentResponse.data)}
      </div>
    )
  }
};

const receive = (state)=>{
  return{
    data:state.data;
  }

}

const send =(dispatch)=>{
  return{
    getProducts:()=>{dispatch(actions.getProducts())}
  }
}
export default connect(receive,send)(App);