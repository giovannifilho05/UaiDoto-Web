import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

export default function Routers() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Login />} />
                {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
                <Route exact path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

