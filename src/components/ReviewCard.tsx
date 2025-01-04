import Star from '../assets/icons/star.svg?react'

export default function ReviewCard({ image, name, rating, comment }: { image: string; name: string; rating: number; comment: string }) {
  return (
    <div className="h-full max-w-[calc(100vw-2rem)] rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-6 py-6">
      <div className="grid grid-cols-[auto,1fr] grid-rows-3 gap-x-6">
        <img src={`./${image}`} className="row-span-3 aspect-square w-[70px] rounded-full object-cover"></img>
        <span className="col-start-2 line-clamp-1 font-bold">{name}</span>
        <div className="col-start-2 mt-1 flex gap-2">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
      <p className="mt-4 max-w-[356px] text-xs leading-relaxed">{comment}</p>
    </div>
  )
}
