import { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const handleUsernameError = () => {
        setUsernameError(username.length < 1 ? 'Please input a username!' : '');
    };

    const handlePasswordError = () => {
        setPasswordError(password.length < 1 ? 'Please input a password!' : '');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        handleUsernameError();
        handlePasswordError();
        try {
            await login(username, password);
            if(location !== "/") {
                navigate(location)
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            console.log(err);
            setGeneralError('Login failed. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-center text-orange-500 mb-4">Login</h3>
            <p className="text-lg text-center text-blue-700 mb-6 hover:underline">
			<Link to={"/register"}>Don&apos;t have an account?</Link>
			</p>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-orange-500 text-lg mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full px-4 py-2 border border-blue-700 rounded-md focus:outline-none focus:border-orange-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-orange-500 text-lg mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border border-blue-700 rounded-md focus:outline-none focus:border-orange-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                </div>
                {generalError && <p className="text-red-500 text-sm mb-4">{generalError}</p>}
                <button className="w-full bg-orange-500 text-white text-lg font-semibold py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Log In</button>
            </form>
        </div>
    );
}

export default Login;
