import  { useState } from "react";
import { K } from "../../constant";
import { motion } from "framer-motion";
import Header from "../components/Header";
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

  const navigate = useNavigate();

  function deleteExercise(index :number) {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  }



  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full min-h-screen flex flex-col py-[10px] md:py-[30px] px-[15px] md:px-[40px] relative xl:items-stretch items-center"
    >
      <Header
        pageName="Exercises"
        pageLogo="fa-solid fa-dumbbell rotate-135 "
        buttonText="Add Exercise"
        onButtonClick={() => navigate("/exercise/add")}
      />

      <div className="flex w-[80%] sm:w-full items-center justify-center flex-col border-[1px] border-[#CFD9E9] rounded-[16px] min-h-screen">
        <div className="sm:grid hidden grid-cols-6 w-full py-[4px] sm:py-[16px]  sm:px-[35px] items-center relative top-2 ">
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

        <motion.div
          className="flex flex-col w-full items-center justify-center  py-[3px]  sm:py-[15px]"
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
        w-[95%] sm:w-full mx-auto
        border-t sm:border-t border-[#CFD9E9]
        py-[4px] sm:py-[16px] px-[6px] sm:px-[35px] items-center
        hover:bg-[#F9FAFB] transition-colors
        sm:rounded-none sm:shadow-none
        rounded-lg shadow-sm bg-white mb-2 sm:mb-0\
      "
    >
      <div className="flex justify-center sm:justify-start">
        <img
          src={exercise.img}
          alt={exercise.name}
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] border border-[#E5E7EB] rounded-lg sm:rounded-xl object-cover"
        />
      </div>

      {/* Mobile view */}
      <div className="flex flex-col sm:hidden mt-2 space-y-1 text-sm text-[#15243F] items-center">
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

      <div className="flex gap-2 sm:gap-4 justify-center sm:justify-end mt-2 sm:mt-0">
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
