import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import ScrollToTop from './components/ScrollToTop';
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
        <Route path="*" element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
