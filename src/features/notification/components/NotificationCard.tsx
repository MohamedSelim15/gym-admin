import React, { useState } from "react";

const NotificationCard = ({ NotificationData }) => {
 

  return (
    <div className="flex w-full justify-center flex-wrap gap-10 -mt-10">
      {NotificationData.map((item) => (
        <div
          key={item.id}
          className="relative xl:w-[45%] py-6 px-10 h-[280px] rounded-xl overflow-hidden shadow-md"
        >
         <h1 className="text-2xl font-medium">{item.title}</h1>
        
          <div className="mt-5 space-y-2 text-sm text-[#547792]">
          <p>Message : {item.message}</p>
          <p>Audience : {item.audience}</p>
          <p>Date : {item.date} - {item.hour}</p>
          <p className={`font-medium text-white px-4 py-1 xl:-ml-1 ${item.status === "Pending" ? "bg-[#F47C57]" : item.status === "Sent" ? "bg-[#C9D36A]" : "bg-red-500"}  w-fit rounded-3xl`}>{item.status}</p>
          </div>

          <button className={`${item.buttonText === "Sent Now" ? "primaryColor text-white " :"bg-[#F2EFE7] primaryColorText"}  px-6 py-2 rounded-4xl my-3 bottom-5 right-5 xl:absolute flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}>
            <i className="fa-regular fa-paper-plane"></i>
            {item.buttonText}
            </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;