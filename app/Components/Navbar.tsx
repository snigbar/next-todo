import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full'>
        <Link href='/' className='text-xl text-violet-700 font-medium'>Next ToDo</Link>
        <Link href='/blog' className='bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 text-sm rounded-lg'>Blog</Link>
    </nav>
  )
}

export default Navbar