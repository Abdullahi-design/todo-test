"use client";

import { restaurants } from "@/data";
import { FaBowlRice } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";

const FoodInfo = ({ dish }: any) => {
    console.log(dish, 'man');

    const buyFood = (food: any) => {

        alert(`${food.id}: working`)
    };

    const addAddOn = (addOn: any) => {

        alert(`${addOn.id}: working`)
    };
    
  return (
    <section className="flex justify-around gap-4">
        <div>
            {dish && dish.map((food: any, index: number) => (
                    // console.log(food, 'yam')
                food && food.name && (
                    <div key={index} className='relative rounded-md my-20 bg-white shadow-lg p-6 py-12 px-32 justify-center'>
                        <span className='top-0 left-0 absolute z-20 rounded-full'>
                            <GoDotFill className='w-8 h-8 text-green-700 '/>
                        </span>
                        <span className=''><FaBowlRice className='w-48 h-48 text-center mx-auto text-orange-600' /></span>
                        <h1 className='text-gray-700 text-xl font-bold text-center my-2'>{food.name}</h1> 
                        <h1 className='text-gray-600 text-base font-bold text-center my-2'>Price: <span>₦{food.price}</span></h1>
                        <button onClick={() => buyFood(food)} className='text-white mx-auto flex justify-center bg-orange-600 px-8 p-2 rounded-md mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150'>Buy</button>
                    </div>
                )
            ))}
        </div>

        <div className="overflow-y-auto h-[26rem] mt-20 rounded-md">
            {restaurants.map((restaurant) => (
                restaurant.addOn.map((addOn) => (
                    <ul key={addOn.id} className='bg-white shadow-lg w-fit gap-4 px-8 flex justify-between border-b py-2'>
                        <div className="relative text-center">
                            <span className='top-0 right-28 absolute z-20 rounded-full'>
                                <GoDotFill className='w-4 h-4 text-green-700 '/>
                            </span>
                            <span className=''><FaBowlRice className='w-12 h-12 text-center mx-auto text-orange-600' /></span>
                            <h1 className='text-gray-600'>{addOn.name}</h1> 
                            <h1 className='text-left'>Status: <span className='text-green-600'>Active</span> </h1>
                            <h1 className='text-gray-600 text-sm font-bold text-center my-2'>Price: <span>₦{addOn.price}</span></h1>
                        </div>
                        <span onClick={() => addAddOn(addOn)} className='mt-12'>
                            <IoMdAdd className=" cursor-pointer w-8 h-8 text-white mx-auto flex justify-end bg-orange-600 p-2 rounded-full mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150"/>
                        </span>
                    </ul>
                ))
            ))}
        </div>

    </section>
  )
}

export default FoodInfo