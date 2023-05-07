import React from 'react';
import { Tilt } from 'react-tilt';
import { easeInOut, motion } from 'framer-motion';

const OverviewCard = () => {

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
        <Tilt options={defaultOptions} className='relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-lg shadow-lg  transition-all duration-75'>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className='w-full h-full bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] p-3 rounded-lg'>


        

      </motion.div>
    </Tilt>
    )
}

const Overview = () => {
  return (
    <div className='h-full min-h-screen w-screen bg-[#0f1829] text-white'>
      <div className='h-full w-full flex flex-col justify-center items-center max-w-[1200px] pt-28 mx-auto text-center gap-4 p-10 pb-10'>

        <h1 className='heading'>Overview</h1>

        <h2 className='sub-heading'>You might be wondering... who am I ?</h2>

        <p>I'm a aspiring Web Developer, with decent knowledge about HTML, CSS, and have done Javascript on a rather intermediate level, I'm currently learning react, and tailwind, and want to pursue my career in web development. Apart from that, I'm very much into Graphic Design as well, with good knowledge of Adobe Photoshop, and as for video editing, I know my way around Premiere Pro and After Effects very well.</p>

        <OverviewCard />

      </div>
    </div>
  );
}

export default Overview;
