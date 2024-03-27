"use client"

import Receipt from '@/components/Receipt';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useCart } from '../hooks/use-cart';
import { FiLoader } from 'react-icons/fi';
import ReceiptSkeleton from '@/components/ui/ReceiptSkeleton';

export interface ReceiptData {
    id: string;
    data: {
        metadata: any[];
    }
}

const Page = () => {
    const searchParams = useSearchParams();
    const transactionReference = searchParams.get("trxref");
    const { items, clearCart } = useCart()
    const [isMounted, setIsMounted] = useState(false)

    const [foodItems, setFoodItems] = useState([])

    const [confirmReceipt, setConfirmReceipt] = useState()

    const [cusName, setCusName] = useState('')
    const [cusPhoneNumber, setCusPhoneNumber] = useState('')
    const [cusAddress, setCusAddress] = useState('')
    const [timeOrdered, setTimeOrdered] = useState('')

    const secretKey = 'sk_test_59941dc87ae903768b79b95834b1acd81c174e23';
    
    useEffect(() =>{
        if (transactionReference) {
            clearCart()
            setIsMounted(true)
        }
    },[])

    useEffect(() => {
        const fetchRecipt = async () => {
      
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
          setConfirmReceipt(receipt.status)

          console.log(receipt, 'confirm receipt');
          

          const paidAtDate = new Date(receipt.data.paidAt);
          const formattedDate = paidAtDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
          const formattedTime = paidAtDate.toLocaleTimeString(); // Format: HH:MM:SS
      
          setTimeOrdered(`${formattedDate} ${formattedTime}`);
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
          fetchRecipt();
        }
    }, [transactionReference]);     

    useEffect(() => {
        const sendRecipt = async () => {
            const receiptSentKey = `receiptSent_${transactionReference}`;
            const alreadySent = localStorage.getItem(receiptSentKey);

            if (!alreadySent && cusPhoneNumber) {
                // Fetch the Paystack response after navigation
                const response = await fetch(`/api/message/customer`, {
                    method: "POST",
                    body: JSON.stringify({
                        customerName: cusName,
                        customerNumber: cusPhoneNumber,
                        customerAddress: cusAddress,
                        driverNumber: '2348149112999',
                    }),
                    headers: { "Content-Type": "application/json" }, 
                });
                const TermiiResponse = await response.json(); 
                console.log(TermiiResponse);

                // Mark receipt as sent to prevent duplicates
                localStorage.setItem(receiptSentKey, 'true');
            }
                     
        };
    
        sendRecipt();
    }, [cusPhoneNumber]);     
    
    return (
        <div>
            {confirmReceipt == true ? (
                <Receipt
                    foodItems={foodItems}
                    transactionReference={transactionReference}
                    timeOrdered={timeOrdered}
                    cusName={cusName}
                    cusAddress={cusAddress}
                    cusPhoneNumber={cusPhoneNumber}
                />
            ):(
                <ReceiptSkeleton/>
            )}
        </div>
    )
}

const PageWithSuspense = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
    );
};

export default PageWithSuspense;