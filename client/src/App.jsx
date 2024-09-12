import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import ScrollToTop from './components/ScrollToTop';
import UserDashboard from "./pages/UserDashboard";
import UpdateUser from "./components/UpdateUser";
import Logout from "./components/Logout";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminUpdate from "./components/AdminUpdate";

import './index.css';
const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/update-profile" element={<UpdateUser />} />
        <Route path="/logout" element={<Logout />} />


        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/users" />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        <Route path="*" element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
