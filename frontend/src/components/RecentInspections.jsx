import React from 'react'
import { ChevronRight } from 'lucide-react';

const RecentInspections = () => {
    return (
        <div className='rounded-md border border-gray-100 px-2 py-3   '>
            <div className='flex justify-between '>
                <div className='mb-3 text-[16px] font-semibold text-gray-900'>Recent Inspections</div>
                <div className='flex justify-center items-center gap-1 text-zinc-500 font-semibold text-[14px] mb-2'>
                    <div className=''>View All</div>
                    <ChevronRight size={18} />
                </div>
            </div>
            {/* need to change */}
            <div className='flex flex-col gap-2'>

                <div className='flex flex-col gap-[1px]'>
                    <div className=' p-2  rounded-xl flex items-center justify-between'>
                        <div className='flex justify-center gap-2 items-center'>

                            <div className='flex flex-col justify-center '>
                                <div className=' text-[13px] font-semibold text-gray-900'>Amul Gold 1L Milk</div>
                                <div className='text-zinc-500 font-semibold text-[12px]'>10:42 AM</div>

                            </div>

                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[13px] font-semibold text-gray-900'>Compliant</div>
                            <div className='text-zinc-500 font-semibold text-[10px]'>Batch 88A</div>
                        </div>

                    </div>
                    <div className='flex justify-center'> <div className='h-[0.25px] w-full bg-gray-400 mx-2 '></div></div>
                </div>
                {/* 2nd */}
                <div className='flex flex-col gap-[1px]'>
                    <div className=' p-2  rounded-xl flex items-center justify-between'>
                        <div className='flex justify-center gap-2 items-center'>

                            <div className='flex flex-col justify-center '>
                                <div className=' text-[13px] font-semibold text-gray-900'>A-Mulla G-Milk</div>
                                <div className='text-zinc-500 font-semibold text-[12px]'>10:42 AM</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <div className='text-[13px] font-semibold text-red-600'>Non-Compliant</div>
                            <div className='text-red-500 font-semibold text-[10px]'>Batch 6969#</div>
                        </div>


                    </div>
                    <div className='flex justify-center'> <div className='h-[0.25px] w-full bg-gray-400 mx-2 '></div></div>

                </div>
                {/* 3rd */}
                <div className='flex flex-col gap-[1px]'>
                    <div className=' p-2  rounded-xl flex items-center justify-between'>
                        <div className='flex justify-center gap-2 items-center'>

                            <div className='flex flex-col justify-center '>
                                <div className=' text-[13px] font-semibold text-gray-900'>Amul Gold 1L Milk</div>
                                <div className='text-zinc-500 font-semibold text-[12px]'>10:42 AM</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[13px] font-semibold text-gray-900'>Compliant</div>
                            <div className='text-zinc-500 font-semibold text-[10px]'>Batch 88A</div>
                        </div>
                    </div>
                    <div className='flex justify-center'> <div className='h-[0.25px] w-full bg-gray-400 mx-2 '></div></div>

                </div>
                 {/* 4th */}
                <div className='flex flex-col gap-[1px]'>
                    <div className=' p-2  rounded-xl flex items-center justify-between'>
                        <div className='flex justify-center gap-2 items-center'>

                            <div className='flex flex-col justify-center '>
                                <div className=' text-[13px] font-semibold text-gray-900'>Amul Gold 1L Milk</div>
                                <div className='text-zinc-500 font-semibold text-[12px]'>10:42 AM</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[13px] font-semibold text-gray-900'>Compliant</div>
                            <div className='text-zinc-500 font-semibold text-[10px]'>Batch 88A</div>
                        </div>
                    </div>
                    <div className='flex justify-center'> <div className='h-[0.25px] w-full bg-gray-400 mx-2 '></div></div>

                </div>
                 {/* 5th */}
                <div className='flex flex-col gap-[1px]'>
                    <div className=' p-2  rounded-xl flex items-center justify-between'>
                        <div className='flex justify-center gap-2 items-center'>

                            <div className='flex flex-col justify-center '>
                                <div className=' text-[13px] font-semibold text-gray-900'>Amul Gold 1L Milk</div>
                                <div className='text-zinc-500 font-semibold text-[12px]'>10:42 AM</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[13px] font-semibold text-gray-900'>Compliant</div>
                            <div className='text-zinc-500 font-semibold text-[10px]'>Batch 88A</div>
                        </div>
                    </div>
                    <div className='flex justify-center'> <div className='h-[0.25px] w-full bg-gray-400 mx-2 '></div></div>

                </div>
            </div>
        </div>
    )
}

export default RecentInspections
