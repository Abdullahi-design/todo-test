
import React, { useState } from 'react';
import useStore from '@/app/hooks/store';

const AddTodoModal = () => {
    const [todo, setTodo] = useState('');
    const addTodo = useStore((state) => state.addTodo);
    const toggleModal = useStore((state) => state.toggleModal);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!todo.trim()) return;
        addTodo({ id: Date.now(), text: todo, completed: false });
        setTodo('');
        toggleModal();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="border p-2 text-black"
                    placeholder="Add new todo"
                />
                    <div className='flex justify-between mt-2'>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">Add</button>
                        <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={toggleModal}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodoModal;
