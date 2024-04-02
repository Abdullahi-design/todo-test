import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import useStore from '@/app/hooks/store';

type TodoItem = {
    id: number;
    text: string;
    completed?: boolean;
};

const TodoItemComponent: React.FC = () => {
    const todos = useStore(state => state.todos);
    console.log(todos, 'todos');
    
    const toggleTodo = useStore(state => state.toggleTodo);

    const handleCheckChange = (id: number) => {
        toggleTodo(id);
    };

    return (
        <div className='bg-gray-200 space-y-4 text-black p-4'>
            {todos.map((todo: TodoItem) => (
                <div key={todo.id} className='bg-white p-4 rounded-md shadow-xl flex items-center justify-between'>
                    <label className='flex items-center cursor-pointer space-x-2'>
                        <div 
                            className={`w-5 h-5 rounded-full border-2 ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`} 
                            onClick={() => handleCheckChange(todo.id)}
                        >
                            {todo.completed && (
                                <span className="flex items-center justify-center text-white">
                                    <FaCheck className="p-1 text-black"/>
                                </span>
                            )}
                        </div>
                        <span className={`${todo.completed ? ' line-through text-gray-400': ""}`}>{todo.text}</span>
                    </label>
                    <button className='border-[1.7px] rounded-md text-sm border-gray-500 px-2 py-1'>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default TodoItemComponent;
