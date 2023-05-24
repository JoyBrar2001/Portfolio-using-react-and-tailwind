import React from 'react';
import Joy from '../assets/Joy.jpg';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import JoyPng from '../assets/Joy png.png';

const Hero = () => {
  // return (
  // <div className='h-full min-h-screen w-screen bg-dark text-white' id="hero">

  //   <div className='h-full w-full flex flex-col justify-center items-center max-w-[400px] pt-28 mx-auto text-center gap-4 pb-10'>
  //     <h1 className='heading'>Joy Brar</h1>

  //     <h2 className='sub-heading'>Developer and Designer.</h2>

  //     <p className='sub-text'>Frontend Developer, Graphic Designer, Video Editor, and a intermediate level coder, currently pursuing my Computer Science Degree in MUJ.</p>

  //     <div className='flex w-[80%] justify-around'>
  //       <BsGithub className='social-icons' />
  //       <BsLinkedin className='social-icons' />
  //       <BsYoutube className='social-icons' />
  //     </div>

  //     <img src={Joy} alt="Joy Image" className='h-[265px] w-auto rounded-full mt-5' />
  //   </div>
  // </div>

  return (
    <div className='h-full min-h-screen w-screen bg-dark text-white pt-28' id="hero">
      <div className='h-full w-full max-w-[1200px] mx-auto grid grid-cols-2 justify-center items-center'>

        <div className='flex flex-col gap-1'>
          <h1 className='text-7xl font-bold text-cyan-500 my-6'>Hi, I'm Joy Brar</h1>

          <h2 className='text-3xl font-semibold'>Frontend, UI/UX, Graphic Designer</h2>

          <p className='text-lg text-gray-400'> and a intermediate level coder, currently pursuing my Computer Science Degree in MUJ.</p>

          <div className='flex w-[80%] gap-6 my-4'>
            <BsGithub className='social-icons' />
            <BsLinkedin className='social-icons' />
            <BsYoutube className='social-icons' />
          </div>
        </div>

        <div className='relative'>
          <div className='absolute h-[300px] w-[300px] top-[10%] left-[15%] white__gradient z-0' />
          <div className='absolute h-[300px] w-[300px] top-0 right-[20%] blue__gradient z-0' />

          <img src={JoyPng} className='h-full drop-shadow-xl' alt="" />
        </div>
      </div>
    </div>
  )

}

export default Hero
