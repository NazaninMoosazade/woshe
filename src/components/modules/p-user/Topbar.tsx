'use client'

import React, { useEffect } from "react";
import { Menu } from "lucide-react";
import { useUser } from "@/context/UserContext";

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
  const { user, setUser } = useUser();

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
    <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:ml-64 fixed w-full md:w-[calc(100%-16rem)] top-0 z-10">
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-600 hover:text-gray-900"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-lg font-shabnam text-gray-800">داشبورد کاربر</h1>

      <div className="flex items-center gap-3 font-shabnam">
        {user?.name ? <p>{user.name}</p> : <p >کاربر وارد نشده</p>}
      </div>
    </header>
  );
};

export default Topbar;
