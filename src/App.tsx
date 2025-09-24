import Login from "./features/auth/Login.js";
import SignUp from "./features/auth/SignUp.js";

import SideBar from "./features/components/SideBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { ModalProvider } from "./core/context/ModalContext.jsx";
import Dashboard from "./features/dashboard/Dashboard";
import Exercise from "./features/exercises/Exercises";
import Customer from "./features/customer/Customer";
import TeamWork from "./features/teamwork/TeamWork";
import Notification from "./features/notification/Notification";
import Reviews from "./features/reviews/Reviews";
import Settings from "./features/setting/Settings";
import Marketing from "./features/marketing/Marketing";
import AddExercise from "./features/exercises/AddExercise";
import AddTeamWork from "./features/teamwork/AddTeamWork";
import AddCustomer from "./features/customer/AddCustomer.js";
import AddMarketing from "./features/marketing/AddReel.js";
import AddNotification from "./features/notification/AddNotification";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MarketingDetail from "./features/marketing/MarketingDetail.js";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { pathname } = useLocation();
  const hideSidebar = pathname === "/signup";
  return (
    <ModalProvider>
      <div>
        {/* <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes> */}

        {!hideSidebar && (
          <div className="flex">
            <SideBar />
            <div className="flex-1 lg:ml-20 xl:ml-62 p-3">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/exercise" element={<Exercise />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/teamwork" element={<TeamWork />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/marketing/:id" element={<MarketingDetail />} />

                <Route path="/notification" element={<Notification />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/exercise/add" element={<AddExercise />} />
                <Route path="/customer/add" element={<AddCustomer />} />
                <Route path="/teamwork/add" element={<AddTeamWork />} />
                <Route path="/marketing/add" element={<AddMarketing />} />
                <Route path="/notification/add" element={<AddNotification />} />
              </Routes>
            </div>
          </div>
        )}

        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 p-3 rounded-[10px] bg-[#213448] text-white  hover:bg-white hover:text-[#213448] hover:scale-105 transition-all duration-200 ease-in-out shadow-[0_0_10px_rgba(33,52,72,0.5)] cursor-pointer "
          >
            <i className="fa-solid fa-arrow-up"></i>
          </motion.button>
        )}
      </div>
    </ModalProvider>
  );
}

export default App;
