import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function DisplayBlog({ user, blog, onApprove, onDelete }) {
    const { _id, title, description, approved } = blog;

    const isAdmin = user && user.isAdmin;

    const handleApprove = () => {
        onApprove(_id);
    };

    const handleDelete = () => {
        onDelete(_id);
    };

    return (
        <div className="my-4 mx-auto bg-green-100 rounded-md p-6 shadow-lg max-w-md">
            <Link to={`/blog/${_id}`}><h2 className="text-3xl font-bold mb-4 text-green-800">{title}</h2></Link>
            <p className="text-lg text-green-700 line-clamp-3">{description}</p>
            {(isAdmin && !approved ) && <div className="mt-4">
                <button onClick={handleApprove} className="mr-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Approve</button>
                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
            </div>}
        </div>
    );
}
