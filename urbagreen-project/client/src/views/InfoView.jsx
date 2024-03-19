import React from 'react'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LoginPage({ user}) {
  return (
    <>
        <Navbar user={user} />
        <Info />
        <Footer/>
    </>
  )
}

export default LoginPage;