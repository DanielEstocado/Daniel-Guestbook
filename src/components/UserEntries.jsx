import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const UserEntries = ({data}) => {
   const { name, photoURL, timestamp, message} = data;
   const timeAgo = timestamp?.toDate ? formatDistanceToNow(timestamp.toDate(), {addSuffix: true}): "just now";

   return (
      <div className=' px-6 py-4'>
         {/* Entry Header */}
         <div className='flex space-x-2 '>
            <img src={photoURL} alt="profile" className='w-10 h-10 rounded-full'/>

            <div className=''>
               <p className='font-semibold'>{name}</p>
               <p className='text-sm text-neutral-400 leading-2'>{timeAgo}</p>
            </div>
         </div>
         {/* Entry Content */}
         <p className='mt-3'>{message}</p>
      </div>
  )
}

export default UserEntries
