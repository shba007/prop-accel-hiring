import HeroImage_1 from '../../assets/images/image-1.jpg'
import HeroImage_2 from '../../assets/images/image-2.jpg'

import CTAButton from '../CTAButton'

import PodCastIcon from '../../assets/icons/podcast.svg?react'
import MicrophoneIcon from '../../assets/icons/microphone.svg?react'
import DotGridImage from '../../assets/images/dot-grid.svg?react'

export default function SectionHero() {
  return (
    <section id="hero" className="flex flex-col gap-20 text-lg text-white md:flex-row md:gap-0">
      <div className="mx-auto flex flex-col items-center px-2 sm:w-full md:w-1/2 md:items-start">
        <h1 className="max-w-[580px] text-center text-2xl font-bold leading-snug sm:text-4xl md:text-left">
          Learn How to Launch a <br /> Successful Podcast
        </h1>
        <p className="mb-14 mt-6 max-w-[433px] text-center text-base leading-relaxed sm:text-lg md:mb-20 md:text-left">
          Master content planning, sound quality, engaging delivery, interviews, promotion, and analytics for podcast success.
        </p>
        <CTAButton>Sign Up Now</CTAButton>
      </div>
      <div className="relative mx-auto grid w-[90%] grid-cols-11 grid-rows-5 md:w-1/2">
        <DotGridImage className="-z-10 col-span-9 col-start-2 row-span-4 row-start-2 translate-x-[10%]" />
        <img src={HeroImage_2} className="col-span-9 col-start-2 row-span-5 row-start-1 aspect-[7/4] rounded-[10px] object-cover" />
        <img src={HeroImage_1} className="col-span-9 col-start-1 row-span-4 row-start-2 aspect-[7/4] rounded-[10px] object-cover" />
        <PodCastIcon className="absolute -right-[4.5rem] bottom-[6.5rem] -rotate-[16.83deg] scale-[60%] md:scale-[80%]" />
        <MicrophoneIcon className="absolute -bottom-10 -right-6 rotate-[15.14deg] scale-[60%] md:scale-[80%]" />
      </div>
    </section>
  )
}
