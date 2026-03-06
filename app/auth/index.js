"use client"
import { redirect } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null);

    const login = () => {
        if (typeof window !== 'undefined') {
            let data = localStorage.getItem("user")
            setUser(JSON.parse(data))
        }

    }

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("user")
        }
        setUser(null);
        redirect('/login')
    }
    return <AuthContext.Provider value={{ login, logout, user }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}