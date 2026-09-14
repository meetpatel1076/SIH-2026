import React from "react";
import { Trash2, Crop } from "lucide-react";

const ImagePreview = () => {
  return (
    <div className='relative mx-4 my-3'>
      <div className='w-full aspect-square rounded-2xl overflow-auto overscroll-contain bg-zinc-100'>
        <img
          className='w-full h-auto'
          src="/itemImage.jpg"
          alt="Captured product"
        />
      </div>

      <button className='absolute top-3 right-3 bg-white rounded-full p-2.5 shadow-md'>
        <Trash2 strokeWidth={2} size={18} />
      </button>

      <button className='absolute bottom-3 right-3 bg-white rounded-full p-2.5 shadow-md'>
        <Crop strokeWidth={2} size={18} />
      </button>
    </div>
  );
};

export default ImagePreview;