//Get Initial State
//Set Initial State
//Before get created
//render
//after get created
import React,{Component} from 'react'

class LifeCycle extends Component{
    //1 Get initial state
    constructor(props){
        super(props)
        console.log(">>>>i am here in constructor")

        //2. Set Initial State
        this.state={
            title:'React App'
        }
    }

    componentWillUpdate(){
        console.log(">>>>i am here componetWillUpdate")
    }
    componentDidUpdate(){
        console.log(">>>>i am here componentDidUpate")
    }

    //3Before get Created
    componentWillMount(){
        console.log(">>>>i am here componentWillMount")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>i am here shouldComponentUpdate");
        if(nextState.title==this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 render
    render(){
        console.log(">>>>i am here render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click Me
                </div>

            </div>

        )
    }

    //5after get created
    componentDidMount(){
        console.log(">>>>i am here componentDidMount")
    }

}

export default LifeCycle