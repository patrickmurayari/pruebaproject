import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { auth } from "../Firebase.config";
import { createContext, useContext } from "react";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error: useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider( children ) {
    const register = async(email,password)=>{
        const response = await createUserWithEmailAndPassword(auth,email,password)
        console.log(response);
    }
    const login = async (email,password)=>{
        const response = await signInWithEmailAndPassword(auth,email,password)
    console.log(response);
    }
    const loginwithgoogle = async()=>{
        const responsegoogle= new GoogleAuthProvider()
        return signInWithPopup(auth,responsegoogle)
    }
    const logout = async()=>{
        const response = await signOut(auth)
        console.log(response);
    }
  return (<authContext.Provider value={{register,login,loginwithgoogle,logout}}>{children}</authContext.Provider>);
}

