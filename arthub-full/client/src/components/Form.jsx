import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    handleTitleError,
    handleDescriptionError,
    handleImageError,
} from "../helpers/functions";
import axios from 'axios';

const Form = (props) => {
    const { user } = props;
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [imageError, setImageError] = useState("");
    const [generalError, setGeneralError] = useState("");
    const [posts, setPosts] = useState([]);

    const createPost = async (e) => {
        e.preventDefault();
        handleTitleError(title, setTitleError);
        handleDescriptionError(description, setDescriptionError);
        handleImageError(image, setImageError);

        if (title.length > 2 && description.length > 3 && image) {
            try {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("image", image);
                formData.append("user", userId);

                const response = await axios.post(
                    "http://localhost:8000/api/post/new",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        withCredentials: true,
                    }
                );

                const newPost = {
                    title,
                    description,
                    image: response.data.post.image,
                    likes: [],
                    comments: [],
                    user: userId,
                };

                setPosts([...posts, newPost]);
                setTitle("");
                setDescription("");
                setImage(null);
                navigate("/dashboard");
            } catch (error) {
                setGeneralError("There was an issue adding the artwork!");
                console.log(error);
            }
        } else {
            setGeneralError("Your post has some issues!");
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-[770px] bg-gradient-to-b from-blue-500 to-blue-300">
            <div className="bg-white rounded-md p-8 shadow-lg w-96">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Upload your work to ArtHub!</h1>
                <form onSubmit={createPost} encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="title" className="text-lg font-semibold text-blue-700 block">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            placeholder="Enter the title"
                            className="border border-indigo-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-700"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="text-lg font-semibold text-blue-700 block">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            placeholder="Enter a brief description"
                            className="border border-indigo-300 rounded-md p-2 w-full h-32 focus:outline-none focus:border-blue-700"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="text-lg font-semibold text-blue-700 block">File Upload: *</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="border border-indigo-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-700"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Submit</button>
                        <Link to="/dashboard">
                            <button className="text-blue-700 py-2 px-4 rounded-md hover:bg-indigo-100 focus:outline-none focus:bg-indigo-100">Cancel</button>
                        </Link>
                    </div>
                    {generalError && <p className="text-red-600 mt-4">{generalError}</p>}
                </form>
            </div>
        </div>
    );
};

export default Form;
