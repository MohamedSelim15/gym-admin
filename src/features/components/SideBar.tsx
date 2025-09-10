import { Link, useLocation } from "react-router-dom";
import { K } from "../../constant";
import { motion } from "framer-motion";

const SideBar = () => {
  const links = [
    {
      to: "/",
      icon: "fa-solid fa-chart-simple",
      label: "Dashboard",
      active: true,
    },
    {
      to: "/exercise",
      icon: "fa-solid fa-dumbbell rotate-135",
      label: "Exercises",
    },
    { to: "/customer", icon: "fa-solid fa-users", label: "Customer" },
    { to: "/teamwork", icon: "fa-solid fa-people-group", label: "Team Work" },
    { to: "/marketing", icon: "fa-solid fa-shop", label: "Marketing" },
    { to: "/notification", icon: "fa-regular fa-bell", label: "Notification" },
    { to: "/reviews", icon: "fa-solid fa-comment", label: "Reviews" },
    { to: "/settings", icon: "fa-solid fa-gear fa-fw", label: "Settings" },
  ];

  const list = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <aside className=" primaryColor  fixed xl:w-62 w-20 shadow-md p-5 min-h-screen">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="flex  xl:flex-row flex-col justify-center items-center mb-10"
      >
        <img width={70} height={70} src={K.LOGO} alt="" />
        <h3 className="text-center  ml-2 top-7 text-white font-bold text-sm xl:text-lg relative mb-12">
          POPEYE’S GYM{" "}
        </h3>
      </motion.div>
      <motion.ul
        variants={list}
        initial="hidden"
        animate="visible"
        className="space-y-2"
        transition={{ delayChildren: 0.6, staggerChildren: 0.3 }}
      >
        {links.map((link, index) => {
          const isActive = currentPath === link.to;
          return (
            <motion.li key={index} variants={item}>
              <Link
                to={link.to}
                className={`flex items-center p-2.5 text-sm rounded-md font-medium ${
                  isActive
                    ? "bg-gray-100 primaryColorText shadow-sm"
                    : "text-white hover:text-[#213448] hover:bg-gray-100 hover:shadow-sm transition"
                }`}
              >
                <i className={`${link.icon} mr-2 mt-[1px] text-center`}></i>
                <span className="hidden xl:inline">{link.label}</span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </aside>
  );
};

export default SideBar;
