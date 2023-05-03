import React from 'react';
import Gamora from '../assets/Artwork/Gamora Thanos.jpg';
import GamoraOriginal from '../assets/Artwork/Gamora Thanos - Original.png';
import Thor from '../assets/Artwork/Thor - 1.jpg';
import ThorOriginal from '../assets/Artwork/Thor Light Streak - Final.png';

const CreateArtworkCard = (props) => {
    return (
        <div className='w-[360px] h-[540px] rounded-md flex flex-col justify-center items-center group shadow-xl px-4 py-6 bg-gradient-to-b from-[#2575fc33] to-[#6a11cb00] bg-opacity-10'>
            <div className='w-[full] mx-auto px-3 py-1 rounded-xl bg-gradient-to-t from-[#FFFFFF00] to-[#FFFFFF22] shadow-2xl border border-[#FFFFFF66]'>
                <h2 className='sub-heading text-[#00ebdb]'>{props.title}</h2>
            </div>

            <div className='relative w-full h-[400px] flex justify-center items-center'>
                <img src={props.imgBefore} alt="Before" className='image-before' />
                <img src={props.imgAfter} alt="After" className='image-after' />
            </div>

            <div className='w-[75%] mx-auto'>
                <p className='sub-text'>{props.desc}</p>
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
            desc: "An Edit on Gamora as seen in Marvel's What is ? Series",
        },
        {
            imgBefore: Thor,
            imgAfter: ThorOriginal,
            title: "Thor Light Streak ",
            desc: "A Thor wallpaper, made with the use of some lightstreak effects",
        },
    ];

    return (
        <div className='h-full min-h-screen w-full bg-[#0f1829] text-gray-800'>
            <div className='h-full max-w-[1200px] w-full mx-auto p-4'>

                <h1 className='heading pt-16 pb-1'>Artwork</h1>

                <h2 className='sub-heading text-lg font-light mb-12'>Here are some of my artworks I've made as a Graphic Designer</h2>

                <div className='flex flex-wrap gap-12 max-w-[1200px] justify-center items-center mx-auto'>

                    {artworkList.map((artwork, index) => (
                        <CreateArtworkCard imgBefore={artwork.imgBefore} imgAfter={artwork.imgAfter} title={artwork.title} desc={artwork.desc} />
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Artwork;
