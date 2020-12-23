import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions';
import {bindActionCreators} from 'redux';
import DisplayComponent from '../component/DisplayComponent'

class Home extends Component{
    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }

}

//Help to recive state from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

//To dispatch the action
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
