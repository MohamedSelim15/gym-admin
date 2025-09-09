import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-8 px-6 xl:px-10"
    >
      <div className="flex flex-col xl:flex-row justify-between items-center mb-10 gap-4">
        <div className="flex items-center space-x-2 xl:space-x-3 primaryColorText">
          <i className="fa-solid fa-chart-simple text-2xl xl:text-3xl"></i>
          <h1 className="text-xl xl:text-2xl font-medium">Dashboard</h1>
          <span className="text-xs xl:text-sm text-[#547792]">
            Last refreshed: 3:57
          </span>
        </div>

        <div
          onClick={() => window.location.reload()}
          className="flex items-center primaryColorText space-x-2 xl:space-x-4 text-lg mr-20 cursor-pointer"
        >
          <i className="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>

      <div className=" primaryColorText mt-2 space-y-3">
        <div className="flex gap-2 ml-4">
          <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-2 border-1 mt-0.5 border-[#94B4C1] w-fit">
            <i className="fa-regular fa-calendar mr-1"></i>
            <span>Today</span>
          </div>
          <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-2  border-1 border-[#94B4C1] w-1/4">
            Compare to: Oct 2-Nov 6 ,2025{" "}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-4 py-2">

          <div className="bg-white flex flex-col shadow rounded-2xl p-3 border border-[#94B4C1] h-[80px] text-sm">
            <span className="border-b-[1px] w-fit mb-2 border-dashed">
              Gross sales
            </span>
            <span className="font-semibold">EGP 16,549</span>
          </div>
          <div className="bg-white flex flex-col shadow rounded-2xl p-3 border border-[#94B4C1] h-[80px] text-sm">
            <span className="border-b-[1px] w-fit mb-2 border-dashed">
              Returning customer rate
            </span>
            <span className="font-semibold">64%</span>
          </div>
          <div className="bg-white flex flex-col shadow rounded-2xl p-3 border border-[#94B4C1] h-[80px] text-sm">
            <span className="border-b-[1px] w-fit mb-2 border-dashed">
              Order fulfilled
            </span>
            <span className="font-semibold">70</span>
          </div>
          <div className="bg-white flex flex-col shadow rounded-2xl p-3 border border-[#94B4C1] h-[80px] text-sm">
            <span className="border-b-[1px] w-fit mb-2 border-dashed">
              Order
            </span>
            <span className="font-semibold">1250</span>
          </div>

          <div className="flex gap-4 col-span-4">
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border-1 border-[#94B4C1] flex-[2]">
              <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Total sales over time
              </span>
              <img width={150} src="/marketing.jpg" alt="" />
            </div>
            <div className="bg-white flex flex-col shadow rounded-xl p-4 border-1 border-[#94B4C1] flex-[1]">
              <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Total sales breakdown
              </span>
            </div>
          </div>

          <div className="bg-white flex flex-col shadow rounded-xl p-4 col-span-1 border-1  border-[#94B4C1]">
            <span className="border-b-[1px] w-fit mb-3 border-dashed">
              Avarage order value over time{" "}
            </span>
          </div>
          <div className="bg-white flex flex-col shadow rounded-xl p-4 col-span-1 border-1  border-[#94B4C1]">
            <span className="border-b-[1px] w-fit mb-3 border-dashed">
              Total sales by product{" "}
            </span>
          </div>
          <div className="bg-white flex flex-col shadow rounded-xl p-4 col-span-2 border-1  border-[#94B4C1]">
            <span className="border-b-[1px] w-fit mb-3 border-dashed"> </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
