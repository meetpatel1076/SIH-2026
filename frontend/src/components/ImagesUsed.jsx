import React from "react";


const ImagesUsed = ({ image }) => {
  return (
    <div className="mx-4 mt-5">

      <div className="mb-3 flex items-center justify-between">

        <h2 className="text-lg font-bold text-gray-900">
          Images Used
        </h2>

       

      </div>


      <div className="flex gap-3">

        <div className="h-24 w-24 overflow-hidden rounded-xl border-2 border-primary">
          <img
            src={image}
            alt="Inspection evidence"
            className="h-full w-full object-cover"
          />
        </div>

      </div>

    </div>
  );
};

export default ImagesUsed;