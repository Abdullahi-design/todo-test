"use client"

import React, { useEffect } from 'react'
import { useCart } from '../hooks/use-cart'
import { useSearchParams } from 'next/navigation';

const page = () => {
    const searchParams = useSearchParams();
    const transactionReference = searchParams.get("trxref");
    const { items, clearCart } = useCart()
    
    useEffect(() =>{
        if (transactionReference) {
            clearCart()
        }
    },[])

    return (
        <div>thank you</div>
    )
}

export default page