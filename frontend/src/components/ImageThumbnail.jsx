import React from "react";
import { Plus } from "lucide-react";

const ImageThumbnail = ({ image }) => {
  return (
    <div className="flex gap-3 mx-4 my-3">
      <div className="h-20 w-20 overflow-hidden rounded-xl border-2 border-amber-400">
        <img src={image} alt="Thumbnail" className="h-full w-full object-cover" />
      </div>

      <button className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-zinc-300 text-zinc-500">
        <Plus size={18} strokeWidth={2} />
        <span className="text-[10px] font-medium">Add Photo</span>
      </button>
    </div>
  );
};

export default ImageThumbnail;