import { Link, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaBookOpen, FaYoutube, FaClipboardList, FaBlogger } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";
import { useAuth } from "../../store/auth";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("Users");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-800 text-white flex flex-col h-screen fixed">
        <br /><br /><br /><br /><br />
          <div className="px-6 py-4  text-center font-bold text-xl">
            Admin Panel
          </div>
          <nav className="flex flex-col flex-grow p-4 space-y-2">
            <SidebarLink
              to="/admin/users"
              icon={<FaUser />}
              label="Users"
              activeTab={activeTab}
              onClick={() => handleTabClick("Users")}
            />
             <SidebarLink
              to="/admin/teacher"
              icon={<FaUser />}
              label="Teacher"
              activeTab={activeTab}
              onClick={() => handleTabClick("Users")}
            /> <SidebarLink
              to="/admin/feedback"
              icon={<FaUser />}
              label="Feedback"
              activeTab={activeTab}
              onClick={() => handleTabClick("Users")}
            />
            <SidebarLink
              to="/admin/performance"
              icon={<FaUser />}
              label="Performance"
              activeTab={activeTab}
              onClick={() => handleTabClick("Users")}
            />
            <SidebarLink
              to="/admin/contacts"
              icon={<RiContactsBookFill />}
              label="Contacts"
              activeTab={activeTab}
              onClick={() => handleTabClick("Contacts")}
            />
    
            <SidebarLink
              to="/"
              icon={<FaHome />}
              label="Home"
              activeTab={activeTab}
            />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100 ml-64">
          <Outlet />
        </main>
      </div>
    </>
  );
};

const SidebarLink = ({ to, icon, label, activeTab, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center p-2 text-lg rounded transition-all duration-300 ${
      activeTab === label
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-700 hover:text-white text-gray-300"
    }`}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </Link>
);

export default AdminLayout;
