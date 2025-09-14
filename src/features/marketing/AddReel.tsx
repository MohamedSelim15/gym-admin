import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import uploadImg from "../../assets/SVG/upload-solid-full.svg";

export default function AddReel() {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const [image, setImage] = useState(null);
  const [reelData, setReelData] = useState({
    title: "",
    caption: "",
    audience: "",
    ScheduleDate: "",
  });

  function handleChange(field: string, value: string) {
    setReelData((prev) => ({ ...prev, [field]: value }));
  }
  function handleSubmit() {
    console.log(reelData);
    console.log(enabled);
  }
  return (
    <div className="w-full h-full flex flex-col py-[10px] md:py-[20px] px-[5px] md:px-[40px] gap-[10px] md:gap-[50px]">
      <h1 className="text-[18px] md:text-[26px] font-[600px] primaryColorText">
        Add New Reel
      </h1>
      <div className="flex flex-col w-full px-[15px] md:px-[60px] gap-[20px]">
        <ImageUpload
          setImage={setImage}
          className="flex items-center border-[1px] border-dashed  justify-center  w-full h-fit flex-col gap-[5px] md:gap-[10px] px-[5px] md:px-[10px]   py-[5px] md:py-[10px] rounded-[10px]  hover:scale-102 cursor-pointer hover:bg-[#94B4C1]  hover:shadow-[0_0_5px_rgba(33,52,72,0.5)] transition-all duration-300 ease-in-out"
          label="Upload Reel Video"
          uploadImg={uploadImg}
          iconClassName="md:h-6 md:w-6 w-5 h-5"
          lableClassName="primaryColorText text-[16px] md:text-[18px] font-[500px]"
        />
        <Input
          type={"text"}
          placeholder={"Reel Title"}
          onChange={(e) => handleChange("title", e.target.value)}
          value={reelData.title}
          inputClassName="border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        <Input
          type={"textarea"}
          placeholder={"Write a caption......"}
          onChange={(e) => handleChange("caption", e.target.value)}
          value={reelData.caption}
          inputClassName="border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] whitespace-normal break-words resize-none py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        <div className="flex justify-between w-full  items-center gap-[25px]">
          <Input
            type={"select"}
            placeholder={"Target Audience"}
            options={[1, 2, 3]}
            onChange={(val) => handleChange("audience", val)} // ✅ use value directly
            value={reelData.audience}
            lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
            listClassName="w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] py-[10px] px-[15px] md:py-[17px] md:px-[23px] md:text-[18px] text-[14px] font-medium"
          />

          <Button
            type={"toggle"}
            className={"w-[60px] sm:w-[20%] h-[25px] sm:h-[60%] "}
            enabled={enabled}
            setEnabled={setEnabled}
          >
            <p>Allow Comments </p>
          </Button>
        </div>
        <Input
          type={"date"}
          label={"Schedule Date (Optional)"}
          onChange={(e) => handleChange("ScheduleDate", e.target.value)}
          value={reelData.ScheduleDate}
          inputClassName={`border  "border-[#94B4C1]"
           rounded-[10px] bg-white px-[10px] py-[8px] md:px-[20px] md:py-[12px]`}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />
        <div className="flex justify-end gap-[15px]">
          <Button
            className="text-[#213448] md:text-[18px] text-[12px] md:py-[15px] py-[5px] md:px-[40px] px-[10px] rounded-[20px] hover:border-[#ffffff] transition-transform duration-200 ease-in-out hover:scale-103"
            type="outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            className="py-[5px] px-[10px] md:text-[18px] text-[12px] md:py-[15px] md:px-[40px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103"
            type="primary"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
