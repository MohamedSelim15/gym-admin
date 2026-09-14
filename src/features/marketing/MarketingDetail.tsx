import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function MarketingDetail() {
  const { id } = useParams();
  const [marketingData, setMarketingData] = useState({
    id: 1,
    src: "/marketing.jpg",
    offer: "September Offer",
    offerDescription: "Get fit this fall with our September offer!",
    date: "2025-9-2",
    likesNumber: 10,
    commentsNumber: 10,
    shareWord: "Share",
  });

  const [comments, setComments] = useState([
    { id: 1, user: "John", text: "Great offer! Can't wait to try it out." },
    { id: 2, user: "Jane", text: "Is this available in all locations?" },
    { id: 3, user: "Doe", text: "I love the gym! Thanks for the discount." },
  ]);

  const [replyId, setReplyId] = useState(null);

  function handleAddComment(commentId) {
    console.log("Add comment for comment id:", commentId);
    setReplyId(null);
  }

  return (
    <div className="flex p-[40px] min-h-screen">
      <div className="w-full flex flex-col gap-[30px]">
        <div className="w-full flex justify-center primaryColor rounded-[10px]">
          <img
            src={marketingData.src}
            alt={marketingData.offer}
            className="w-full max-h-[500px] object-contain rounded-2xl shadow-md"
          />
        </div>

        <div className="flex gap-[10px] flex-col md:gap-[30px] w-full bg-white/90 primaryColorText text-sm px-[30px] ">
          <div className="flex flex-col gap-[10px] md:gap-[25px]">
            <div className="flex justify-between items-center mb-4">
              <p className="font-[600px] text-[16px] md:text-[26px]">
                {marketingData.offer}
              </p>
              <p className="text-[14px] md:text-[16px]">
                {marketingData.date}
              </p>
            </div>
            <p className="font-[500px] text-[12px] md:text-[18px]">
              {marketingData.offerDescription}
            </p>
          </div>

          <div className="flex border-y-[1px] border-[#F2EFE7] px-[40px] md:px-[124px] py-[10px] md:py-[20px] justify-between items-center text-sm">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-heart"></i>
              <p className="ml-1">{marketingData.likesNumber}</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-comment scale-x-[-1]"></i>
              <p className="ml-1">{marketingData.commentsNumber}</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-share"></i>
              <p className="ml-1">{marketingData.shareWord}</p>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] md:gap-[20px] ">
            <p className="text-[14px] md:text-[22px] font-[500px] primaryColorText">Comments</p>
            <div className="flex flex-col px-[10px] md:px-[25px] gap-[5px] md:gap-[20px]">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex border-[2px] border-[#F2EFE7] rounded-[20px] gap-[10px] px-[10px] md:px-[20px] py-[5px] md:py-[10px]"
                >
                  <div className="rounded-full flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] border-[1px] border-[#94B4C1] ">
                    {comment.user.img ? (
                      <img
                        src="/user.png"
                        alt={comment.user}
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                        className="object-cover rounded-full"
                      />
                    ) : (
                      <i className="fa-solid fa-user text-gray-500 text-2xl "></i>
                    )}
                  </div>

                  <div className="flex flex-col gap-[5px] w-full">
                    <p className="font-[500px] text-[14px] md:text-[18px]">
                      {comment.user}
                    </p>
                    <p className="text-gray-600 text-[12px] md:text-[16px]">
                      {comment.text}
                    </p>

                    <button
                      onClick={() =>
                        setReplyId(replyId === comment.id ? null : comment.id)
                      }
                      className="text-[#547792] text-[10px] w-fit hover:scale-105 transition-transform duration-300 hover:underline"
                    >
                      Reply
                    </button>

                    {replyId === comment.id && (
                      <div className="flex gap-[10px] w-full flex-col sm:flex-row md:gap-[20px] md:px-[65px]">
                        <Input
                          type="text"
                          placeholder="Write a reply..."
                          inputClassName="w-full border border-[#94B4C1] rounded-[10px] md:text-[16px] text-[12px] py-[2px] md:py-[4px] px-[8px] md:px-[14px] font-[400px]"
                        />
                        <Button
                          type={"primary"}
                          onClick={() => handleAddComment(comment.id)}
                          className="rounded-[10px] px-[3px] md:px-[5px] text-[12px] md:text-[14px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103"
                        >
                          Send
                        </Button>
                        <Button
                          type={"outline"}
                          onClick={() => setReplyId(null)}
                          className="rounded-[10px] px-[3px] md:px-[5px] text-[12px] md:text-[14px]  hover:border-[#ffffff] transition-transform duration-200 ease-in-out hover:scale-103"
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
