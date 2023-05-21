import { useState,useEffect } from "react"
 import { useSelector,useDispatch } from "react-redux"
 import {Link, useNavigate } from "react-router-dom"
import { registerinitiate } from "../Redux/Actions"


const Register = () => {


    
    const {currentuser} = useSelector(state=>state.user)
    const dispatch = useDispatch
const navigate = useNavigate() 
  const [state,setState]=useState({
    displayname:"",
    email:"",
    password:"",
    passwordconfirm:"",
  })
  const {email,password,displayname,passwordconfirm} = state

  useEffect(()=>{
    if(currentuser){
    navigate("/")}
},[currentuser,history  ])


const handleSubmit = (e)=>{
e.preventDefault()
if(password !==passwordconfirm){
    return
}
dispatch(registerinitiate(email,password,displayname))
setState({email:"",password:"",displayname:"",passwordconfirm:""})
}


  const handleChange = (event)=>{
let property = event.target.name
let value = event.target.value
setState({...state,[property]:value})
  }
 return (
    <div className="flex justify-center items-center h-screen">
    <form className="bg-white shadow-md rounded-lg px-10 py-8" onSubmit={handleSubmit}>
   
    <h1 className="text-center font-black font-serif">Register Here</h1>
      <div className="flex flex-col mb-6">
        <label  htmlFor="email" className=" mb-2 font-serif text-lg text-center">
          Name:
        </label>
        <input
         onChange={handleChange}
        id="displayname"
          type="text"
          placeholder="your name"
          name="displayname"
          value={displayname}
          required
          className="bg-slate-300 py-2 px-4 rounded h-7"
        />
         <label htmlFor="email" className="mb-2 font-serif text-lg text-center">
          Email:
        </label>
        <input
        onChange={handleChange}
        autoComplete="off"
        id="user-email"
          type="email"
          placeholder="your email here"
          name="email"
          value={email}
          required
          className="bg-slate-300 py-2 px-4 rounded h-7"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="password" className="mb-2 font-serif text-lg text-center">
          Password:
        </label>
        <input
         onChange={handleChange}
          type="password"
          placeholder="your password here"
          name="password"
          value={password}
          required
          className="bg-slate-300 py-2 px-4 rounded h-7"
        />
        <label htmlFor="repassword" className="mb-2 font-serif text-lg text-center">
           Confirm Password:
        </label>
        <input
         onChange={handleChange}
          type="password"
          placeholder="Repeat password here"
          name="passwordconfirm"
          value={passwordconfirm}
          required
          className="bg-slate-300 py-2 px-4 rounded h-7"
        />
      </div>
      <button type="submit" className="flex items-center text-center justify-center w-56  text-white bg-blue-500 rounded-2xl">Sign In</button>
     <div className=" fixedflex items-center justify-end">
      <Link to="/"><button className="bg-red-600 hover:bg-red-800 text-white rounded-2xl w-56 mt-6">Back</button></Link>
      </div>
    </form>

  </div>
  );
 }  

export default Register
