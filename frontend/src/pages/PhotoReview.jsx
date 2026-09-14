import React, { useState } from "react";
import {ArrowLeft, Trash2, Plus, Lightbulb, RotateCcw, ArrowRight,} from "lucide-react";
import { Maximize2, Minimize2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const PhotoReview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isZoomed, setIsZoomed] = useState(false);

  const image = location.state?.image;

  const handleRetake = () => {
    navigate("/camera");
  };

  const handleDelete = () => {
    navigate("/camera");
  };

  const handleAnalyze = () => {

    console.log("Image ready for analysis:", image);
  };


  if (!image) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No image found.</p>

          <button
            onClick={() => navigate("/camera")}
            className="mt-4 rounded-full bg-primary px-6 py-3 font-semibold"
          >
            Open Camera
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-dvh bg-gray-50 pb-6">

   
      <div className="flex items-center justify-between px-4 py-4">

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <ArrowLeft size={21} />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Review Photo
            </h1>

            <p className="text-xs text-gray-500">
              Check the captured image before analysis
            </p>
          </div>
        </div>



      </div>


      <div className="px-3">

        <div className={`relative ${isZoomed ? "h-[65vh]" : "h-[55vh]"
          }  w-full overflow-hidden rounded-3xl bg-black`}>

          <img
            src={image}
            alt="Captured product"
            className="h-full w-full object-cover"
          />

          <button
            onClick={handleDelete}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
          >
            <Trash2 size={22} strokeWidth={1.8} />
          </button>

   
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
          >
            {isZoomed ? (
              <Minimize2 size={22} />
            ) : (
              <Maximize2  size={22} />
            )}
          </button>
        </div>



        <div className="mt-4 flex gap-4">

  
          <div className="h-24 w-24 overflow-hidden rounded-2xl border-4 border-primary">
            <img
              src={image}
              alt="Product thumbnail"
              className="h-full w-full object-cover"
            />
          </div>



          <button
            className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white text-gray-500"
          >
            <Plus size={27} strokeWidth={1.8} />

            <span className="mt-1 text-sm font-medium">
              Add Photo
            </span>
          </button>

        </div>



        <div className="mt-2 flex gap-1  border-amber-200 bg-amber-50 px-1 py-4">

          <div className="text-primary">
            <Lightbulb
              size={25}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              Tips for better results
            </h2>

            <ul className="mt-1 list-disc pl-4 text-sm leading-6 text-gray-600">
              <li>Ensure the text is clearly visible</li>
              <li>Avoid blur or glare</li>
              <li>Capture all important details</li>
            </ul>
          </div>

        </div>

      </div>


   
      <div className="mt-5 flex gap-3 px-4">


        <button
          onClick={handleRetake}
          className="flex h-16 flex-1 items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white font-bold text-gray-900"
        >
          <RotateCcw size={23} strokeWidth={1.8} />
          Retake
        </button>



        <button
          onClick={handleAnalyze}
          className="flex h-16 flex-[1.2] items-center justify-center gap-2 rounded-full bg-primary font-bold text-gray-900"
        >
          Analyze Package
          <ArrowRight size={24} strokeWidth={2} />
        </button>

      </div>

    </div>
  );
};

export default PhotoReview;