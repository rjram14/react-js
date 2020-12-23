import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h2>PostDetails Page for {props.match.params.topic}</h2>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h3>PostDetails page content</h3>
                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;