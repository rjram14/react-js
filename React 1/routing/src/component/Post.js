import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
            <h2>Post Page</h2>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h3>Post page content</h3>
                    <div>
                        <h4>JavaScript</h4>
                        <Link to="/post/JavaScript">Details</Link>
                    </div>
                    <div>
                        <h4>React</h4>
                        <Link to="/post/React">Details</Link>
                    </div>
                    <div>
                        <h4>Node</h4>
                        <Link to="/post/Node">Details</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post;