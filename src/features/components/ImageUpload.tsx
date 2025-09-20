import React, { useRef } from "react";

const ImageUpload = ({
  setImage,
  label,
  className,
  uploadImg,
  iconClassName,
  labelClassName,
}) => {
  const fileUploadRef = useRef();

  const handleImageUpload = () => {
    fileUploadRef.current.click();
  };

  function uploadImageDisplay(event) {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    const cachedURL = URL.createObjectURL(uploadedFile);
    setImage(cachedURL);
  }

  return (
    <div
      className={`${className} `}
      typeof="button"
      onClick={handleImageUpload}
    >
      <div className={` ${iconClassName}`}>
        <img src={uploadImg} alt="Upload" />
      </div>
      <p className={`${labelClassName}`}>{label}</p>

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
