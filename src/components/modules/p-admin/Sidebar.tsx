'use client';

import React, { useState } from "react";
import { UsersRound, House, LogOut, X, ShoppingCart , MessageCircleMore , Contact} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


interface SidebarProps {
  closeSidebar?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, isMobile }) => {
  const [activeLink, setActiveLink] = useState<string>("/p-admin");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const router = useRouter()

  const handleLogout = async () => {

    

  const result = await Swal.fire({
    title: "آیا از خروج مطمئن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "بله، خارج شو",
    cancelButtonText: "خیر",
    confirmButtonColor: "#b91c1c",
  });

  if (result.isConfirmed) {
    const res = await fetch("/api/signout", { method: "POST" });

    if (res.ok) {
      Swal.fire({
        title: "با موفقیت خارج شدید",
        icon: "success",
        confirmButtonText: "باشه",
      });
      router.push("/login");
    } else {
      Swal.fire({
        title: "خطا در خروج",
        text: "لطفاً دوباره تلاش کنید.",
        icon: "error",
      });
    }
  }
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

             <Link
          href="/p-admin/contacts"
          className={`flex items-center gap-2 p-2 rounded ${
            activeLink === "/p-admin/contacts" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
          onClick={() => handleLinkClick("/p-admin/contacts")}
        >
          <Contact size={18} />  مخاطبین
        </Link>

        <button
          className={`flex items-center gap-2 p-2 rounded mt-auto ${
            activeLink === "logout" ? "bg-lime-950" : "hover:bg-lime-950"
          }`}
         onClick={handleLogout}
        >
          <LogOut size={18} /> خروج
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
