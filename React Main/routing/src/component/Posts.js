import React from 'react';
import { Link} from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                 <h1>Posts Page</h1>
            </div>
            <div className="panel-body">
                <h2>JavaScript</h2>
                <Link to="/post/javascript">Details</Link>
                <h2>React</h2>
                <Link to="/post/react">Details</Link>
                <h2>Node</h2>
                <Link to="/post/node">Details</Link>
                <h2>Python</h2>
                <Link to="/post/python">Details</Link>
            </div>
        </div>
    )
}

export default Post;