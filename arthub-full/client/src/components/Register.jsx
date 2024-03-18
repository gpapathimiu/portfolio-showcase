import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const handleUsernameError = () => {
        setUsernameError(username.length < 1 ? "Please input a username!" : username.length < 3 ? "Username must be longer than 3 characters." : "");
    };

    const handleEmailError = () => {
        setEmailError(email.length < 1 ? "Please input an email!" : email.length < 3 ? "Email must be longer than 3 characters." : "");
    };

    const handlePasswordError = () => {
        setPasswordError(password.length < 1 ? "Please input a password!" : password.length < 6 ? "Password must be longer than 6 characters." : "");
    };

    const handleConfirmPasswordError = () => {
        setConfirmPasswordError(password !== confirmPassword ? "Passwords must match!" : "");
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        handleUsernameError();
        handleEmailError();
        handlePasswordError();
        handleConfirmPasswordError();

        try {
            await register(username, email, password, confirmPassword);
            navigate("/dashboard");
        } catch (error) {
            setGeneralError("Some errors");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-center text-orange-500 mb-4">Register</h3>
            <form onSubmit={handleRegister}>
                <p className="text-lg text-center text-blue-700 mb-6 hover:underline">
				<Link to={"/login"}>
					Already have an account?
				</Link></p>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-orange-500 text-lg mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        className="w-full px-4 py-2 border border-blue-700 rounded-md focus:outline-none focus:border-orange-500"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-orange-500 text-lg mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        className="w-full px-4 py-2 border border-blue-700 rounded-md focus:outline-none focus:border-orange-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-orange-500 text-lg mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="w-full px-4 py-2 border border-blue-700 rounded-md focus:outline-none focus:border-orange-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-orange-500 text-lg mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        className="w-full px-4 py-2 border border-blue-700 rounded-md focus:outline-none focus:border-orange-500"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
                </div>
                {generalError && <p className="text-red-500 text-sm mb-4">{generalError}</p>}
                <button className="w-full bg-orange-500 text-white text-lg font-semibold py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Create Account</button>
            </form>
        </div>
    );
}

export default Register;
