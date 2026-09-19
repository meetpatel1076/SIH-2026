import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Images } from "lucide-react";

const InspectionActions = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      navigate("/photo-review", {
        state: { image: reader.result },
      });
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };

  return (
    <div className="shrink-0 sticky bottom-0 text-gray-800">
      <div className="flex justify-center items-center my-3 mx-4 gap-4 mr-7">
        <button
          onClick={handleGalleryClick}
          className="flex items-center gap-4 rounded-full px-4 bg-black text-white h-18 w-55"
        >
          <Images size={34} strokeWidth={1.5} />
          <div className="text-[18px]">Upload Images</div>
        </button>

        <button
          onClick={() => navigate("/camera")}
          className="flex h-18 w-18 items-center justify-center rounded-full bg-primary"
        >
          <Camera size={34} />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelected}
        className="hidden"
      />
    </div>
  );
};

export default InspectionActions;