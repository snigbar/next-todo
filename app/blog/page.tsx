import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Blog = () => {
  return (
    <div className='px-3 md:px-10 py-8'>
    <Navbar></Navbar>
    <div className='min-h-[48vh] flex items-center justify-center'>Blog</div>
    <Footer></Footer>
    </div>
  )
}

export default Blog