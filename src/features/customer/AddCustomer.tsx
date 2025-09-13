import { useState } from "react";
import Input from "../components/Input.js";
import Button from "../components/Button.js";

export default function AddExercise() {
  const [customerData, setCustomerData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    weight: "",
    subscriptionType: "",
    expiryDate: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phoneNumber?: string;
    age?: string;
    weight?: string;
    expiryDate?: string;
  }>({});

  function handleChange(field: string, value: string) {
    setCustomerData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    if (field === "expiryDate" && value) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(value);

      if (selected < today) {
        setErrors((prev) => ({
          ...prev,
          expiryDate: "Expiry date cannot be in the past",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          expiryDate: undefined,
        }));
      }
    }
  }

  function handleSubmit() {
    let newErrors: typeof errors = {};

    if (!customerData.name.trim()) newErrors.name = "Customer name is required";
    if (!customerData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!customerData.age.trim()) newErrors.age = "Age is required";
    if (!customerData.weight.trim()) newErrors.weight = "Weight is required";

    if (customerData.expiryDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(customerData.expiryDate);
      if (selected < today) {
        newErrors.expiryDate = "Expiry date cannot be in the past";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(customerData);
  }

  return (
    <div className="w-full h-full flex flex-col py-[10px] md:py-[20px] px-[5px] md:px-[40px] gap-[10px] md:gap-[50px]">
      <h1 className="text-[18px] md:text-[26px] font-[600px] primaryColorText">
        Add New Customer
      </h1>

      <div className="flex flex-col w-full px-[5px] md:px-[40px] gap-[15px] md:gap-[30px] ">
        <Input
          label="Customer Name"
          type="text"
          placeholder="Enter customer name"
          onChange={(e) => handleChange("name", e.target.value)}
          value={customerData.name}
          inputClassName={`border ${
            errors.name ? "border-red-500" : "border-[#94B4C1]"
          } rounded-[10px]`}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}

        <Input
          label="Phone Number"
          type="text"
          placeholder="Enter phone number"
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, "");
            handleChange("phoneNumber", onlyNums);
          }}
          value={customerData.phoneNumber}
          inputClassName={`border ${
            errors.phoneNumber ? "border-red-500" : "border-[#94B4C1]"
          } rounded-[10px]`}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
        )}

        <Input
          label="Customer Age"
          type="text"
          placeholder="Enter customer age"
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, "");
            handleChange("age", onlyNums);
          }}
          value={customerData.age}
          inputClassName={`border ${
            errors.age ? "border-red-500" : "border-[#94B4C1]"
          } rounded-[10px]`}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        {errors.age && (
          <span className="text-red-500 text-sm">{errors.age}</span>
        )}

        <Input
          label="Weight"
          type="text"
          placeholder="Enter weight"
          onChange={(e) => handleChange("weight", e.target.value)}
          value={customerData.weight}
          inputClassName={`border ${
            errors.weight ? "border-red-500" : "border-[#94B4C1]"
          } rounded-[10px]`}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        {errors.weight && (
          <span className="text-red-500 text-sm">{errors.weight}</span>
        )}

        <Input
          label="Subscription Type"
          type="select"
          placeholder="Select subscription type"
          options={[1, 2, 3]}
          onChange={(val) => handleChange("subscriptionType", val)}
          value={customerData.subscriptionType}
          inputClassName="border border-[#94B4C1] rounded-[10px]"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />

        <Input
          label="Expiry Date"
          type="date"
          placeholder="Select expiry date"
          onChange={(e) => handleChange("expiryDate", e.target.value)}
          value={customerData.expiryDate}
          inputClassName={`border ${
            errors.expiryDate ? "border-red-500" : "border-[#94B4C1]"
          } rounded-[10px] bg-white px-[10px] py-[8px] md:px-[20px] md:py-[12px]`}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        {errors.expiryDate && (
          <span className="text-red-500 text-sm">{errors.expiryDate}</span>
        )}

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            className="py-[5px] px-[10px] md:text-[18px] text-[12px] md:py-[15px] md:px-[40px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103"
            type="primary"
          >
            Save Customer
          </Button>
        </div>
      </div>
    </div>
  );
}
