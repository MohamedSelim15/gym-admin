import { motion } from "framer-motion";
import { useState } from "react";
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

  const [revenuePeriod, setRevenuePeriod] = useState<"Yearly" | "Monthly" | "Weekly">("Yearly");

  const revenueData = {
    Yearly: [
      { name: "2016", value: 5000 },
      { name: "2017", value: 10000 },
      { name: "2018", value: 35000 },
      { name: "2019", value: 55000 },
      { name: "2020", value: 8000 },
      { name: "2021", value: 15000 },
      { name: "2022", value: 50000 },
      { name: "2023", value: 100000 },
    ],
    Monthly: [
      { name: "Jan", value: 4000 },
      { name: "Feb", value: 6000 },
      { name: "Mar", value: 8000 },
      { name: "Apr", value: 12000 },
      { name: "May", value: 15000 },
      { name: "Jun", value: 11000 },
      { name: "Jul", value: 19000 },
      { name: "Aug", value: 25000 },
      { name: "Sep", value: 21000 },
      { name: "Oct", value: 28000 },
      { name: "Nov", value: 32000 },
      { name: "Dec", value: 38000 },
    ],
    Weekly: [
      { name: "Week 1", value: 1000 },
      { name: "Week 2", value: 1500 },
      { name: "Week 3", value: 2500 },
      { name: "Week 4", value: 2000 },
    ]
  };
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
          <RevenueGrowth 
            data={revenueData[revenuePeriod]} 
            period={revenuePeriod} 
            setPeriod={setRevenuePeriod} 
          />
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
