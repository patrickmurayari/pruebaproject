import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <AnimatePresence>
      <div>
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Header />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
