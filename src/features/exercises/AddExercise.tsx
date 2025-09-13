import { useEffect, useState } from "react";
import Input from "../components/Input.js";
import ImageUpload from "../components/ImageUpload.js";
import uploadImg from "../../assets/SVG/upload-solid-full.svg";
import { useModal } from "../../core/context//ModalContext.jsx";
import Button from "../components/Button.js";

export default function AddExercise() {
  const { openModal, closeModal } = useModal();
  const [image, setImage] = useState(null);
  const [exerciseData, setExerciseData] = useState({
    name: "",
    category: "",
    targetMuscles: "",
    difficulty: "",
  });

  const [categories, setCategories] = useState([
    "Strength",
    "Cardio",
    "Flexibility",
    "Balance",
  ]);

  function handleChange(field: string, value: string) {
    if (field === "category" && value === "add_new") {
      // open modal and pass callback
      openModal(
        <AddNewCategory
          onClose={closeModal}
          onSave={(newCategory) => {
            if (newCategory && !categories.includes(newCategory)) {
              setCategories((prev) => [...prev, newCategory]);
              setExerciseData((prev) => ({
                ...prev,
                category: newCategory,
              }));
            }
            closeModal();
          }}
        />
      );
      return;
    }

    setExerciseData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    console.log(exerciseData);
    console.log(image);
  }, [exerciseData, image]);

  return (
    <div className="w-full h-full flex flex-col py-[10px] md:py-[20px] px-[5px] md:px-[40px] gap-[10px] md:gap-[50px]">
      <h1 className="text-[18px] md:text-[26px] font-[600px] primaryColorText">
        Add New Exercise
      </h1>

      <div className="flex flex-col w-full px-[5px] md:px-[40px] gap-[15px] md:gap-[30px] ">
        <Input
          label={"Exercise Name"}
          type={"text"}
          placeholder={"Enter exercise name"}
          onChange={(e) => handleChange("name", e.target.value)}
          value={exerciseData.name}
          inputClassName="border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />

        <Input
          label={"Category"}
          type={"select"}
          options={[...categories]}
          withAdd
          onChange={(val) => handleChange("category", val)}
          value={exerciseData.category}
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
          listClassName="w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] py-[10px] px-[15px] md:py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium"
        />

        <Input
          label={"Target Muscles"}
          type={"text"}
          placeholder={"e.g. Chest, Arms, Legs"}
          onChange={(e) => handleChange("targetMuscles", e.target.value)}
          value={exerciseData.targetMuscles}
          inputClassName="border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />

        <Input
          label={"Difficulty Level"}
          type={"select"}
          options={["Easy", "Medium", "Hard"]}
          onChange={(val) => handleChange("difficulty", val)}
          value={exerciseData.difficulty}
          listClassName="w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] py-[10px] px-[15px] md:py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium"
          lableClassName="text-[16px] md:text-[22px] font-[500px] text-[#547792]"
        />

        <div className="flex flex-col">
          <label className="inputLabel mb-2">Upload Media</label>
          <ImageUpload
            setImage={setImage}
            className="flex items-center w-fit h-fit gap-[5px] md:gap-[10px] px-[10px] md:px-[23px] py-[5px] md:py-[10px] rounded-[10px] bg-[#94B4C1] hover:scale-102 cursor-pointer hover:shadow-[0_0_5px_rgba(33,52,72,0.5)] transition-all duration-300 ease-in-out"
            label="Upload Image / Video"
            uploadImg={uploadImg}
            iconClassName="md:h-6 md:w-6 w-5 h-5"
            lableClassName="primaryColorText text-[16px] md:text-[18px] font-[500px]"
          />
          {image && (
            <img src={image} alt="Uploaded" className="h-48 w-48 mt-4" />
          )}
        </div>
      </div>
    </div>
  );
}

function AddNewCategory({ onClose, onSave }) {
  const [newCategory, setNewCategory] = useState("");

  return (
    <div className="w-[50vw] h-fit flex flex-col border-[1px] border-[#94B4C1] rounded-[20px] md:py-[25px] md:px-[30px] px-[15px] py-[10px] bg-white gap-[20px]">
      <p className="md:text-[26px] text-[15px] font-[600px] primaryColorText">
        Add New Category
      </p>

      <div className="flex flex-col md:gap-[50px] gap-[20px] px-[10px] md:px-[15px]">
        <Input
          type="text"
          placeholder="e.g. Cardio"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          inputClassName="border border-[#94B4C1] rounded-[10px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] text-[10px] md:text-[16px] font-medium"
        />

        <div className="flex gap-[15px] justify-end">
          <Button
            onClick={onClose}
            className="text-[#213448] md:text-[18px] text-[12px] md:py-[15px] py-[5px] md:px-[40px] px-[10px] rounded-[20px] hover:border-[#ffffff] transition-transform duration-200 ease-in-out hover:scale-103"
            type="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSave(newCategory)}
            className="py-[5px] px-[10px] md:text-[18px] text-[12px] md:py-[15px] md:px-[40px] rounded-[20px] hover:bg-[#1f2a38] transition-transform duration-200 ease-in-out hover:border-[#1f2a38] hover:scale-103"
            type="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
