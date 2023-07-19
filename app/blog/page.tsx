import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Blog = () => {
  return (
    <div className='px-3 md:px-10 py-8'>
    <Navbar></Navbar>
    <p className='min-h-[48vh] flex items-center justify-center text-center text-4xl text-violet-700 font-semibold'>Hardest choices require strongest will</p>
    <Footer></Footer>
    </div>
  )
}

export default Blog