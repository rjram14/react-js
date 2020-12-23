import React,{useState,useEffect} from 'react';
import DisplayNews from './DisplayNews';

function HooksComponent(){
    const [title] = useState('DeveloperFunnel');
    const [subheading] = useState('React Hooks');
    const [counter,setCount] = useState(0);
    const [news,setNews] = useState()
    const [dummy] = useState()

    const url = "http://localhost:8900/news"

    console.log("Outside")
    useEffect(() => {
        console.log("Inside")
        fetch(url)
        .then(res =>res.json())
        .then((data) => {
            setNews(data)
        })
    },[dummy])

    return(
        <div>
            <h1>{title}</h1>
            <h2>{subheading}</h2>
            <h2>{counter}</h2>
            <button onClick={() => {setCount(counter+1)}}>
                Counter
            </button>
            <DisplayNews mydata={news}/>
        </div>
    )
}

export default HooksComponent;
