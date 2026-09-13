import React from 'react'

const TodayStats = () => {
  return (
    <div className=' bg-zinc-100 rounded-3xl m-4 p-4 pb-5 flex flex-col gap-2'>
      <div className='text-[11.5px] text-zinc-600 font-semibold'>TODAY</div>
      <div className='flex justify-between mx-3'>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-[24px] font-extrabold'>48</div>
          <p className='text-zinc-500 font-semibold text-[11px]'>Total</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-[24px] font-extrabold'>35</div>
          <p className='text-zinc-500 font-semibold text-[11px]'>Compliant</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-[24px] font-extrabold'>8</div>
          <p className='text-zinc-500 font-semibold text-[11px]'>Non-Compliant</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-[24px] font-extrabold'>5</div>
          <p className='text-zinc-500 font-semibold text-[11px]'>Review</p>
        </div>
      </div>
    </div>
  )
}

export default TodayStats
