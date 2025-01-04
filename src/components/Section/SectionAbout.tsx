import BgMic from '../../assets/images/bg-mic.png'

import AboutCard from '../AboutCard'
import CTAButton from '../CTAButton'

export default function SectionAbout() {
  return (
    <section id="about" className="flex min-h-screen flex-col gap-12 md:flex-row-reverse md:gap-20">
      <img src={BgMic} className="absolute right-0 -z-10 max-w-[75%] -translate-y-48 opacity-20 md:-translate-y-64" />
      <div className="my-auto flex w-full flex-col items-center md:w-2/5 md:items-start">
        <h1 className="max-w-[580px] text-2xl font-bold md:text-4xl">About the Course</h1>
        <p className="mb-6 mt-4 max-w-[433px] text-center text-base leading-relaxed md:mb-12 md:mt-6 md:text-left md:text-lg">
          You will learn content planning, sound quality, engaging delivery, interviews, promotion, analytics, and more to create impactful podcasts that captivate audiences worldwide.
        </p>
        <CTAButton>Explore Now</CTAButton>
      </div>
      <div className="w-full md:w-3/5">
        <div className="mx-auto grid w-fit grid-cols-2 grid-rows-2 items-center justify-center gap-x-4 md:mr-auto md:gap-4">
          <AboutCard
            title="Content Planning"
            description="Develop a compelling podcast concept and outline episodes in advance to maintain a structured and engaging format."
            className="col-start-1 row-start-1 mb-4 md:mb-8"
          />
          <AboutCard
            title="Sound Quality"
            description="Invest in high-quality audio equipment, find a quiet recording space, and master editing techniques for clear and professional sound."
            className="col-start-2 row-start-1 mt-4 md:mt-8"
          />
          <AboutCard
            title="Engaging Delivery"
            description="Speak clearly, use an inviting tone, and engage the audience with a conversational approach to captivate listeners."
            className="col-start-1 row-start-2 mb-4 md:mb-8"
          />
          <AboutCard
            title="Feedback & Improvement"
            description="Seek feedback from listeners, analyze performance metrics, and continuously refine your podcast to meet audience preferences."
            className="col-start-2 row-start-2 mt-4 md:mt-8"
          />
        </div>
      </div>
    </section>
  )
}
