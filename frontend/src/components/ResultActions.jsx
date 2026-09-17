import React from "react";
import { FileText, Check } from "lucide-react";

const ResultActions = ({ onDone }) => {
  return (
    <div className="mt-6 flex gap-3 px-4 pb-5">

      <button className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white font-semibold text-gray-900">

        <FileText
          size={21}
          strokeWidth={1.8}
        />

        Save Report

      </button>


      <button
        onClick={onDone}
        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-bold text-gray-900"
      >

        <Check
          size={21}
          strokeWidth={2.5}
        />

        Approve

      </button>

    </div>
  );
};

export default ResultActions;