import React from 'react';
import { Tilt } from 'react-tilt';
import { easeInOut, motion } from 'framer-motion';
import { overviewList } from '../constants/data';
import { directionalFadeIn } from '../constants/motion';

// alt gradient -> bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] 
const OverviewCard = ({ image, title, index }) => {

    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.05,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "ease-in-out",
      }

    return (
        <Tilt options={defaultOptions} className='relative h-full w- full rounded-lg shadow-xl transition-all duration-75'>

      <motion.div
        variants={directionalFadeIn(index, 'left', 0.6, 0.6)} initial='hidden' whileInView='show'
        className='bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] w-[220px] h-[270px] rounded-lg'>
          <div className='h-full w-full p-3 rounded-lg flex flex-col items-center justify-start gap-1 hover:bg-[#2575fc33]/10  transition-bg duration-300'>
            <img src={image} alt={title} className='w-full drop-shadow-lg' />
            <h1 className='text-gray-700 font-semibold text-xl uppercase'>{title}</h1>
          </div>
      </motion.div>
    </Tilt>
    )
}

const Overview = () => {
  return (
    <div className='h-full min-h-screen w-screen bg-gradient-to-b from-[#00040f] to-[#0f1829] text-white '>
      <div className='h-full w-full flex flex-col justify-center items-center max-w-[1200px] pt-28 mx-auto text-center gap-4 p-10 pb-10'>

        <motion.h1 variants={directionalFadeIn(0,'down',0,0.5)}  initial='hidden' whileInView='show' className='heading'>Overview</motion.h1>

        <motion.h2  variants={directionalFadeIn(0,'down',0.2,0.5)}  initial='hidden' whileInView='show' className='sub-heading'>You might be wondering... who am I ?</motion.h2>

        <motion.p  variants={directionalFadeIn(0,'down',0.4,0.5)}  initial='hidden' whileInView='show'>I'm a aspiring Web Developer, with decent knowledge about HTML, CSS, and have done Javascript on a rather intermediate level, I'm currently learning react, and tailwind, and want to pursue my career in web development. Apart from that, I'm very much into Graphic Design as well, with good knowledge of Adobe Photoshop, and as for video editing, I know my way around Premiere Pro and After Effects very well.</motion.p>

        <div className='w-full h-full flex flex-wrap  gap-10 px-4 justify-center items-center mt-10 mb-20'>
          {overviewList.map((item, index) => (
            <OverviewCard image={item.image} title={item.title} key={index} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Overview;
