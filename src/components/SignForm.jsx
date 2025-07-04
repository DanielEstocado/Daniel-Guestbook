import React from 'react'
import { UserAuth } from '../context/AuthContext.jsx'

function SignForm() {
  const { logOut, user } = UserAuth();
     
  const handleSignOut = async () => {
    try {
        await logOut();
    }catch (error) {
        console.error("Error signing out:", error);
    }
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-2 items-center'>
          <img src={user.photoURL} alt="Profile" className='w-10 h-10 rounded-full border border-primary' />
          <p className='font-semibold'>{user.displayName}</p>
        </div>
        
        <div>
          <button className={`bg-primary text-neutral-200  py-2 px-4 rounded-full cursor-pointer`} onClick={handleSignOut}>Logout</button>
        </div>
      </div>
      <form action="">
        <textarea className='textarea textarea-ghost w-full mt-3 border-primary' placeholder='Write your message...'></textarea>
        <div className='flex gap-3 mt-3 justify-around'>
          <button className={`bg-primary text-neutral-200 flex-grow p-3 rounded-md cursor-pointer`}>Sign</button>
        </div>
      </form>
    </>
  )
}

export default SignForm
