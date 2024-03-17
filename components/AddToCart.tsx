'use client'

import { useCart } from '@/app/hooks/use-cart'
import { useEffect, useState } from 'react'

const AddToCartButton = ({ food }: any) => {
    const { addItem } = useCart()
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsSuccess(false)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [isSuccess])  

    return (
        <button
        onClick={() => {
            addItem(food)
            setIsSuccess(true)
        }}
        className='w-fit px-4 py-2 border border-orange-600 mx-auto flex justify-center mt-4 hover:text-white hover:bg-orange-600 rounded-md md:text-xl text-base text-gray-700'>
        {isSuccess ? 'Added!' : 'Add to cart'}
        </button>
    )
}

export default AddToCartButton
