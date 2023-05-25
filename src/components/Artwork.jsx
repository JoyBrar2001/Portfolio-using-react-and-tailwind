import React from 'react';
import { delay, easeInOut, motion } from 'framer-motion';

import { BsArrowUpLeft, BsInstagram } from 'react-icons/bs'
import { artworkList } from '../constants/data'
import { fadeIn } from '../constants/motion'

const CreateArtworkCard = (props) => {
    return (
        <motion.div
            variants={fadeIn(props.number)} initial='hidden' whileInView='show'
            className='w-[360px] h-[540px] group shadow-xl bg-gradient-to-b from-[#2575fc33] to-[#6a11cb00] bg-opacity-10 rounded-lg'>
            
            <div className='flex flex-col justify-center items-center w-full h-full hover:bg-[#2575fc33]/10 transition-bg duration-300 px-4 py-6 rounded-lg'>

                <div className='mx-auto px-3 py-1 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/50 z-10'>
                    <h2 className='sub-heading'>{props.title}</h2>
                </div>

                <div className='relative w-full h-[400px] flex justify-center items-center'>
                    <img src={props.imgBefore} alt="Before" className='image-before' />
                    <img src={props.imgAfter} alt="After" className='image-after' />
                </div>

                <div className='w-[75%] mx-auto'>
                    <p className='sub-text'>{props.desc}</p>
                </div>
            </div>
        </motion.div>
    );
}

const Artwork = () => {
    return (
        <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800'>
            <div className='h-full max-w-[1200px] w-full mx-auto p-4'>

                <h1 className='heading pt-16 pb-1'>Artwork</h1>

                <h2 className='sub-heading text-lg font-light mb-12'>Here are some of my artworks I've made as a Graphic Designer</h2>

                <div className='flex flex-wrap gap-20 max-w-[1200px] justify-center items-center mx-auto'>

                    {artworkList.map((artwork, index) => (
                        <CreateArtworkCard key={index} number={index} imgBefore={artwork.imgBefore} imgAfter={artwork.imgAfter} title={artwork.title} desc={artwork.desc} />
                    ))}

                </div>

                <div className='relative h-[60px] w-[350px] bg-white mx-auto rounded-full p-[5px] group hover:shadow-cyan-500/50 hover:shadow-lg transition-all duration-300 z-0 my-12'>

                    <div className='absolute h-[50px] w-[50px] bg-cyan-400 top-[5px] left-[5px] z-[-2] rounded-full flex justify-center items-center'>
                        <BsInstagram size={28} color='white' />
                    </div>

                    <div className='h-[50px] w-[50px] bg-cyan-400 rounded-full group-hover:ml-[290px] group-hover:rotate-90 transition-all duration-500 ease-in-out flex items-center justify-center'>
                        <BsArrowUpLeft size={27} color='white' />
                    </div>

                    <div className='absolute w-full h-full flex top-0 left-0 justify-center items-center'>
                        <p className='font-semibold tracking-wide'>Check out my Instagram !</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Artwork;
