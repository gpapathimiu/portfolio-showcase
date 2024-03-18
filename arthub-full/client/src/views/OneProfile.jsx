import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import React from 'react'

function OneProfile(props) {

  return (
    <>
    <Navbar/>
    <Profile props={props}/>
    </>
  )
}

export default OneProfile