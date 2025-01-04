import HeroBgFirstImage from './assets/images/hero-first.svg?react'
import HeroBgLastImage from './assets/images/hero-last.svg?react'

import NavBar from './components/Navbar'
import SectionHero from './components/Section/SectionHero'
import SectionAbout from './components/Section/SectionAbout'
import SectionPricing from './components/Section/SectionPricing'
import SectionReview from './components/Section/SectionReview'
import SectionBrief from './components/Section/SectionBrief'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <HeroBgFirstImage className="absolute -left-96 -right-96 -z-10 md:left-0 md:right-0" />
      <main className="relative mx-auto flex max-w-[1280px] flex-col gap-8 px-4 pt-5 md:gap-32 md:px-8 md:pt-9">
        <NavBar />
        <div className="flex flex-col gap-48 pt-4">
          <SectionHero />
          <SectionAbout />
          <SectionPricing />
          <SectionReview />
          <SectionBrief />
        </div>
        <Footer />
      </main>
      <HeroBgLastImage className="absolute -left-80 -right-80 bottom-0 -z-10 md:left-0 md:right-0" />
    </div>
  )
}
