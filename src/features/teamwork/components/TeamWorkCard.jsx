import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const TeamWorkCard = ({
  teamWork,
  deleteTeamWork,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
        grid grid-cols-1 sm:grid-cols-6
        w-full border-t sm:border-t border-[#CFD9E9]
        py-4 px-5 sm:px-[35px] items-center
        hover:bg-[#F9FAFB] transition-colors
        sm:rounded-none sm:shadow-none
        rounded-xl shadow-sm bg-white  mb-4 sm:mb-0
      "
    >


      {/* Mobile view */}
      <div className="sm:hidden text-center mt-3 space-y-2 text-sm text-[#15243F]">
        <p>
          <span className="font-semibold text-gray-600">Name:</span>{" "}
          {teamWork.name}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Email :</span>{" "}
          {teamWork.email}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Username :</span>{" "}
          {teamWork.username}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Password :</span>{" "}
          {teamWork.password}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Job :</span>{" "}
          {teamWork.job}
        </p>
      </div>

      {/* Desktop view */}
      <p className="hidden sm:block text-sm  text-[#15243F]">{teamWork.name}</p>
      <p className="hidden sm:block text-xs -ml-5 text-[#15243F]">
        {teamWork.email}
      </p>
      <p className="hidden sm:block text-xs ml-14 text-[#15243F]">
        {teamWork.username}
      </p>
      <p className="hidden sm:block text-sm ml-28 text-[#15243F]">
        {teamWork.password}
      </p>
      <p className="hidden sm:block text-sm relative left-24 text-[#15243F]">
        {teamWork.job}
      </p>

      <div className="flex gap-4 justify-center sm:justify-end mt-3 sm:mt-0">
        <button className="primaryColorText hover:text-blue-700 text-lg cursor-pointer">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="primaryColorText hover:text-red-700 text-lg cursor-pointer"
          onClick={deleteTeamWork}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </motion.div>
  );
};
