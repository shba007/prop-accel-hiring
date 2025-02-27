import { useState } from 'react'

export default function ToggleButton() {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true)

  return (
    <div className="flex gap-[6px] rounded-[10px] bg-white p-[6px] font-[Poppins] text-sm shadow-[0px_10px_30px_0px_rgba(154,148,148,0.25)]">
      <button className={`rounded-[10px] px-[9px] py-[3px] ${isMonthlyPlan ? 'bg-[#E1A6FF]/40' : 'bg-white'} transition-colors duration-200`} onClick={() => setIsMonthlyPlan(true)}>
        Monthly
      </button>
      <button className={`rounded-[10px] px-[9px] py-[3px] ${!isMonthlyPlan ? 'bg-[#E1A6FF]/40' : 'bg-white'} transition-colors duration-200`} onClick={() => setIsMonthlyPlan(false)}>
        Yearly
      </button>
    </div>
  )
}
