import React, {Component } from "react";
export default class Lifecycle extends React.Component{
    constructor(){
        super();
        console.log("in parent component constructor.");
        this.state ={
            name : "Your love makes me strong, your hate makes me unstoppable.”"
        };
    };

    componentWillMount(){
        console.log("in parent componentwillMount ");
        if(window.innerWidth < 600){
            this.setState({
                width : window.innerWidth
            })
        }
    }

    render(){
        console.log("In parent render.")
        return(
            <div>
                <br></br><br></br><br></br>
               {this.state.name}
               <br></br><br></br>
               {this.state.width}
               <br></br><br></br>
               <button onClick={this.changeState}>change</button>
            </div>
        );
    }

    changeState = () =>{
        this.setState({
            name :"“Hard work and dedication"
        });
    };
}
