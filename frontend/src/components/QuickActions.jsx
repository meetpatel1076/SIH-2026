import React from 'react'
import { Book, CircleAlert, RefreshCcw, Scale } from 'lucide-react'

const QuickActions = () => {
  return (
    <div className="  bg-white pt-3 pb-2 ">


      <h2 className=" mx-2 mb-1 text-[16px] font-semibold text-gray-900">
        Quick Actions
      </h2>


      <div className="flex justify-between mx-4 mt-4 mb-2 text-gray-600">


        <div className="flex  flex-col items-center ">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-primary  shadow-md ">
            <Scale size={30} strokeWidth={2} />
          </div>

          <p className="text-center text-[10px] font-semibold leading-[14px] text-gray-500">
            Rules
          </p>
        </div>



        <div className="flex flex-col items-center   ">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-primary shadow-md   ">
            <CircleAlert size={30} strokeWidth={2} />
          </div>

          <p className="text-center text-[10px] font-semibold leading-[14px] text-gray-500">
            Report
          </p>
        </div>
        <div className="flex  flex-col items-center  ">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-primary shadow-md  ">
            <Book size={30} strokeWidth={2} />
          </div>
          <p className="text-center text-[10px] font-semibold leading-[14px] text-gray-500">
            Instructions
          </p>
        </div>


        <div className="flex flex-col items-center  ">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-primary shadow-md  ">
            <RefreshCcw size={30} strokeWidth={2} />
          </div>

          <p className="text-center text-[10px] font-semibold leading-[14px] text-gray-500">
            Offline Sync

          </p>
        </div>

      </div>
    </div>
  )
}

export default QuickActions