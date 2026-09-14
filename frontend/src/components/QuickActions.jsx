import React from 'react'
import { Book, CircleAlert, RefreshCcw, Scale } from 'lucide-react'

const QuickActions = () => {
  return (
    <div className=" rounded-3xl bg-white pt-4 pb-2 ">


      <h2 className=" mx-2 mb-1 text-[16px] font-semibold text-gray-900">
        Quick Actions
      </h2>


      <div className="flex justify-center gap-6  my-2 text-gray-800">


        <div className="flex  flex-col items-center ">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-primary  shadow-sm border border-gray-500">
            <Scale size={30} strokeWidth={1.3} />
          </div>

          <p className="text-center text-[12px] font-medium leading-[14px] text-gray-900">
            Rules & Acts
          </p>
        </div>



        <div className="flex flex-col items-center   ">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-primary shadow-sm border border-gray-500 ">
            <CircleAlert size={30} strokeWidth={1.5} />
          </div>

          <p className="text-center text-[12px] font-medium leading-[14px] text-gray-900">
            Report Fake Item
          </p>
        </div>
        <div className="flex  flex-col items-center  ">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-primary shadow-sm border border-gray-500">
            <Book  size={30} strokeWidth={1.5} />
          </div>

          <p className="text-center text-[12px] font-medium leading-[14px] text-gray-900">
            Instructions
          </p>
        </div>


        <div className="flex flex-col items-center  ">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-primary shadow-sm border border-gray-500">
            <RefreshCcw size={30} strokeWidth={1.5} />
          </div>

          <p className="text-center text-[12px] font-medium leading-[14px] text-gray-900">
            Offline Sync

          </p>
        </div>

      </div>
    </div>
  )
}

export default QuickActions