import * as types from "./ActionTypes"

const initialState = {
    loading: false,
    currentuser:null,
    error:null,
}

const useReducer = (state = initialState,action)=> {
    switch (action.type) {
        case types.REGISTER_START:{
            return{
                ...state,
                loading:true
            }
        }
        case types.REGISTER_SUCESS:{
            return{
                ...state,
                loading:false,
                currentuser:action.payload
            }
        }
        case types.REGISTER_FAIL:{
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        }
            
            
    
        default:
            return state
    }
}

export  default useReducer