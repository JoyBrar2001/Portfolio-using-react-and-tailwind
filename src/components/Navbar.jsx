import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='fixed h-20 w-screen bg-[#0f1829] text-white font-Poppins shadow-lg z-10'>
            <div className='flex justify-between items-center w-full h-full px-6 max-w-[1200px] mx-auto'>

                <p className='text-xl font-bold'>Portfolio</p>

                <div className='flex gap-6 justify-center items-center'>
                    <BsMoonStarsFill className='text-xl' />
                    <div className='text-white bg-[#05c4b7] px-4 py-1.5 rounded-md'>
                        <p>Resume</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
