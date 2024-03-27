import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FoodItem {
  foodId: string;
  foodQty: number;
  foodName: string;
  foodPrice: number;
  foodStatus: string;
}

interface ReceiptProps {
  foodItems: FoodItem[];
  transactionReference: string | any;
  timeOrdered: string;
  cusName: string;
  cusAddress: string;
  cusPhoneNumber: string;
}

const Receipt: React.FC<ReceiptProps> = ({ 
  foodItems,
  transactionReference,
  timeOrdered,
  cusName,
  cusAddress,
  cusPhoneNumber 
}) => {
  // Calculate total price including fee
  const totalFoodPrice = foodItems.reduce((total, item) => total + item.foodPrice * item.foodQty, 0);
  const totalWithFee = totalFoodPrice + 300;

  return (
    <div className="rounded-lg border md:mx-12 w-full bg-white border-gray-300 p-6 md:p-8 mt-12">
      <div className='flex justify-between items-center mx-4'>
        <div className="relative sm:w-20 sm:h-20 w-16 h-16"> {/* Adjust this line */}
          <Image
            src='/assets/images/ziype_logo.png'
            alt='logo'
            layout='fill'
            objectFit='contain'
            className='mb-4 -mt-4 -ml-4'
          />
        </div>
        <h2 className="md:text-lg text-sm font-semibold mb-6 text-blue-600 hover:text-blue-800 cursor-text hover:underline -mr-4">#{transactionReference}</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 underline">Order Details</h2>
          <ul className="divide-y divide-gray-200">
            {foodItems.map((item, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span className="text-sm font-medium">{item.foodName} (x{item.foodQty})</span>
                <span className="text-sm">₦{item.foodPrice * item.foodQty}</span>
              </li>
            ))}
          </ul>
          <div className="py-2 flex justify-between border-t border-gray-300 mt-4">
            <span className="text-sm font-medium">Delivery Fee:</span>
            <span className="text-sm">₦300</span>
          </div>
          <div className="py-2 flex justify-between border-t border-gray-300">
            <span className="text-sm font-medium">Total:</span>
            <span className="text-sm">₦{totalWithFee}</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 md:mt-0 mt-2">
          <h2 className="text-lg font-semibold mb-4 underline">Customer Information</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <span className="text-md font-medium">Name:</span>
              <span className="text-sm mt-1">{cusName}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-sm font-medium">Phone Number:</span>
              <span className="text-sm">{cusPhoneNumber}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-sm font-medium">Address:</span>
              <span className="text-sm">{cusAddress}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-sm font-medium">Time Ordered:</span>
              <span className="text-sm">{timeOrdered}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
