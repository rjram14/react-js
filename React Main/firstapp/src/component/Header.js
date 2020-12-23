import React, {Component} from 'react';
import './Header.css';



class Header extends Component{
    constructor(){
       super()

       this.state={
           title:'React App',
           keywords:'User text here'
       }
    }

    inputChange(event){
       // console.log(event.target.value)
       this.setState({keywords:event.target.value?event.target.value:'User text here'})
       this.props.userText(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                  onClick={()=>{console.log("hiii")}}>
                    {this.state.title}
                </div>

                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                </center>
                <p className="uin">{this.state.keywords}</p>
            </header> 
        )
    }
}


export default Header;