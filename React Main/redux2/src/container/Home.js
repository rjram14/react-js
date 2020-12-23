import React, {Component} from 'react';
import { connect }   from 'react-redux';
import { latestNews,articleNews,galleryNews } from '../actions';
import PropTypes from 'prop-types'
import LatestNews from '../component/Home/LatestNews';
import ArticleNews from '../component/Home/ArticleNews';
import GalleryNews from '../component/Home/GalleryNews';


class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
           <div>
               <LatestNews latestdata={this.props.articledata.latest}/>
               <ArticleNews articledata={this.props.articledata.artdata}/>
               <GalleryNews gallerydata={this.props.gallerydata.galdata}/>
           </div>
        )
    }
}


function mapStateToProps(state){
    return{
        articledata: state.articles,
        gallerydata: state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home);