import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-aplollo';

const client = new ApolloClient({
    uri:`http://localhost:8600/graphql`
})

const GET_MOVIES = gql`
    query movie($id:Int){
        movie(id:$id){
            name,
            language
        }
    }
`

class MovieList extends Component{
        constructor(){
            super()
        
        this.state={
            id:2
        }
    }

    render(){
        return(
            <div>
                <center>
                    <Query query={GET_MOVIES} client={client} variables={{id:this.state.id}}>
                        {({loading,error,data}) => {
                            if(loading) return <p>Loading...</p>
                            if(error) return <p>Error</p>
                            return(
                                <div>
                                    <h2>{data.movie.name}</h2>
                                    <h2>{data.movie.language}</h2>
                                </div>
                            )
                        }}

                    </Query>
                </center>
            </div>
        )
    }
}

ReactDOM.render(<MovieList/>,document.getElementById('root'))