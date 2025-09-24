import { motion } from "framer-motion";

import DashboardHeader from "./components/DashboardHeader";
import StatsCards from "./components/StatsCard";
import MemberGrowth from "./components/MemberGrowth";
import RevenueGrowth from "./components/RevenueGrowth";
import DailyAttendance from "./components/DailyAttendance";
import SubscriptionPieChart from "./components/SubscriptionPieChart";
import Date from "./components/Date";

const Dashboard = () => {
  const stats = [
    { id: 1, label: "Total Members", value: "270" },
    { id: 2, label: "Activity Today", value: "128" },
    { id: 3, label: "New Registrations", value: "12" },
  ];

const dataRevenue = [
  { year: "2016", value: 5000 },
  { year: "2017", value: 10000 },
  { year: "2018", value: 35000 },
  { year: "2019", value: 55000 },
  { year: "2020", value: 8000 },
  { year: "2021", value: 15000 },
  { year: "2022", value: 50000 },
  { year: "2023", value: 100000 },
];

  const dataMembers = [

    { month: "jan", flow: 120 },
    { month: "feb", flow: 150 },
    { month: "mar", flow: 180 },
    { month: "apr", flow: 170 },
    { month: "may", flow: 200 },
    { month: "jun", flow: 250 },

  ];

  const AttendanceData = [
  { day: "Mon", attendance: 95 },
  { day: "Tue", attendance: 120 },
  { day: "Wed", attendance: 135 },
  { day: "Thu", attendance: 125 },
  { day: "Fri", attendance: 90 },
  { day: "Sat", attendance: 40 },
  { day: "Sun", attendance: 70 },
];

  const SubscriptionData = [
    { name: "Gym-only subscription.", value: 400, color: "#547792" },
    { name: "Gym subscription + personalized follow-up with a nutritionist.", value: 150, color: "#94B4C1" },
    { name: "Gym subscription + workout videos accessible anytime.", value: 450, color: "#213448" },
];



  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-8 px-6 xl:px-10" style={{ color: "#213448" }}>
      <DashboardHeader />
      <div className="mt-2 space-y-3" style={{ color: "#213448" }}>

        <div className="primaryColorText mt-2 space-y-3">
            <Date/>
        </div>

        {/* First Row */}
        <StatsCards stats={stats} />


        {/* Second Row */}
        <div className=" grid xl:grid-cols-2  grid-cols-1 xl:px-4 sm:flex-row gap-4 ">
          <RevenueGrowth data={dataRevenue} />
          <SubscriptionPieChart data = {SubscriptionData} />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 xl:px-4 sm:grid-cols-2 lg:grid-cols-2 gap-4 col-span-1 sm:col-span-2 lg:col-span-4">

          <MemberGrowth data={dataMembers} />
          <DailyAttendance data={AttendanceData} />

        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
