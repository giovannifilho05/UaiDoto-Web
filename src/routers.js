import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";

const ProtectedRoute = ({ redirectPath = '/' }) => {
    console.log(sessionStorage.getItem('token'));
    if (!sessionStorage.getItem('token')) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default function Routers() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Login />} />
                {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route element={<ProtectedRoute />}>
                    <Route exact path="/dashboard" element={<Home />} />
                </Route>
                <Route exact path="/dashboard" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

