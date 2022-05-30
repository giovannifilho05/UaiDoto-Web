import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import { getStoreData } from "./utils/token";

const ProtectedRoute = ({ redirectPath = '/' }) => {
    if (!getStoreData(process.env.TOKEN_NAME)) {
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
                
                <Route exact path="/login" element={<Login />} />
                {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route element={<ProtectedRoute />}>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

