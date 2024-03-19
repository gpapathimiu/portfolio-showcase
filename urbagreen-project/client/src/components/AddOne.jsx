import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AddOne = ({ user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(title === "" || title.length < 1) {
      setTitleError("Your blog must have a title!");
      return;
    }
    if(description === "" || description.length < 8) {
      setDescriptionError("The blog's description must be at least 8 characters.");
      return;
    }
    if (!titleError && !descriptionError) {
      axios.post(
        'http://localhost:8000/api/blog/new',
        {
          title,
          description,
          user: userId
        },
        {
          withCredentials: true
        }
      ).then((res) => {
        console.log("Created Successfully:", res.data)
        setTitle('');
        setDescription('');
        navigate(-1);
      }).catch((err) => {
        console.log("Error", err)
      })
    }
  };

  return (
    <div className="max-w-lg h-[500px] mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-semibold mb-4 text-green-700 text-center">Create a blog</h2>
      <form className='py-12' onSubmit={handleSubmit}>
        <div className="mb-4">
          {titleError && <p>{titleError}</p>}
          <label htmlFor="title" className="block text-2xl font-medium text-green-700">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-6">
        {descriptionError && <p>{descriptionError}</p>}
          <label htmlFor="description" className="block text-2xl font-medium text-green-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="resize-none mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">Create</button>
      </form>
    </div>
  );
};

export default AddOne;
