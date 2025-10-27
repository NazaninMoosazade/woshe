'use client'

import React, { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

const ClockWithUser: React.FC = () => {
  const { user } = useUser();
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <div className="font-shabnam bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-3xl text-white">
      {/* اسم کاربر */}
      <div className="text-xl md:text-2xl font-bold">
        {user?.name ? `سلام، ${user.name}` : "سلام، کاربر مهمان"}
      </div>

      {/* تاریخ */}
      <div className="bg-white bg-opacity-20 rounded-xl px-4 py-2 text-center">
        <div className="text-lg md:text-xl font-semibold">
          {time.toLocaleDateString("fa-IR", dateOptions)}
        </div>
      </div>

      {/* ساعت */}
      <div className="bg-black bg-opacity-40 rounded-xl px-4 py-2 text-center font-mono text-lg md:text-2xl">
        {time.toLocaleTimeString("fa-IR", timeOptions)}
      </div>
    </div>
  );
};

export default ClockWithUser;
