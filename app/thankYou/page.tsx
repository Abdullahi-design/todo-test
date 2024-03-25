"use client"

import React, { useEffect, useState } from 'react'
import { useCart } from '../hooks/use-cart'
import { useSearchParams } from 'next/navigation';
import { FaBowlRice, FaCheck } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { restaurants } from '@/data';
import Receipt from '@/components/Receipt';

export interface ReceiptData {
    id: string;
    data: {
        metadata: any[];
    }
}

const page = () => {
    const searchParams = useSearchParams();
    const transactionReference = searchParams.get("trxref");
    const { items, clearCart } = useCart()
    const [isMounted, setIsMounted] = useState(false)

    const [foodItems, setFoodItems] = useState([])

    const [cusName, setCusName] = useState('')
    const [cusPhoneNumber, setCusPhoneNumber] = useState('')
    const [cusAddress, setCusAddress] = useState('')

    const [foodId, setFoodId] = useState('')
    const [foodQty, setFoodQty] = useState<number>()
    const [foodName, setFoodName] = useState('')
    const [foodPrice, setFoodPrice] = useState<number>()
    const [foodStatus, setFoodStatus] = useState('')
    const [timeOrdered, setTimeOrdered] = useState('')

    const secretKey = 'sk_test_59941dc87ae903768b79b95834b1acd81c174e23';
    
    useEffect(() =>{
        if (transactionReference) {
            clearCart()
            setIsMounted(true)
        }
    },[])

    useEffect(() => {
        const fetchProducts = async () => {
      
          const options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: `/transaction/verify/${transactionReference}`,
            method: 'GET',
            headers: {
              Authorization: `Bearer ${secretKey}`
            }
          };
    
          const paystackResponse = await fetch(`https://${options.hostname}${options.path}`, options);
          const receipt = await paystackResponse.json();

          const timeOrdered = receipt.paidAt
          setTimeOrdered(timeOrdered);
          setCusName(receipt.data.metadata.name)
          setCusPhoneNumber(receipt.data.metadata.phoneNumber)
          setCusAddress(receipt.data.metadata.address)
    
            const foodItemsData = receipt.data.metadata.foodItems.map((item: any) => ({
                foodId: item.food.id,
                foodQty: item.quantity,
                foodName: item.food.name,
                foodPrice: item.food.price,
                foodStatus: item.food.status
            }));

            // Set the state for all food items
            setFoodItems(foodItemsData);
          
        };
    
        if (transactionReference) {
          fetchProducts();
        }
    }, [transactionReference]);     
    
    return (
        <div>
            <Receipt
                foodItems={foodItems}
                timeOrdered={timeOrdered}
                cusName={cusName}
                cusAddress={cusAddress}
                cusPhoneNumber={cusPhoneNumber}
            />
        </div>
    )
}

export default page