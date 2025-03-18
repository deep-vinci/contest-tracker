import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/UserContext.jsx";

import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId="653138620265-atc15v2ejb98cbaioavvqef9j0gm3sud.apps.googleusercontent.com">
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </UserProvider>
    </GoogleOAuthProvider>
);
