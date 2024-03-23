import React from 'react';

const Receipt = ({ 
    dishName, 
    name, 
    phoneNumber, 
    address, 
    timeOrdered 
}: {
    dishName: string, 
    name: string, 
    phoneNumber: string, 
    address: string, 
    timeOrdered: string 
}) => {
  return (
    <div className="rounded-lg border md:mx-12 w-full border-gray-300 p-6 md:p-8 mt-12">
        <h1 className="orange_gradient text-2xl leading-[1.15] mb-4 -mt-4 -ml-4">Ziype</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 underline">Order Details</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-2 flex justify-between border-b border-t border-gray-300">
              <span className="text-sm font-medium">Dish Name:</span>
              <span className="text-sm">{dishName}</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 md:mt-0 mt-2">
          <h2 className="text-lg font-semibold mb-4 underline">Customer Information</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <span className="text-md font-medium">Name:</span>
              <span className="text-sm mt-1">{name}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-sm font-medium">Phone Number:</span>
              <span className="text-sm">{phoneNumber}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-sm font-medium">Address:</span>
              <span className="text-sm">{address}</span>
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
