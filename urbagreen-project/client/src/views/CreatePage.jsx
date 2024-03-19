import React from 'react';
import Navbar from '../components/Navbar';
import AddOne from "../components/AddOne";
import Footer from '../components/Footer';

const CreatePage = ({ user }) => {
  return (
    <div className='bg-gray-50'>
        <Navbar user={user} />
        <AddOne user={user} />
    <Footer />
</div>
  )
}

export default CreatePage