'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import swal from 'sweetalert'

interface CommentsType {
  _id: string
  username: string
  body: string
  email: string
}

interface DataTableProps {
  title: string
  comments: CommentsType[]
}

const DataTableComments: React.FC<DataTableProps> = ({ title, comments }) => {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    const confirm = await swal({
      title: "حذف کامنت",
      text: "آیا از حذف این کامنت مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله، حذف کن"],
      dangerMode: true,
    });

    if (!confirm) return;

    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      await swal("کامنت با موفقیت حذف شد ✅", { icon: "success" });
      router.refresh(); 
    } else {
      const data = await res.json();
      swal(data.message || "خطا در حذف کامنت", { icon: "error" });
    }
  };

  return (
    <div className="p-4 md:p-8 font-shabnam">
      <h1 className="text-2xl md:text-3xl font-medium text-right mb-6">{title}</h1>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white text-center border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">شناسه</th>
              <th className="py-2 px-4">نام کاربر</th>
              <th className="py-2 px-4">متن کامنت</th>
              <th className="py-2 px-4">ایمیل کاربر</th>
              <th className="py-2 px-4">حذف</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={comment._id} className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{comment.username}</td>
                <td className="py-2 px-4">{comment.body}</td>
                <td className="py-2 px-4">{comment.email}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="bg-red-900 text-white px-3 py-1 rounded w-full hover:bg-red-700 transition"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden flex flex-col gap-4">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <div className="flex-1 text-right">
              <p className="font-medium">نام: {comment.username}</p>
              <p>متن: {comment.body}</p>
              <p>ایمیل: {comment.email}</p>
            </div>
            <div className="self-start">
              <button
                onClick={() => handleDelete(comment._id)}
                className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataTableComments
