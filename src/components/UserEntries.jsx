import React from 'react'

const UserEntries = () => {
  return (
   <div className=' px-6 py-4'>
      {/* Entry Header */}
      <div className='flex space-x-2 '>
         <div className='w-10 h-10 bg-slate-700 rounded-full'></div>

         <div className=''>
            <p className='font-semibold'>John Doe</p>
            <p className='text-sm text-neutral-400 leading-2'>an hour ago</p>
         </div>
      </div>
      {/* Entry Content */}
      <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum, iusto perspiciatis minus qua, atque, cumque quaerat! Id.</p>
   </div>
  )
}

export default UserEntries
