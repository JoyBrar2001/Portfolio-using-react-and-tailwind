import React from 'react';
import { Tilt } from 'react-tilt';
import { easeInOut, motion } from 'framer-motion';

import { projectsList } from '../constants/data'
import { fadeIn } from '../constants/motion';

import { BsGithub, BsArrowUpLeft } from 'react-icons/bs';

const CreateCard = (props) => {

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
    <Tilt options={defaultOptions} className='relative w-[375px] h-[375px] lg:w-[450px] lg:h-[450px] rounded-lg shadow-lg  transition-all duration-75'>

      <motion.div
        variants={fadeIn(props.number)} initial='hidden' whileInView='show'
        className='w-full h-full bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] p-3 rounded-lg'>


        <a href={props.link} target='blank' className='absolute h-[50px] w-[50px] top-[-15px] right-[-15px] bg-gradient-to-br from-gray-700 to-gray-950 rounded-full flex justify-center items-center cursor-pointer'>
          <BsGithub className='text-white h-[70%] w-[70%]' />
        </a>

        <div>
          <img src={props.img} alt="Portfolio Image" className='rounded-lg' />
        </div>

        <div className='p-3'>
          <h1 className='text-2xl lg:text-3xl font-semibold uppercase my-3'>{props.title}</h1>
          <p className='text-sm lg:text-lg font-normal'>{props.description}</p>
        </div>

      </motion.div>
    </Tilt>
  );
}

const Projects = () => {
  return (
    <div className='h-full w-full bg-[#0f1829] text-gray-800 overflow-hidden p-4 pb-10'>
      <div className='h-full max-w-[1200px] w-full mx-auto'>

        <h1 className='heading text-center'>Projects</h1>
        <h2 className='sub-heading text-lg font-light mt-4'>Here are some of the web development projects I've made up until now</h2>

        <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800 flex flex-wrap justify-center items-center gap-16 mt-10'>

          {projectsList.map((project, index) => (
            <CreateCard key={index} img={project.image} title={project.title} description={project.description} link={project.link} number={index} />
          ))}

        </div>

        <div className='relative h-[60px] w-[350px] bg-white mx-auto rounded-full p-[5px] group hover:shadow-cyan-500/50 hover:shadow-lg transition-all duration-300 z-0 mt-12'>

          <div className='absolute h-[50px] w-[50px] bg-cyan-400 top-[5px] left-[5px] z-[-2] rounded-full flex justify-center items-center'>
            <BsGithub size={28} color='white' />
          </div>

          <div className='h-[50px] w-[50px] bg-cyan-400 rounded-full group-hover:ml-[290px] group-hover:rotate-90 transition-all duration-500 ease-in-out flex items-center justify-center'>
            <BsArrowUpLeft size={27} color='white' />
          </div>

          <div className='absolute w-full h-full flex top-0 left-0 justify-center items-center'>
            <p className='font-semibold tracking-wide'>Check out my Github !</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Projects;
