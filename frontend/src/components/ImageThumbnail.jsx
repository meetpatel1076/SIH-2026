import React from "react";
import { Plus } from "lucide-react";

const ImageThumbnail = () => {
  return (
    <div className='flex gap-3 mx-4 my-1'>
      <div className='w-20 h-20 rounded-xl border-2 border-amber-400 overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src="/itemImage.jpg"
          alt="Thumbnail"
        />
      </div>

      <button className='w-20 h-20 rounded-xl border-2 border-dashed border-zinc-300 flex flex-col items-center justify-center gap-1 text-zinc-500 bg-zinc-100'>
        <Plus strokeWidth={2} size={18} />
        <span className='text-[10px] font-medium'>Add Photo</span>
      </button>
    </div>
  );
};

export default ImageThumbnail;