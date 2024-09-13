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
import AdminTeacher from "./pages/AdminTeacher";
import AdminEditTeacher from './components/AdminEditTeacher';
import AdminAddTeacher from './components/AdminAddTeacher';
import AdminFeedback from './pages/AdminFeedback';
import Teacher from "./pages/Teacher";
import AdminContacts from "./pages/AdminContacts";
import ComparisonPerformance from './pages/ComparisonPerformance';
import Contact from "./pages/ContactUs";
import About from './pages/About'
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
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/users" />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="teacher" element={<AdminTeacher />} />
           <Route path="teacher/add" element={<AdminAddTeacher />} />
          <Route path="teacher/:id/edit" element={<AdminEditTeacher />} /> 
          <Route path="feedback" element={<AdminFeedback />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="performance" element={<ComparisonPerformance />} />
          </Route>
        <Route path="*" element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
