export default function CTAButton({ children, className }: { children: string; className?: string }) {
  return (
    <button
      className={`rounded-[10px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] px-10 py-3 font-[Poppins] text-base font-bold text-white transition-colors duration-300 hover:bg-gradient-to-l md:px-14 md:py-4 md:text-xl ${className}`}>
      {children}
    </button>
  )
}
