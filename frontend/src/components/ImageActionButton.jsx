import React from "react";
import { RotateCcw, ArrowRight } from "lucide-react";

const ImageActionButtons = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'>
            <div className='flex gap-3 mx-4 my-4'>
                <button className='flex-1 flex items-center justify-center gap-2 border-2 border-zinc-200 rounded-full py-3 font-semibold text-zinc-800'>
                    <RotateCcw strokeWidth={2} size={18} />
                    Retake
                </button>

                <button className='flex-1 flex items-center justify-center gap-2 bg-amber-400 rounded-full py-3 font-semibold text-zinc-900'>
                    Analyze Package
                    <ArrowRight strokeWidth={2} size={18} />
                </button>
            </div>
        </div>
    );
};

export default ImageActionButtons;