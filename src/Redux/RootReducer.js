import {combineReducers} from "redux"
import useReducer from "./Reducer"


const rootReducer = combineReducers({
    user:useReducer
})

export default rootReducer