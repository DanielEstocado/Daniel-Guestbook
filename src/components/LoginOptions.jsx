import React from 'react'

function LoginButtons({text}){
   return (
      <button className={`bg-primary text-neutral-200 flex-grow p-3 rounded-md cursor-pointer`}>{text}</button>
   )
}

const LoginOptions = () => {
  return (
    <>
      <h2 className='text-xl'>Sign in</h2>
      <p>To sign the guestbook, please login using either of the two options below.</p>
      <div className='flex gap-3 mt-3 justify-around'>
         <LoginButtons text="Continue using Google" />
         <LoginButtons text="Continue using GitHub" />
      </div>
    </>
  )
}

export default LoginOptions
