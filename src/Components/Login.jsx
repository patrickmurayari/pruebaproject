import { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import { app } from "../Firebase.config";
import { useNavigate } from 'react-router-dom';

import { FcGoogle } from "react-icons/Fc";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
      
        navigate("/home");
      }
    });

    return () => {
      // Limpiar el event listener al desmontar el componente
      unsubscribe();
    };
  }, [firebaseAuth, navigate]);

  const handleLogin = async () => {
    try {
      
      await setPersistence(firebaseAuth, browserSessionPersistence);

      // Iniciar sesión con Google
      const response = await signInWithPopup(firebaseAuth, provider);
      console.log(response);
    } catch (error) {
      console.log("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded-lg px-10 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign In</h1>
        <div className="mb-6">
          <button onClick={handleLogin} className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <div  className=" flex items-center justify-center items-center">
          <FcGoogle className="text-2xl"/>
            </div>
           Sign in with Google
          </button>
          
        </div>
        <p className="text-center">Or</p>
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="mb-2 flex items-center">
            Email:
          </label>
          <input
            type="email"
            placeholder="your email here"
            name="email"
            value={email}
            required
            className="bg-slate-300 py-2 px-4 rounded"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-2">
            Password:
          </label>
          <input
            type="password"
            placeholder="your password here"
            name="password"
            value={password}
            required
            className="bg-slate-300 py-2 px-4 rounded"
          />
        </div>
        <button type="submit" className="flex items-center text-center justify-center w-56  text-white bg-orange-500 rounded-2xl">
          Sign In
        </button>
        <hr />
        <Link to={"/register"}>
          <p className="font-extralight text-center">Don't have an account?</p>
        </Link>
      </form>
      <div>
       
      </div>
    </div>
  );
};

export default Login;
