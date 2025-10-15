import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa"
import Link from "next/link";

function page() {
  return (
    <div>
      <Navbar />
      <Title title="حساب کاربری" />

    <div className="mt-12 mb-12 flex items-center justify-center p-4">
      <div className="grid bg-white font-myfont font-shabnam font-Bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
        
        {/* آیکون بالای فرم */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#34180e] p-3 rounded-full shadow-md">
            <FaUserAlt size={30} color="white" />
          </div>
        </div>

        {/* عنوان */}
        <h2 className="text-xl sm:text-2xl  font-Bold mb-6 text-[#34180e]">
          ورود به حساب کاربری
        </h2>

        {/* ایمیل / شماره موبایل */}
        <div className="relative mt-3">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            className="font-myfont font-Light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
            type="text"
            placeholder="ایمیل / شماره موبایل"
          />
        </div>

        {/* رمز عبور */}
        <div className="relative mt-4">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            className="font-myfont font-Light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
            type="password"
            placeholder="رمز عبور"
          />
        </div>

        {/* چک‌باکس */}
        <div className="flex mt-5 justify-end flex-row-reverse items-center gap-2">
          <input
            type="checkbox"
            className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-[#34180e] checked:border-[#34180e] focus:ring-2 focus:ring-gray-300"
          />
          <p className="text-sm font-myfont font-Light">مرا به یاد داشته باش</p>
        </div>

        {/* دکمه ورود */}
        <button className="mt-6 p-3 cursor-pointer font-myfont font-Bold bg-green text-white rounded-lg hover:bg-textcolor transition-all duration-300">
          ورود
        </button>

        {/* ثبت نام */}
        <span className="font-myfont font-Bold text-right mt-7 mb-2 text-sm block">
          حساب کاربری ندارید؟
        </span>
     <Link href={'register'} className="text-gray-700 font-myfont font-Light border border-gray-300 mb-3 cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
        
          <FaUserAlt size={16} />
          ثبت نام
       
     </Link>
      </div>
    </div>
    </div>
  );
}

export default page;
