import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext.jsx'
import { db } from '../utils/firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function SignForm() {
  const { logOut, user } = UserAuth();
  const [text, setText] = useState("");
     
  const handleSignOut = async () => {
    try {
        await logOut();
    }catch (error) {
        console.error("Error signing out:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) return;

    try{
      await addDoc(collection(db, "entries"),{
        name: user.displayName,
        photoURL: user.photoURL,
        timestamp: serverTimestamp(),
        message: text
      })
      setText("")
    }catch (e){
      console.log("Error in submitting the entry: ", e)
    }
    
  }

  return (
    <section className='border border-base-300 p-6 m-6 rounded-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-2 items-center'>
          <img src={user.photoURL} alt="Profile" className='w-10 h-10 rounded-full border border-primary' />
          <p className='font-semibold'>{user.displayName}</p>
        </div>
        
        <div>
          <button className={`bg-primary text-neutral-200  py-2 px-4 rounded-full cursor-pointer`} onClick={handleSignOut}>Logout</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea className='textarea textarea-ghost w-full mt-3 border-primary' placeholder='Write your message...' value={text} onChange={(e)=> setText(e.target.value)}></textarea>
        <div className='flex gap-3 mt-3 justify-around'>
          <button className={`bg-primary text-neutral-200 flex-grow p-3 rounded-md cursor-pointer disabled:opacity-50`} type='submit' disabled={!text}>Sign</button>
        </div>
      </form>
    </section>
  )
}

export default SignForm
