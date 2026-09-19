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
        video: {
          facingMode: {
            ideal: "environment",
          },
          width: {
            ideal: 1920,
          },
          height: {
            ideal: 1080,
          },
        },
        audio: false,
      });

      const videoTrack = stream.getVideoTracks()[0];

      // Try to enable continuous autofocus
      // Only if the device/browser supports it.
      try {
        const capabilities = videoTrack.getCapabilities();

        if (
          capabilities.focusMode &&
          capabilities.focusMode.includes("continuous")
        ) {
          await videoTrack.applyConstraints({
            advanced: [
              {
                focusMode: "continuous",
              },
            ],
          });

          console.log("Continuous autofocus enabled");
        } else {
          console.log("Continuous autofocus not supported");
        }
      } catch (focusError) {
        console.log("Could not enable autofocus:", focusError);
      }

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

        videoRef.current.srcObject = null;
      }
    };
  }, [capturedImage]);

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    if (video.readyState < 2) {
      console.log("Camera is not ready yet.");
      return;
    }

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

    const image = canvas.toDataURL("image/jpeg", 0.95);

    setCapturedImage(image);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const usePhoto = () => {
    navigate("/photo-review", {
      state: {
        image: capturedImage,
        source: "camera",
      },
    });
  };

  return (
    <div className="min-h-dvh bg-gray-50">

      {/* Header */}
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

          <p className="text-xs text-gray-500">
            Tip: Clear image gives fast result
          </p>
        </div>

      </div>

      {/* Camera / Preview */}
      <div className="px-3">

        {!capturedImage ? (

          <div className="relative h-[65vh] w-full overflow-hidden rounded-3xl bg-black">

            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="h-full w-full object-cover"
            />

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