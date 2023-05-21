import portfolio from '../assets/Projects/portfolio.png';
import weatherApp from '../assets/Projects/weatherapp.png';
import portfolio3d from '../assets/Projects/portfolio3d.png';
import moviesapp from '../assets/Projects/moviesapp.png';
import shoesUI from '../assets/Projects/shoeswebsite.png';

import Gamora from '../assets/Artwork/Gamora Thanos.jpg';
import GamoraOriginal from '../assets/Artwork/Gamora Thanos - Original.png';
import Thor from '../assets/Artwork/Thor - 1.jpg';
import ThorOriginal from '../assets/Artwork/Thor Light Streak - Final.png';
import Batman from '../assets/Artwork/The Batman - Double Exposure.png';
import BatmanOriginal from '../assets/Artwork/The Batman - Before.png'
import Dream from '../assets/Artwork/Dream.png';
import Lonely from '../assets/Artwork/You Look Lonely, I can fix that.png';

import Photoshop from '../assets/Software Logos/Photoshop.png';
import PremierePro from '../assets/Software Logos/PremierePro.png'
import WebDev from '../assets/Software Logos/WebDev.png'
import Cpp from '../assets/Software Logos/Cpp.png'

import Shakira from '../assets/Videos/Shakira Edit.mp4'
import Multiverse from '../assets/Videos/Multiverse of Madness - 5.mp4'
import BattleRoyale from '../assets/Videos/Battle Royale.mp4'
import ApasheVerse from '../assets/Videos/Apashe Verse.mp4'

export const overviewList = [
    {
        image: Photoshop,
        title: 'Graphic Designer',
    },
    {
        image: PremierePro,
        title: 'Video Editor',
    },
    {
        image: WebDev,
        title: 'Web Developer',
    },
    {
        image: Cpp,
        title: 'C++ Programmer',
    },
]

export const projectsList = [
    {
        image: portfolio3d,
        title: '3D Portfolio',
        description: "Here's 3D Portolio, I made using React and Three js, using tailwind and framer motion to stylize the website,  inspired by Javascript Mastery on YouTube.",
        link: 'https://github.com/JoyBrar2001/3D-Portfolio',
    },
    {
        image: shoesUI,
        title: 'Nike Shoes UI',
        description: "A very stylish UI design for Nike's new shoes, coming in a fully functional colr changing feature as well :)",
        link: 'https://github.com/JoyBrar2001/Animated-Shoe-Card-with-Colors',
    },
    {
        image: moviesapp,
        title: 'TvFlix - Movies Website',
        description: "A movie streaming website, TvFlix, made by using the TMDB API, which fetches the details of the latest movies, and coming with a functioning search bar as well.",
        link: 'https://github.com/JoyBrar2001/Movies-Website-Using-TMDB',
    },
    {
        image: portfolio,
        title: 'My First Portfolio Website',
        description: "Here's a simple portfolio website I made using Vanilla HTML, CSS, and Javascript, this was my first portfolio, which is why its's rather simple :p",
        link: 'https://github.com/JoyBrar2001/JoyBrar2001.github.io',
    },
    {
        image: weatherApp,
        title: 'Weather App',
        description: "A Weather App, made using the Open Weather API, which fetches the weather details of any entered city, or your current location as well.",
        link: 'https://github.com/JoyBrar2001/Weather-App-with-API',
    },
];

export const artworkList = [
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

export const VideosList = [
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
    {
      title: 'Battle Royale Multifandom',
      creator: '@joybrar',
      videoSrc : BattleRoyale,
      ytLink : 'https://youtu.be/i9gZbJucHjw',
    },
    {
      title: "Apashe's Verse",
      creator: '@joybrar & @MKedits',
      videoSrc : ApasheVerse,
      ytLink : 'https://youtu.be/i9gZbJucHjw',
    },
  ]