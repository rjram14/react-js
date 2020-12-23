//Get default State
//Set Initial State
//Before Get Created
//Render JSX
//After Get Created

import React,{Component} from 'react';

class Lifecycle extends Component{

    //1.Get default State
    constructor(props){
        console.log(">>>>in constructor<<<<<")
        super(props);

        //2 Set Initial State
        this.state={
            title:'LifeCyle'
        }
    }

    //3 Before component get render
    componentWillMount(){
        console.log(">>>>in componentWillMount<<<<<")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState.title)
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    componentWillUpdate(){
        console.log(">>>>in componentWillUpdate<<<<<")  
    }
    componentDidUpdate(){
        console.log(">>>>in componentDidUpdate<<<<<")
    }

    //4 Render JSX
    render(){
        console.log(">>>>in render<<<<<")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={() =>{this.setState({title:'Someting Else'})}}>
                    Click Me
                </div>

            </div>
        )
    }

    //5 After Get Created
    componentDidMount(){
        console.log(">>>>in componentDidMount<<<<<")
    }

    componentWillUnmount(){
        alert('you are leaving the page')
    }
}

export default Lifecycle


// 1,2,3,3

