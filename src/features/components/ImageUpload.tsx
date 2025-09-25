import React, { useRef, useState } from "react";
import Button from "./Button";
import { MdOutlineDelete } from "react-icons/md";
const ImageUpload = ({
  setImage,
  label,
  className,
  uploadImg,
  iconClassName,
  labelClassName,
}) => {
  const fileUploadRef = useRef();
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleImageUpload = () => {
    fileUploadRef.current.click();
  };

  function uploadImageDisplay(event) {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    const cachedURL = URL.createObjectURL(uploadedFile);
    setImage(cachedURL);
    setPreview(cachedURL);
    setFileType(uploadedFile.type.startsWith("video") ? "video" : "image");
  }

  function handleDelete() {
    setPreview(null);
    setFileType(null);
    setImage(null);
    fileUploadRef.current.value = ""; // reset file input
  }

  return (
    <div
      className={`${className} relative`}
      typeof="button"
      onClick={!preview ? handleImageUpload : undefined} // prevent re-open if preview exists
    >
      {!preview ? (
        <>
          <div className={iconClassName}>
            <img src={uploadImg} alt="Upload" />
          </div>
          <p className={labelClassName}>{label}</p>
        </>
      ) : (
        <div className="relative w-full h-full">
          {fileType === "image" ? (
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <video
              src={preview}
              controls
              className="w-full h-full object-cover rounded-lg"
            />
          )}

          <Button
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 px-2 text-sm shadow hover:bg-red-600 transition"
          >
            <MdOutlineDelete />{" "}
          </Button>
        </div>
      )}

      <input
        type="file"
        ref={fileUploadRef}
        onChange={uploadImageDisplay}
        hidden
        accept="image/*,video/*"
      />
    </div>
  );
};

export default ImageUpload;
