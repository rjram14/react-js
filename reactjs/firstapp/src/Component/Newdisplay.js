import React from 'react';

const Newsdisplay  = (props) =>{
    console.log(props);
    const renderList = props.datalists.map((item , index) => {
        return(
            <div key={index}>
                <h3>{index}</h3>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    });
    return(
        <div>
            {renderList}
        </div>
    );
}
export default Newsdisplay;