import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  handleTitleError,
  handleDescriptionError
} from "../helpers/functions";

import axios from "axios";

export default function Edit(props) {
  const { user } = props;
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [post, setPost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/${id}`)
      .then((res) => {
        setTitle(res.data.post.title);
        setDescription(res.data.post.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigateBack = () => {
    navigate(-1);
  };

  const updatePost = (e) => {
    e.preventDefault();
    handleTitleError(title, setTitleError);
    handleDescriptionError(description, setDescriptionError);

    if (title.length > 1 && description.length > 3) {
      setGeneralError("Your form has some issues!");
    } else {
      axios
        .put(`http://localhost:8000/post/edit/${id}`, {
          title,
          description,
        })
        .then((res) => {
          console.log(res.data);
          setTitle("");
          setDescription("");
          navigate(-1);
        })
        .catch((err) => {
          setError("Your api has some problems!");
          console.log(err);
        });
    }
  };

  const handleTitleError = () => {
    if (title.length === 0) {
      setTitleError("Please enter a title!");
    } else setTitleError("");
  };

  const handleDescriptionError = () => {
    if (description.length === 0) {
      setDescriptionError("Please enter a description!");
    } else if (description.length < 3) {
      setDescriptionError("Description must be longer than 3 characters");
    } else setDescriptionError("");
  };

  return (
    <div>
      <form onSubmit={(e) => updatePost(e)}>
        <div>
          <p onClick={navigateBack}> &larr; </p>
          <h1>Update</h1>
          {generalError ? <p>{generalError}</p> : null}
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <img
            src={`/${post.image}`}
            alt="Artwork"
            className="w-3/5 h-full rounded-xl border-4 border-solid border-orange-500 border-opacity-55 mr-4"
          />
        </div>
      </form>
    </div>
  );
}
