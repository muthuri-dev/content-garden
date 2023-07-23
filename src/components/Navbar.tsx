
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='px-10 pt-5'>
      <Link prefetch href="/" className='text-2xl font-semibold'>Marsh <span className='text-teal-500'>DB</span></Link>
    </div>
  )
}
