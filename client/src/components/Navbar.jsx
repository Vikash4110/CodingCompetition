import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";

const Nav = () => {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-black");
  const [padding, setPadding] = useState("py-4 md:py-6");
  const [underlineColor, setUnderlineColor] = useState("before:bg-black");
  const [btnHoverBg, setBtnHoverBg] = useState("hover:bg-black");
  const [btnHoverText, setBtnHoverText] = useState("hover:text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || location.pathname !== "/") {
        setNavbarBg("bg-white border-b-2 shadow-md hover:shadow-xl");
        setTextColor("text-black");
        setPadding("py-2");
        setUnderlineColor("before:bg-black");
        setBtnHoverBg("hover:bg-black");
        setBtnHoverText("hover:text-white");
      } else {
        setNavbarBg("bg-transparent");
        setTextColor("text-black");
        setPadding("py-4");
        setUnderlineColor("before:bg-black");
        setBtnHoverBg("hover:bg-black");
        setBtnHoverText("hover:text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 bg-white ease-in-out ${navbarBg} ${padding}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" title="home" className={`text-2xl font-bold rounded ${textColor}`}>
              PTU Feedback Zone
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className={`focus:outline-none ${textColor}`}
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Hamburger Menu Content */}
          <div className={`fixed inset-0 z-40 bg-white text-black transition-transform duration-300 ease-in-out ${isHamburgerOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsHamburgerOpen(false)}
                className="text-black"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-4 font-semibold">
              <Link to="/" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block group">
                Home
                <span className="absolute left-0 bottom-0 h-0.5 bg-black transition-transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/about" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block group">
                About
                <span className="absolute left-0 bottom-0 h-0.5 bg-black transition-transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/feedback" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block group">
                Feedback
                <span className="absolute left-0 bottom-0 h-0.5 bg-black transition-transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/contact" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block group">
                Contact
                <span className="absolute left-0 bottom-0 h-0.5 bg-black transition-transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>

              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsHamburgerOpen(false)} className="py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto bg-yellow-500 transition-transform duration-200 ease-in-out hover:scale-105">
                    Dashboard
                  </Link>
                  <button onClick={logout} className="py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto bg-red-500 transition-transform duration-200 ease-in-out hover:scale-105">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsHamburgerOpen(false)} className="py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto bg-green-500 transition-transform duration-200 ease-in-out hover:scale-105">
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsHamburgerOpen(false)} className="py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto bg-blue-500 transition-transform duration-200 ease-in-out hover:scale-105">
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className={`relative inline-block group ${textColor}`}>
              Home
              <span className={`absolute left-0 bottom-0 h-0.5 ${underlineColor} transition-transform scale-x-0 group-hover:scale-x-100 w-full`}></span>
            </Link>
            <Link to="/about" className={`relative inline-block group ${textColor}`}>
              About
              <span className={`absolute left-0 bottom-0 h-0.5 ${underlineColor} transition-transform scale-x-0 group-hover:scale-x-100 w-full`}></span>
            </Link>
            <Link to="/feedback" className={`relative inline-block group ${textColor}`}>
              Feedback
              <span className={`absolute left-0 bottom-0 h-0.5 ${underlineColor} transition-transform scale-x-0 group-hover:scale-x-100 w-full`}></span>
            </Link>
            <Link to="/contact" className={`relative inline-block group ${textColor}`}>
              Contact
              <span className={`absolute left-0 bottom-0 h-0.5 ${underlineColor} transition-transform scale-x-0 group-hover:scale-x-100 w-full`}></span>
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="rounded-full px-4 py-2 bg-yellow-500 text-white font-medium transition-transform duration-200 ease-in-out hover:scale-105">
                  Dashboard
                </Link>
                <Link to="/logout" onClick={logout} className="rounded-full px-4 py-2 bg-red-500 text-white font-medium transition-transform duration-200 ease-in-out hover:scale-105">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="rounded-full px-4 py-2 bg-green-500 text-white font-medium transition-transform duration-200 ease-in-out hover:scale-105">
                  Login
                </Link>
                <Link to="/register" className="rounded-full px-4 py-2 bg-blue-500 text-white font-medium transition-transform duration-200 ease-in-out hover:scale-105">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
