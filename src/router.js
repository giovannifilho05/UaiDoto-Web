import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function Routers() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/login" element={<Login />} />
                {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

