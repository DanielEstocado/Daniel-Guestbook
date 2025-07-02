import React from 'react'

function SignForm() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-2 items-center'>
          <div className='w-10 h-10 bg-slate-700 rounded-full border border-primary'></div>
          <p className='font-semibold'>John Doe</p>
        </div>
        
        <div>
          <button className={`bg-primary text-neutral-200  py-2 px-4 rounded-full cursor-pointer`}>Logout</button>
        </div>
      </div>
      <textarea className='textarea textarea-ghost w-full mt-3 border-primary' placeholder='Write your message...'></textarea>
      <div className='flex gap-3 mt-3 justify-around'>
         <button className={`bg-primary text-neutral-200 flex-grow p-3 rounded-md cursor-pointer`}>Sign</button>
      </div>
    </>
  )
}

export default SignForm
