import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import SideBar from "./features/components/SideBar";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "./features/Pages/Dashboard";
import Exercise from "./features/Pages/exercises/Exercises";
import Customer from "./features/Pages/Customer";
import TeamWork from "./features/Pages/TeamWork";
import Notification from "./features/Pages/Notification";
import Reviews from "./features/Pages/Reviews";
import Settings from "./features/Pages/Settings";
import Marketing from "./features/Pages/Marketing";
import AddExercise from "./features/Pages/exercises/AddExercise";

function App() {
  const { pathname } = useLocation();
  const hideSidebar = pathname === "/signup";
  return (
    <div>
      {/* <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          </AnimatePresence> */}

      {!hideSidebar && (
        <div className="flex">
          <SideBar />
          <div className="flex-1 ml-20 xl:ml-62 p-3">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/teamwork" element={<TeamWork />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/exercise/add" element={<AddExercise />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
