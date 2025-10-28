'use client';

import React, { useState } from "react";
import { UsersRound, House, LogOut, X, ShoppingCart , MessageCircleMore } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  closeSidebar?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, isMobile }) => {
  const [activeLink, setActiveLink] = useState<string>("/p-admin");

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
          href="/p-admin"
          className={`flex items-center gap-2 p-2 mt-12 rounded ${
            activeLink === "/p-admin" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-admin")}
        >
          <House size={18} /> خانه
        </Link>

        <Link
          href="/p-admin/products"
          className={`flex items-center gap-2 p-2 rounded ${
            activeLink === "/p-admin/products" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-admin/products")}
        >
          <ShoppingCart size={18} />   محصولات
        </Link>

        <Link
          href="/p-admin/users"
          className={`flex items-center gap-2 p-2 rounded ${
            activeLink === "/p-admin/users" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-admin/users")}
        >
          <UsersRound size={18} />  کاربران
        </Link>

           <Link
          href="/p-admin/comments"
          className={`flex items-center gap-2 p-2 rounded ${
            activeLink === "/p-admin/comments" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-admin/comments")}
        >
          <MessageCircleMore size={18} />  کامنت ها
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
