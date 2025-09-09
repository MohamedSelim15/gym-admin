import React, { useState } from "react";
import { K } from "../../../constant";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

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

const Exercises = () => {
  const [exercises, setExercises] = useState([
    {
      img: K.LOGO,
      name: "Push Up",
      category: "Strength",
      targetMuscles: "Chest",
      difficultyLevel: "Easy",
    },
    {
      img: K.LOGO,
      name: "Squat",
      category: "Strength",
      targetMuscles: "Legs",
      difficultyLevel: "Medium",
    },
    {
      img: K.LOGO,
      name: "Plank",
      category: "Core",
      targetMuscles: "Abs",
      difficultyLevel: "Hard",
    },
  ]);

  function deleteExercise(index) {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  }

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full h-full flex flex-col py-[30px] px-[40px]"
    >
      <Header
        pageName="Exercises"
        pageLogo="fa-solid fa-dumbbell rotate-135"
        buttonText="Add Exercise"
        onButtonClick={() => navigate("/exercise/add")}
      />

      <div className="flex w-full flex-col border-[1px] border-[#CFD9E9] rounded-[16px] min-h-screen">
        <div className="sm:flex w-full hidden">
          <div className="grid grid-cols-6 w-full px-[35px] py-[15px] items-center relative top-2 ">
            <p className="text-[12px] text-[#15243F] font-semibold">Video</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Name</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Category</p>
            <p className="text-[12px] text-[#15243F] font-semibold">
              Target Muscles
            </p>
            <p className="text-[12px] text-[#15243F] font-semibold">
              Difficulty Level
            </p>
            <p></p>
          </div>
        </div>

        <motion.div
          className="flex flex-col w-full sm:py-[15px]"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
              deleteExercise={() => deleteExercise(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Exercises;

const ExerciseCard = ({ exercise, deleteExercise }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
        grid grid-cols-1 sm:grid-cols-6
        w-full border-t sm:border-t border-[#CFD9E9]
        py-4 px-5 sm:px-[35px] items-center
        hover:bg-[#F9FAFB] transition-colors
        sm:rounded-none sm:shadow-none
        rounded-xl shadow-sm bg-white mb-4 sm:mb-0
      "
    >
      <div className="flex justify-center sm:justify-start">
        <img
          src={exercise.img}
          alt={exercise.name}
          className="w-[60px] h-[60px] border border-[#E5E7EB] rounded-xl object-cover"
        />
      </div>

      {/* Mobile view */}
      <div className="sm:hidden text-center mt-3 space-y-2 text-sm text-[#15243F]">
        <p>
          <span className="font-semibold text-gray-600">Name:</span>{" "}
          {exercise.name}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Category:</span>{" "}
          {exercise.category}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Target:</span>{" "}
          {exercise.targetMuscles}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Level:</span>{" "}
          {exercise.difficultyLevel}
        </p>
      </div>

      {/* Desktop view */}
      <p className="hidden sm:block text-sm text-[#15243F]">{exercise.name}</p>
      <p className="hidden sm:block text-sm text-[#15243F]">
        {exercise.category}
      </p>
      <p className="hidden sm:block text-sm text-[#15243F]">
        {exercise.targetMuscles}
      </p>
      <p className="hidden sm:block text-sm text-[#15243F]">
        {exercise.difficultyLevel}
      </p>

      <div className="flex gap-4 justify-center sm:justify-end mt-3 sm:mt-0">
        <button className="primaryColorText hover:text-blue-700 text-lg cursor-pointer">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="primaryColorText hover:text-red-700 text-lg cursor-pointer"
          onClick={deleteExercise}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </motion.div>
  );
};
