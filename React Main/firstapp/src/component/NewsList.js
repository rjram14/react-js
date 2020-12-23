import React from 'react';

const NewsList = (props) => {
    //console.log(props);

    const output = props.newsDB.map((item,index) => {
        return(
            <div key={index}>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    })

    return(
        <div>
            {output}
        </div>
    )
}

export default NewsList;