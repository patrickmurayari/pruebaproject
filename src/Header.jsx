import { MdShoppingBasket } from 'react-icons/md';
import logo from "../src/logoo.jpg"
import avatar from "../src/avatar.png"
import {motion} from  "framer-motion"
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../src/Firebase.config"
function Home() {

  const firebaseauth = getAuth(app)
  const provider =  new GoogleAuthProvider()
  const login = async ()=> {
const response =await  signInWithPopup(firebaseauth,provider,)
console.log(response
  );
  }


  return (
    <div className="fixed z-50 w-screen p-4 px-16">
      <div className="flex items-center justify-between">
        <Link to={"/"} className=' flex items-center gap-2'> 
        <img className='w-10 object-cover rounded-full' src={logo} alt="" />

        </Link>
        <ul className="flex items-center justify-center gap-40 flex-grow">
          <li className="text-base text-black cursor-pointer duration-100 transition-all ease-in-out hover:text-gray-500">
            Home
          </li>
          <li className="text-base text-black cursor-pointer duration-100 transition-all ease-in-out hover:text-gray-500">
            About
          </li>
          <li className="text-base text-black cursor-pointer duration-100 transition-all ease-in-out hover:text-gray-500">
            Menu
          </li>
        </ul>
        <div className="flex items-center">
          <MdShoppingBasket className="text-2xl" />
        <div > 
        <motion.img onClick={login} whileTap={{scale: 0.6}} src={avatar} alt="userprofile"  className='w-10 ml-5 min-w[40px] h-10 min-h[40px] shadow-2xl' />
        </div>
        </div>
      </div>
      <div className="hidden md:flex w-full h-full"></div>
    </div>
  );
}

export default Home;
