const initialState = {
    data:[]
};
const reducer = (state=initialState,action)=>{   //action json object
    switch(action.type){
        case "FETCH":
        state.data=[];
            return{           //reducer should return result to component  
                              // principal of react js always maintain imutablity for easy comperision
                ...state,
                data:state.data.concat(action.value) //database records
            }
            break;
        case "DELETE":
        case "INSERT":
        case "UPDATE":
            return{
                ...state,
                status : action.value
            }
    }
    return state;
};
export default reducer;