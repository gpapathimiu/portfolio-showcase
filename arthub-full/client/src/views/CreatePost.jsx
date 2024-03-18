import React from 'react'
import Navbar from '../components/Navbar'
import Form from "../components/Form";

function CreatePost(props) {

  const { user } = props;
  return (
    <div>
        <Navbar />
        <Form props={props} />
    </div>
  )
}

export default CreatePost