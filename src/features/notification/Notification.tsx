import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NotificationCard from "./components/NotificationCard";

const Notification = () => {
  const navigate = useNavigate();

   const [NotificationData, setNotificationData] = useState([
    {
      id: 1,
      title: "New Yoga Class",
      audience:"All Members",
      date : "22/4/2025",
      hour:"10:00 AM",
      status: "Pending",
      message: "Don't forget to check out our new classes this week!", 
      buttonText: "Sent Now"
    },
    {
      id: 2,
      title: "Discount Offer",
      audience:"Premium Members",
      date : "22/4/2024",
      hour:"11:00 AM",
      status: "Sent",
      message: "Don't forget to check out our new classes this week!", 
      buttonText: "Sent"
    },
  ]);

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-[30px] px-[40px]"
    >
      <div className="xl:-ml-0 -ml-7">
        <Header
          pageName="Notification"
          pageLogo="fa-solid fa-bell "
          buttonText="Add Notification"
          onButtonClick={() => navigate("/notification/add")}
          width="w-[160px]"
        />
      </div>

      <NotificationCard NotificationData={NotificationData} />
    </motion.div>
  );
};

export default Notification;


