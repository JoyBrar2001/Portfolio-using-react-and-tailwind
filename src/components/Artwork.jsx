import React from 'react';
import { easeInOut, motion } from 'framer-motion';

import Gamora from '../assets/Artwork/Gamora Thanos.jpg';
import GamoraOriginal from '../assets/Artwork/Gamora Thanos - Original.png';
import Thor from '../assets/Artwork/Thor - 1.jpg';
import ThorOriginal from '../assets/Artwork/Thor Light Streak - Final.png';
import Batman from '../assets/Artwork/The Batman - Double Exposure.png';
import BatmanOriginal from '../assets/Artwork/The Batman - Before.png'
import Dream from '../assets/Artwork/Dream.png';
import Lonely from '../assets/Artwork/You Look Lonely, I can fix that.png';

import { BsArrowUpLeft, BsInstagram } from 'react-icons/bs'

const CreateArtworkCard = (props) => {

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: props.number % 2 == 0 ? 0 : 0.3, ease: easeInOut }}
            className='w-[360px] h-[540px] group shadow-xl bg-gradient-to-b from-[#2575fc33] to-[#6a11cb00] bg-opacity-10 rounded-lg'>
            
            <div className='flex flex-col justify-center items-center w-full h-full hover:bg-[#2575fc33]/10 transition-bg duration-300  px-4 py-6 rounded-lg'>

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

    const artworkList = [
        {
            imgBefore: GamoraOriginal,
            imgAfter: Gamora,
            title: "Gamora's What if ?",
            desc: "An Edit on Gamora as seen in Marvel's What is ? Series",
        },
        {
            imgBefore: Thor,
            imgAfter: ThorOriginal,
            title: "Thor Light Streak ",
            desc: "A Thor wallpaper, made with the use of some lightstreak effects",
        },
        {
            imgBefore: BatmanOriginal,
            imgAfter: Batman,
            title: "Batman Double Exposure",
            desc: "A poster made for The Batman (2022) using a method - Double Exposure",
        },
        {
            imgBefore: Lonely,
            imgAfter: Dream,
            title: "Liquid Text Projects",
            desc: "A few of my posters made by using the concept of liquified Text",
        },
    ];

    return (
        <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800'>
            <div className='h-full max-w-[1200px] w-full mx-auto p-4'>

                <h1 className='heading pt-16 pb-1'>Artwork</h1>

                <h2 className='sub-heading text-lg font-light mb-12'>Here are some of my artworks I've made as a Graphic Designer</h2>

                <div className='flex flex-wrap gap-20 max-w-[1200px] justify-center items-center mx-auto'>

                    {artworkList.map((artwork, index) => (
                        <CreateArtworkCard number={index} imgBefore={artwork.imgBefore} imgAfter={artwork.imgAfter} title={artwork.title} desc={artwork.desc} />
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
