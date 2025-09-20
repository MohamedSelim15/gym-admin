import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const AddNotification = () => {
  const [Notification, setNotification] = useState({
    title: "",
    message: "",
    type: "",
    date: "",
  });

  function handleChange(field: string, value: string) {
    setNotification((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  }

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!Notification.title) newErrors.title = "Title is Required";
    if (!Notification.message) newErrors.message = "Message is Required";
    if (!Notification.type) newErrors.type = "Type is Required";
    if (!Notification.date) newErrors.date = "Date is Required";

    return newErrors;
  }

  function onSave() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      toast.success("Notification saved successfully", {
        icon: <FaCheckCircle size={20} color="white" />,
        style: {
          background: "#16a34a",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px",
        },
      });

      navigate("/notification");
    } catch (error) {
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
    <div className="w-full h-[130vh] flex flex-col py-[20px] px-[40px] gap-[50px]">
      <h1 className="text-[26px] ml-10 font-[600] primaryColorText">
        Add New Notification
      </h1>
      <div className="flex flex-col w-full px-[40px] gap-[30px] ">
        <div>
          <Input
            type="text"
            placeholder="Notification title"
            onChange={(e) => handleChange("title", e.target.value)}
            inputClassName={`${
              errors.title ? "border-red-500" : "border-[#94B4C1]"
            }`}
            value={Notification.title}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Notification message"
            onChange={(e) => handleChange("message", e.target.value)}
            value={Notification.message}
            inputClassName={`${
              errors.message ? "border-red-500" : "border-[#94B4C1]"
            } h-[120px] pb-20`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div>
          <Input
            type="select"
            options={["All Members", "Premium Members", "Free Members"]}
            onChange={(val: string) => handleChange("type", val)}
            placeholder={"Target Audience"}
            listClassName={`${
              errors.type ? "border-red-500" : "border-[#94B4C1]"
            }
              w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] 
              py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium 
          `}
            value={Notification.type}
          />
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        <div>
          <Input
            label="Schedule Date (Optional)"
            labelClassName="text-xl text-[#547792]  text-medium mb-3 ml-1"
            type="date"
            placeholder="Notification message"
            onChange={(e) => handleChange("date", e.target.value)}
            value={Notification.date}
            inputClassName={`${
              errors.date ? "border-red-500" : "border-[#94B4C1]"
            }
              border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px]
              py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium `}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            onClick={() => {}}
            className="py-[15px] px-[30px] md:text-[18px] text-[22px] md:py-2 md:px-6 rounded-[20px]  transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 cursor-pointer"
            type="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={onSave}
            className="py-[15px] px-[30px] md:text-[18px] text-[22px] md:py-2 md:px-6 rounded-[20px]  transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 cursor-pointer"
            type="primary"
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
