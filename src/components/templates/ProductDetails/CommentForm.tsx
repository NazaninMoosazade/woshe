"use client";
import { useState } from "react";
import Swal from "sweetalert2";

interface CommentFormProps {
  productID: string;
  onNewComment: (comment: CommentType) => void;
}

export interface CommentType {
  _id: string;
  username: string;
  body: string;
  email: string;
  score?: number;
  date?: string;
}

export default function CommentForm({ productID, onNewComment }: CommentFormProps) {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // اعتبارسنجی فیلدها
    if (!formData.message) {
      return Swal.fire("خطا", "لطفاً دیدگاه خود را وارد کنید", "error");
    }

    if (!formData.name) {
      return Swal.fire("خطا", "لطفاً نام خود را وارد کنید", "error");
    }

    if (!formData.email) {
      return Swal.fire("خطا", "لطفاً ایمیل خود را وارد کنید", "error");
    }

    if (!validateEmail(formData.email)) {
      return Swal.fire("ایمیل نامعتبر", "لطفاً یک ایمیل معتبر وارد کنید", "error");
    }

    setLoading(true);

    const newComment = {
      body: formData.message,
      username: formData.name,
      email: formData.email,
      productID,
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (!res.ok) throw new Error("ارسال کامنت ناموفق بود!");

      const data: CommentType = await res.json();

      onNewComment(data);

      setFormData({ message: "", name: "", email: "" });

      Swal.fire("موفقیت", "دیدگاه شما با موفقیت ارسال شد!", "success");
    } catch (err: any) {
      Swal.fire("خطا", err.message || "خطا در ارسال دیدگاه", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-shabnam font-bold text-center text-gray-800 mb-8">
        ثبت دیدگاه شما
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* دیدگاه */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-lg">
            دیدگاه شما
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="نظر خود را بنویسید..."
            value={formData.message}
            onChange={handleChange}
            className="placeholder:font-shabnam w-full border border-gray-300 rounded-xl p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* نام */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">
            نام
          </label>
          <input
            type="text"
            id="name"
            placeholder="نام شما"
            value={formData.name}
            onChange={handleChange}
            className="placeholder:font-shabnam w-full border border-gray-300 rounded-xl p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ایمیل */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
            ایمیل
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="placeholder:font-shabnam w-full border border-gray-300 rounded-xl p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green text-white text-lg font-semibold py-4 rounded-xl hover:bg-lime-950 transition-all duration-200 disabled:opacity-50"
        >
          {loading ? "در حال ارسال..." : "ارسال دیدگاه"}
        </button>
      </form>
    </div>
  );
}
