import axios from "axios";
export const getProducts = ()=>{
      return(dispatch)=>{
          return axios.get("http://localhost:8080/fetch")
                     .then((posRes)=>{
                         dispatch(fun_one(posRes.data));
                     },(errRes)=>{
                         Console.log(errRes);                    
             })
      }
};
export const fun_one = (records)=>{
    return{type:"FETCH",value:records};
};