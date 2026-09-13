import React from 'react'
import { Bell, UserRound } from 'lucide-react';

const NavbarTop = () => {
    return (
        <div className='flex justify-between my-2 mx-1'>
            <div className='bg-red-30 flex justify-center gap-2 items-center '>
                <div ><img className='h-10' src="/MainLogo.png" alt="" /></div>
                <div>
                    <div className='text-[17px] font-bold'>VeriScan</div>
                    <div className='text-[9.5px] font-bold text-zinc-500'>BHARAT PORTAL</div>
                </div>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <div className='bg-white rounded-full drop-shadow-sm p-2.5'><Bell strokeWidth={2} size={16} /></div>
                <div className='bg-amber-700 text-white rounded-full drop-shadow-sm p-2'><UserRound strokeWidth={1.5} size={23} /></div>
            </div>
        </div>
    )
}

export default NavbarTop
