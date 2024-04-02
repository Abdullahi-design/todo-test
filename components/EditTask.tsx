"use client"
import React from 'react';
import useStore from '@/app/hooks/store';

const EditTask = () => {
    const currentEdit = useStore((state) => state.currentEdit);
    const updateTodo = useStore((state) => state.updateTodo);
    const deleteTodo = useStore((state) => state.deleteTodo);
    const clearCurrentEdit = useStore((state) => state.clearCurrentEdit);
  
    // Handler for input change to update currentEdit state
    const handleChange = (e: any) => {
      useStore.setState({ currentEdit: { ...currentEdit, text: e.target.value }});
    };
  
    // Save updated task
    const handleSave = () => {
      if (currentEdit && currentEdit.id) {
        updateTodo(currentEdit.id, currentEdit.text);
        clearCurrentEdit();
      }
    };
  
    // Delete task
    const handleDelete = () => {
        if (currentEdit?.id) {
          deleteTodo(currentEdit.id);
          // Any additional logic after deletion
        }
    };
      

  return (
    <div className='bg-gray-300 w-[70%] h-screen shadow-inner'>
        <div className='bg-[#3556AB] text-white h-28'>
            <h1 className='text-white pt-8 font-semibold text-md text-center'>Edit Task</h1>
        </div>

        {currentEdit && (
          <div>
              <h1 className='text-left text-black mx-12 mt-5 tracking-wider'>Task Name</h1>
              <input
                type="text"
                value={currentEdit.text}
                onChange={handleChange}
                className='mx-12 form_input'
                placeholder='Task Name'
              />
          </div>
        )}

        <div className='flex justify-between mx-12 gap-5 bottom-5 absolute'>
            <button onClick={handleDelete} className='bg-[#AB3535] border border-[#720D0D] px-8 p-4 text-white rounded-md'>Delete</button>
            <button onClick={handleSave} className='bg-[#3556AB] border border-[#0D2972] px-64 p-4 text-white rounded-md'>Save</button>
        </div>
    </div>
  );
};

export default EditTask;
