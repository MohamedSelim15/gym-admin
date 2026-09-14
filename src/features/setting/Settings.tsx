import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import ImageUpload from "../components/ImageUpload";
import uploadImg from "../../assets/SVG/upload-solid-full.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { RiDeleteBin5Line } from "react-icons/ri";

const Settings = () => {
  return (
    <div className="flex flex-col  w-full min-h-screen p-[20px] gap-[20px] md:p-[40px] md:gap-[40px]">
      <div className="flex items-center gap-2 w-fit">
        <FiSettings className="text-[20px] md:text-[26px]  primaryColorText" />
        <p className="text-[16px] md:text-[26px] font-semibold primaryColorText">
          Settings
        </p>
      </div>
      <BasicInfo />
      <SocialLinks />
      <SubscriptionPlans />
      <PaymentMethods />
      <Location />
      <GymPolicies />
      <SystemSettings />
    </div>
  );
};

const SectionBreaker = ({ title }) => {
  return (
    <div className="w-full border-b-[1px] border-[#547792]  pb-[10px]">
      <p className="text-[14px] md:text-[18px] font-[600px] text-gray-600">
        {title}
      </p>
    </div>
  );
};

const BasicInfo = () => {
  const [image, setImage] = useState(null);
  const [basicInfoData, setBasicInfoData] = useState({
    name: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({ name: null, phoneNumber: null });
  function handleChange(field: string, value: string) {
    setBasicInfoData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit() {
    let newErrors: typeof errors = {};

    if (!basicInfoData.name.trim())
      newErrors.name = "Customer name is required";
    if (!basicInfoData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(basicInfoData);
  }

  return (
    <div className="flex flex-col gap-[30px]">
      <SectionBreaker title="Basic Information" />
      <div className="flex px-[20px] w-full md:gap-[40px] items-center">
        <ImageUpload
          setImage={setImage}
          className="flex items-center  justify-center w-[30%] h-[150px] rounded-full  hover:scale-102 cursor-pointer   hover:shadow-[0_0_5px_rgba(33,52,72,0.5)] transition-all duration-300 ease-in-out"
          uploadImg={uploadImg}
          iconClassName="md:h-[50px] md:w-[50px] w-5 h-5"
        />
        <div className="flex flex-col md:gap-[25px] py-[10px] w-full">
          <Input
            type="text"
            placeholder="Enter customer name"
            onChange={(e) => handleChange("name", e.target.value)}
            value={basicInfoData.name}
            inputClassName={`border ${
              errors.name ? "border-red-500" : "border-[#94B4C1]"
            } rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}

          <Input
            type="text"
            placeholder="Enter phone number"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              handleChange("phoneNumber", onlyNums);
            }}
            value={basicInfoData.phoneNumber}
            inputClassName={`border ${
              errors.phoneNumber ? "border-red-500" : "border-[#94B4C1]"
            } rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </div>
        <Button
          onClick={handleSubmit}
          className="py-[5px] px-[10px] md:text-[18px] text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
          type="primary"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

type LinkItem = {
  name: string;
  value: string;
};

const SocialLinks = () => {
  const [linksData, setLinksData] = useState<LinkItem[]>([
    { name: "facebook", value: "" },
    { name: "twitter", value: "" },
    { name: "instagram", value: "" },
  ]);

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  function handleChange(index: number, value: string) {
    setLinksData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, value } : item))
    );

    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [linksData[index].name]: undefined,
      }));
    }
  }

  function handleSubmit() {
    let newErrors: Record<string, string> = {};

    linksData.forEach((link) => {
      if (!link.value.trim()) {
        newErrors[link.name] = `${
          link.name.charAt(0).toUpperCase() + link.name.slice(1)
        } link is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(linksData);
  }

  function handleAddLink() {
    const newName = `custom${linksData.length + 1}`;
    setLinksData([...linksData, { name: newName, value: "" }]);
  }

  return (
    <div className="flex flex-col gap-[30px]">
      <SectionBreaker title="Basic Information" />

      <div className="flex flex-col items-center gap-[20px] w-full px-[20px]">
        {linksData.map((link, index) => (
          <div key={index} className="flex w-full flex-col gap-1">
            <Input
              type="text"
              placeholder={`Enter your ${link.name} link`}
              onChange={(e) => handleChange(index, e.target.value)}
              value={link.value}
              inputClassName={`border ${
                errors[link.name] ? "border-red-500" : "border-[#94B4C1]"
              } rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
            />
            {errors[link.name] && (
              <span className="text-red-500 text-sm">{errors[link.name]}</span>
            )}
          </div>
        ))}
        <div className="flex gap-3">
          <Button
            onClick={handleAddLink}
            className="py-[5px] px-[15px] text-[14px] rounded-[10px] bg-[#547792] text-white hover:bg-[#1f2a38] transition"
            type="primary"
          >
            + Add New Link
          </Button>
          <Button
            onClick={handleSubmit}
            className="py-[5px] px-[10px] md:text-[18px] text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
            type="primary"
          >
            Save Social Media
          </Button>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPlans = () => {
  const [newPlan, setNewPlan] = useState({
    name: "",
    price: "",
    features: [],
  });
  const [plans, setPlans] = useState([
    {
      name: "Basic",
      price: 0,
      features: ["Free access to all classes", "Unlimited access to the gym"],
    },
  ]);
  function addPlan() {
    setPlans([...plans, newPlan]);
    setNewPlan({ name: "", price: "", features: [] });
  }

  function handleChange(field: string, value: string | number) {
    setNewPlan((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  return (
    <div className="flex flex-col  gap-[40px] w-full">
      <SectionBreaker title={"Subscription Plans"} />
      <div className="flex gap-[30px] flex-col px-[20px] w-full">
        <div className="flex flex-wrap w-full overflow-x-auto gap-[20px] px-[10px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col border rounded-[10px] 
                 items-center justify-between py-[20px] px-[20px] gap-[10px] 
                 border-[#547792] w-[250px] md:w-[300px] bg-white shadow-sm"
            >
              <div className="flex flex-col gap-[10px] w-full text-center">
                <span className="text-[18px] font-bold break-words">
                  {plan.name}
                </span>

                {plan?.features && (
                  <ul className="flex flex-col gap-[8px] text-[14px] md:text-[16px] break-words">
                    {plan?.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                <span className="text-[18px] font-bold">${plan.price}</span>
              </div>

              <div className="flex gap-[10px] items-center justify-center">
                <Button
                  onClick={() => console.log("edit")}
                  className="py-[5px] px-[10px] md:text-[16px] text-[12px] 
                     rounded-[20px] hover:bg-[#1f2a38] transition-transform 
                     duration-200 ease-in-out hover:border-[#1f2a38] 
                     hover:scale-103 text-nowrap"
                  type="primary"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => setPlans(plans.filter((_, i) => i !== index))}
                  className="py-[5px] px-[10px] md:text-[20px] text-[12px] 
                     rounded-[20px] bg-[#F47C57] transition-transform 
                     duration-200 ease-in-out hover:scale-103 text-nowrap"
                  type="primary"
                >
                  <RiDeleteBin5Line />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between items-center ">
        <div className="flex w-[75%] gap-[20px]">
          <Input
            type="text"
            placeholder="New Plan Name"
            onChange={(e) => handleChange("name", e.target.value)}
            value={newPlan.name}
            inputClassName={`border  "border-[#94B4C1] text-wrap 
             rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full `}
          />

          <Input
            type="text"
            placeholder="Price"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              handleChange("price", onlyNums);
            }}
            value={newPlan.price}
            inputClassName={`border "border-[#94B4C1]"
             rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
        </div>
        <Button
          onClick={addPlan}
          className="py-[5px] px-[10px] md:text-[18px] w-[15%] text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
          type="primary"
        >
          Add Plan
        </Button>
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  const [newMethod, setMethod] = useState({
    method: "",
    provider: "",
    accountNumber: "",
  });
  const [methods, setMethods] = useState([
    {
      method: "Master Card",
      provider: "EG-Bank",
      accountNumber: "0000000000000000000000",
    },
  ]);
  function addMethod() {
    setMethods([...methods, newMethod]);
    setMethod({ method: "", provider: "", accountNumber: "" });
  }

  function handleChange(field: string, value: string | number) {
    setMethod((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  return (
    <div className="flex flex-col gap-[40px] w-full">
      <SectionBreaker title={"Payment Methods"} />
      <div className="flex gap-[30px] flex-col px-[20px] w-full">
        <div className="flex w-full flex-wrap overflow-x-auto gap-[20px] px-[10px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {methods.map((plan, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col border rounded-[10px] 
                 items-center justify-between py-[20px] px-[20px] gap-[10px] 
                 border-[#547792] w-[250px] md:w-[300px] bg-white shadow-sm"
            >
              <div className="flex flex-col gap-[10px] w-full text-center">
                <span className="text-[18px] font-bold break-words">
                  {plan.method}
                </span>
                <span className="text-[18px] font-bold">${plan.provider}</span>
                <span className="text-[18px] font-bold">
                  ${plan.accountNumber}
                </span>
              </div>

              <div className="flex gap-[10px] items-center justify-center">
                <Button
                  onClick={() =>
                    setMethods(methods.filter((_, i) => i !== index))
                  }
                  className="py-[5px] px-[10px] md:text-[20px] text-[12px] 
                     rounded-[20px] bg-[#F47C57] transition-transform 
                     duration-200 ease-in-out hover:scale-103 text-nowrap"
                  type="primary"
                >
                  <RiDeleteBin5Line />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between items-center ">
        <div className="flex w-[75%] gap-[20px]">
          <Input
            type="text"
            placeholder="Method (e.g. MasterCard)"
            onChange={(e) => handleChange("method", e.target.value)}
            value={newMethod.method}
            inputClassName={`border  "border-[#94B4C1] text-wrap 
             rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full `}
          />

          <Input
            type="text"
            placeholder="Provider (e.g. Bank ABC)"
            onChange={(e) => {
              handleChange("provider", e.target.value);
            }}
            value={newMethod.provider}
            inputClassName={`border "border-[#94B4C1]"
             rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
          <Input
            type="text"
            placeholder="Account / ID"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              handleChange("accountNumber", onlyNums);
            }}
            value={newMethod.accountNumber}
            inputClassName={`border "border-[#94B4C1]"
             rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
        </div>
        <Button
          onClick={addMethod}
          className="py-[5px] px-[10px] md:text-[18px] w-[15%] text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
          type="primary"
        >
          Add Method
        </Button>
      </div>
    </div>
  );
};

const Location = () => {
  const [location, setLocation] = useState({
    location: "",
    locationLink: "",
  });

  function handleChange(field: string, value: string) {
    setLocation((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  function handleSubmit() {
    console.log(location);
  }
  return (
    <div className="flex flex-col gap-[40px] w-full">
      <SectionBreaker title={"Gym Location"} />
      <div className="flex flex-col gap-[20px] w-full justify-end">
        <div className="flex w-full gap-[20px]">
          <Input
            type="text"
            placeholder={`Enter your location`}
            onChange={(e) => handleChange("location", e.target.value)}
            value={location.location}
            inputClassName={`border   "border-[#94B4C1]"
            } rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
          <Input
            type="text"
            placeholder={`Enter your location link`}
            onChange={(e) => handleChange("locationLink", e.target.value)}
            value={location.locationLink}
            inputClassName={`border "border-[#94B4C1]"
            } rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] md:text-[16px] text-[14px] w-full`}
          />
        </div>
        <div className="flex justify-end w-full">
          <Button
            onClick={handleSubmit}
            className="py-[5px] px-[10px] md:text-[18px] w-fit text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
            type="primary"
          >
            Save Social Media
          </Button>
        </div>
      </div>
    </div>
  );
};
const GymPolicies = () => {
  const [policies, setPolicies] = useState({
    customerPP: "",
    gymPP: "",
  });
  function handleChange(field: string, value: string) {
    setPolicies((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  function handleSubmit() {
    console.log(policies);
  }
  return (
    <div className=" flex flex-col gap-[30px] w-full ">
      <SectionBreaker title={"Privacy and Policies"} />
      <div className="flex flex-col px-[20px] w-full gap-[20px]">
        <Input
          type={"textarea"}
          label={"Customer Privacy Policy"}
          placeholder={"Your privacy is important to us..."}
          onChange={(e) => handleChange("customerPP", e.target.value)}
          value={policies.customerPP}
          inputClassName="border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] whitespace-normal break-words resize-none py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        <Input
          type={"textarea"}
          label={"Gym Policies"}
          placeholder={"......."}
          onChange={(e) => handleChange("gymPP", e.target.value)}
          value={policies.gymPP}
          inputClassName="border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] whitespace-normal break-words resize-none py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
      </div>
      <div className="flex  justify-end w-full">
        <Button
          onClick={handleSubmit}
          className="py-[5px] px-[10px] md:text-[18px] w-fit text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
          type="primary"
        >
          Save Policies
        </Button>
      </div>
    </div>
  );
};

const SystemSettings = () => {
  const [systemSettings, setSystemSettings] = useState({
    lang: "English",
  });
  function handleChange(field: string, value: string) {
    setSystemSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  function handleSubmit() {
    console.log(systemSettings);
  }
  return (
    <div className=" flex flex-col gap-[30px] w-full ">
      <SectionBreaker title={"System Settings"} />
      <div className="flex flex-col px-[20px] w-full gap-[20px]">
        <Input
          label={"Language"}
          type={"select"}
          options={["Arabic", "English"]}
          onChange={(val) => handleChange("lang", val)}
          value={systemSettings.lang}
          listClassName="w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] py-[10px] px-[15px] md:py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
      </div>
      <div className="flex  justify-end w-full">
        <Button
          onClick={handleSubmit}
          className="py-[5px] px-[10px] md:text-[18px] w-fit text-[12px] md:py-[14px] h-fit md:px-[20px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 text-nowrap"
          type="primary"
        >
          Save System Settings
        </Button>
      </div>
    </div>
  );
};
export default Settings;
