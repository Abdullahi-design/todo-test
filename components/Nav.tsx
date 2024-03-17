import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <div className='border-b-[1.7px] border-black w-full flex justify-between'>
      <h1 className="my-3 orange_gradient text-4xl font-extrabold leading-[1.15] text-black md:text-5xl">
        LOGO
      </h1>
      <FiShoppingCart  className="my-3 w-10 h-10 text-white p-2 rounded-lg bg-orange-600 cursor-pointer"/>
    </div>
  )
}

export default Nav