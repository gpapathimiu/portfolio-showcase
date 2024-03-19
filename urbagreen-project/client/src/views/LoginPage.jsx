import React from 'react'
import LogIn from '../components/LogIn'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LoginPage({ user }) {
  return (
    <>
        <Navbar user={false}/>
        <LogIn />
        <Footer/>
    </>
  )
}

export default LoginPage;