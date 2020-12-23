import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import ListView from '../component/App'

class MoviesList extends Component{

    componentDidMount(){
        this.props.MoviesList()
    }
    render(){
        return(
            <div>
               <ListView  moviesdata={this.props.datalist}></ListView>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.movies
    }
}

export default connect(mapStateToProps,actions)(MoviesList)