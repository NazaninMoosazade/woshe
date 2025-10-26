import React from "react";
import { User, ShoppingBag, Settings, LogOut, X } from "lucide-react";

interface SidebarProps {
  closeSidebar?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, isMobile }) => {
  return (
    <aside className="bg-green text-white w-64 h-full flex flex-col p-4">
      {/* دکمه بستن فقط در موبایل */}
      {isMobile && (
        <div className="flex justify-end mb-2">
          <button onClick={closeSidebar} className="text-white hover:text-gray-300">
            <X size={24} />
          </button>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6">User Panel</h2>
      <nav className="flex flex-col gap-3">
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-lime-950 rounded">
          <User size={18} /> Profile
        </a>
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-lime-950 rounded">
          <ShoppingBag size={18} /> Orders
        </a>
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-lime-950 rounded">
          <Settings size={18} /> Settings
        </a>
        <button className="flex items-center gap-2 p-2 hover:bg-lime-950 rounded mt-auto">
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
