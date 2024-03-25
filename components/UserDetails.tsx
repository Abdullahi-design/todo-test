import React from 'react'
import { FiLoader } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const UserDetails = ({ 
    name,
    setName,
    phoneNumber, 
    address, 
    setAddress, 
    setPhoneNumber, 
    setIsModalOpen,
    onConfirm,
    isLoading
}:{ 
    name: string,
    setName: any,
    phoneNumber:string, 
    address: string, 
    setAddress: any, 
    setPhoneNumber: any, 
    setIsModalOpen: boolean | any,
    onConfirm: any,
    isLoading: any 
}) => {

  const handleConfirm = () => {
    // Check if the phone number meets the criteria
    if (phoneNumber && phoneNumber.startsWith('0') && phoneNumber.length === 11) {
      // If it meets the criteria, proceed with onConfirm function
      onConfirm();
    } else {
      // If it doesn't meet the criteria, show an alert
      alert('Please enter a valid Nigerian phone number starting with 0 and with 11 digits.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsModalOpen(false)}></div>
      <div className="relative bg-white p-4 sm:p-8 mx-4 rounded-md shadow-md max-w-screen-sm">
        <div className="flex justify-between">
            <p className="text-lg sm:text-xl font-semibold mb-4">Enter your email</p>
            <span onClick={() => setIsModalOpen(false)}><MdClose className="w-4 h-4"/></span>
        </div>
        <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>What is your name?</span>
            <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full flex rounded-lg mt-2 p-3 mb-4 text-sm text-gray-500 outline-0 border-gray-400 border"
            />
        </label>

        <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>The delivery man will reachout to you</span>
            <input
                type="tel"
                placeholder="Enter your Phone Number"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full flex rounded-lg mt-2 p-3 mb-4 text-sm text-gray-500 outline-0 border-gray-400 border"
            />
        </label>

        <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Food will be sent to the Address provided</span>
            <input
                type="text"
                placeholder="Enter your Address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 border-gray-400 border"
            />
        </label>

        <div className="flex justify-center mt-4">
          <button
            className="px-8 py-2 bg-primary-orange text-white rounded-md"
            onClick={handleConfirm}
          >
            {isLoading ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <FiLoader className='w-4 h-4 animate-spin mr-1.5' />
                </div>
                ) : (
                    'Buy'
                )
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserDetails