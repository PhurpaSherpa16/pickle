import Introduction from './landingpage/Introduction'
import Products from './landingpage/Products'
import Hero from './landingpage/Hero'
import BrandShortIntro from './landingpage/BrandShortIntro'
import WordsFromCEO from './landingpage/WordsFromCEO'
import Gallery from './landingpage/Gallery'
import Testimonials from './landingpage/Testimonials'

export default function Index() {
  return (
    <div className='min-h-screen relative overflow-hidden w-screen'>
        <Hero/>
        <Introduction/>
        <Products/>
        <BrandShortIntro/>
        <WordsFromCEO/>
        <Gallery/>
        <Testimonials/>
    </div>
  )
}
