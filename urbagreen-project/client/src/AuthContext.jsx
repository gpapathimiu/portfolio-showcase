import { createContext, useContext, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                {
                    username,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            const { data } = response;

            const { token: token, user: userData } = data;

            setUser(userData);
            console.log("token", token);
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userData._id);

            return userData;
        } catch (error) {
            console.error("Login failed:", error.message);
            throw error;
        }
    };

    const register = async (username, email, password, confirmPassword) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/register",
                {
                    username,
                    email,
                    password,
                    confirmPassword,
                },
                {
                    withCredentials: true,
                }
            );

            const { data } = response;

            const { token, user: userData } = data;

            setUser(userData);
            console.log("token", token);

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userData._id);

            return userData;
        } catch (error) {
            console.error("Registration failed:", error.message);
            console.log(error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            axios.post("http://localhost:8000/api/logout", {
                withCredentials: true,
            });
            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            window.location.href = "/login";
        } catch (error) {
            console.error("Logout failed:", error.message);
            console.log(error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
