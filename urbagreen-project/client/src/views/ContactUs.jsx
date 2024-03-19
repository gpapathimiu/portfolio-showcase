import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function ContactUs({ user }) {
  return (
    <>
    <Navbar user={user}/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default ContactUs