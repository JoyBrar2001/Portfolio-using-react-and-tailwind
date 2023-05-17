import React from 'react'
import Shakira from '../assets/Videos/Shakira Edit.mp4'
import Multiverse from '../assets/Videos/Multiverse of Madness - 5.mp4'
import JBLogo from '../assets/JB Logo with Glow.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const VideoCard = (props) => {
  return (
    <motion.div 
      variants={fadeIn(props.i)}
      initial='hidden' 
      whileInView='show' 
      className='w-[22rem] aspect-[10/16] border-2 border-[#ff9ba0] rounded-2xl overflow-hidden relative flex flex-col justify-end items-center mx-auto group'
    >

      <div className='absolute screen-overlay h-full w-full z-10' />

      <div className='absolute h-[33rem] w-[20rem] border-2 border-[#ff9ba0] z-10 mx-4 my-4 rounded-xl opacity-25' />

      <div className='absolute h-full w-full'>
        <video src={props.videoSrc} className='absolute h-full object-cover' autoPlay loop muted></video>
      </div>

      <div className='absolute top-12 w-36 h-16 px-3 py-2 text-center z-20 bg-[#ff9ba066] border-2 border-[#ff9ba0] rounded-lg flex justify-center items-center text-white video-text-shadow
      translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out
      '>
        <a href={props.ytLink} target='_blank'>
          <h2>Click me to see the full video!</h2>
        </a>
      </div>

      <div className='z-20 text-center font-nunito flex flex-col justify-center items-center mb-12'>
        <img src={JBLogo} className='w-20' alt="JB Logo here" />
        <h1 className='text-white text-4xl font-bold video-text-shadow'>{props.title}</h1>
        <h2 className='text-white text-lg font-normal video-text-shadow mt-4'>{props.creator}</h2>
      </div>

    </motion.div>
  )
}

const Fanvids = () => {

  const VideosList = [
    {
      title: 'Shakira Multifandom',
      creator: '@joybrar & @morph',
      videoSrc : Shakira,
      ytLink : 'https://youtu.be/Vpu-hgAGqlY',
    },
    {
      title: 'Multiverse of Madness',
      creator: '@joybrar',
      videoSrc : Multiverse,
      ytLink : 'https://youtu.be/i9gZbJucHjw',
    },
  ]

  return (
    <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800'>
      <div className='h-full max-w-[1200px] w-full mx-auto p-4'>
        <h1 className='heading'>Fanvids</h1>

        <h2 className='sub-heading text-lg font-light mb-12'>Here are some of my video editing projects, which are uploaded on my Youtube channel as well.</h2>

        <div className='grid w-full max-w-[1024px] mx-auto md:grid-cols-2 justify-center items-center gap-10 md:gap-0'>

          {VideosList.map((video, index) => (
            <VideoCard key={index} i={index} title={video.title} creator={video.creator} videoSrc={video.videoSrc} ytLink={video.ytLink} />
          ))}

        </div>

      </div>
    </div>
  )
}

export default Fanvids
