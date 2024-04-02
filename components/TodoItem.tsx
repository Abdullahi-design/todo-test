"use client";
import { FaCheck } from "react-icons/fa";

import React, { useState } from 'react';

// Define a type for individual todo items
type TodoItem = {
    id: number;
    name: string;
};

const TodoItemComponent: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

    const items: TodoItem[] = [
        { id: 1, name: "Training at the Gym" },
        { id: 2, name: "Play Paddle with friends" },
        { id: 3, name: "Burger BBQ with family" },
    ];

    const handleCheckChange = (id: number) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className='bg-gray-200 space-y-2 text-black p-4'>
            {items.map((item) => (
                <div key={item.id} className='bg-white p-4 rounded-md shadow-xl flex items-center justify-between'>
                    <label className='flex items-center cursor-pointer space-x-2'>
                        <div 
                            className={`w-5 h-5 rounded-full border-2 ${checkedItems[item.id] ? 'bg-green-500 border-green-500' : 'border-gray-300'}`} 
                            onClick={() => handleCheckChange(item.id)}
                        >
                            {checkedItems[item.id] && (
                                <span className="flex items-center justify-center text-white">
                                    <FaCheck  className="p-1 text-black"/>
                                </span>
                            )}
                        </div>
                        <span>{item.name}</span>
                    </label>
                    <button className='border-[1.7px] rounded-md text-sm border-gray-500 px-2 py-1'>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default TodoItemComponent;
