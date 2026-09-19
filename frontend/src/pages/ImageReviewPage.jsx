import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImagePageHeader from "../components/ImagePageHeader";
import ImagePreview from "../components/ImagePreview";
import ImageStatus from "../components/ImageStatus";
import ImageActionButtons from "../components/ImageActionButton";
import LoadingScreen from "../components/LoadingScreen";
import { analyzeProduct } from "../Api/inspectionApi";
import { dataUrlToFile } from "../utils/imageToFile";

const ImageReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isZoomed, setIsZoomed] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const image = location.state?.image;
  const source = location.state?.source;

const handleRetake = () => {
  if (source === "gallery") {
    navigate("/");
  } else {
    navigate("/camera");
  }
};

const handleDelete = () => {
  if (source === "gallery") {
    navigate("/");
  } else {
    navigate("/camera");
  }
};

  const handleAnalyze = async () => {
    try {

      setIsAnalyzing(true);

      const file = dataUrlToFile(image, "inspection.jpg");
      const result = await analyzeProduct(file);
     

      navigate("/result", {
        state: {
          image: image,
          result: result,
        },
      });

    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Failed to analyze the package. Please try again.");

    } finally {
      setIsAnalyzing(false);
    }
  };

  
  if (!image) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No image found.</p>

          <button
            onClick={() => navigate("/camera")}
            className="mt-4 rounded-full bg-amber-400 px-6 py-3 font-semibold"
          >
            Open Camera
          </button>
        </div>
      </div>
    );
  }

  
  if (isAnalyzing) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-dvh flex-col overflow-y-auto pb-24">

      <ImagePageHeader onBack={() => navigate(-1)} />

      <ImagePreview
        image={image}
        isZoomed={isZoomed}
        onToggleZoom={() => setIsZoomed(!isZoomed)}
        onDelete={handleDelete}
      />

      <ImageStatus />

      <ImageActionButtons
        onRetake={handleRetake}
        onAnalyze={handleAnalyze}
      />

    </div>
  );
};

export default ImageReviewPage;