"use client"

import React from 'react'
import Upgrade from './Upgrade'
import Image from 'next/image'
import TodoItem from './TodoItem'
import { IoIosAdd } from "react-icons/io";
import useStore from '@/app/hooks/store';
import AddTodoModal from './AddTodoModal';


const SideBar = () => {
    const modalOpen = useStore((state) => state.modalOpen);
    const toggleModal = useStore((state) => state.toggleModal);

  return (
    <div className='bg-gray-200 w-[30%] relative h-screen shadow-[rgba(0,0,0,0.2)_2px_5px_4px_0px]'>
        <div className='bg-[#3556AB] text-white'>
            <nav>
                <div className="">
                    <div className="rounded-full flex p-4 px-8 gap-2">
                        <Image 
                            src="/assets/image/test-profile.png" 
                            alt="profile image"
                            width={50}
                            height={50}
                            objectFit="cover"
                            className="rounded-full"
                        />
                        <h1 className="text-right font-semibold text-sm md:text-md lg:text-lg">Hello, John</h1>
                    </div>
                    <h1 className='font-light text-xl -mt-8 mb-1.5 italic text-gray-300'>What are  your plans <br /> for today?</h1>
                </div>
            </nav>
            <div className='bg-gray-200'>
                <Upgrade />
                <TodoItem/>
                {modalOpen && <AddTodoModal />}
                <IoIosAdd className='bg-[#123EB1] cursor-pointer rounded-full bottom-6 absolute left-64 p-2 w-12 h-12' onClick={toggleModal} />
            </div>
        </div>
    </div>
  )
}

export default SideBar