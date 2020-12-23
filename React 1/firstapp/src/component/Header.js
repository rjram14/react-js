import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
       super() 
    
       this.state={
           title:'React APP',
           keyword:'User Text'
       }
       
    }

    inputChange = (event) => {
       // console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User text here'})
        this.props.userText(event.target.value)
    }
    render(){
        return(
            <React.Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input onChange={this.inputChange}/>
                        <p>{this.state.keyword}</p>

                    </center>
                </header>
                <hr/>
            </React.Fragment>
        )
    }
}


export default Header;