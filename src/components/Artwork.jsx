import React from 'react';
import Gamora from '../assets/Artwork/Gamora Thanos.jpg';
import GamoraOriginal from '../assets/Artwork/Gamora Thanos - Original.png';
import Thor from '../assets/Artwork/Thor - 1.jpg';
import ThorOriginal from '../assets/Artwork/Thor Light Streak - Final.png';

const CreateArtworkCard = (props) => {
    return (
        <div className='w-[360px] h-[500px] rounded-md bg-white bg-opacity-10 flex flex-col justify-center items-center group shadow-xl'>

            <div className='relative w-full h-[400px] flex justify-center items-center'>
                <img src={props.imgBefore} alt="Before" className='image-before' />
                <img src={props.imgAfter} alt="After" className='image-after' />
            </div>

            <div>
                <h2 className='sub-heading'>{props.title}</h2>
            </div>
        </div>
    );
}

const Artwork = () => {

    const artworkList = [
        {
            imgBefore: GamoraOriginal,
            imgAfter: Gamora,
            title: "Gamora's What if ?",
        },
        {
            imgBefore: Thor,
            imgAfter: ThorOriginal,
            title: "Thor Light Streak ",
        },
    ];

    return (
        <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800'>
            <h1 className='heading pt-16 pb-1'>Artwork</h1>

            <h2 className='sub-heading text-lg font-light mb-12'>Here are some of my artworks I've made as a Graphic Designer</h2>

            <div className='flex flex-wrap gap-12 max-w-[1200px] justify-center items-center mx-auto'>

                {artworkList.map((artwork, index) => (
                    <CreateArtworkCard imgBefore = {artwork.imgBefore} imgAfter = {artwork.imgAfter} title = {artwork.title}/>
                ))}

            </div>

        </div>
    );
}

export default Artwork;
