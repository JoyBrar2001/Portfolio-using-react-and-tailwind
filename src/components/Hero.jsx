import React from 'react';
import Joy from '../assets/Joy.jpg';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='h-screen w-screen bg-[#0f1829] text-white'>
        <div className='h-full w-full flex flex-col justify-end items-center max-w-[400px] mx-auto text-center gap-4 pb-10'>

        <h1 className='text-[#05c4b7] text-7xl font-semibold tracking-wide'>Joy Brar</h1>

        <h2 className='text-2xl font-semibold'>Developer and Designer.</h2>

        <p className='text-gray-200'>Frontend Developer, Graphic Designer, Video Editor, and a intermediate level coder, currently pursuing my Computer Science Degree in MUJ.</p>

        <div className='flex w-[80%] justify-around'>
            <BsGithub className='social-icons' />
            <BsLinkedin className='social-icons' />
            <BsYoutube className='social-icons' />
        </div>

        <img src={Joy} alt="Joy Image" className='h-[265px] w-auto rounded-full mt-5' />
        </div>
    </div>
  )
}

export default Hero
