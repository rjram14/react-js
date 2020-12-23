import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = (props) => {
    console.log(">>>>",props)

    const NewsRender = ({latestdata}) => {
        if(latestdata){
            return latestdata.map((data) => {
                return(
                    <Link to={`/details/${data.id}`} className="item">
                        <div className="image_cover"
                         style={{background:`url('/images/articles/${data.img}')`}}>
                            <div className="description">
                                    <span>{data.category}</span>
                                    <div>{data.title}</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="home-latest">
            {NewsRender(props)}
        </div>
    )
}

export default LatestNews;