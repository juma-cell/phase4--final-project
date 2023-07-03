import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto min-h-[85vh] bg-blue-500 p-5'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout