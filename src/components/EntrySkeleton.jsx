import React from 'react'

const EntrySkeleton = () => {
  return (
    <div className=' px-6 py-4'>
       {/* Entry Header */}
      <div className='flex space-x-2 '>
         <div className='w-10 h-10 skeleton rounded-full'></div>
         <div className=''>
            <div className='w-40 skeleton h-4'></div>
            <div className='w-20 skeleton h-3 mt-2'></div>
         </div>
      </div>
      {/* Entry Content */}
      <div className='w-full skeleton h-4 mt-3'></div>
      <div className='w-[70%] skeleton h-4 mt-3'></div>
    </div>
  )
}

export default EntrySkeleton
