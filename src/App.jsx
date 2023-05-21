import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div>
        <Routes>
          <Route path="/home" element={<Header />}></Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
