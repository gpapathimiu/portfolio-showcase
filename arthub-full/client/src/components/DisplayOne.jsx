import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
import moment from "moment";
import { QRCodeSVG } from "qrcode.react";

function DisplayOne(props) {
	const [socket] = useState(() => io(":8000"));
	const [post, setPost] = useState({});
	const [authorName, setAuthorName] = useState("");
	const [commentText, setCommentText] = useState("");
	const [isLiked, setIsLiked] = useState(false);
	const location = useLocation();
	const [loggedUser, setLoggedUser] = useState({});

	const userId = localStorage.getItem("userId");
	const { id } = useParams();
	const navigate = useNavigate();
	const truncateText = (text, maxLength) => {
		if (!text) return ""; 
		if (text.length <= maxLength) return text;
		return text.substr(0, maxLength) + "...";
	};
	

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [postResponse, authorResponse, userResponse] = await Promise.all([
					axios.get(`http://localhost:8000/api/post/${id}`, {
						withCredentials: true,
					}),
					axios.get(`http://localhost:8000/api/user/${post.user}`, {
						withCredentials: true,
					}),
					axios.get(`http://localhost:8000/api/user/${userId}`, {
						withCredentials: true,
					}),
				]);

				setPost(postResponse.data.post);
				setAuthorName(authorResponse.data.user.username);
				setLoggedUser(userResponse.data.user);
				const userLiked =
					postResponse.data.post.likes &&
					postResponse.data.post.likes.includes(userId);
				setIsLiked(userLiked);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
		socket.on("update-likes", (data) => {
			if (data.postId === id) {
				setPost((prevPost) => ({
					...prevPost,
					likes: data.likes,
				}));
			}
		});

		socket.on("update-dislikes", (data) => {
			if (data.postId === id) {
				setPost((prevPost) => ({
					...prevPost,
					likes: data.likes,
				}));
			}
		});

		socket.on("new-comment", (data) => {
			if (data.postId === id) {
				setPost((prevPost) => ({
					...prevPost,
					comments: [...prevPost.comments, data.comment],
				}));
			}
		});

		return () => {
			socket.disconnect();
		};
	}, [id, post.user, socket, post.likes, userId]);

	const handleDelete = () => {
		axios
			.delete(`http://localhost:8000/api/post/delete/${id}`, {
				withCredentials: true,
			})
			.then(() => {
				navigate("/dashboard");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleLike = () => {
		axios
			.put(
				`http://localhost:8000/api/post/like/${id}`,
				{ user: userId },
				{ withCredentials: true }
			)
			.then((res) => {
				setPost(res.data.post);
				socket.emit("like", { postId: id, likes: post.likes.length + 1 });
				setIsLiked(true);
			})
			.catch((err) => {
				console.error("Error liking post:", err);
				console.error("Response data:", err.response?.data);
			});
	};

	const handleDislike = () => {
		axios
			.put(
				`http://localhost:8000/api/post/dislike/${id}`,
				{ user: userId },
				{ withCredentials: true }
			)
			.then((res) => {
				setPost(res.data.post);
				socket.emit("dislike", { postId: id, likes: post.likes.length - 1 });
				setIsLiked(false);
			})
			.catch((err) => {
				console.error("Error disliking post:", err);
				console.error("Response data:", err.response?.data);
			});
	};

	const handleSubmitComment = (e) => {
		e.preventDefault();
		axios
			.post(
				`http://localhost:8000/api/post/comment/${id}`,
				{ text: commentText, user: userId, userName: loggedUser.username },
				{ withCredentials: true }
			)
			.then((res) => {
				console.log(res.data.message);
				const newComment = res.data.comment;
				setPost((prevPost) => ({
					...prevPost,
					comments: [...prevPost.comments, newComment],
				}));
				setCommentText("");
			})
			.catch((err) => {
				console.error("Error adding comment:", err);
			});
	};

	return (
		<div className="max-w-3xl mx-auto mt-10">
			<div className="p-8 shadow-md rounded-md flex relative">
				<img
					src={`/public/${post.image}`}
					alt="Artwork"
					className="w-3/5 h-full rounded-xl mr-4"
				/>
				<div className="w-2/5 relative">
					<h2 className="text-2xl font-medium text-blue-700 mb-4">
						{post ? `Title: ${post.title}` : "This is a title"}
					</h2>
					<div>
						<p>Created by: {authorName ? authorName : "Loading..."}</p>
					</div>
					<p className="text-gray-600 mb-4 w-32 overflow-hidden">
						{post
							? `Description: ${truncateText(post.description, 100)}`
							: "This is a description"}
					</p>
					<div className="flex justify-between items-center mb-4">
						<p className="text-gray-500 mx-auto">
							Likes: {post && post.likes ? post.likes.length : 0}
						</p>
					</div>
					<div className="flex flex-row items-center gap-4">
						<div className="flex flex-row items-center gap-4 mx-auto my-auto">
							<button
								onClick={isLiked ? handleDislike : handleLike}
								className={`${
									!isLiked
										? "bg-green-500 hover:bg-green-400"
										: "bg-red-500 hover:bg-red-400"
								} border-none rounded-md text-white font-semibold w-20 h-10 flex items-center justify-center`}>
								{isLiked ? "Dislike" : "Like"}
							</button>
							{userId == post?.user ? (
								<button
									onClick={handleDelete}
									className="bg-red-500 hover:bg-orange-400 border-none rounded-full text-white font-semibold w-20 h-10 flex items-center justify-center">
									Delete
								</button>
							) : null}
						</div>
					</div>
					<div className="p-8">
						<QRCodeSVG
							value={`http://localhost:5173${location.pathname}`}
							className="mx-auto"
						/>
					</div>
					<form
						className="flex items-center mt-4 "
						onSubmit={handleSubmitComment}>
						<input
							type="text"
							placeholder="Add a comment..."
							className="border p-2 w-full rounded mr-2"
							required
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)}
						/>
						<button
							type="submit"
							className="bg-blue-700 hover:bg-blue-600 border-none rounded text-white font-semibold px-4 py-2">
							Comment
						</button>
					</form>
				</div>
			</div>
			<div className="mt-8">
				<div className="mt-4">
					<h3 className="text-xl font-semibold mb-2">All Comments</h3>
					{post && Array.isArray(post?.comments) && post?.comments.length > 0 ? (
						post?.comments.map((comment, idx) => (
							<div key={idx} className="grid grid-cols-2 text-lg">
								<p className="text-gray-600">Comment by: {comment.userName}</p>
								<p className="text-gray-800">{comment.text}</p>
								<p className="text-gray-500">
									Posted on: {moment(comment.createdAt).format("MMMM D, YYYY")}
								</p>
							</div>
						))
					) : (
						<p>No comments yet</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default DisplayOne;
