"use client";
import React, { useState } from "react";
import { showSwal } from "@/utils/helper";
import { validateEmail , validatePhone  } from "@/utils/Global/auth";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

     if (!name) {
      return showSwal("لطفا  نام خود را وارد نمایید", "error", "چشم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده صحیح نیست", "error", "تلاش مجدد");
    }

    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      return showSwal("شماره وارد شده صحیح نیست", "error", "تلاش مجدد");
    }

    if (!message) {
      return showSwal("لطفا درخواست خود را وارد نمایید", "error", "چشم");
    }
    
    const contact = {name , phone , email , message}

    const res = await fetch('http://localhost:3000/api/contact/send' , {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(contact)
    })
        console.log(res);
    if(res.status === 201) {
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      showSwal("پیغام شما با موفقیت ثبت شد", "success", "فهمیدم");
    }
  };

  return (
    <form onSubmit={sendMessage}>
      <div className="flex flex-wrap gap-4">
        <div className="font-shabnam text-gray-400 flex-1 min-w-[200px]">
          <label className="block mb-2">نام شما</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border border-gray-300 text-gray-700 w-full h-11 px-3 rounded"
          />
        </div>

        <div className="font-shabnam text-gray-400 flex-1 min-w-[200px]">
          <label className="block mb-2">موبایل</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="border border-gray-300 text-gray-700 w-full h-11 px-3 rounded"
          />
        </div>

        <div className="font-shabnam text-gray-400 flex-1 min-w-[200px]">
          <label className="block mb-2">ایمیل</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border border-gray-300 text-gray-700 w-full h-11 px-3 rounded"
          />
        </div>
      </div>

      <div className="font-shabnam mt-10 text-gray-400 flex-1 min-w-[200px]">
        <label className="block mb-2">پیام شما</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 text-gray-700 w-full h-40 px-3 rounded"
        />
      </div>

      <button
        type="submit"
        className="mt-9 w-full lg:max-w-[300px] h-14 bg-green hover:bg-lime-900 rounded text-white"
      >
        ارسال پیام
      </button>
    </form>
  );
}

export default Form;
