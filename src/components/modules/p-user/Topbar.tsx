import React from "react";
import { Menu } from "lucide-react";

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:ml-64 fixed w-full md:w-[calc(100%-16rem)] top-0 z-10">
      {/* دکمه باز کردن منو در موبایل */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-600 hover:text-gray-900"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-lg font-semibold text-gray-800">User Dashboard</h1>

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Topbar;
