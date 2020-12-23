import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import Newsdisplay from './Newdisplay';

classNamenameName Home extends Component{
    constructor(){
        super()
        this.state = {
            news:JSON,
            filtered:JSON
        }
        this.filterNews = this.filterNews.bind(this)
    }

    filterNews(userInput){
        console.log(userInput)
        const output = this.state.news.filter((data) =>{
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase()))>-1
        })
        console.log(output)
        this.setState({filtered:output})
        console.log(this.state)
    }

    render(){
        return (
            <React.Fragment>
                 <Header 
                 userText={(headerdata)=>this.filterNews(headerdata)}
                  />
                 <Newsdisplay datalists={this.state.filtered}/>
                 <Footer year='2020' title='RamnewasSingh'/>
            </React.Fragment>
         )
    }   
}
export default Home ;