import { FaTrophy } from "react-icons/fa6";

const Upgrade = () => {
  return (
    <div className="bg-[#CDE53D] flex w-full justify-between p-4">
        <div className="flex gap-2">
            <span><FaTrophy className="text-[#F2C94C] w-12 h-12"/></span>
            <h1 className="text-[#071D55] mt-2">Go Pro Upgrade Now</h1>
        </div>
        <h1 className="bg-[#071D55] text-[#F2C94C] text-md mx-60 -mt-4 absolute p-4">$1</h1>
    </div>
  )
}

export default Upgrade