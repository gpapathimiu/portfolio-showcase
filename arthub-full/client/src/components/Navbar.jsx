import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useState } from "react";


const Navbar = () => {
    const { logout } = useAuth();
	const navigate = useNavigate();

	const userId = localStorage.getItem("userId");
	const [loggedUser, setLoggedUser] = useState({});

return ( 
<nav className="bg-white border-gray-200 dark:bg-blue-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-16" alt="Arthub Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Arthub</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {userId ? (<>
                <a href="/post/add" className="text-lg  text-gray-500 dark:text-white hover:underline">Upload</a>
                <a href={`/user/${userId}`} className="text-lg  text-gray-500 dark:text-white hover:underline">Your Profile</a>
            </>) : <></>}
            <a href="/about" className="text-lg  text-gray-500 dark:text-white hover:underline">About Us</a>
            <a href={`/${userId ? 'api/logout' :'/'}`} className="text-lg  text-gray-500 dark:text-white hover:underline">{userId ? 'Logout' : 'Login'}</a>
        </div>
    </div>
</nav>)
}

export default Navbar