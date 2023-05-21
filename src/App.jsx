import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Home from "./Header";


function App() {
  return (
    <AnimatePresence>
      <div>
        <Home/>
        <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Login />}></Route>
          <Route  exact path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
