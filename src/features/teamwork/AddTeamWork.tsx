import { useState } from "react";
import Input from "../components/Input";
import { Lock, Unlock } from "lucide-react";

export default function AddTeamWork() {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    job: "",
  });

  function handleChange(field: string, value: string) {
    setMemberData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const [type, setType] = useState<"text" | "password">("password");



  return (
    <div className="w-full h-[130vh] flex flex-col py-[20px] px-[40px] gap-[50px]">
      <h1 className="text-[26px] ml-10 font-[600] primaryColorText">
        Add New Member
      </h1>
      <div className="flex flex-col w-full px-[40px] gap-[30px] ">
        <Input
          label="Name"
          type="text"
          placeholder="Enter member name"
          onChange={(e) =>
            handleChange("name", e.target.value)
          }
          value={memberData.name}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter member email"
          onChange={(e) =>
            handleChange("email", e.target.value)
          }
          value={memberData.email}
        />

        <Input
          label="Username"
          type="text"
          placeholder="Enter member username"
          onChange={(e) =>
            handleChange("username", e.target.value)
          }
          value={memberData.username}
        />

        <div className="relative">
          <Input
          label="Password"
          type={type}
          placeholder="Enter member password"
          onChange={(e) =>
            handleChange("password", e.target.value)
          }
          value={memberData.password}
        />

           <button
            type="button"
            onClick={() =>
              setType((prev) => (prev === "password" ? "text" : "password"))
            }
            className="absolute xl:right-5 right-3 xl:top-13 top-[55px]  text-gray-600 cursor-pointer"
          >
            {type === "password" ? (
              <Lock className="w-5 h-5" />
            ) : (
              <Unlock className="w-5 h-5" />
            )}
          </button>
          
        </div>

        <Input
          label="Job"
          type="select"
          options={["Coach", "Moderator", "User"]}
          onChange={(val: string) => handleChange("job", val)}
          value={memberData.job}
        />
      </div>
    </div>
  );
}
