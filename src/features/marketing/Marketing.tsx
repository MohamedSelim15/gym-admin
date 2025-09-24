import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Marketing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-[30px] px-[40px]"
    >
      <div className="xl:-ml-0 -ml-7">
        <Header
          pageName="Marketing"
          pageLogo="fa-solid fa-shop"
          buttonClassName="text-6xl relative bottom-3 text-center w-[100px]"
          buttonText="+"
          onButtonClick={() => navigate("/marketing/add")}
        />
      </div>

      <MarketingCard />
    </motion.div>
  );
};

export default Marketing;
const MarketingCard = () => {
  const navigate = useNavigate();
  const [marketingData] = useState([
    {
      id: 1,
      src: "/marketing.jpg",
      offer: "September Offer",
      date: "2025-9-2",
      likesNumber: 10,
      commentsNumber: 10,
      shareWord: "Share",
    },
    {
      id: 2,
      src: "/marketing.jpg",
      offer: "September Offer",
      date: "2025-9-2",
      likesNumber: 20,
      commentsNumber: 20,
      shareWord: "Share",
    },
    {
      id: 3,
      src: "/marketing.jpg",
      offer: "September Offer",
      date: "2025-9-2",
      likesNumber: 30,
      commentsNumber: 30,
      shareWord: "Share",
    },
  ]);

  const toggleLike = (id: number) => {
    setMarketingData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              liked: !item.liked,
              likesNumber: item.liked
                ? item.likesNumber - 1
                : item.likesNumber + 1,
            }
          : item
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-10">
      {marketingData.map((item) => (
        <div
          key={item.id}
          role="button"
          onClick={() => navigate(`/marketing/${item.id}`)}
          className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <img src={item.src} className="w-full h-full object-cover" />

          <div className="absolute bottom-0 left-0 w-full bg-white/90 text-black text-sm px-3 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">{item.offer}</span>
              <span className="text-gray-600 text-xs">{item.date}</span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-heart"></i>
                <span className="ml-1">{item.likesNumber}</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-comment scale-x-[-1]"></i>
                <span className="ml-1">{item.commentsNumber}</span>
              </div>
              <div className="flex items-center gap-1">
                <i className={`${item.shareIcon} cursor-pointer`}></i>
                <span className="relative bottom-[1px] ml-1">
                  {item.shareWord}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
