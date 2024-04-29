import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/slide-1.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <h1 className='w-2/3 mx-auto text-center text-white text-6xl font-bold'>Discover Your CreativeSanctuary Artisanal<Typewriter words={[`  Delights Await`]} cursor loop = {false}></Typewriter></h1>
                        
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/slide-2.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <h1 className='w-2/3 mx-auto text-white text-6xl font-bold'>Crafting Connections, Inspiring Creations:<Typewriter words={[` Your Artistic Haven`]} cursor loop = {false}></Typewriter></h1>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/slide-3.jpg" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h1 className='w-2/3 mx-auto text-white text-6xl font-bold'>Embrace Your Imagination:<Typewriter words={[` Artistry and Craftsmanship United`]} cursor loop = {false}></Typewriter></h1>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;