"use client";

import { restaurants } from '@/data'
import { useRouter } from 'next/navigation';
import { FaBowlRice } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const FoodCategory = () => {
  const router = useRouter();

    const handleFoodClick = (dish: any) => {

        router.push(`/food/${dish.id}`);
    };

  return (
    <div>
        <h1 className='text-2xl my-4 text-orange-600 font-bold tracking-widest'>Buy Food</h1>

        <div className='gap-4 grid grid-cols-3'>
            {restaurants.map((restaurant) => (
                restaurant.dishes.map((dish, index) => (
                    <div key={index} className='relative bg-white shadow-lg p-4 px-12 rounded-md'>
                        <span className='top-0 left-0 absolute z-20 rounded-full'>
                            <GoDotFill className='w-8 h-8 text-green-700 '/>
                        </span>
                        <span className=''><FaBowlRice className='w-48 h-48 text-center mx-auto text-orange-600' /></span>
                        <h1 className='text-gray-700 text-xl font-bold text-center my-2'>{dish.name}</h1> 
                        <h1 className='text-gray-600 text-sm font-bold text-center my-2'>Price: <span>₦{dish.price}</span></h1>
                        <button onClick={() => handleFoodClick(dish)} className='mb-5 text-white bg-orange-600 px-8 p-2 rounded-md mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150'>Buy</button>
                    </div>
                ))
            ))}
        </div>
    </div>
  )
}

export default FoodCategory