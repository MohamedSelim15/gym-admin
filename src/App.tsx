import Login from './features/auth/Login'
import SignUp from './features/auth/SignUp'
import {  Routes, Route } from "react-router-dom";
import {  AnimatePresence } from "framer-motion";


function App() {

  return (
      <div>
          <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          </AnimatePresence>
      </div>
  )
}

export default App;


