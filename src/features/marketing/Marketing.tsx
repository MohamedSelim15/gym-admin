import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



const Marketing = () => {
  
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-[30px] px-[40px]"
    >
      <Header
        pageName="Marketing"
        pageLogo="fa-solid fa-shop"
        buttonClassName="text-6xl relative bottom-3 text-center w-[100px]"
        buttonText="+"
        onButtonClick={() => navigate("/marketing/add")}
      />

      <MarketingCard/>

    </motion.div>
  );
};

export default Marketing;


const MarketingCard = ()=>{

const [marketingData, setMarketingData] = useState([
  {
    id: 1,
    src: "/marketing.jpg",
    offer: "September Offer",
    date: "2025-9-2",
    likeIcon: "fa-regular fa-heart",
    likeIconOnClick: "fa-solid fa-heart",
    likesNumber: 10,
    liked: false,
    commentIcon: "fa-regular fa-comment scale-x-[-1]",
    commentsNumber: 10,
    shareIcon: "fa-solid fa-share",
    shareWord: "Share",
  },
  {
    id: 2,
    src: "/marketing.jpg",
    offer: "September Offer",
    date: "2025-9-2",
    likeIcon: "fa-regular fa-heart",
    likeIconOnClick: "fa-solid fa-heart",
    likesNumber: 20,
    liked: false,
    commentIcon: "fa-regular fa-comment scale-x-[-1]",
    commentsNumber: 20,
    shareIcon: "fa-solid fa-share",
    shareWord: "Share",
  },
  {
    id: 3,
    src: "/marketing.jpg",
    offer: "September Offer",
    date: "2025-9-2",
    likeIcon: "fa-regular fa-heart",
    likeIconOnClick: "fa-solid fa-heart",
    likesNumber: 30,
    liked: false,
    commentIcon: "fa-regular fa-comment scale-x-[-1]",
    commentsNumber: 30,
    shareIcon: "fa-solid fa-share",
    shareWord: "Share",
  },
  {
    id: 4,
    src: "/marketing.jpg",
    offer: "September Offer",
    date: "2025-9-2",
    likeIcon: "fa-regular fa-heart",
    likeIconOnClick: "fa-solid fa-heart",
    likesNumber: 40,
    liked: false,
    commentIcon: "fa-regular fa-comment scale-x-[-1]",
    commentsNumber: 40,
    shareIcon: "fa-solid fa-share",
    shareWord: "Share",
  },
  {
    id: 5,
    src: "/marketing.jpg",
    offer: "September Offer",
    date: "2025-9-2",
    likeIcon: "fa-regular fa-heart",
    likeIconOnClick: "fa-solid fa-heart",
    likesNumber: 50,
    liked: false,
    commentIcon: "fa-regular fa-comment scale-x-[-1]",
    commentsNumber: 50,
    shareIcon: "fa-solid fa-share",
    shareWord: "Share",
  },
  {
    id: 6,
    src: "/marketing.jpg",
    offer: "September Offer",
    date: "2025-9-2",
    likeIcon: "fa-regular fa-heart",
    likeIconOnClick: "fa-solid fa-heart",
    likesNumber: 60,
    liked: false,
    commentIcon: "fa-regular fa-comment scale-x-[-1]",
    commentsNumber: 60,
    shareIcon: "fa-solid fa-share",
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
  return(
          <div className="flex w-full flex-wrap gap-10 -mt-10">
        {marketingData.map((item) => (
          <div className="relative w-[340px] h-[260px] rounded-xl overflow-hidden shadow-md">
            <img src={item.src} className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 w-full bg-white/90 text-black text-sm px-3 py-5">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">{item.offer}</span>
                <span className="text-gray-600 text-xs">{item.date}</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1">
                  <i
                    onClick={() => toggleLike(item.id)}
                    className={`${
                      item.liked ? item.likeIconOnClick : item.likeIcon
                    } cursor-pointer`}
                  ></i>
                  <span className="relative bottom-[1px] ml-1">
                    {item.likesNumber}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <i className={`${item.commentIcon} cursor-pointer`}></i>
                  <span className="relative bottom-[1px] ml-1">
                    {item.commentsNumber}
                  </span>
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
  )
}
