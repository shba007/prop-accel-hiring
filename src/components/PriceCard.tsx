export default function PriceCard({ name, price, keypoints, isActive = false }: { name: string; price: number; keypoints: string[]; isActive?: boolean }) {
  return (
    <div
      className={`my-6 flex h-[378px] max-w-[303px] flex-col gap-6 rounded-[10px] border-[0.5px] border-[#7A3199] px-7 py-9 md:h-fit ${
        isActive ? 'bg-[#7A3199] text-white md:scale-110' : 'bg-white'
      }`}>
      <div className="flex flex-col gap-4">
        <h6 className="font-bold">{name} Plan</h6>
        <p className="font-['Poppins'] text-xs">{name} Plan Comes with the followings</p>
      </div>
      <div className={`flex items-center gap-2 ${isActive ? 'text-white' : 'text-[#7A3199]'}`}>
        <span className="text-3xl font-bold">₹ {price}</span>
        <span className="font-[Poppins]">/ month</span>
      </div>
      <ul className="flex list-['●'] flex-col gap-2 text-xs">
        {keypoints.map((keypoint, index) => (
          <li key={index} className="pl-3">
            {keypoint}
          </li>
        ))}
      </ul>
      <button className="w-fit rounded-[5px] border-[0.5px] border-[#7A3199] bg-white px-8 py-[14px] font-[Poppins] text-xs text-[#7A3199] transition-colors duration-200 hover:border-white hover:bg-[#7A3199] hover:text-white">
        Start Free Trial
      </button>
    </div>
  )
}
