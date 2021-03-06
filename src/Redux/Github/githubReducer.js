import * as types from "./actionType"

const initState={
    user:[],
    isLoading:false,
    isError:false,
}
export const githubreducer=(state=initState,{type,payload})=>{
   console.log(payload)
    switch(type){
        case types.FETCH_USER_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case types.FETCH_USER_SUCCESS:{
            return{
                ...state,
                user:payload,
                isLoading:false,
                isError:false
            }
        }
        case types.FETCH_USER_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        
        default:{
            return state
        }
    }

}