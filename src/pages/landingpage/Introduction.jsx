import CTAButton from '../../components/CTAButton'
import { FaStar } from "react-icons/fa";

export default function Introduction() {
  return (
    <div className='min-h-fit w-screen relative z-10'>
        <div className='mainDiv pt-24 pb-32 md:py-32 md:mb-16 space-y-8 md:space-y-12 relative z-40'>
            <h1 className='text-center md:text-left text-(--dark_orange) font-medium text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]!'>You want achar that tastes <br className='hidden md:block'/> authentic, feels clean, & <br className='hidden md:block'/>
                <span className='text-(--orange) text-[clamp(2rem,4vw,3rem)] 2xl:text-[clamp(2rem,5vw,4rem)]'>fits a premium everyday meal.</span>
            </h1>
            <div className='space-y-4'>
                <div className='w-full md:w-2xl'>
                    <p className='text-(--dark_orange) text-center md:text-left text-[clamp(0.8rem,1vw+0.8rem,1.8rem)] 2xl:text-[clamp(1.2rem,1vw+1rem,2rem)] font-medium'>{siteData.paragraph1}</p>
                </div>
                <div className='w-full md:w-2xl 2xl:w-3xl'>
                    <p className='text-(--dark_orange) text-center md:text-left text-[clamp(0.8rem,1vw+0.8rem,1.8rem)] 2xl:text-[clamp(1.2rem,1vw+1rem,2rem)] font-extralight'>{siteData.paragraph2}</p>
                </div>
                <div className='flex items-center gap-4 justify-center md:justify-start'>
                    <Review rating={4}/>
                    <div className='flex items-center -space-x-2'>
                        {siteData.travelers.map((traveler, index) => (
                            <img key={index} src={traveler} alt="" className='size-8 rounded-full border border-(--white)' />
                        ))}
                    </div>
                </div>
            </div>
            <div className='space-y-4 flex items-center justify-center md:justify-start'>
                <CTAButton label='Order Now'/>
            </div>
        </div>
        <div className='absolute inset-0 mainDiv flex items-center justify-end'>
            <img src="https://ik.imagekit.io/k05httq0p/Pickle/g5.png?updatedAt=1784219159096" alt="image" className='absolute 
            right-60 -bottom-40
            md:right-60 md:bottom-10 2xl:right-80 2xl:bottom-20 blur-xs md:blur-none
            w-70 h-100 2xl:w-90 2xl:h-120 object-cover object-center z-20 border-4 border-(--white)'/>
            <img src="https://ik.imagekit.io/k05httq0p/Pickle/g1.jpg?updatedAt=1784219150321" alt="image" className='absolute
            -right-20 -bottom-40 md:right-30 md:bottom-60 
            2xl:right-40 2xl:bottom-80 blur-[20px] md:blur-[2px]
            w-65 h-90 2xl:w-80 2xl:h-100 object-cover object-center z-10 
            filter grayscale-100 rotate-12 border-4 border-(--white)'/>
            <img src="https://ik.imagekit.io/k05httq0p/Pickle/g7.jpg?updatedAt=1784219151626" alt="image" className='absolute
            hidden md:block
            right-0 bottom-120 2xl:right-0 2xl:bottom-130 blur-2xl md:blur-xs
            w-60 h-80 2xl:w-80 2xl:h-100 object-cover object-center
            filter grayscale-100 -rotate-12 border-4 border-(--white)'/>
        </div>
    </div>
  )
}

const siteData = {
    paragraph1:'Our achar is made with local ingredients, no preservatives, and no added color — so you get honest taste and quality in every jar.',
    paragraph2:'No shortcuts. Just hand-roasted ingredients, slow-curing, and bold flavor.',
    travelers : [
        '/avatar1.png',
        '/avatar2.png',
        '/avatar3.png'
    ]

}

export const Review = ({rating}) =>{
    return(
        <div className='flex gap-8'>
            <div className='flex items-center gap-2'>
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={index < rating ? "text-yellow-400" : "text-gray-400"}/>
                ))}
            </div>
        </div>
    )
}