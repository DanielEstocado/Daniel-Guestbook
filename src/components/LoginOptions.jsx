import React from 'react'
import { UserAuth } from '../context/AuthContext.jsx';

function LoginButtons({text, onclick}) {
   return (
      <button className={`bg-primary text-neutral-200 flex-grow p-3 rounded-md cursor-pointer`} onClick={onclick}>{text}</button>
   )
}

const LoginOptions = () => {
   const { googleSignIn, githubSignIn } = UserAuth();
  
    const handleGoogleSignIn = async () => {
      try{
        await googleSignIn();
      }catch (error) {
        console.error("Error signing in with Google:", error);
      }
    }

    const handleGithubSignIn = async () => {
      try{
        await githubSignIn();
      }catch (error) {
        console.error("Error signing in with GitHub:", error);
      }
    }

  return (
    <>
      <h2 className='text-xl'>Sign in</h2>
      <p>To sign the guestbook, please login using either of the two options below.</p>
      <div className='flex gap-3 mt-3 justify-around'>
         <LoginButtons text="Continue using Google" onclick={handleGoogleSignIn} />
         <LoginButtons text="Continue using GitHub" onclick={handleGithubSignIn} />
      </div>
    </>
  )
}

export default LoginOptions
