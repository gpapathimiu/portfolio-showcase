import React from 'react'
import Register from '../components/Register'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RegisterPage({ user }) {
  return (
    <>
    <Navbar user={false}/>
    <Register/>
    <Footer/>
    </>
  )
}

export default RegisterPage