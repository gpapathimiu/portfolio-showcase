import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const Display = (props) => {
    const userId = localStorage.getItem("userId");

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loggedUser, setLoggedUser] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/posts", { withCredentials: true });
                setPosts(res.data.posts);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/users", { withCredentials: true });
                setUsers(res.data.users);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchLoggedUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/user/${userId}`, { withCredentials: true });
                setLoggedUser(res.data.user);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
        fetchUsers();
        fetchLoggedUser();
    }, []);

    const getAuthorName = (userId) => {
        const author = users.find((user) => user._id === userId);
        return author ? author.username : "Unknown";
    };

    return (
        <div className="max-h-full">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                {posts.map((post) => (
                    <div key={post._id} className="bg-white w-80 rounded-lg shadow-md overflow-hidden mb-8">
                        <img
                            src={post.image}
                            alt="Artwork"
                            className="w-56 h-auto object-cover mx-auto my-4 border border-opacity-5"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-orange-500 mb-2">
                                <Link to={`/post/${post._id}`} className="hover:text-orange-600">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-lg text-blue-500 mb-4">
                                by{" "}
                                <Link to={`/user/${post.user}`} className="hover:text-orange-600">
                                    {getAuthorName(post.user)}
                                </Link>
                            </p>
                            <p className="text-lg text-gray-700 mb-4">{post.description}</p>
                            <p className="text-sm font-semibold text-blue-500">
                                Posted on <span className="text-orange-500">{moment(post.createdAt).format('MMMM D, YYYY')}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Display;
