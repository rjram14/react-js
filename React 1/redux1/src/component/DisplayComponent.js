import React from 'react';

const DisplayComponent = (props) => {
    const renderView = ({datalist}) => {
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div key={index}>{item.name}</div>
                )
            })
        }
    }
    return(
        <div>
            <h1>MoVies List</h1>
            {renderView(props)}
        </div>
    )
}


export default DisplayComponent;