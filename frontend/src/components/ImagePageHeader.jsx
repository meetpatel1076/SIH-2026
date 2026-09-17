import React from "react";
import { ArrowLeft } from "lucide-react";

const ImagePageHeader = ({ onBack }) => {
  return (
    <div className="flex justify-between items-start ">
      <div className="flex items-center gap-3 px-4 py-4">

        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <div className="text-lg font-semibold text-gray-900">Review Photo</div>
          <div className="text-xs text-gray-500">Check the captured image before analysis</div>
        </div>
      </div>


    </div>
  );
};

export default ImagePageHeader;