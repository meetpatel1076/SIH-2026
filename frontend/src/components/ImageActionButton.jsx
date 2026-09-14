import React from "react";
import { RotateCcw, ArrowRight } from "lucide-react";

const ImageActionButtons = ({ onRetake, onAnalyze }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md]">
      <div className="flex gap-3 mx-4 my-4">
        <button
          onClick={onRetake}
          className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-zinc-500 py-3 font-semibold text-zinc-800"
        >
          Retake
          <RotateCcw size={18} strokeWidth={2} />
        </button>

        <button
          onClick={onAnalyze}
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-amber-400 py-3 font-semibold text-zinc-900"
        >
          Analyze Package
          <ArrowRight size={18} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ImageActionButtons;