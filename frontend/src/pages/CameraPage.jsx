import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Camera, RotateCcw, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CameraPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [capturedImage, setCapturedImage] = useState(null);

  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log("Camera error:", error);
    }
  };

  useEffect(() => {
    if (!capturedImage) {
      startCamera();
    }

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [capturedImage]);


  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/jpeg");

    setCapturedImage(image);
  };


 const retakePhoto = () => {
  setCapturedImage(null);
};

  const usePhoto = () => {
    navigate("/photo-review", {
      state: {
        image: capturedImage,
      },
    });
  };

  return (
    <div className="min-h-dvh bg-gray-50">


      <div className="flex items-center gap-3 px-4 py-4">

        <button
          onClick={() => navigate("/")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Capture Product Image
          </h1>

          <p className="text-xs text-gray-500 ">
            Tip: Clear image gives fast result
          </p>
        </div>

      </div>

      <div className="px-3">

        {!capturedImage ? (

          <div className="relative h-[65vh] w-full overflow-hidden rounded-3xl bg-black">


            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />


            <div />



          </div>

        ) : (

          <div className="relative h-[65vh] w-full overflow-hidden rounded-3xl bg-black">

            <img
              src={capturedImage}
              alt="Captured product"
              className="h-full w-full object-cover"
            />

          </div>

        )}

      </div>


      {!capturedImage ? (

        <div className="flex flex-col items-center gap-2 py-6">

          <button
            onClick={capturePhoto}
            className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-primary shadow-lg"
          >
            <Camera size={30} />
          </button>

          <span className="text-sm font-medium text-gray-700">
            Capture
          </span>

        </div>

      ) : (

        <div className="flex gap-3 px-4 py-6">

          <button
            onClick={retakePhoto}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white font-semibold text-gray-800"
          >
            <RotateCcw size={20} />
            Retake
          </button>

          <button
            onClick={usePhoto}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-black font-semibold text-white"
          >
            <Check size={20} />
            Use Photo
          </button>

        </div>

      )}

      <canvas
        ref={canvasRef}
        className="hidden"
      />

    </div>
  );
};

export default CameraPage;