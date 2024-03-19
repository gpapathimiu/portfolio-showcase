import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { handleUsernameError, handleEmailError, handlePasswordError, handleConfirmPasswordError } from '../helpers/functions';
import { useAuth } from '../AuthContext';

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        handleUsernameError(username, setUsernameError);
        handleEmailError(email, setEmailError);
        handlePasswordError(password, setPasswordError);
        handleConfirmPasswordError(password, confirmPassword, setConfirmPasswordError);

        if (usernameError || emailError || passwordError || confirmPasswordError) {
            throw new Error('Validation error. Please check your inputs.');
        }
        try {
            console.log('USERNAME', typeof(username), 'EMAIL', typeof(email), 'PASSWORD', typeof(password), 'CONFIRM', confirmPassword);
            await register(username, email, password, confirmPassword);
            navigate('/');
        } catch (error) {
            setGeneralError(JSON.stringify(error.response.data));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full px-20 py-12 rounded-lg">
                <h3 className="font-bold text-3xl text-center text-green-500 mb-4">Register</h3>
                <form
                    onSubmit={handleRegister}
                    className="flex flex-col w-[400px] mt-auto mx-auto space-y-4">
                    <p className="mx-auto my-2 whitespace-nowrap text-green-500">Create a new account!</p>
                    <label htmlFor="username" className="text-green-500 mb-1 text-lg font-medium">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        className="border p-2 mb-3 text-indigo-500"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email" className="text-green-500 mb-1 text-lg font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        className="border p-2 mb-3 text-indigo-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="text-green-500 mb-1 text-lg font-medium">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="border p-2 mb-3 text-indigo-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirmpassword" className="text-green-500 mb-1 text-lg font-medium">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        className="border p-2 mb-3 text-green-500"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {generalError && <p>{generalError}</p>}
                    <button className="bg-[#536878] text-white py-2 px-4 rounded-md hover:bg-green-500">
                        Create Account
                    </button>
                </form>
                <div className="flex justify-center items-center font-sans mt-8">
                    <p>
                        Already have an account?
                        <span className="mx-1 font-medium text-blue-500 hover:text-opacity-80">
                            <Link to={`/login`}>
                                Log in here!
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
