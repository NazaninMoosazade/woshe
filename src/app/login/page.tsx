"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import { loginAction } from "../action/signinAction";

export default function LoginPage() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneOrEmail.trim() || !password.trim()) {
      swal("خطا!", "تمام فیلدها الزامی هستند.", "error");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("phoneOrEmail", phoneOrEmail);
    formData.append("password", password);

    const result = await loginAction(formData);
    setLoading(false);

    if (result.success) {
      swal("ورود موفق!", "به حساب خود خوش آمدید 🌟", "success").then(() => {
        router.push("/");
      });
    } else {
      swal("خطا!", result.message, "error");
    }
  };

  return (
    <div>
      <Navbar />
      <Title title="ورود به حساب کاربری" />
      <form onSubmit={handleLogin}>
        <div className="mt-24 mb-12 flex items-center justify-center p-4">
          <div className="grid bg-white font-shabnam font-bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
            
            <div className="flex justify-center mb-4">
              <div className="bg-[#34180e] p-3 rounded-full shadow-md">
                <FaUserAlt size={30} color="white" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#34180e]">
              ورود به حساب
            </h2>

            <div className="relative mt-3">
              <FaEnvelope
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={16}
              />
              <input
                name="phoneOrEmail"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
                type="text"
                placeholder="ایمیل یا شماره موبایل"
              />
            </div>

            <div className="relative mt-4">
              <FaLock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={16}
              />
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
                type="password"
                placeholder="رمز عبور"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 p-3 cursor-pointer font-myfont bg-green text-white rounded-lg transition-all duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-textcolor"
              }`}
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>

            <span className="font-myfont text-right mt-7 mb-2 text-sm block">
              حساب کاربری ندارید؟
            </span>
            <Link
              href="/register"
              className="text-gray-700 font-myfont border border-gray-300 mb-3 cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <FaUserAlt size={16} />
              ثبت نام
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}


// 'use client'

// import React, { useState } from "react";
// import Navbar from "@/components/modules/navbar/Navbar";
// import Title from "@/components/tamplates/title/Title";
// import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
// import Link from "next/link";

// function page() {
//   const [password, setPassword] = useState("");
//   const [phoneOrEmail, setPhoneOrEmail] = useState("");



//   return (
//     <div>
//       <Navbar />
//       <Title title="حساب کاربری" />
//       <form action="">
//         <div className="mt-24 mb-12 flex items-center justify-center p-4">
//           <div className="grid bg-white font-myfont font-shabnam font-Bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
//             {/* آیکون بالای فرم */}
//             <div className="flex justify-center mb-4">
//               <div className="bg-[#34180e] p-3 rounded-full shadow-md">
//                 <FaUserAlt size={30} color="white" />
//               </div>
//             </div>

//             {/* عنوان */}
//             <h2 className="text-xl sm:text-2xl  font-Bold mb-6 text-[#34180e]">
//               ورود به حساب کاربری
//             </h2>

//             {/* ایمیل / شماره موبایل */}
//             <div className="relative mt-3">
//               <FaEnvelope
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={16}
//               />
//               <input
//                 name="phoneOrEmail"
//                 value={phoneOrEmail}
//                 onChange={(event) => setPhoneOrEmail(event.target.value)}
//                 className="font-myfont font-Light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
//                 type="text"
//                 placeholder="ایمیل / شماره موبایل"
//               />
//             </div>

//             {/* رمز عبور */}
//             <div className="relative mt-4">
//               <FaLock
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={16}
//               />
//               <input
//                 name="password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 className="font-myfont font-Light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
//                 type="password"
//                 placeholder="رمز عبور"
//               />
//             </div>

           

//             {/* دکمه ورود */}
//             <button className="mt-6 p-3 cursor-pointer font-myfont font-Bold bg-green text-white rounded-lg hover:bg-textcolor transition-all duration-300">
//               ورود
//             </button>

//             {/* ثبت نام */}
//             <span className="font-myfont font-Bold text-right mt-7 mb-2 text-sm block">
//               حساب کاربری ندارید؟
//             </span>
//             <Link
//               href={"register"}
//               className="text-gray-700 font-myfont font-Light border border-gray-300 mb-3 cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
//             >
//               <FaUserAlt size={16} />
//               <button type="submit">ثبت نام</button>
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default page;
