import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useState, useEffect } from "react";
import axios from 'axios';

const Navbar = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const userId = localStorage.getItem("userId");

	const [loggedUser, setLoggedUser] = useState({});

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/user/${userId}`, {
				withCredentials: true,
			})
			.then((res) => {
				setLoggedUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			await logout();
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<nav className="border-gray-200 bg-blue-800">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="/logo.png" className="h-16" alt="Arthub Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Arthub
					</span>
				</a>
				<div className="flex items-center space-x-6 rtl:space-x-reverse">
					{userId ? (
						<>
							<a
								href="/post/add"
								className="text-lg  text-gray-500 dark:text-white hover:underline">
								Upload
							</a>
							<a
								href={`/user/${userId}`}
								className="text-lg  text-gray-500 dark:text-white hover:underline">
								Your Profile
							</a>
						</>
					) : (
						<></>
					)}
					<button
						onClick={handleLogout}
						className="bg-indigo-500 hover:bg-orange-400 border-none rounded-full text-white font-semibold  w-20 h-20 flex items-center justify-center">
						<Link to="/" className="hover:no-underline">
							<p className="text-white">Logout</p>
						</Link>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
