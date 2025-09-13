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
import AddMarketing from "./features/marketing/AddMarkting.js";

function App() {
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
                <Route path="/notification" element={<Notification />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/exercise/add" element={<AddExercise />} />
                <Route path="/customer/add" element={<AddCustomer />} />
                <Route path="/teamwork/add" element={<AddTeamWork />} />
                <Route path="/marketing/add" element={<AddMarketing />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </ModalProvider>
  );
}

export default App;
