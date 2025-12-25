import React from 'react'
import Link from 'next/link'
import Home from '../../components/Home'

const page = () => {
  return (
    <div>
      <h1 className='text-yellow-500'> welcome to nextjs APP</h1>
      <div className=' mt-2.5 w-[85%] bg-green-500 mx-auto p-4 rounded-lg'>
        <ul className='grid grid-cols-3 justify-around text-center'>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/dashboard/utils">Dashboard Utilities</Link></li>
          <li><Link href="/dashboard/Users">Dashboard Users</Link></li>
        </ul>
      </div>
      <div className='album-card mt-4'>
        
      </div>
    </div>
  )
}

export default page
