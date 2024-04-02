import React from 'react'

const EditTask = () => {
  return (
    <div className='bg-gray-300  w-[70%] h-screen shadow-inner'>
        <div className='bg-[#3556AB] text-white h-28'>
            <h1 className='text-white pt-8 font-semibold text-md text-center'>Edit Task</h1>
        </div>

        <div>
            <h1 className='text-left text-black mx-12 mt-5 tracking-wider'>Task Name</h1>
            <input type="text" placeholder='Training at the Gym' className='mx-12 form_input'/>
        </div>

        <div className='flex justify-between mx-12 gap-5 bottom-5 absolute'>
            <button className='bg-[#AB3535] border border-[#720D0D] px-8 p-4 text-white rounded-md'>Delete</button>
            <button className='bg-[#3556AB] border border-[#0D2972] px-64 p-4 text-white rounded-md'>Save</button>
        </div>
    </div>
  )
}

export default EditTask