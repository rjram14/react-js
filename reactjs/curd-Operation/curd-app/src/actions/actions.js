import axios from "axios";            //axios is used to connect to server


export const getProducts = ()=>{
    return(dispatch)=>{               //in order to connect to the reducer we need dispatch
        return axios.get("http://localhost:8080/fetch")
           .then((posRes)=>{
               dispatch(fun_one(posRes.data));
           },(errRes)=>{
        console.log(errRes);
     });
    }
};

export const fun_one = (records)=>{
    return{type:"FETCH",value:records} //json object connect internally to reducer with thunk middleware 
};




export const deleteProduct = (record)=>{
    return(dispatch)=>{              
        return axios.delete("http://localhost:8080/delete",{data:record})
           .then((posRes)=>{
               dispatch(fun_two(posRes.data));
           },(errRes)=>{
        console.log(errRes);
     });
    }
};

export const fun_two = (result)=>{
    return{type:"DELETE",value:result}  
};



export const insertProduct = (record)=>{
    return(dispatch)=>{              
        return axios.post("http://localhost:8080/insert",record)
           .then((posRes)=>{
               dispatch(fun_three(posRes.data));
           },(errRes)=>{
        console.log(errRes);
     });
    }
};

export const fun_three = (result)=>{
    return{type:"INSERT",value:result}  
};



export const updateProduct = (record)=>{
    return(dispatch)=>{              
        return axios.put("http://localhost:8080/update",record)
           .then((posRes)=>{
               dispatch(fun_four(posRes.data));
           },(errRes)=>{
        console.log(errRes);
     });
    }
};

export const fun_four = (result)=>{
    return{type:"UPDATE",value:result}  
};

