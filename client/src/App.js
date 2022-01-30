import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from 'react-redux';

import Main from './Components/Blog/Main';
import LoginForm from "./Components/Admin/LoginForm";
import Dashboard from "./Components/Admin/Dashboard";


function App() {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="main" element={<Main />} />
            {!isLoggedIn && (
                <Route path="admin/login" element={<LoginForm />} />
            )}
            {isLoggedIn && (
                <Route path="admin/dashboard" element={<Dashboard />} />
            )}
            <Route
                path="/*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default App