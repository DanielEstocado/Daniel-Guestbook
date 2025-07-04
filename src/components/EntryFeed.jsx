import React, { useEffect, useState } from 'react'
import UserEntries from './UserEntries.jsx'
import EntrySkeleton from './EntrySkeleton.jsx'
import { db } from '../utils/firebase.js'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'


const EntryFeed = () => {
   const [posts, setPosts] = useState([])
   const [loading, isLoading] = useState(true)

   useEffect(()=>{
      const q= query(collection(db, "entries"), orderBy("timestamp", "desc"))

      const unsubscribe = onSnapshot(q, (snapshot)=>{
         const snapshotDocs = snapshot.docs

         setPosts(snapshotDocs)
         isLoading(false);
      })

      return () => unsubscribe();
   }, [])

  return (
   <section className='mt-6 divide-y border-y border-base-300 divide-base-300' >
      {loading ? Array.from({length: 5}).map((_, idx)=> <EntrySkeleton key={idx}/>): posts.map((post)=> (<UserEntries key={post.id} data={post.data()} />))}
      
   </section>
  )
}

export default EntryFeed
