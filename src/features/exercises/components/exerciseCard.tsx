import type { Exercise } from "../types/exercise";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export const ExerciseCard = ({
  exercise,
  deleteExercise,
}: {
  exercise: Exercise;
  deleteExercise: () => void;
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
