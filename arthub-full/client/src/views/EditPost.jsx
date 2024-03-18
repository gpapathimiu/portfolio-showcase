import React from 'react'
import Navbar from '../components/Navbar'
import Edit from '../components/Edit'

function EditPost(props) {
  return (
    <>
        <Navbar/>
        <Edit props={props} />
    </>
  )
}

export default EditPost