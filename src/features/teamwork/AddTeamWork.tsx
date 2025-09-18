import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Lock, Unlock } from "lucide-react";
import { toast } from "react-hot-toast";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AddTeamWork() {
    const navigate =  useNavigate();
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    job: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [type, setType] = useState<"text" | "password">("password");
  const [loading, setLoading] = useState(false);

  function handleChange(field: string, value: string) {
    setMemberData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!memberData.name) newErrors.name = "Name is required";
    if (!memberData.email) newErrors.email = "Email is required";
    if (!memberData.username) newErrors.username = "Username is required";
    if (!memberData.password) newErrors.password = "Password is required";
    else if (memberData.password.length<8)newErrors.password = "Password must be at least 8 characters";
    if (!memberData.job) newErrors.job = "Job is required";
    return newErrors;
  }

  async function handleSave() {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      toast.success("Member saved successfully", {
        icon: <FaCheckCircle size={20} color="white" />,
        style: {
          background: "#16a34a",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px",
        },
      });
      setMemberData({
        name: "",
        email: "",
        username: "",
        password: "",
        job: "",
      });

      navigate("/teamwork")
    } catch (error:any) {
      toast.error("Something went wrong ", {
        icon: <FaExclamationCircle size={20} color="white" />,
        style: {
          background: "#fee2e2",
          color: "#b91c1c",
          borderRadius: "8px",
          padding: "12px",
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-[130vh] flex flex-col py-6 px-10 gap-12">
      <h1 className="text-2xl ml-10 font-semibold primaryColorText">
        Add New Member
      </h1>
      <div className="flex flex-col w-full px-10 gap-8">
        <div>
          <Input
            label="Name"
            type="text"
            placeholder="Enter member name"
            onChange={(e) => handleChange("name", e.target.value)}
            value={memberData.name}
            labelClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
            inputClassName={`border ${
            errors.name ? "border-red-500" : "border-[#94B4C1]"
          }  transition-all duration-300 ease-in-out
            outline-none
            border border-[#94B4C1] rounded-[10px]
            py-[17px] px-[23px]
            text-[18px] font-medium
            hover:scale-102
            focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <Input
            label="Email"
            type="email"
            placeholder="Enter member email"
            onChange={(e) => handleChange("email", e.target.value)}
            value={memberData.email}
            labelClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
             inputClassName={`border ${
            errors.email ? "border-red-500" : "border-[#94B4C1]"
          }  transition-all duration-300 ease-in-out
            outline-none
            border border-[#94B4C1] rounded-[10px]
            py-[17px] px-[23px]
            text-[18px] font-medium
            hover:scale-102
            focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            label="Username"
            type="text"
            placeholder="Enter member username"
            onChange={(e) => handleChange("username", e.target.value)}
            value={memberData.username}
            labelClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
            inputClassName={`border ${
            errors.username ? "border-red-500" : "border-[#94B4C1]"
          } transition-all duration-300 ease-in-out
            outline-none
            border border-[#94B4C1] rounded-[10px]
            py-[17px] px-[23px]
            text-[18px] font-medium
            hover:scale-102
            focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]`}

          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        <div className="relative">
          <Input
            label="Password"
            type={type}
            placeholder="Enter member password"
            onChange={(e) => handleChange("password", e.target.value)}
            value={memberData.password}
            labelClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
             inputClassName={`border ${
            errors.password ? "border-red-500" : "border-[#94B4C1]"
          } 
            transition-all duration-300 ease-in-out
            outline-none
            border border-[#94B4C1] rounded-[10px]
            py-[17px] px-[23px]
            text-[18px] font-medium
            hover:scale-102
            focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
          `}
          />
          <button
            type="button"
            onClick={() =>
              setType((prev) => (prev === "password" ? "text" : "password"))
            }
            className="absolute right-3 top-[55px] text-gray-600 cursor-pointer"
          >
            {type === "password" ? (
              <Lock className="w-5 h-5 md:mt-0 -mt-2" />
            ) : (
              <Unlock className="w-5 h-5 md:mt-0 -mt-2" />
            )}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div>
          <Input
            label="Job"
            type="select"
            options={["Coach", "Moderator", "User"]}
            onChange={(val: string) => handleChange("job", val)}
            placeholder="Select member job"
            value={memberData.job}
            labelClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
            listClassName={`border ${
            errors.job ? "border-red-500" : "border-[#94B4C1]"
          } w-full flex justify-between items-center rounded-[10px]
          py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium
          `}

          />
          {errors.job && <p className="text-red-500 text-sm">{errors.job}</p>}
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="py-2 px-6 md:text-lg text-sm rounded-2xl hover:bg-[#1f2a38] transition duration-200 ease-in-out"
            type="primary"
          >
            {loading ? "Saving..." : "Save Member"}
          </Button>
        </div>
      </div>
    </div>
  );
}
