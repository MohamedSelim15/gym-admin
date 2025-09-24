import React, { useState, useEffect } from "react";
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

const Customer = () => {
  const [customers, setCustomers] = useState([
    {
      name: "Ahmed Samy",
      phone: "01012345678",
      age: 24,
      weight: "75kg",
      subscriptionType: "Monthly",
      expiryDate: "2025-10-10",
    },
    {
      name: "Mohamed Selim",
      phone: "01012345678",
      age: 22,
      weight: "10kg",
      subscriptionType: "Century",
      expiryDate: "2225-10-10",
    },

    {
      name: "Omar Khaled",
      phone: "01098765432",
      age: 29,
      weight: "82kg",
      subscriptionType: "Quarterly",
      expiryDate: "2025-12-01",
    },
    {
      name: "Sara Ali",
      phone: "01122334455",
      age: 22,
      weight: "60kg",
      subscriptionType: "Yearly",
      expiryDate: "2026-09-01",
    },
    {
      name: "Mohamed Adel",
      phone: "01211223344",
      age: 31,
      weight: "90kg",
      subscriptionType: "Monthly",
      expiryDate: "2025-10-05",
    },
    {
      name: "Hana Youssef",
      phone: "01055667788",
      age: 27,
      weight: "68kg",
      subscriptionType: "Half-Yearly",
      expiryDate: "2026-03-15",
    },
    {
      name: "Ahmed Samy",
      phone: "01012345678",
      age: 24,
      weight: "75kg",
      subscriptionType: "Monthly",
      expiryDate: "2025-10-10",
    },
    {
      name: "Omar Khaled",
      phone: "01098765432",
      age: 29,
      weight: "82kg",
      subscriptionType: "Quarterly",
      expiryDate: "2025-12-01",
    },
    {
      name: "Sara Ali",
      phone: "01122334455",
      age: 22,
      weight: "60kg",
      subscriptionType: "Yearly",
      expiryDate: "2026-09-01",
    },
    {
      name: "Mohamed Adel",
      phone: "01211223344",
      age: 31,
      weight: "90kg",
      subscriptionType: "Monthly",
      expiryDate: "2025-10-05",
    },
    {
      name: "Hana Youssef",
      phone: "01055667788",
      age: 27,
      weight: "68kg",
      subscriptionType: "Half-Yearly",
      expiryDate: "2026-03-15",
    },
    {
      name: "Ahmed Samy",
      phone: "01012345678",
      age: 24,
      weight: "75kg",
      subscriptionType: "Monthly",
      expiryDate: "2025-10-10",
    },
    {
      name: "Omar Khaled",
      phone: "01098765432",
      age: 29,
      weight: "82kg",
      subscriptionType: "Quarterly",
      expiryDate: "2025-12-01",
    },
    {
      name: "Sara Ali",
      phone: "01122334455",
      age: 22,
      weight: "60kg",
      subscriptionType: "Yearly",
      expiryDate: "2026-09-01",
    },
    {
      name: "Mohamed Adel",
      phone: "01211223344",
      age: 31,
      weight: "90kg",
      subscriptionType: "Monthly",
      expiryDate: "2025-10-05",
    },
    {
      name: "Hana Youssef",
      phone: "01055667788",
      age: 27,
      weight: "68kg",
      subscriptionType: "Half-Yearly",
      expiryDate: "2026-03-15",
    },
  ]);

  const navigate = useNavigate();

  function deleteCustomer(index) {
    const newCustomers = [...customers];
    newCustomers.splice(index, 1);
    setCustomers(newCustomers);
  }


  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="w-full min-h-screen flex flex-col py-[10px] md:py-[30px] px-[15px] xl:items-stretch items-center  md:px-[40px] relative"
    >
      <Header
        pageName="Customers"
        pageLogo="fa-solid fa-dumbbell rotate-135"
        buttonText="Add Customer"
        onButtonClick={() => navigate("/customer/add")}
      />

      <div className="flex w-[80%] sm:w-full items-center justify-center flex-col border-[1px] border-[#CFD9E9] rounded-[16px] min-h-screen">
        <div className="sm:grid hidden grid-cols-7 w-full py-[4px] sm:py-[16px]  sm:px-[35px] items-center relative top-2 ">
          <p className="text-[12px] text-[#15243F] font-semibold">Name</p>
          <p className="text-[12px] text-[#15243F] font-semibold">Phone</p>
          <p className="text-[12px] text-[#15243F] font-semibold">Age</p>
          <p className="text-[12px] text-[#15243F] font-semibold">Weight</p>
          <p className="text-[12px] text-[#15243F] font-semibold">
            Subscription Type
          </p>
          <p className="text-[12px] text-[#15243F] font-semibold">expiryDate</p>
          <p></p>
        </div>

        <motion.div
          className="flex flex-col w-full items-center justify-center  py-[3px]  sm:py-[15px]"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {customers.map((customer, index) => (
            <CustomerCard
              key={index}
              customer={customer}
              deleteCustomer={() => deleteCustomer(index)}
            />
          ))}
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Customer;

const CustomerCard = ({ customer, deleteCustomer }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="
    grid grid-cols-1 sm:grid-cols-7
    w-[95%] sm:w-full  
    mx-auto             
    border-t sm:border-t border-[#CFD9E9]
    py-[4px] sm:py-[16px] px-[6px] sm:px-[35px] items-center
    hover:bg-[#F9FAFB] transition-colors
    sm:rounded-none sm:shadow-none
    rounded-lg shadow-sm bg-white mb-2 sm:mb-0
  "
    >
      {/* Mobile view */}
      <div className="flex flex-col sm:hidden mt-2 space-y-1 text-sm text-[##213448] items-center">
        <p>
          <span className="text-[12px] font-[400px] text-[##213448]">Name</span>{" "}
          {customer.name}
        </p>
        <p>
          <span className="text-[12px] font-[400px] text-[##213448]">
            Phone
          </span>{" "}
          {customer.Phone}
        </p>
        <p>
          <span className="text-[12px] font-[400px] text-[##213448]">Age</span>{" "}
          {customer.age}
        </p>
        <p>
          <span className="text-[12px] font-[400px] text-[##213448]">
            Weight
          </span>{" "}
          {customer.Weight}
        </p>
        <p>
          <span className="text-[12px] font-[400px] text-[##213448]">
            Subscription type
          </span>{" "}
          {customer.subscriptionType}
        </p>
        <p>
          <span className="text-[12px] font-[400px] text-[##213448]">
            Expiry date
          </span>{" "}
          {customer.expiryDate}
        </p>
      </div>

      {/* Desktop view */}
      <p className="hidden sm:block text-[12px] font-[400px] text-[##213448]">
        {customer.name}
      </p>
      <p className=" font-[400px] hidden sm:block text-[12px] text-[##213448]">
        {customer.phone}
      </p>
      <p className="hidden font-[400px] sm:block text-[12px] text-[##213448]">
        {customer.age}
      </p>
      <p className="hidden font-[400px] sm:block text-[12px] text-[##213448]">
        {customer.weight}
      </p>
      <p className="hidden sm:block font-[400px] text-[12px] text-[##213448]">
        {customer.subscriptionType}
      </p>
      <p className="hidden sm:block font-[400px] text-[12px] text-[##213448]">
        {customer.expiryDate}
      </p>

      <div className="flex gap-2 sm:gap-4 justify-center sm:justify-end mt-2 sm:mt-0">
        <button className="primaryColorText hover:text-blue-700 text-lg cursor-pointer">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="primaryColorText hover:text-red-700 text-lg cursor-pointer"
          onClick={deleteCustomer}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </motion.div>
  );
};
