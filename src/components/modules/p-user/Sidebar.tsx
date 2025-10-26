'use client'

import React, { useState } from "react";
import { Send, House, LogOut, X, Heart } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  closeSidebar?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, isMobile }) => {
  const [activeLink, setActiveLink] = useState<string>("/p-user");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <aside className="bg-green text-white w-64 h-full flex flex-col p-4">
      {/* دکمه بستن فقط در موبایل */}
      {isMobile && (
        <div className="flex justify-end mb-2">
          <button
            onClick={closeSidebar}
            className="text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
      )}

      <nav className="flex flex-col gap-7 font-shabnam">
        <Link
          href="/p-user"
          className={`flex items-center gap-2 p-2 mt-12 rounded ${
            activeLink === "/p-user" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-user")}
        >
          <House size={18} /> خانه
        </Link>

        <Link
          href="/p-user/wishlist"
          className={`flex items-center gap-2 p-2 rounded ${
            activeLink === "/p-user/wishlist" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-user/wishlist")}
        >
          <Heart size={18} /> علاقه مندی ها
        </Link>

        <Link
          href="/p-user/ticket"
          className={`flex items-center gap-2 p-2 rounded ${
            activeLink === "/p-user/ticket" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-user/ticket")}
        >
          <Send size={18} /> تیکت ها
        </Link>

        <button
          className={`flex items-center gap-2 p-2 rounded mt-auto ${
            activeLink === "logout" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("logout")}
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
