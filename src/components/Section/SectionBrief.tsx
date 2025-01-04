import CTAButton from '../CTAButton'

export default function SectionBrief() {
  return (
    <section id="brief" className="mb-16 flex flex-col items-center gap-6">
      <h2 className="w-fit max-w-[80%] text-center text-2xl font-bold md:text-4xl">We have what you’re looking for</h2>
      <p className="max-w-[596px] text-center font-[Poppins] text-base text-[#8E54E9] md:text-lg">
        Our services cater to all your requirements for a successful podcasting journey. Join us and start creating captivating content that leaves a lasting impact on your audience.
      </p>
      <CTAButton className="mt-10">Get Started Now</CTAButton>
    </section>
  )
}
