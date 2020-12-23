import React, { Component } from "react";
export default class Child extends React.Component{
    constructor(){
        super();
        console.log("child constructor");
    };

    componentWillMount(){
        console.log("child componentWillMount ");
    };
     
    render(){
        console.log("child render ");
        return(
            <div>
                {this.props.key1}
            </div>
        )
    };

    componentDidMount(){
       console.log("child componentDidMount")
    };

    componentWillReceiveProps(){
        console.log("child componentWillReceiveProps");
    };

    shouldComponentUpdate(){
        console.log("child shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("child componentWillUpdate")
      };
    
      componentDidUpdate(){
        console.log("child componentDidUpdate ");
      };
      componentWillUnmount(){
        console.log("child componentWillUnmount");
      };

}