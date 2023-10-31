import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/home/login/login";
import Home from "./components/home/Home";
import Profile from "./components/home/profile/profile";

const AppRouter = ({ onLogin }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ " element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

