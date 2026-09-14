import React from "react";
import { Trash2, Maximize2, Minimize2 } from "lucide-react";

const ImagePreview = ({ image, isZoomed, onToggleZoom, onDelete }) => {
  return (
    <>
      <div className="relative mx-4 my-3">
        <div className="relative h-[45vh] w-full overflow-hidden rounded-2xl bg-black">
          <img src={image} alt="Captured product" className="h-full w-full object-cover" />
        </div>

        <button
          onClick={onDelete}
          className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
        >
          <Trash2 size={18} strokeWidth={2} />
        </button>

        <button
          onClick={onToggleZoom}
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
        >
          <Maximize2 size={18} strokeWidth={2} />
        </button>
      </div>

      {isZoomed && (
        <div
          onClick={onToggleZoom}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-500/60 backdrop-blur-sm"
        >
          <img
            src={image}
            alt="Zoomed product"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleZoom();
            }}
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
          >
            <Minimize2 size={18} strokeWidth={2} />
          </button>
        </div>
      )}
    </>
  );
};

export default ImagePreview;