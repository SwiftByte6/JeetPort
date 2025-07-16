import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div
            className='h-screen w-full relative overflow-hidden'
            style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute h-screen w-full top-0 left-0 bg-black/88'></div>

            <div
                className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg]  opacity-50">
                <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
                <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
                <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
            </div>
            <div
                className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg]  opacity-50">
                <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
                <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
                <div className="w-[10rem] h-[20rem]  bg-linear-90 from-white to-blue-300"></div>
            </div>
            <div
                className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg]  opacity-50">
                <div className="w-[10rem] h-[30rem]  bg-linear-90 from-white to-blue-300"></div>
                <div className="w-[10rem] h-[30rem]  bg-linear-90 from-white to-blue-300"></div>
                <div className="w-[10rem] h-[30rem]  bg-linear-90 from-white to-blue-300"></div>
            </div>


            <div className="w-full  md:p-12 lg:p-20 flex flex-col items-center justify-center md:items-start md:justify-start h-full absolute top-0 left-0 z-20 text-center md:text-left">
                <h1 className="bg-gradient-to-b md:leading-tight moderniz font-extrabold text-4xl sm:text-2xl md:text-5xl lg:text-8xl  from-[#4E4E4E] via-white to-[#4E4E4E] bg-clip-text text-transparent   md:-mb-8">
                    GRAPHIC
                </h1>
                <h1 className="bg-gradient-to-b md:leading-tightmoderniz font-extrabold text-4xl  sm:text-2xl md:text-5xl lg:text-8xl from-[#4E4E4E] via-white to-[#4E4E4E] bg-clip-text text-transparent   md:-mb-8">
                    DESIGN
                </h1>
                <h1 className="bg-gradient-to-b md:leading-tight moderniz font-extrabold text-4xl  sm:text-2xl md:text-5xl lg:text-8xl from-[#4E4E4E] via-white to-[#4E4E4E] bg-clip-text text-transparent  ">
                    PORT <span className='md:-ml-14 -ml-6 md:-mr-0'>-</span>FOLIO
                </h1>
                <p className='text-white sf-pro font-bold text-md md:text-2xl'>Branding · Graphics · Typography · Layout</p>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-20   z-30'>
                <div className='flex flex-row items-center justify-between h-full px-8'>
                    <p className='text-white md:text-2xl sf-pro'>JEET MANE</p>
                    <p className='text-white md:text-2xl sf-pro'>2025</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
