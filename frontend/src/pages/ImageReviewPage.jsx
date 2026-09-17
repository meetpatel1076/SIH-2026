import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";
import ImagePageHeader from "../components/ImagePageHeader";
import ImagePreview from "../components/ImagePreview";
import ImageThumbnail from "../components/ImageThumbnail";
import ImageStatus from "../components/ImageStatus";
import ImageActionButtons from "../components/ImageActionButton";

const ImageReviewPage = () => {
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
  navigate("/result", {
    state: {
      image: image,
    },
  });
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

  return (
    <div className="flex h-dvh flex-col overflow-y-auto pb-24">
      {/* <NavbarTop /> */}

      <ImagePageHeader onBack={() => navigate(-1)} />

      <ImagePreview
        image={image}
        isZoomed={isZoomed}
        onToggleZoom={() => setIsZoomed(!isZoomed)}
        onDelete={handleDelete}
      />

      {/* <ImageThumbnail image={image} /> */}

      <ImageStatus />

      <ImageActionButtons onRetake={handleRetake} onAnalyze={handleAnalyze} />
    </div>
  );
};

export default ImageReviewPage;