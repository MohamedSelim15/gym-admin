import { SiGmail, SiApple, SiFacebook } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { CiUser, CiLock, CiUnlock } from "react-icons/ci";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [lock, setLock] = useState(true);
  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSocialAuth = (provider: string) => {
    const toastId = toast.loading(`Connecting to ${provider}...`);
    setTimeout(() => {
      toast.success(`Successfully connected with ${provider}!`, { id: toastId });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#94B4C1] to-[#213448]">
      <div
        style={{
          backgroundImage:
            "url('/c0509ace3df737ca89e31903e8c8cf111e42a91c.png')",
          backgroundSize: "cover",
        }}
        className="w-3/4 h-10/11 bg-white rounded-4xl shadow-lg flex"
      >
        <AnimatePresence>
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center h-[100%] xl:w-1/2 lg:w-1/2 md:w-1/2 w-full rounded-4xl p-5 bg-white"
          >
            <h1 className="text-4xl font-bold text-[#213448] mt-10">Sign in</h1>

            <div className="flex gap-4 xl:gap-6 mt-6">
              <div onClick={() => handleSocialAuth('Gmail')} className="flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 border-2 border-[#213448] rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                <SiGmail className="text-[#D14836] text-2xl xl:text-3xl" />
              </div>
              <div onClick={() => handleSocialAuth('Microsoft')} className="flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 border-2 border-[#213448] rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                <BsMicrosoft className="text-[#666666] text-xl xl:text-3xl" />
              </div>
              <div onClick={() => handleSocialAuth('Apple')} className="flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 border-2 border-[#213448] rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                <SiApple className="text-black text-2xl xl:text-4xl" />
              </div>
              <div onClick={() => handleSocialAuth('Facebook')} className="flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 border-2 border-[#213448] rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                <SiFacebook className="text-[#1877F2] text-2xl xl:text-3xl" />
              </div>
            </div>

            <p className="text-[#547792] text-base mt-4">
              or use your email account
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-4 w-2/3"
            >
              <div className="relative">
                <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#213448] text-xl" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused({ ...focused, email: true })}
                  onBlur={() => setFocused({ ...focused, email: false })}
                  placeholder={focused.email ? "" : "Email"}
                  className="pl-12 pr-4 py-3 w-full border-none bg-[#F2EFE7] text-[#213448] placeholder:text-[#213448]"
                  // required
                />
              </div>

              <div className="relative">
                <div onClick={() => setLock(!lock)}>
                  {lock ? (
                    <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#213448] text-xl cursor-pointer" />
                  ) : (
                    <CiUnlock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#213448] text-xl cursor-pointer" />
                  )}
                </div>
                <input
                  type={lock ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused({ ...focused, password: true })}
                  onBlur={() => setFocused({ ...focused, password: false })}
                  placeholder={focused.password ? "" : "Password"}
                  className="pl-12 pr-4 py-3 w-full border-none text-[#213448] bg-[#F2EFE7] placeholder:text-[#213448]"
                  // required
                />
              </div>

              <p className="text-[#547792] text-base mt-2 text-center cursor-pointer">
                Forgot your password?
              </p>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#213448] text-white px-6 py-2 rounded-full mt-10 text-xl cursor-pointer disabled:opacity-50"
                >
                  SIGN IN
                </button>
              </div>
            </form>

            <div className="flex md:hidden justify-center">
              <Link
                to="/signup"
                className="text-[#213448] px-6 py-2 mt-10 text-xl cursor-pointer"
              >
                SIGN UP
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="xl:flex lg:flex md:flex hidden xl:w-1/2 lg:w-1/2 md:w-1/2 flex-col items-center justify-center text-white p-10 text-center mb-6">
          <h1 className="text-5xl font-bold mb-5">Hello, Friend!</h1>
          <p className="mb-15 w-60">
            Enter your personal details and start your journey with us
          </p>
          <Link
            to="/signup"
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full text-xl cursor-pointer"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
