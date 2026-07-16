import React from 'react'
import CTAButton from '../../components/CTAButton'

export default function BrandShortIntro() {
  return (
    <div className='min-h-screen w-screen relative z-10'>
        <div className='pt-32 space-y-64 2xl:space-y-72'>
            <div className='mainDiv space-y-12 relative z-40'>
                <h1 className='text-(--dark_orange) text-center font-medium text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]!'>
                    {siteData.paragraph1}
                    <br />
                    <span className='text-(--orange) font-bold text-[clamp(2rem,4vw,3rem)] 2xl:text-[clamp(2rem,5vw,4rem)]'>{siteData.paragraph2}</span>
                </h1>
            </div>
            <div className='relative'>
                <div className='mainDiv flex items-center justify-center w-full relative z-10 -space-x-16'>
                    <Image source='/image2.webp' className='-rotate-12 z-10'/>
                    <Image source='/image1.jpeg' className='z-20'/>
                    <Image source='/image3.jpeg' className='rotate-12 z-10'/>
                </div>
                <div className='absolute top-0 left-0 w-full h-full'>
                        <img src="/chilli1.png" alt="chilli" className='absolute -top-48 left-10 blur-[5px] size-24 -rotate-95'/>
                        <img src="/chilli2.png" alt="chilli" className='absolute -top-48 right-10 blur-[2px] size-36 rotate-0'/>
                        <img src="/chicken_leg.png" alt="chicken" className='absolute -top-20 right-50 2xl:right-70 blur-[1px] size-56 -rotate-15'/>
                        <img src="/chicken_leg.png" alt="chicken" className='absolute -top-20 left-50 2xl:left-70 blur-[1px] size-56 -rotate-95'/>

                        <div className='absolute -top-56 rotate-12 left-84 
                        2xl:-top-80 2xl:left-120 w-fit h-fit'>
                            <div className='-rotate-45 relative right-12 top-9 
                            2xl:right-8 2xl:top-8 pb-8 2xl:pb-12'
                            style={{
                                fontFamily:'sunset'
                            }}>
                                <span className='text-(--orange) text-xl 2xl:text-2xl'>Local Chicken</span>
                            </div>
                            <img src="/arrow.svg" alt="arrow" className='scale-150 absolute left-10 2xl:left-10 size-32 2xl:size-36'/>
                        </div>

                        <div className='absolute -rotate-12 2xl:-top-86 right-120 -top-56 w-fit h-fit'>
                            <div className='rotate-45 relative -right-32 top-12 
                            2xl:-right-28 2xl:top-16 pb-8 2xl:pb-16'
                            style={{
                                fontFamily:'sunset'
                            }}>
                                <span className='text-(--orange) text-xl 2xl:text-2xl'>Spicy Radish</span>
                            </div>
                            <img src="/arrow_right.svg" alt="arrow" className='scale-150 absolute left-10 2xl:left-10 size-32 2xl:size-36'/>
                        </div>
                </div>
            </div>
        </div>
        <div className='relative z-30 bottom-12'>
            <img src='/wave2.svg' alt="image" className={`w-full h-30 2xl:h-40 object-cover object-center`}/>
            <div className='pb-16 2xl:pb-24 relative bg-(--orange)'>
                <div className='mainDiv flex justify-between'>
                    <div className='w-full md:w-2/3'>
                        <h1 className='text-(--white) font-medium text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]!'>Ready to Taste the Difference?</h1>
                        <p className='text-(--white) font-light'>Premium achar made with care, bold flavor, and a clean finish.</p>
                    </div>
                    <div className='w-full md:w-1/3 flex items-end justify-end'>
                        <CTAButton label='Order Now' className='bg-white border-(--white)' span='text-(--orange)
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
    paragraph2:'What’s your taste?',
    travelers : [
        '/avatar1.png',
        '/avatar2.png',
        '/avatar3.png'
    ]

}

const Image = ({source, className}) =>{
    return(
        <img src={source} alt="image" className={`${className} relative w-70 h-100 2xl:w-90 2xl:h-120 object-cover object-center border-4 border-(--white)`}/>
    )
}
