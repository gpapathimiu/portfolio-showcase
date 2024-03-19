import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = ({ user }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const isAdmin = user && user.isAdmin;

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
		<nav className="bg-green-500 bg-opacity-90 p-6 w-full font-serif">
			<div className="flex items-center justify-around">
				<Link to="/">
					<span className="text-3xl font-bold text-white">UrbaGreen</span>
				</Link>
				<div className="flex gap-3 text-lg">
					<Link to="/all-blogs">
						<button className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
							Blog
						</button>
					</Link>
					{user && (
						<>
							<Link to="/create">
								<button className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
									Create
								</button>
							</Link>
							<Link to="/quiz">
								<button className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
									Quiz
								</button>
							</Link>
						</>
					)}
					<Link to="/contact-us">
						<button className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
							Contact
						</button>
					</Link>
					<Link to="/info">
						<button className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
							Info
						</button>
					</Link>
					{isAdmin && (
						<Link to="/admin-panel">
							<button className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
								Admin Panel
							</button>
						</Link>
					)}
				</div>
				<div className="flex gap-2">
					<button
						onClick={handleLogout}
						className="bg-white text-slate-600 px-4 py-1 rounded-md hover:bg-gray-50">
						<Link to="/" className="hover:no-underline">
							<p className="font-medium">{user ? "Logout" : "Login"}</p>
						</Link>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
