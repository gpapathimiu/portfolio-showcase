import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'

function FrontPage({user}) {
  return (
    <div className='bg-gray-50'>
        <Navbar user={user} />
        <Dashboard user={user} />
        <Footer />
    </div>
  )
}

export default FrontPage