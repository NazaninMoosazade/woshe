"use client";
import { useUser } from "@/context/UserContext";
import { NavbarLink as NavbarLinkType } from "@/models/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { PiUserLight, PiBagLight } from "react-icons/pi";

function NavbarLinks() {
  const [links, setLinks] = useState<NavbarLinkType[]>([]);
  const { user, setUser } = useUser();
  const pathname = usePathname();

  // گرفتن لینک‌ها
  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch("/api/navbar");
        const data = await res.json();
        setLinks(data.links);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNavbar();
  }, []);

  // گرفتن user از سرور فقط وقتی صفحه رفرش شد
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.user) setUser(data.user);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [setUser]);

  return (
    <>
      <ul className="flex items-center gap-x-9 text-textcolor">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`nav-link transition-colors duration-300 ${
                  isActive ? "active" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        {/* {user && <li>سلام، {user.name} 👋</li>} */}
      </ul>

      {/* icon */}
      <div className="flex items-center gap-x-7 relative text-textcolor">
        {/* آیکون کاربر */}
        <div className="relative group">
          {user ? (
            <Link href={"login"}>{user.name}</Link>
          ) : (
            <Link href={"login"}>
              <PiUserLight className="w-7 h-7 cursor-pointer transition-colors duration-200" />

              <div className="absolute top-full left-8 hidden -mt-5 group-hover:flex duration-200 bg-green text-white text-sm font-shabnam px-5 h-6 rounded-md shadow-lg whitespace-nowrap">
                ورود
              </div>
            </Link>
          )}
        </div>

        {/* آیکون سبد خرید */}
        <div className="relative group">
          <PiBagLight className="w-7 h-7 cursor-pointer transition-colors duration-200" />
          <div className="absolute top-full left-8 -mt-5 hidden group-hover:flex duration-200 bg-green text-white text-sm font-shabnam px-5 h-6 rounded-md shadow-lg whitespace-nowrap">
            سبد خرید
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarLinks;
