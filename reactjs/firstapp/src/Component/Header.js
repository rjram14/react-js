import React , { Component} from 'react';
import './Header.css';

classNamenameName Header extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'React App',
            year:this.props.year,
            keyword:'User Text'
        }    
    }

    inputChange = (event)=>{
        this.setState({keyword : event.target.value?event.target.value :'User Text'})
       this.props.userText(event.target.value)
    }
    render(){
        return(
            <React.Fragment>
              <header>
              <div classNamenameNameName="logo">{this.state.title}</div>
                 <center>
                      <input onChange={this.inputChange}/>
                      <p>{this.state.keyword}</p>
                  </center>              
              </header>
            </React.Fragment>
        )
    }
}
export default Header;