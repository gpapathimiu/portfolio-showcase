import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import DisplayBlog from "../components/DisplayBlog";
import MessageCard from "../components/MessageCard";

const AdminView = ({ user }) => {
	const [pendingBlogs, setPendingBlogs] = useState([]);
	const [approvedBlogs, setApprovedBlogs] = useState([]);
	const [messages, setMessages] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/blogs/pending", {
				withCredentials: true,
			})
			.then((res) => {
				setPendingBlogs(res.data.blogs);
			})
			.catch((err) => {
				console.log(err);
			});
	
		axios
			.get("http://localhost:8000/api/blogs", {
				withCredentials: true,
			})
			.then((res) => {
				setApprovedBlogs(res.data.blogs);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []); 

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/messages", {
				withCredentials: true,
			})
			.then((res) => {
				setMessages(res.data.messages);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [messages?.length]);
	
	

	const handleApprove = (blogId) => {
		axios
			.post(
				`http://localhost:8000/api/blogs/approve/${blogId}`,
				{},
				{
					withCredentials: true,
				}
			)
			.then(() => {
				setPendingBlogs(pendingBlogs.filter((blog) => blog._id !== blogId));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = (blogId) => {
		axios
			.delete(`http://localhost:8000/api/blogs/${blogId}`, {
				withCredentials: true,
			})
			.then(() => {
				setPendingBlogs(pendingBlogs.filter((blog) => blog._id !== blogId));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Navbar user={user} />
			<div className="flex flex-row">
				<div className="flex flex-col flex-1">
					<div className="bg-gray-100 w-full h-[750px]">
						<div className="text-center text-4xl text-gray-700 font-medium mt-8">
							<h3>Messages:</h3>
							<p className="text-center text-lg mt-6">
								If there are pending messages you can see them here.
							</p>
						</div>
						<div>
							{messages?.map((message, index) => (
								<MessageCard key={index} message={message} />
							))}
							{messages && messages.length === 0 && (
								<p className="text-xl mx-auto bg-white w-52 p-4 rounded-md font-medium text-gray-600 text-center mt-12 underline">No pending messages.</p>
							)}
						</div>
					</div>
				</div>
				<div className="flex flex-col flex-1">
					{pendingBlogs &&
						pendingBlogs.map((blog, index) => (
							<DisplayBlog
								key={index}
								user={user}
								blog={blog}
								onApprove={handleApprove}
								onDelete={handleDelete}
							/>
						))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AdminView;
