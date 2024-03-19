import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const OneBlog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/blog/${id}`, { withCredentials: true })
            .then((res) => {
                setBlog(res.data.blog);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <>
            <p className="text-decoration-none text-start font-semibold text-slate-700 p-3 hover:cursor-pointer" onClick={navigateBack}>Go Back Home</p>
            <div className="max-w-md mx-auto mt-24 bg-green-100 rounded-md p-12 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-800">{blog?.title}</h2>
                <p className="text-lg text-green-700">{blog?.description}</p>
            </div>
        </>
    );
}

export default OneBlog;
