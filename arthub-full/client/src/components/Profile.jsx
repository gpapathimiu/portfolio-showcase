import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Profile(props) {
	const { id } = useParams();

	const [user, setUser] = useState(null);
	const [userPosts, setUserPosts] = useState([{}]);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/user/${id}`, {
				withCredentials: true,
			})
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`http://localhost:8000/api/users/posts/${id}`, {
				withCredentials: true,
			})
			.then((res) => {

				const filteredPosts = res.data.posts.filter((post) => post.user === id);
				setUserPosts(filteredPosts);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const getAuthorName = (userId) => {
		const author = userPosts.find((post) => post.user === userId);
		return author ? author.username : "Unknown";
	};

	return (
		<div className="w-full">
			<div className="flex flex-col gap-4 rounded-lg">
				{userPosts &&
					userPosts.map((post, idx) => (
						<div
							key={idx}
							className="mx-auto container px-4 py-3 hover:bg-orange-400 hover:bg-opacity-15 hover:cursor-pointer w-full rounded-lg">
							<div className="flex flex-row p-4">
								<div className="flex flex-col w-[50%]">
									<img
										src={`/public/${post.image}`}
										alt="Artwork"
										className="w-[500px] h-auto rounded-xl border-4 border-solid border-indigo-500 border-opacity-55"
									/>
								</div>
								<div className="flex flex-col gap-4 width-[50%]">
									<div className="w-[80%] m-auto">
										<div className="flex flex-row items-center my-auto gap-2 ">
											<Link
												to={`/post/${post._id}`}
												className=" hover:no-underline">
												<h4 className="font-bold text-3xl text-orange-500 hover:no-underline my-auto">
													{post.title}
												</h4>
											</Link>
											<Link
												to={`/user/${post.user}`}
												className=" hover:no-underline whitespace-nowrap">
												<h4 className="font-bold text-2xl text-indigo-500 hover:no-underline my-auto">
													by{" "}
													<span className="hover:text-orange-500">
														{getAuthorName(post.user)}
													</span>
												</h4>
											</Link>
										</div>
										<div className="mt-4 text-lg">{post.description}</div>
										<p className="text-md mt-6 font-semibold text-indigo-500 whitespace-nowrap">
											Posted on{" "}
											<span className="text-orange-500">
												{moment(post.createdAt).format("MMMM D, YYYY")}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Profile;
