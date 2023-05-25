import React from 'react';
import Joy from '../assets/Joy.jpg';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import JoyPng from '../assets/Joy png.png';
import { directionalFadeIn } from '../constants/motion';
import { motion } from 'framer-motion';

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
    <div className='h-full min-h-screen w-screen bg-[#00040f] text-white' id="hero">
      <div className='h-full w-full max-w-[1200px] mx-auto grid md:grid-cols-2 gap-y-7 p-10 md:p-0 pt-20 md:pt-28 justify-center items-center'>

        <div className='flex flex-col gap-1'>
          <motion.h1 variants={directionalFadeIn(0,'left',0,0.8)} initial='hidden' whileInView='show' className='text-5xl md:text-7xl font-bold text-cyan-500 my-6'>Hi, I'm <br className='lg:hidden'/>Joy Brar</motion.h1>

          <motion.h2 variants={directionalFadeIn(0,'left',0.2,0.8)} initial='hidden' whileInView='show' className='text-3xl font-semibold'>Frontend, UI/UX, Graphic Designer</motion.h2>

          <motion.p  variants={directionalFadeIn(0,'left',0.4,0.8)} initial='hidden' whileInView='show' className='text-lg text-gray-400'> and a intermediate level coder, currently pursuing my Computer Science Degree in MUJ.</motion.p>

          <motion.div variants={directionalFadeIn(0,'left',0.6,0.8)} initial='hidden' whileInView='show' className='flex w-[80%] gap-6 my-4'>
            <BsGithub className='social-icons' />
            <BsLinkedin className='social-icons' />
            <BsYoutube className='social-icons' />
          </motion.div>
        </div>

        <div className='absolute h-[500px] w-[500px] opacity-25 top-[-30%] left-[-30%] white__gradient z-0' />
        <div className='relative'>
          <div className='absolute h-[550px] w-[550px] top-[10%] right-[-20%] white__gradient z-0' />
          <div className='absolute h-[300px] w-[300px] top-0 right-[20%] blue__gradient z-0 opacity-60' />
          <motion.div variants={directionalFadeIn(0,'right',0.4,1)} initial='hidden' whileInView='show' className='bg-gradient-to-b from-gray-700/40 top-0 left-0 h-full w-full rounded-full drop-shadow-2xl border-[1px] border-cyan-500 border-opacity-100 overflow-hidden'>
            <img variants={directionalFadeIn(0,'right',0.4,1)} initial='hidden' whileInView='show' src={JoyPng} className='h-full w-full drop-shadow-xl' alt="" />
          </motion.div>

        </div>
      </div>
    </div>
  )

}

export default Hero
