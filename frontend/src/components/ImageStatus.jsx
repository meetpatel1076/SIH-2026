import React from "react";
import { CheckCircle2, Lightbulb } from "lucide-react";

const ImageStatus = () => {
  return (
    <div className='mx-4 my-3'>
      <div className='flex gap-3 bg-amber-50 rounded-xl p-3 mt-3'>
        <div className='bg-amber-400 rounded-full p-1.5 h-fit'>
          <Lightbulb strokeWidth={2} size={16} className='text-white' fill='currentColor' />
        </div>
        <div>
          <div className='text-[14px] font-semibold text-zinc-800 mb-1'>Tips for better results</div>
          <ul className='text-[12px] text-zinc-500 list-disc list-inside space-y-0.5'>
            <li>Ensure the text is clearly visible</li>
            <li>Avoid blur or glare</li>
            <li>Capture all important details (MRP, net quantity, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageStatus;