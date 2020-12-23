import React,{useState, useEffect} from 'react';
import  Productlist from './product';

const url = "https://ngapi4.herokuapp.com/api/getProducts";

function Hooks(){

    const [title] = useState({"name":"abc"});
    const [ count, setCount] = useState(0);
    const [product, setProduct] = useState(0)

    useEffect(()=>{
        fetch(url)
            .then((res) => res.json())
            .then((prod) => {
                setProduct(prod)
            })
        },[product])
    
    return(
        <div>
            <h1>{title.name}</h1>
            <h2>Count: {count}</h2>
            <div onClick={()=>{setCount(count+1)}}>Click</div>
            <Productlist proddata={product}></Productlist>
        </div>
    )
}

export default Hooks;