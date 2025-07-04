import React from 'react'
import UserEntries from './UserEntries.jsx'
import EntrySkeleton from './EntrySkeleton.jsx'

const EntryFeed = () => {
  return (
   <section className='mt-6 divide-y border-y border-base-300 divide-base-300' >
      <UserEntries/>
      <EntrySkeleton/>
   </section>
  )
}

export default EntryFeed
