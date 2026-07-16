import React from 'react'
import CTAButton from '../../components/CTAButton'
import { IoGift } from "react-icons/io5";

export default function BrandShortIntro() {
  return (
    <div className='min-h-screen w-screen relative z-10'>
        <div className='pt-32 space-y-40 2xl:space-y-52'>
            <div className='mainDiv space-y-12 relative z-40'>
                <h1 className='text-(--dark_orange) text-center font-medium text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]!'>
                    {siteData.paragraph1}
                    <br />
                    <span className='text-(--orange) font-bold text-[clamp(2rem,4vw,3rem)] 2xl:text-[clamp(2rem,5vw,4rem)]'>{siteData.paragraph2}</span>
                </h1>
            </div>
            <div className='relative'>
                <div className='mainDiv flex items-center justify-center w-full relative z-40 -space-x-16'>
                    <Image source='/achar_pack.png' className='md:w-200 md:h-160 2xl:w-248 2xl:h-200 relative z-10 filter brightness-90'/>
                </div>
                <div className='absolute top-30 left-0 w-full h-full'>
                        <img src="/chilli1.png" alt="chilli" className='absolute -top-48 left-10 blur-[5px] size-24 -rotate-95 filter brightness-90'/>
                        <img src="/chilli2.png" alt="chilli" className='text-(--orange) absolute -top-48 right-10 blur-[2px] size-36 rotate-0 filter brightness-90'/>
                        <img src="/chicken_leg.png" alt="chicken" className='absolute -top-20 right-50 2xl:right-70 blur-[1px] size-56 -rotate-15 filter brightness-90'/>
                        <img src="/chicken_leg.png" alt="chicken" className='absolute -top-20 left-50 2xl:left-70 blur-[1px] size-56 -rotate-95 filter brightness-90'/>

                        <div className='absolute 
                        scale-80 md:scale-100
                        -top-56 rotate-12 -left-4
                        md:left-30 md:-top-56 
                        lg:left-80 lg:-top-46 
                        2xl:-top-70 2xl:left-90 w-fit h-fit'>
                            <div className='-rotate-45 relative'
                            style={{
                                fontFamily:'sunset'
                            }}>
                                <span className='text-(--orange) text-xl 2xl:text-2xl'>Local Chicken</span>
                            </div>
                            <img src="/arrow.svg" alt="arrow" className='2xl:scale-150 absolute -top-2 left-20 
                            2xl:left-32 2xl:top-8 size-32 2xl:size-36'/>
                        </div>

                        <div className='absolute 
                        scale-80 md:scale-100
                        -rotate-12 2xl:-top-86
                        right-20 -top-60
                        md:right-70 md:-top-60
                        lg:right-120 lg:-top-56 
                        w-fit h-fit'>
                            <div className='rotate-45 relative 
                            -right-32 top-8 
                            2xl:-right-28 2xl:top-16'
                            style={{
                                fontFamily:'sunset'
                            }}>
                                <span className='text-(--orange) text-xl 2xl:text-2xl'>Spicy Radish</span>
                            </div>
                            <img src="/arrow_right.svg" alt="arrow" className='2xl:scale-150 absolute 
                            top-8 left-16 
                            2xl:top-20 2xl:-left-8 size-32 2xl:size-36'/>
                        </div>
                </div>
            </div>
        </div>
        <div className='relative z-30 bottom-12'>
            <div className='flex items-center justify-center absolute -top-20 left-1/2 -translate-x-1/2 z-0'>
                <div className='bg-black/80 h-30 w-130 rounded-full blur-3xl'/>
            </div>
            <img src='/wave2.svg' alt="image" className={`w-full h-30 2xl:h-40 object-cover object-center relative z-10`}/>
            <div className='pb-12 md:pb-20 2xl:pb-28 md:pt-12 relative bg-(--orange)'>
                <div className='mainDiv flex flex-col md:flex-row justify-between space-y-4'>
                    <div className='w-full md:w-2/3'>
                        <h1 className='text-(--white) font-medium text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]!'>Ready to Gift Some Heat?</h1>
                        <p className='text-(--white) font-light'>Premium achar made with care, bold flavor, and a clean finish.</p>
                    </div>
                    <div className='w-full md:w-1/3 flex md:items-end md:justify-end'>
                        <CTAButton label='Gift Some Now' className='bg-white border-(--white)' span='text-(--orange)
                    group-hover:text-(--white) ' className2='bg-(--orange)' className3='text-(--white)'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const siteData = {
    paragraph1:'Locally sourced Meat/Vegetables Minimal ingredients, maximum flavor.',
    paragraph2:'Gift Real Flavor!',
    travelers : [
        '/avatar1.png',
        '/avatar2.png',
        '/avatar3.png'
    ]

}

const Image = ({source, className}) =>{
    return(
        // border-(--white) border-4
        <img src={source} alt="image" className={`${className} relative md:w-70 md:h-100 2xl:w-90 2xl:h-120 object-cover
         object-center`}/>
    )
}
