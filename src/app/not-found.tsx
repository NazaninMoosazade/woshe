import React from 'react';

function NotFoundPage() {
  return (
    <div className="bg-gray-100 font-bold font-shabnam flex items-center justify-center min-h-screen">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">صفحه پیدا نشد</h2>
        <p className="text-gray-600 mb-6 font-light 
        ">
          به نظر می‌رسد آدرس وارد شده اشتباه است یا صفحه حذف شده است.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          بازگشت به خانه
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
