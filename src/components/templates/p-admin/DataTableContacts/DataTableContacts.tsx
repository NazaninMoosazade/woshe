'use client'

import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
interface ContactProps {
  _id: string;
  name: string;
  email: string;
  message: string;
}

interface DataTableProps {
    title: string
  contacts : ContactProps[]
}

const DataTableContacts : React.FC <DataTableProps>=  ({title , contacts}) => {

  const router = useRouter()

const handleDeleteContact = async (id: string) => {
  const result = await Swal.fire({
    title: 'آیا مطمئن هستید؟',
    text: 'این مخاطب برای همیشه حذف می‌شود!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'بله، حذف کن',
    cancelButtonText: 'خیر',
    confirmButtonColor: '#b91c1c',
    cancelButtonColor: '#6b7280',
  });

  if (result.isConfirmed) {
    const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });

    if (res.status === 200) {
      Swal.fire({
        title: 'موفق!',
        text: 'مخاطب حذف شد.',
        icon: 'success',
        confirmButtonText: 'باشه',
      });
      router.refresh()
    } else {
      Swal.fire({
        title: 'خطا!',
        text: 'عملیات حذف با خطا مواجه شد.',
        icon: 'error',
        confirmButtonText: 'باشه',
      });
    }
  }
};



  return (
    <div className="p-4 md:p-8 font-shabnam">
      <h1 className="text-2xl md:text-3xl font-medium text-right mb-6">
        {title}
      </h1>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white text-center border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">شناسه</th>
              <th className="py-2 px-4">نام کاربر</th>
              <th className="py-2 px-4">متن دیدگاه</th>
              <th className="py-2 px-4">ایمیل کاربر</th>
              <th className="py-2 px-4">حذف</th>
            </tr>
          </thead>
          <tbody>
        
            {
              contacts.map((contact , index) => (
                <tr key={contact._id} className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{contact.name}</td>
                <td className="py-2 px-4">{contact.message}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">
                  <button
                    // onClick={() => handleDelete(comment._id)}
                    onClick={() => handleDeleteContact(contact._id)}
                    className="bg-red-900 text-white px-3 py-1 rounded w-full hover:bg-red-700 transition"
                  >
                    حذف
                  </button>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden flex flex-col gap-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <div className="flex-1 text-right">
              <p className="font-medium">نام کاربر: {contact.name}</p>
              <p>متن دیدگاه: {contact.message}</p>
              <p>ایمیل کاربر: {contact.email}</p>
            </div>
            <div className="self-start">
              <button
                // onClick={() => handleDelete(comment._id)}
                className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTableContacts;
