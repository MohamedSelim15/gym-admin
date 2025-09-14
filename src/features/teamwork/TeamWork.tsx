import { motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { TeamWorkCard } from "./components/TeamWorkCard.jsx";
import { useState } from "react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TeamWork = () => {


  const [teamWork,setTeamWork] = useState([
    {
      name: "Mohamed Selim",
      email: "mohamed.selim@example.com",
      username: "MohamedSelim15",
      password: "123456",
      job: "Software Engineer",
    },
    {
      name: "Mohamed Selim",
      email: "mohamed.selim@example.com",
      username: "MohamedSelim15",
      password: "123456",
      job: "Software Engineer",
    },
    {
      name: "Mohamed Selim",
      email: "mohamed.selim@example.com",
      username: "MohamedSelim15",
      password: "123456",
      job: "Software Engineer",
    },
    {
      name: "Mohamed Selim",
      email: "mohamed.selim@example.com",
      username: "MohamedSelim15",
      password: "123456",
      job: "Software Engineer",
    },])


  function deleteTeamWork(index: number) {
    const newTeamWork = teamWork.filter((_, i) => i !== index);
    setTeamWork(newTeamWork);
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
        pageName="Team Work"
        pageLogo="fa-solid fa-people-group"
        buttonText="Add Team Member"
        onButtonClick={() => navigate("/teamwork/add")}
        width="w-[160px]"
      />

      <div className="flex w-full flex-col border-[1px] border-[#CFD9E9] rounded-[16px] min-h-screen">
        <div className="sm:flex w-full hidden">
          <div className="grid grid-cols-5 w-full px-[35px] py-[15px] items-center relative top-2 ">
            <p className="text-[12px] text-[#15243F] font-semibold">Name</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Email</p>
            <p className="text-[12px] text-[#15243F] font-semibold">Username</p>
            <p className="text-[12px] text-[#15243F] font-semibold">
              Password
            </p>
            <p className="text-[12px] text-[#15243F] font-semibold">
              Job
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
          {teamWork.map((teamWorkItem, index) => (
              <TeamWorkCard
                key={index}
                teamWork={teamWorkItem}
                deleteTeamWork={() => deleteTeamWork(index)}
              />
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamWork;
