import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Main from './Components/Blog/Main';
import Admin from './Components/Admin/Admin';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="admin" element={<Admin />} />
            <Route
                path="/*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes >
    )
}

export default App