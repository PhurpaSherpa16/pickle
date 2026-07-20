import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";


export default function WordsFromCEO() {
  return (
    <div className='min-h-fit w-screen relative z-10 bottom-12'>
        <div className='flex h-full items-end md:items-center justify-center'>
            <div className='h-full w-full md:w-1/2'>
                <img src="https://i.pinimg.com/736x/ec/3e/72/ec3e723c22531ee345441927e59e8577.jpg" alt="CEO Image" className='h-screen md:h-[80vh] lg:h-screen w-full object-cover object-center 
                filter grayscale-100'/>
            </div>
            <div className='bg-(--black)/40 md:bg-transparent backdrop-blur-lg absolute mainDiv h-fit py-32 space-y-12 md:relative z-40 w-full md:w-1/2 flex items-center justify-center'>   
                <BiSolidQuoteLeft className='absolute size-40 md:size-100 z-0 text-(--offWhite)/30 md:text-(--offWhite) left-10 md:left-20 top-16 md:-top-10 2xl:left-40'/>
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <p className='text-[clamp(1rem,3vw,2rem)]!  md:w-lg 2xl:w-xl text-center relative z-10
                    font-serif italic text-(--white) md:text-(--black)'>
                        We still grind spices on stone, 
                        dry vegetables on bamboo mats, and 
                        ferment in clay pots buried in cool earth.
                    </p>
                    <p className='text-xs text-(--white) md:text-(--black)'>- CEO. John Doe</p>
                </div>
            </div>
        </div>
    </div>
  )
}
