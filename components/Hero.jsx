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

            <div className="absolute md:-top-[75%] md:-right-[35%] z-10">
                <Image
                    src="/Spotlight.png"
                    alt="spotlight"
                    width={2000}
                    height={2000}
                    className="object-contain"
                />
            </div>

            <div className="w-full  p-20 h-full absolute top-0 left-0 z-20">
                <h1 className="bg-gradient-to-b leading-tight moderniz font-extrabold md:text-9xl from-[#4E4E4E] via-white to-[#4E4E4E] bg-clip-text text-transparent text-6xl  -mb-8">
                    GRAPHIC
                </h1>
                <h1 className="bg-gradient-to-b leading-tightmoderniz font-extrabold md:text-9xl from-[#4E4E4E] via-white to-[#4E4E4E] bg-clip-text text-transparent text-6xl  -mb-8">
                    DESIGN
                </h1>
                <h1 className="bg-gradient-to-b leading-tight moderniz font-extrabold md:text-9xl from-[#4E4E4E] via-white to-[#4E4E4E] bg-clip-text text-transparent text-6xl ">
                    PORT <span className='-ml-17 -mr-2'>-</span>FOLIO
                </h1>
                <p className='text-white sf-pro font-bold md:text-2xl'>Branding · GRAPHIC · Typography · Layout</p>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-20  bg-black/70 z-30'>
                <div className='flex flex-row items-center justify-between h-full px-8'>
                    <p className='text-white md:text-2xl'>JEET MANE</p>
                    <p className='text-white md:text-2xl'>2025</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
