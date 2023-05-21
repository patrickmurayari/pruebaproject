import * as types from "./ActionTypes"
import {auth} from "../Firebase.config"
const registerStart = () => ({
    type: types.REGISTER_START
})

const registerSucess = (user) => ({
    type: types.REGISTER_SUCESS,
    payload:user
})

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error
})

export  const registerinitiate = (email,password,displayname)=>{
    return function(dispatch){
        dispatch(registerStart())
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayname
            })
            dispatch(registerSucess(user))
        })
        .catch((error)=>dispatch(registerFail(error.message)))
    }
}