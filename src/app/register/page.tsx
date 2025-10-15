import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";

function page() {
  return (
    <>
      <Navbar />
      <Title title="ساخت حساب کاربری" />

      <div className="mt-12 mb-12 flex items-center justify-center p-4">
        <div className="grid bg-white font-shabnam font-bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
          {/* آیکون بالای فرم */}
          <div className="flex justify-center mb-4">
            <div className="bg-[#34180e] p-3 rounded-full shadow-md">
              <FaUserAlt size={30} color="white" />
            </div>
          </div>

          {/* عنوان */}
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#34180e]">
            ایجاد حساب کاربری
          </h2>

          {/* نام */}
          <div className="relative mt-3">
            <FaUserAlt
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="نام"
            />
          </div>

          {/* شماره موبایل */}
          <div className="relative mt-4">
            <FaPhoneAlt
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="شماره موبایل"
            />
          </div>

          {/* ایمیل */}
          <div className="relative mt-4">
            <FaEnvelope
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="email"
              placeholder="ایمیل (دلخواه)"
            />
          </div>

          {/* رمز عبور */}
          <div className="relative mt-4">
            <FaLock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="password"
              placeholder="رمز عبور"
            />
          </div>

          {/* دکمه ثبت‌نام */}
          <button className="mt-6 p-3 cursor-pointer font-myfont bg-green text-white rounded-lg hover:bg-textcolor transition-all duration-300">
            ثبت نام
          </button>

          {/* برگشت به ورود */}
          <Link href='/login' className="flex items-center justify-center gap-2 font-myfont font-Bold text-sm text-center mt-4 cursor-pointer mb-4 text-[#34180e] hover:underline transition">
            <FaArrowLeft size={14} />
            برگشت به ورود
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
