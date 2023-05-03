import React from 'react';
import Joy from '../assets/Joy.jpg';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='h-screen w-screen bg-[#0f1829] text-white' id="hero">

      <div className='h-full w-full flex flex-col justify-end items-center max-w-[400px] mx-auto text-center gap-4 pb-10'>
        <h1 className='heading'>Joy Brar</h1>

        <h2 className='sub-heading'>Developer and Designer.</h2>

        <p className='sub-text'>Frontend Developer, Graphic Designer, Video Editor, and a intermediate level coder, currently pursuing my Computer Science Degree in MUJ.</p>

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
