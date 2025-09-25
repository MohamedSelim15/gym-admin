import { useEffect, useState } from "react";

const DashboardHeader = () => {
      const [seconds, setSeconds] = useState(0);


      useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

      const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center mb-10 gap-4 ">
      <div className="flex flex-col xl:flex-row items-center space-x-2 xl:space-x-3 primaryColorText" >
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-chart-simple text-2xl xl:text-3xl"></i>
          <h1 className="text-xl xl:text-2xl font-medium">Dashboard</h1>
        </div>
        <span className="text-xs xl:text-sm text-[#547792] xl:mt-0.5 mt-1">Last refreshed: {formatTime(seconds)}</span>
      </div>
      <div
        onClick={() => window.location.reload()}
        className="flex items-center space-x-2 xl:space-x-4 text-lg mr-0 xl:mr-20 cursor-pointer primaryColorText"
      >
        <i className="fa-solid fa-arrows-rotate"></i>
      </div>
    </div>
  );
};

export default DashboardHeader;
