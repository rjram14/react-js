import React from 'react';
import { Link} from 'react-router-dom';

const Post = ()=>{
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
                Post
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                     <h3>Post</h3>
                     <p>Lie had madam or me spoken just more purple. Volume plutonian nothing get nothing fowl was eyes, that door the of pallas. From perched from thy the shore the. More books the or lonely he more tapping, beating that name with and unto hath door. My ember prophet see more. The god pallas bust wondering i thrilled thy she me, lordly my seeming chamber than have of, not the of the hesitating curious whom i at more. Ease and one scarce ominous one shall and songs our. Visiter or heaven a off heart his aptly from, the angels as as nothing, outpour scarcely or i from is this the in on, the heaven dared now i rare door reply of. Shadows ancient thy was shadows, shutter said he lamplight here lord a footfalls evermore ashore, the thy but soul being my lenore some. All seat then more and on, burden.</p>
                     
                </div>
                     <h4>React js</h4>
                     <Link to="/post/React js">Details</Link>
                     <h4>Node js</h4>
                     <Link to="/post/Node js">Details</Link>
                     <h4>Angular</h4>
                     <Link to="/post/Angular">Details</Link>
                     <h4>MongoDB</h4>
                     <Link to="/post/MongoDB">Details</Link>
            </div>
           
        </div>
    )
}
export default Post;