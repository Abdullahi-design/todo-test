"use client"

import { useCart } from "@/app/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  const { items } = useCart();
  const itemCount = items.length;
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [items]);

  return (
    <div className='border-b-[1.7px] border-black w-full flex justify-between'>
      {/* <Link href={'/'}>
        <h1 className="my-3 orange_gradient text-4xl font-extrabold leading-[1.15] text-black md:text-5xl">
          Ziype
        </h1>
      </Link> */}
      <Link href='/' className='gap-2 flex-center'>
        <Image
          src='/assets/images/ziype_logo.png'
          alt='logo'
          width={80}
          height={80}
          className='object-contain'
        />
      </Link>
      <Link href={'/cart'}>
        <FiShoppingCart  className="mt-5 w-10 h-10 text-white p-2 rounded-lg bg-black cursor-pointer"/>
        <span className="absolute ml-6 top-2 text-xs bg-orange-600 text-white py-1 px-2 rounded-full ">
          {isMounted ? itemCount : 0}
        </span>
      </Link>
    </div>
  )
}

export default Nav