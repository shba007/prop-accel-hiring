export default function AboutCard({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <div className={`flex aspect-[67/40] max-w-[268px] flex-col gap-4 rounded-[10px] border-[0.5px] border-[#7A3199] p-4 font-[Poppins] md:p-7 ${className}`}>
      <h4 className="text-center text-lg font-bold md:text-xl lg:text-left">{title}</h4>
      <p className="text-justify text-xs leading-relaxed">{description}</p>
    </div>
  )
}
