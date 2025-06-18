import React from 'react'
import LoginOptions from './components/LoginOptions.jsx'
import UserEntries from './components/UserEntries.jsx'

const App = () => {
  return (
    <div className='flex max-w-3xl mx-auto min-h-screen flex-col pt-5 font-ubuntu text-neutral-600 overflow-x-hidden'>
      {/* Header */}
      <section className='border border-my-neutral p-6 rounded-t-xl '>
        <h1 className='text-2xl font-bold'>Daniel's Guestbook</h1>
        <p className='text-lg'>You can leave your thoughts and comments below.</p>
      </section>
      {/* Main content */}
      <section className='border-x border-my-neutral flex-grow p-6'>
        {/* Sign In */}
        <section className='border border-my-neutral p-6 rounded-sm'>
          <LoginOptions/>
        </section>
        {/* Entries */}
        <section className='mt-6'>
          <UserEntries/>
          <UserEntries/>
          <UserEntries/>
          <UserEntries/>  

          
        </section>
      </section>
    </div>
  )
}

export default App
