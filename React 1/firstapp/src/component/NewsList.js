import React from 'react';

const NewsList = (props) => {
    console.log(props)

    const renderList = props.newsList.map((data,index) => {
        return(
            <div key={index}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
           {renderList}
        </div>
    )
}

export default NewsList;