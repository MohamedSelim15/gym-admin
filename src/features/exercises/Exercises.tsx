import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ExerciseCard } from "./components/exerciseCard";
import type { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercisesFun } from "./slices/exercisesSlice";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Exercises = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { exercises, isLoading, error } = useSelector(
    (state: RootState) => state.fetchExercises
  );
  useEffect(() => {
    dispatch(fetchExercisesFun({ _: null }));
  }, [dispatch]);
  function deleteExercise(index: number) {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    // newExercises(newExercises); // This should be managed by Redux in the future
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
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!isLoading &&
            !error &&
            exercises.map((exercise, index) => (
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
