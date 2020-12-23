import React from 'react';

const Footer = (props)=>{
    return(
        <React.Fragment>
             <hr/>
             <center>
                <p>&copy;{props.title} {props.year}</p>
              </center>          
        </React.Fragment>
    )
}
export default Footer;