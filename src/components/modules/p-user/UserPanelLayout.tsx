"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const UserPanelLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar دسکتاپ */}
      <div className="hidden md:block w-64">
        <Sidebar />
      </div>

      {/* Sidebar موبایل با انیمیشن */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* پس‌زمینه تیره */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeSidebar}
              className="fixed inset-0 bg-black z-30 md:hidden"
            />
            {/* سایدبار موبایل */}
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-64 h-full bg-green z-40"
            >
              <Sidebar closeSidebar={closeSidebar} isMobile />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* محتوای اصلی */}
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="mt-16 p-6 ">
          {children || <p>Welcome to your user panel!</p>}
        </main>
      </div>
    </div>
  );
};

export default UserPanelLayout;
