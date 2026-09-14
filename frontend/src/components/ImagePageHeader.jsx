import React from "react";
import { ArrowLeft } from "lucide-react";

const ImagePageHeader = () => {
  return (
    <div className='flex justify-between items-start my-2 mx-1'>
      <div className='flex gap-2.5'>
        <div className='bg-zinc-100 rounded-full h-fit p-2.5 mt-1'>
          <ArrowLeft strokeWidth={2.5} size={18} />
        </div>
        <div>
          <div className='text-[20px] font-bold'>Review Photo</div>
          <div className='text-[13px] text-zinc-500'>Check the captured image before analysis</div>
        </div>
      </div>

      <div className='text-right mr-2'>
        <div className='text-[13px] text-zinc-500 mb-1'>1 of 1</div>
        <div className='flex gap-1 justify-end'>
          <div className='w-6 h-1 rounded-full bg-amber-400'></div>
          <div className='w-4 h-1 rounded-full bg-zinc-200'></div>
          <div className='w-4 h-1 rounded-full bg-zinc-200'></div>
        </div>
      </div>
    </div>
  );
};

export default ImagePageHeader;