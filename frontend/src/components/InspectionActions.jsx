import { useNavigate } from "react-router-dom";
import { Camera, Images } from 'lucide-react';


const InspectionActions = () => {

    // for phone
    // const cameraInputRef = useRef(null);

    // const openCamera = () => {
    //     cameraInputRef.current?.click();
    // };
    
    const navigate = useNavigate();

    
    return (
        <div className='  shrink-0 sticky bottom-0 text-gray-800 '>

            {/* <div className="flex justify-center"><div className='mb-3 px-2 pt-2  text-[12px] font-semibold text-amber-300'>Start Inspections</div></div> */}
            <div className='flex justify-center items-center  my-3 mx-4 gap-4 mr-7'>
                <div className='flex items-center  gap-4 rounded-full px-4 bg-black text-white h-18 w-55' >
                    <Images size={34} strokeWidth={1.5} />
                    <div className="text-[18px]">Upload Images</div>
                </div>


                <button
                     onClick={() => navigate("/camera")}
                    className="flex h-18 w-18 items-center justify-center rounded-full bg-primary"
                >
                    <Camera size={34} />
                </button>
               
               

            </div>
            
        </div>
    )
}

export default InspectionActions
