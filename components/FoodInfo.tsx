"use client";

import { restaurants } from "@/data";
import { FaBowlRice } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { GiWineGlass } from "react-icons/gi";
import AddToCartButton from "./AddToCart";
import { useState } from "react";
import { useCart } from "@/app/hooks/use-cart";
import Image from "next/image";

const FoodInfo = ({ dish }: any) => {

    const { addItemWithQuantity } = useCart()
    const [addOnQty, setAddOnQty] = useState<{ [key: string]: number }>({});

    const handleAddOnQuantityChange = (addOnId: string, quantity: number) => {
        setAddOnQty({ ...addOnQty, [addOnId]: quantity });
    };

    const buyFood = (food: any) => {

        alert(`${food.id}: working`)
    };

    const addAddOn = (addOn: any) => {

        alert(`${addOn.id}: working`)
    };
    
  return (
    <section className="md:flex justify-around gap-4">
        <div>
            {dish && dish.map((food: any, index: number) => (
                    // console.log(food, 'yam')
                food && food.name && (
                    <div key={index} className='relative rounded-md my-20 bg-white shadow-lg p-6 py-12 md:mx-0 mx-32 md:px-32 px-16 justify-center'>
                        <span className='flex top-0 left-0 absolute z-20 rounded-full'>
                            <GoDotFill className={`w-8 h-8 ${food.status == 'Active' ? 'text-green-700' : 'text-red-700'} `}/>
                            <h1 className="text-gray-600 text-sm font-bold mt-2">
                                <span>{restaurants.find((restaurant) => restaurant.dishes.find((dish: any) => dish.id === food.id))?.name}</span>
                            </h1>
                        </span>
                            {food.imageLink ? (
                                <div className="relative w-[12rem] h-[12rem]">
                                    <Image
                                        src={food.imageLink}
                                        alt={food.name}
                                        layout='fill'
                                        objectFit='contain'
                                        className='mx-auto rounded-md'
                                    />
                                </div>
                            ):(
                                <span className=''><FaBowlRice className='w-32 md:w-48 h-32 md:h-48 text-center mx-auto text-orange-600' /></span>
                            )}
                        <h1 className='text-gray-700 text-xl font-bold text-center my-2'>{food.name}</h1> 
                        <h1 className='text-gray-600 text-base font-bold text-center my-2'>Price: <span>₦{food.price}</span></h1>
                        <AddToCartButton food={food}/>
                        {/* <button onClick={() => buyFood(food)} className='text-white mx-auto flex justify-center bg-orange-600 px-8 p-2 rounded-md mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150'>Buy</button> */}
                    </div>
                )
            ))}
        </div>

        <>
            <h1 className='text-2xl mt-4 text-orange-600 font-bold tracking-widest md:absolute text-center right-[22rem] top-24'>Add On</h1>
            <div className="overflow-y-auto h-[26rem] bg-white md:w-[17rem] md:mx-0 mx-32 md:mt-20 mt-5  rounded-md">
                {restaurants.map((restaurant) => (
                    dish.some((food: any) => restaurant.dishes.some((dish: any) => dish.id === food.id)) ? (
                        restaurant.addOn.map((addOn) => (
                            <ul key={addOn.id} className='mx-auto shadow-lg w-fit gap-4 px-8 flex justify-between border-b py-2'>
                                <div className="relative text-center">
                                    <span className='top-0 -left-6 absolute z-20 rounded-full'>
                                        <GoDotFill className={`w-8 h-8 ${addOn.status == 'Active' ? 'text-green-700' : 'text-red-700'} `}/>
                                    </span>
                                    {addOn.imageLink ? (
                                        <Image
                                        src={addOn.imageLink}
                                        alt={addOn.name}
                                        width={100}
                                        height={100}
                                        className='object-contain mx-auto rounded-md'
                                        />
                                    ):(
                                        <span className=''><FaBowlRice className='w-12 h-12 text-center mx-auto text-orange-600' /></span>
                                    )}
                                    <h1 className='text-gray-600'>{addOn.name}</h1> 
                                    <h1 className='text-gray-600 text-sm font-bold text-center my-2'>Price: <span>₦{addOn.price}</span></h1>
                                    {/* <h1 className='text-gray-600 text-sm font-bold text-center my-2'>
                                        Portion: 
                                        <input type="number" name="" className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0" id={addOn.id} value={addOn.amount} />
                                    </h1> */}
                                    <label className="flex text-center justify-center">
                                        <span className='font-semibold text-base text-gray-700'>
                                            Portion {" "}
                                        </span>
                                        <input
                                            value={addOnQty[addOn.id] || ""}
                                            onChange={(e) => handleAddOnQuantityChange(addOn.id, parseInt(e.target.value))}
                                            type='number'
                                            placeholder='1'
                                            required
                                            className='form_input'
                                        />
                                        </label>
                                    {/* <h1 className=''>Status: <span className='text-green-600'>Active</span> </h1> */}
                                </div>
                                <span>
                                    <input 
                                    type="checkbox" 
                                    className="check_box" 
                                    onClick={() => {
                                        addItemWithQuantity(addOn, addOnQty[addOn.id] || 1);
                                    }}
                                    />
                                </span>
                                {/* <span onClick={() => addAddOn(addOn)} className='mt-12'>
                                    <IoMdAdd className=" cursor-pointer w-8 h-8 text-white mx-auto flex justify-end bg-orange-600 p-2 rounded-full mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150"/>
                                </span> */}
                            </ul>
                        ))
                    ): null
                ))}
            </div>
        </>

        {/* <>
            <h1 className='text-2xl mt-4 text-orange-600 font-bold tracking-widest absolute right-[17rem] top-24'>Drinks</h1>
            <div className="overflow-y-auto h-[26rem] mt-20 rounded-md">
                {restaurants.map((restaurant) => (
                    restaurant.addOn.map((addOn) => (
                        <ul key={addOn.id} className='bg-white shadow-lg w-fit gap-4 px-8 flex justify-between border-b py-2'>
                            <div className="relative text-center">
                                <span className='top-0 right-28 absolute z-20 rounded-full'>
                                    <GoDotFill className={`w-8 h-8 ${addOn.status == 'Active' ? 'text-green-700' : 'text-red-700'} `}/>
                                </span>
                                <span className=''><GiWineGlass className='w-12 h-12 text-center mx-auto text-orange-600' /></span>
                                <h1 className='text-gray-600'>{addOn.name}</h1> 
                                <h1 className=''>Status: <span className='text-green-600'>Active</span> </h1>
                                <h1 className='text-gray-600 text-sm font-bold text-center my-2'>Price: <span>₦{addOn.price}</span></h1>
                            </div>
                            <span onClick={() => addAddOn(addOn)} className='mt-12'>
                                <IoMdAdd className=" cursor-pointer w-8 h-8 text-white mx-auto flex justify-end bg-orange-600 p-2 rounded-full mt-4 hover:bg-white hover:text-black border border-orange-600 transition delay-150"/>
                            </span>
                        </ul>
                    ))
                ))}
            </div>
        </> */}

    </section>
  )
}

export default FoodInfo