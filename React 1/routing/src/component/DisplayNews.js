import React from 'react';

function DisplayNews(props){
    const renderList = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })
        }
    }
    return (
        <div>
            <center>
                News Display
            </center>
            {renderList(props)}

        </div>
    )
}

export default DisplayNews