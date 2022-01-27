import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from './Components/Blog/Main';
import LoginForm from "./Components/Admin/LoginForm";
import Dashboard from "./Components/Admin/Dashboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="admin/login" element={<LoginForm />} />
            <Route path="admin/dashboard" element={<Dashboard />} />
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