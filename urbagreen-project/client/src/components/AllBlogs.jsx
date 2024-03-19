import { useState, useEffect } from "react";
import axios from "axios";
import DisplayBlog from "./DisplayBlog";

export default function AllBlogs() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/blogs", {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				setBlogs(res.data.blogs);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{blogs?.map((blog, key) => (
				<DisplayBlog key={key} blog={blog} />
			))}
		</div>
	);
}
