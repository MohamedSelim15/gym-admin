import { motion } from "framer-motion";

import DashboardHeader from "./components/DashboardHeader";
import StatsCards from "./components/StatsCard";
import SalesChart from "./components/SalesChart";
import BreakdownList from "./components/BreakdownList";
import ProductsList from "./components/ProductsList";

const Dashboard = () => {
  const stats = [
    { id: 1, label: "Gross sales", value: "EGP 16,549" },
    { id: 2, label: "Returning customer rate", value: "64%" },
    { id: 3, label: "Order fulfilled", value: "70" },
    { id: 4, label: "Order", value: "1250" },
  ];

  const breakdown = [
    { label: "Gross sales", value: "EGP 300" },
    { label: "Discounts", value: "EGP 300" },
    { label: "Returns", value: "EGP 300" },
    { label: "Net Sales", value: "EGP 300" },
    { label: "Shipping charges", value: "EGP 300" },
    { label: "Return fees", value: "EGP 300" },
    { label: "Taxes", value: "EGP 300" },
    { label: "Total sales", value: "EGP 300" },
  ];

  const data = [
    { month: "jan", year: "2024", flow: 120 },
    { month: "feb", year: "2024", flow: 150 },
    { month: "mar", year: "2024", flow: 180 },
    { month: "apr", year: "2024", flow: 90 },
    { month: "may", year: "2024", flow: 200 },
    { month: "jun", year: "2024", flow: 100 },
    { month: "jul", year: "2024", flow: 150 },
    { month: "aug", year: "2024", flow: 20 },
    { month: "sep", year: "2024", flow: 200 },
    { month: "oct", year: "2024", flow: 50 },
    { month: "nov", year: "2024", flow: 0 },
    { month: "dec", year: "2024", flow: 100 },
    { month: "jan", year: "2025", flow: 120 },
    { month: "feb", year: "2025", flow: 150 },
    { month: "mar", year: "2025", flow: 180 },
    { month: "apr", year: "2025", flow: 90 },
    { month: "may", year: "2025", flow: 200 },
    { month: "jun", year: "2025", flow: 100 },
    { month: "jul", year: "2025", flow: 150 },
    { month: "aug", year: "2025", flow: 20 },
    { month: "sep", year: "2025", flow: 200 },
    { month: "oct", year: "2025", flow: 50 },
    { month: "nov", year: "2025", flow: 0 },
    { month: "dec", year: "2025", flow: 210 },
  ];

  const products = [
    { label: "Product 1", value: "EGP 300" },
    { label: "Product 2", value: "EGP 300" },
    { label: "Product 3", value: "EGP 300" },
    { label: "Product 4", value: "EGP 300" },
    { label: "Product 5", value: "EGP 300" },
    { label: "Product 6", value: "EGP 300" },
    { label: "Product 7", value: "EGP 300" },
    { label: "Product 8", value: "EGP 300" },
  ];

  return (
    <motion.div
          initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
     className="w-full h-full flex flex-col py-8 px-6 xl:px-10" style={{ color: "#213448" }}>
      <DashboardHeader />
      <div className="mt-2 space-y-3" style={{ color: "#213448" }}>

        {/* First Row */}
        <StatsCards stats={stats} />


        {/* Second Row */}
        <div className="flex flex-col xl:px-4 sm:flex-row gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
          <SalesChart data={data} />
          <BreakdownList breakdown={breakdown} />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 xl:px-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 col-span-1 sm:col-span-2 lg:col-span-4">

          <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1]">
            <span className="border-b-[1px] w-fit mb-3 border-dashed">
              Average order value over time
            </span>
          </div>

          <ProductsList products={products} />

          <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1]">
            <span className="border-b-[1px] w-fit mb-3 border-dashed"></span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
