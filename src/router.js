import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ redirectPath = '/' }) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/dashboard" element={<Home />} /> */}

                <Route exact path="/signIn" element={<SignIn />} />
                {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
                <Route exact path="/signUp" element={<SignUp />} />
                <Route element={<ProtectedRoute />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

