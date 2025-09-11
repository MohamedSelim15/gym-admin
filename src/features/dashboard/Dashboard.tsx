import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-8 px-6 xl:px-10"
    >
      <div className="flex flex-col xl:flex-row justify-between items-center mb-10 gap-4">
        <div className="flex flex-col xl:flex-row items-center space-x-2 xl:space-x-3 primaryColorText">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-chart-simple text-2xl xl:text-3xl"></i>
            <h1 className="text-xl xl:text-2xl font-medium">Dashboard</h1>
          </div>
          <span className="text-xs xl:text-sm text-[#547792]">
            Last refreshed: {formatTime(seconds)} ago
          </span>
        </div>

        <div
          onClick={() => window.location.reload()}
          className="flex items-center primaryColorText space-x-2 xl:space-x-4 text-lg mr-0 xl:mr-20 cursor-pointer"
        >
          <i className="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>

      <div className="primaryColorText mt-2 space-y-3">
        <div className="flex flex-col sm:flex-row gap-2 ml-0 sm:ml-4">
          <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-2 border border-[#94B4C1] w-fit">
            <i className="fa-regular fa-calendar mr-1"></i>
            <span>Today</span>
          </div>
          <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-2 border border-[#94B4C1] w-full sm:w-1/4">
            Compare to: Oct 2-Nov 6, 2025
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-0 sm:px-4 py-2">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white flex flex-col shadow rounded-2xl p-3 border border-[#94B4C1] h-[80px] text-sm"
            >
              <span className="border-b-[1px] w-fit mb-2 border-dashed">
                {item.label}
              </span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-[2]">
              <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Total sales over time
              </span>
              <img className="w-[200px]" src="/marketing.jpg" alt="" />
            </div>
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1">
              <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Total sales breakdown
              </span>
              {breakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b-[1px] w-full mb-3 border-dashed"
                >
                  <span className="text-[#547792] ">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1]">
              <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Average order value over time
              </span>
            </div>
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1">
              <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Total sales by product
              </span>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b-[1px] w-full mb-3 border-dashed"
                >
                  <span className="text-[#547792] ">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1]">
              <span className="border-b-[1px] w-fit mb-3 border-dashed"></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
