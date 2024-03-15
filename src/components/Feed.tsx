'use client'

import React from 'react'
import Stories from './Stories'
import Posts from './Posts'



export default function Feed() {
  return  (

    <div className='grid grid-cols-1
    md:max-w-7xl mx-auto
     md:grid-cols-2 xl::max-w-full' >
      <section className='md:cols-span-2'>
      <Stories/>

      <Posts/>
    </section>

    <section className='md:col-span -1 hidden
    md:inline-grid'>

    </section>
    </div>
    
  )
}
