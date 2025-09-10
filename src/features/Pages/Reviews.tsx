import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Input from "../components/Input";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Listbox } from "@headlessui/react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Mohamed Selim",
      rate: 1,
      review: "Amazing gym! Trainers are super helpful.",
      date: "22/4/2024",
    },
    {
      name: "Mohamed Selim",
      rate: 2,
      review: "Amazing gym! Trainers are super helpful.",
      date: "22/4/2024",
    },
    {
      name: "Mohamed Selim",
      rate: 3,
      review: "Amazing gym! Trainers are super helpful.",
      date: "22/4/2024",
    },
    {
      name: "Mohamed Selim",
      rate: 4,
      review: "Amazing gym! Trainers are super helpful.",
      date: "22/4/2024",
    },

  
  ]);

  const [filter, setFilter] = useState("");

  const filterReviews = reviews.filter((review) => {
    if (!filter) return true;
    if (filter === "Positive") return review.rate >= 4;
    if (filter === "Negative") return review.rate <= 2;
    if (filter === "Neutral") return review.rate === 3;
    if (filter === "All") return true ;
    // return true;
  });


  function deleteReview(index) {
    const newReviews = reviews.filter((_, i) => i !== index);
    setReviews(newReviews);
  }

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col  py-[30px] px-[40px]  "
    >
      <Header
        pageName="Reviews"
        pageLogo="fa-solid fa-comment relative top-0.5  "
      />

      <div className="flex sm:flex-row  flex-wrap sm:justify-start justify-center gap-4 mb-6 cursor-pointer">
        {/* <Input
          label={"Filter by ratting : "}
          type={"select"}
          options={["Positive", "Negative", "Neutral"]}
          onChange={handleFilterChange}
          value={filter}
          flex={"row"}
        /> */}

        <h2 className="inputLabel relative top-2">Filter by Ratting : </h2>
        <InputSelect filter={filter} setFilter={setFilter} />
      </div>

      <div className="flex w-full flex-col border-[1px] border-[#CFD9E9] rounded-[16px] min-h-screen">
        <div className="sm:flex w-full hidden">
          <div className="grid grid-cols-5 gap-64 w-full px-[35px] py-[15px] items-center relative top-2 ">
            <p className="text-[12px] text-[#15243F] font-semibold">Name</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Rate</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Reviews</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Date</p>
          </div>
        </div>

        <motion.div
          className="flex flex-col w-full sm:py-[15px]"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {filterReviews.map((review, index) => (
            <ReviewsCard
              key={index}
              review={review}
              deleteReview={() => deleteReview(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;

const ReviewsCard = ({ review, deleteReview }) => {

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
          {review.name}
        </p>
        <p>
          <span className="font-bold primaryColorText">Rate:</span>{" "}
           {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`fa-star ${
              star <= review.rate ? "fa-solid" : "fa-regular"
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
          {review.date}
        </p>
      </div>

      {/* Desktop view */}
      <p className="hidden sm:block text-sm text-[#15243F]">{review.name}</p>
      <p className="hidden sm:block text-sm text-[#15243F] ml-5">

        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            // onClick={() => handleStarClick(star)}
            className={`fa-star ${
              star <= review.rate ? "fa-solid" : "fa-regular"
            } cursor-pointer text-yellow-500 mr-1`}
          ></i>
        ))}
      </p>
      <p className="hidden sm:block text-xs text-[#15243F] relative left-10">
        {review.review}
      </p>
      <p className="hidden sm:block text-xs text-[#15243F] ml-36">
        {review.date}
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

const InputSelect = ({filter , setFilter}) => {

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <div
      onClick={toggleOpen}
      className="flex flex-col transition-all duration-300 ease-in-out"
    >
      <Listbox value={filter} onChange={setFilter}>
        <div className="relative mt-1 w-60">
          <Listbox.Button
            className={`relative w-[100px] sm:w-[140px] xl:left-0 left-15 cursor-pointer rounded-lg border border-gray-300 bg-white py-2 pl-5  text-left shadow-md focus:outline-none ${
              !filter ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {filter || "All"}
            {open ? (
              <ChevronUp className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
            )}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {["All","Positive", "Negative", "Neutral"].map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none py-2 pl-4 pr-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
