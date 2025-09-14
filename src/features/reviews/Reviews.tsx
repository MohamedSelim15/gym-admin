import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { ReviewsCard } from "./components/reviewCard";
import { InputSelect } from "./components/inputSelect";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: "1",
      userName: "Mohamed Selim",
      rating: 1,
      review: "Amazing gym! Trainers are super helpful.",
      date: new Date("2024-04-22"),
    },
    {
      id: "2",
      userName: "Mohamed Selim",
      rating: 2,
      review: "Amazing gym! Trainers are super helpful.",
      date: new Date("2024-04-22"),
    },
    {
      id: "3",
      userName: "Mohamed Selim",
      rating: 3,
      review: "Amazing gym! Trainers are super helpful.",
      date: new Date("2024-04-22"),
    },
    {
      id: "4",
      userName: "Mohamed Selim",
      rating: 4,
      review: "Amazing gym! Trainers are super helpful.",
      date: new Date("2024-04-22"),
    },
  ]);

  const [filter, setFilter] = useState("");

  const filterReviews = reviews.filter((review) => {
    if (!filter) return true;
    if (filter === "Positive") return review.rating >= 4;
    if (filter === "Negative") return review.rating <= 2;
    if (filter === "Neutral") return review.rating === 3;
    if (filter === "All") return true;
    // return true;
  });

  function deleteReview(index: number) {
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
        width="w-[0px]"
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
            <ReviewsCard // The 'id' property is missing in the object literal for 'review'
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
