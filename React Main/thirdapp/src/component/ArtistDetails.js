import React, {Component} from 'react';
import Header from './Header';
import Albums from './Albums'

const url = "http://localhost:8900/artists"

class ArtistDetails extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.artistid)
        fetch(`${url}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                details:data
            })
        })
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}> </span>
                        <h3>{this.state.details.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>
                    </div>
                </div>
                <Albums albumdata={this.state.details.albums}></Albums>
            </React.Fragment>
        )
    }
}

export default ArtistDetails