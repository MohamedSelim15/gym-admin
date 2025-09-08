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
        <div className="flex items-center space-x-2 xl:space-x-3 text-primaryColorText">
          <i className="fa-solid fa-chart-simple text-2xl xl:text-3xl"></i>
          <h1 className="text-xl xl:text-2xl font-medium">Dashboard</h1>
          <span className="text-xs xl:text-sm text-[#547792]">Last refreshed: 3:57</span>
        </div>

        <div className="flex items-center space-x-2 xl:space-x-4 text-lg mr-20 cursor-pointer">
            <i className="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>

    </motion.div>
  );
};

export default Dashboard;
