"use client";

import React from "react";
import swal from "sweetalert";

interface UserType {
  _id: string;
  name: string;
  email: string;
  phone: number;
  role: string;
}

interface DataTableProps {
  title: string;
  users: UserType[];
}

const DataTableUsers: React.FC<DataTableProps> = ({ title, users }) => {

  const deletUser = async (userID: string | undefined) => {
    swal({
      title: "آیا مطمئن هستید؟",
      text: "این کاربر برای همیشه حذف خواهد شد!",
      icon: "warning",
      buttons: ["لغو", "بله، حذف شود"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await fetch("/api/user/role", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userID }),
        });
        if (res.status === 200) {
          swal({
            title: "کاربر با موفقیت حذف شد",
            icon: "success",
          
          });
        } else {
          swal({
            title: "خطا در حذف کاربر",
            icon: "error",
          });
        }
      }
    });
  };

  const banUser = async (email: string, phone: number) => {
    swal({
      title: "آیا از بن کاربر اطمینان دارین؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (banuser) => {
      if (banuser) {
        const res = await fetch("/api/user/ban", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, phone }),
        });
        if (res.status === 200) {
          swal({
            title: "کاربر مورد نظر با موفقیت بن شد",
            icon: "success",
          })
        }else {
           swal({
            title: "عملیات با خطا مواجه شد",
            icon: "error",
          })
        }
      }
    });
  };

  return (
    <div className="w-full">
      {/* Title */}
      <div className="mt-8 font-shabnam font-bold text-right px-4">
        <h1 className="inline-block text-2xl">
          <span>{title}</span>
        </h1>
      </div>

      {/* Table wrapper */}
      <div className="p-4 md:p-10 overflow-x-auto">
        {/* Desktop / Tablet View */}
        <table className="hidden md:table w-full font-shabnam font-bold bg-[#f2f7fd] rounded-2xl overflow-hidden shadow-sm">
          <thead className="bg-[#e7f1fb] text-gray-700">
            <tr>
              <th className="p-2 text-center">شناسه</th>
              <th className="p-2 text-center">نام و نام خانوادگی</th>
              <th className="p-2 text-center">ایمیل</th>
              <th className="p-2 text-center">نقش</th>
              <th className="p-2 text-center">حذف</th>
              <th className="p-2 text-center">بن</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="bg-white text-center align-middle border-b hover:bg-[#f9fbff] transition-colors"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  {user.role === "USER" ? "کاربر عادی" : "مدیر"}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => deletUser(user._id)}
                    type="button"
                    className="w-full rounded bg-[#711d1c] px-3 py-1 text-sm text-white hover:opacity-80"
                  >
                    حذف
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => banUser(user.email, user.phone)}
                    type="button"
                    className="w-full rounded bg-blue-950 px-3 py-1 text-sm text-white hover:opacity-80"
                  >
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="block md:hidden space-y-4 font-shabnam">
          {users.map((user, index) => (
            <div
              key={user._id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
            >
              <div className="flex justify-between items-center mb-2 font-sh">
                <span className="text-sm text-gray-500">{index + 1}</span>
                <span className="text-xs bg-[#f2f7fd] text-gray-600 px-2 py-1 rounded">
                  {user.role === "USER" ? "کاربر عادی" : "مدیر"}
                </span>
              </div>
              <p className="font-bold text-right">{user.name}</p>
              <p className="text-sm text-gray-500 text-right mt-1">
                {user.email}
              </p>

              <div className="flex justify-between mt-4 gap-2">
                <button className="flex-1 rounded bg-[#711d1c] px-3 py-1 text-sm text-white hover:opacity-80">
                  حذف
                </button>
                <button className="flex-1 rounded bg-[#711d1c] px-3 py-1 text-sm text-white hover:opacity-80">
                  بن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTableUsers;
