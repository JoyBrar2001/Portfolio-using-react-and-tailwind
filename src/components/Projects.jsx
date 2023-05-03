import React from 'react';
import { Tilt } from 'react-tilt';
import portfolio from '../assets/Projects/portfolio.png';
import weatherApp from '../assets/Projects/weatherapp.png';
import animatedForm from '../assets/Projects/loginandsigninform.png';
import { BsGithub } from 'react-icons/bs';

const CreateCard = (props) => {

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "ease-in-out",
  }

  return (
    <Tilt options={defaultOptions} className='w-[450px] h-[450px] bg-white p-3 rounded-lg shadow-lg bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] transition-all duration-75'>

      <div>

        <div className='absolute h-[50px] w-[50px] top-[-15px] right-[-15px] bg-gradient-to-br from-gray-700 to-gray-950 rounded-full flex justify-center items-center cursor-pointer' onClick={() => window.open(props.link, "_blank")}>
          <BsGithub className='text-white h-[70%] w-[70%]' />
        </div>

        <img src={props.img} alt="Portfolio Image" className='rounded-lg' />
      </div>

      <div className='p-3'>
        <h1 className='text-3xl font-semibold uppercase my-3'>{props.title}</h1>
        <p className='text-lg font-normal'>Here's a simple portfolio website I made using Vanilla HTML, CSS, and Javascript, this was my first portfolio, which is why its's rather simple :p</p>
      </div>

    </Tilt>
  );
}

const Projects = () => {

  const projectsList = [
    {
      image: portfolio,
      title: 'My First Portfolio Website',
      description: "Here's a simple portfolio website I made using Vanilla HTML, CSS, and Javascript, this was my first portfolio, which is why its's rather simple :p",
      link: 'https://github.com/JoyBrar2001/JoyBrar2001.github.io',
    },
    {
      image: weatherApp,
      title: 'Weather App',
      description: "Here's a simple portfolio website I made using Vanilla HTML, CSS, and Javascript, this was my first portfolio, which is why its's rather simple :p",
      link: 'https://github.com/JoyBrar2001/Weather-App-with-API',
    },
    {
      image: animatedForm,
      title: 'Animated Login/Sign up form',
      description: "Here's a simple portfolio website I made using Vanilla HTML, CSS, and Javascript, this was my first portfolio, which is why its's rather simple :p",
      link: 'https://github.com/JoyBrar2001/Login-and-Sign-in-Animated-Form',
    },
  ];

  return (
    <div className='h-full w-full bg-[#0f1829] text-gray-800 overflow-hidden p-4 pb-10'>
      <div className='h-full max-w-[1200px] w-full mx-auto'>

        <h1 className='heading text-center'>Projects</h1>
        <h2 className='sub-heading text-lg font-light mt-4'>Here are some of the web development projects I've made up until now</h2>

        <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800 flex flex-wrap justify-center items-center gap-16 mt-10'>

          {projectsList.map((project, index) => (
            <CreateCard img={project.image} title={project.title} description={project.description} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;
