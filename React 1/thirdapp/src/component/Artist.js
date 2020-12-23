import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props) => {
    const renderList = ({artistData}) => {
        if(artistData){
            return artistData.map((item,index) => {
                const myImage={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return(
                    <Link to={`/artist/${item.id}`} className="artist_item" style={myImage}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
        

    }
    return(
        <div className="artist_list">
            <h4>List of Artist</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList;