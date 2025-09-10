import { motion } from "framer-motion";
import type { Review } from "../types";

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const ReviewsCard = ({
  review,
  deleteReview,
}: {
  review: Review;
  deleteReview: () => void;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
        grid grid-cols-1 sm:grid-cols-5
        w-full border-t sm:border-t border-[#CFD9E9]
        py-4 px-5 sm:px-[35px] items-center
        hover:bg-[#F9FAFB] transition-colors
        sm:rounded-none sm:shadow-none
        rounded-xl shadow-sm bg-white mb-4 sm:mb-0 
      "
    >
      {/* Mobile view */}
      <div className="sm:hidden  mt-3 space-y-2 text-sm text-[#15243F]">
        <p>
          <span className="font-bold primaryColorText">Name:</span>{" "}
          {review.userName}
        </p>
        <p>
          <span className="font-bold primaryColorText">Rate:</span>{" "}
          {[1, 2, 3, 4, 5].map((star, i) => (
            <i
              key={i}
              className={`fa-star ${
                star <= review.rating ? "fa-solid" : "fa-regular"
              } cursor-pointer text-yellow-500 mr-1`}
            ></i>
          ))}
        </p>
        <p>
          <span className="font-bold primaryColorText">Review:</span>{" "}
          {review.review}
        </p>
        <p>
          <span className="font-bold primaryColorText">Date:</span>{" "}
          {review.date.toLocaleDateString()}
        </p>
      </div>

      {/* Desktop view */}
      <p className="hidden sm:block text-sm text-[#15243F]">
        {review.userName}
      </p>
      <p className="hidden sm:block text-sm text-[#15243F] ml-5">
        {[1, 2, 3, 4, 5].map((star, i) => (
          <i
            key={i}
            // onClick={() => handleStarClick(star)} // This is commented out, so it's not an issue
            className={`fa-star ${
              star <= review.rating ? "fa-solid" : "fa-regular"
            } cursor-pointer text-yellow-500 mr-1`}
          ></i>
        ))}
      </p>
      <p className="hidden sm:block text-xs text-[#15243F] relative left-10">
        {review.review}
      </p>
      <p className="hidden sm:block text-sm text-[#15243F] ml-36">
        {review.date.toLocaleDateString()}
      </p>

      <div className="flex gap-4 justify-center sm:justify-end mt-3 sm:mt-0">
        <button
          className="primaryColorText hover:text-red-700 text-lg cursor-pointer"
          onClick={deleteReview}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </motion.div>
  );
};
