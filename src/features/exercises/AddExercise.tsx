import { useEffect, useState } from "react";
import Input from "../components/Input";
import ImageUpload from "../components/ImageUpload";
import uploadImg from "../../assets/SVG/upload-solid-full.svg";

export default function AddExercise() {
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
      const newCategory = prompt("Enter new category:");
      if (newCategory && !categories.includes(newCategory)) {
        setCategories((prev) => [...prev, newCategory]);
        setExerciseData((prev) => ({ ...prev, category: newCategory }));
      } else {
        // reset if cancelled
        setExerciseData((prev) => ({ ...prev, category: "" }));
      }
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
    <div className="w-full h-full flex flex-col py-[20px] px-[40px] gap-[50px]">
      <h1 className="text-[26px] font-[600px] primaryColorText">
        Add New Exercise
      </h1>
      <div className="flex flex-col w-full px-[40px] gap-[30px] ">
        <Input
          label={"Exercise Name"}
          type={"text"}
          placeholder={"Enter exercise name"}
          onChange={(e: { target: { value: string; }; }) => handleChange("name", e.target.value)}
          value={exerciseData.name} options={undefined} withAdd={undefined}        />

        <Input
          label={"Category"}
          type={"select"}
          options={categories}
          withAdd
          onChange={(val: string) => handleChange("category", val)}
          value={exerciseData.category} placeholder={undefined}        />

        <Input
          label={"Target Muscles"}
          type={"text"}
          placeholder={"e.g. Chest, Arms, Legs"}
          onChange={(e: { target: { value: string; }; }) => handleChange("targetMuscles", e.target.value)}
          value={exerciseData.targetMuscles} options={undefined} withAdd={undefined}        />

        <Input
          label={"Difficulty Level"}
          type={"select"}
          options={["Easy", "Medium", "Hard"]}
          onChange={(val: string) => handleChange("difficulty", val)}
          value={exerciseData.difficulty} placeholder={undefined} withAdd={undefined}        />
        <div className="flex flex-col ">
          <label className="inputLabel mb-2">Upload Media</label>
          <ImageUpload
            setImage={setImage}
            className={
              "flex items-center w-fit h-fit gap-[10px] px-[23px] py-[10px] rounded-[10px] bg-[#94B4C1] hover:scale-102 cursor-pointer hover:shadow-[0_0_5px_rgba(33,52,72,0.5)] transition-all duration-300 ease-in-out"
            }
            label={"Upload Image / Video"}
            uploadImg={uploadImg}
            buttonClassName={"h-6 w-6"}
          />
          {image && (
            <img src={image} alt="Uploaded" className="h-48 w-48 mt-4" />
          )}
        </div>
      </div>
    </div>
  );
}
