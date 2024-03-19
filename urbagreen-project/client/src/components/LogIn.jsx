import { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [generalError, setGeneralError] = useState("");
    const [attemptedLogin, setAttemptedLogin] = useState(false); // New state variable

    const handleUsernameError = () => {
        if (username.length < 1) {
            setUsernameError('Please input a username!');
            return false;
        } else {
            setUsernameError('');
            return true;
        }
    };

    const handlePasswordError = () => {
        if (password.length < 1) {
            setPasswordError('Please input a password!');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setAttemptedLogin(true); // Mark that a login attempt has been made
        const isUsernameValid = handleUsernameError();
        const isPasswordValid = handlePasswordError();
        if (isUsernameValid && isPasswordValid) {
            try {
                await login(username, password);
                navigate('/');
            } catch (err) {
                setGeneralError(err.response.data.message);
                console.log(err);
            }
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full px-20 py-12 rounded-lg">
                <h3 className="font-bold text-3xl text-center text-green-500 mb-4">Login</h3>
                <form className="flex flex-col w-[400px] mt-auto mx-auto space-y-4" onSubmit={handleLogin}>
                    <p className="mx-auto my-2 whitespace-nowrap text-green-500">Log into your account!</p>
                    {generalError && attemptedLogin && <p className="text-red-500 text-center">{generalError}</p>}
                    <label htmlFor="username" className="text-blue-500 text-lg font-medium">
                        Username:
                    </label>
                    {usernameError && <p className="text-red-500 text-center">{usernameError}</p>}
                    <input
                        type="text"
                        id="username"
                        className="border p-2 mb-3 text-green-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password" className="text-blue-500 text-lg font-medium">
                        Password:
                    </label>
                    {passwordError && <p className="text-red-500 text-center">{passwordError}</p>}
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="border p-2 mb-3 text-green-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-[#536878] text-white py-2 w-32 mx-auto rounded-md hover:bg-green-500">
                        Log In
                    </button>
                </form>
                <div className="flex justify-center items-center font-sans mt-8">
                    <p>
                        Don't have an account?
                        <span className="mx-1 font-medium text-blue-500 hover:text-opacity-80">
                            <Link to={`/register`}>
                                Register here!
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
