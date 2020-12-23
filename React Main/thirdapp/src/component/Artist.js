import React from 'react';
import { Link } from 'react-router-dom';

const Artist  = (props) => {
    console.log(">>>>in Artists>>>",props)
    const Alist = ({artistData}) => {
        if(artistData){
            return artistData.map((item,index) => {

                const mystyle = {
                    background:`url('/images/covers/${item.cover}.jpg')`
                }

                return(
                    <Link key={index} to={`/artist/${item.id}`}
                 className="artist_item" 
                    style={mystyle}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }

    }

    return(
        <div className="artist_list">
            <h4>Browse The Artists</h4>
            {Alist(props)}
        </div>
    )
}

export default Artist;