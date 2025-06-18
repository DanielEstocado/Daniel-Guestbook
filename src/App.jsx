import React from 'react'
import LoginOptions from './components/LoginOptions.jsx'
import UserEntries from './components/UserEntries.jsx'

const App = () => {
  return (
    <div className='flex max-w-3xl mx-auto h-screen flex-col py-5 font-ubuntu text-neutral-600 overflow-x-hidden'>
      {/* Header */}
      <section className='border border-my-neutral p-6 md:rounded-t-xl '>
        <h1 className='text-2xl font-bold'>Daniel's Guestbook</h1>
        <p className='text-lg'>You can leave your thoughts and comments below.</p>
      </section>
      {/* Main content */}
      <section className='border-x border-b md:rounded-b-xl border-my-neutral flex-grow p-6'>
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
