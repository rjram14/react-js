const intitalState = {
    data:[]
};

const reducer = (state=intitalState,action)=>{
       switch(action,type){
           case "FETCH":
               state.data = [];
               return{
                  ...state,
                  data:state.data.concat(action.value)
               }
               break;
       }
       return state;
};
export default reducer;