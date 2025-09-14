import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const AddNotification = () => {

    const [Notification, setNotification] = useState({
      title: "",
      message: "",
      type: "",
    });
  
    function handleChange(field: string, value: string) {
      setNotification((prev) => ({
        ...prev,
        [field]: value,
      }));
    }

  return (
    <div className="w-full h-[130vh] flex flex-col py-[20px] px-[40px] gap-[50px]">
      <h1 className="text-[26px] ml-10 font-[600] primaryColorText">
        Add New Notification
      </h1>
      <div className="flex flex-col w-full px-[40px] gap-[30px] ">
        <Input
          type="text"
          placeholder="Notification title"
          onChange={(e) =>
            handleChange("title", e.target.value)
          }
          value={Notification.title}
        />

        <Input
          type="text"
          placeholder="Notification message"
          onChange={(e) =>
            handleChange("message", e.target.value)
          }
          value={Notification.message}
          inputClassName="h-[120px] pb-20"
        />

        <Input
          type="select"
          options={["All Members", "Premium Members", "Free Members" ]}
          onChange={(val: string) => handleChange("type", val)}
          placeholder={"Target Audience"}
          value={Notification.type}
        />

          <Input
            label="Schedule Date (Optional)"
            lableClassName="text-xl text-[#547792]  text-medium mb-3 ml-1"
            type="date"
            placeholder="Notification message"
            onChange={(e) =>
              handleChange("message", e.target.value)
            }
            value={Notification.message}
          />

      <div className="flex justify-end gap-2">
      <Button
        onClick={() => {}}
        className="py-[15px] px-[30px] md:text-[18px] text-[22px] md:py-2 md:px-6 rounded-[20px]  transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 cursor-pointer"
        type="outline"
      >
        Cancel 
      </Button>
      <Button
        onClick={() => {}}
        className="py-[15px] px-[30px] md:text-[18px] text-[22px] md:py-2 md:px-6 rounded-[20px]  transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103 cursor-pointer"
        type="primary"
      >
        Save 
      </Button>
      </div>
      </div>
    </div>
  )
}


export default AddNotification;