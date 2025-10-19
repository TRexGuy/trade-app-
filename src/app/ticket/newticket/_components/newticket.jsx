"use client";

import { useState } from "react";
import Aploadimage from "../../../../components/elements/Aploadimage";

export default function SendTicket() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    priority: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("تیکت با موفقیت ارسال شد ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] p-4">
      <div className="w-full max-w-md h-[90vh] overflow-y-auto p-6 space-y-4 border border-[#2b2b2d] rounded-2xl shadow-lg">
        <h2 className="text-center text-white text-lg font-semibold">
          ارسال تیکت
        </h2>
        <h3 className="text-white">تیکت خود را ارسال کنید</h3>
        <p className="text-sm text-gray-400 leading-6">
          در صورت داشتن هرگونه سوال، مشکل یا خطا در وب‌سایت، می‌توانید از طریق
          ایمیل یا تیکت با ما در ارتباط باشید.
        </p>

        <ul className="text-xs text-gray-400 space-y-1">
          <li className="flex items-start gap-2">
            <span className="text-red-600">●</span>
            در صورت داشتن هرگونه سوال، مشکل یا خطا در وب‌سایت، می‌توانید از طریق
            ایمیل تیکت بفرستید.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">●</span>
            در صورت داشتن هرگونه سوال، مشکل یا خطا در وب‌سایت، می‌توانید از طریق
            ایمیل تیکت بفرستید.
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* عنوان */}
          <div>
            <span className="text-red-600">*</span>
            <label className="text-sm text-white">عنوان</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full text-gray-300 p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg outline-none focus:ring-2 focus:ring-[#00CFFF]"
              placeholder="لطفا عنوان خود را وارد کنید."
            />
          </div>

          {/* بخش مربوطه */}
          <div>
            <span className="text-red-600">*</span>
            <label className="text-sm text-white">بخش مربوطه</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full text-gray-300 p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg outline-none focus:ring-2 focus:ring-[#00CFFF]"
            >
              <option value="">لطفا بخش مربوطه را انتخاب کنید</option>
              <option value="support">پشتیبانی</option>
              <option value="sales">فروش</option>
              <option value="technical">فنی</option>
            </select>
          </div>

          {/* اولویت */}
          <div>
            <span className="text-red-600">*</span>
            <label className="text-sm text-white">اولویت</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full text-gray-300 p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg outline-none focus:ring-2 focus:ring-[#00CFFF]"
            >
              <option value="">انتخاب کنید</option>
              <option value="low">کم</option>
              <option value="medium">متوسط</option>
              <option value="high">زیاد</option>
            </select>
          </div>

          {/* متن پیام */}
          <div>
            <span className="text-red-600">*</span>
            <label className="text-sm text-white">متن پیام</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full text-gray-300 p-2 text-sm border-solid border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg outline-none focus:ring-2 focus:ring-[#00CFFF]"
              placeholder="لطفا پیام خود را بنویسید..."
            />
          </div>

          {/* انتخاب فایل */}
          <div>
            <label className="text-white text-sm">انتخاب فایل</label>
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center gap-2 cursor-pointer text-gray-400 text-sm border-[3px] border-[#31313a] bg-[#1B1B1DA6] rounded-lg px-3 py-2 hover:bg-[#2b2b2d] transition"
            >
              <Aploadimage className="text-[#00CFFF]" />
              <span>
                {formData.file
                  ? formData.file.name
                  : "عکس خود را اینجا آپلود کنید"}
              </span>
            </label>
            <input
              id="fileUpload"
              type="file"
              name="file"
              onChange={handleChange}
              className="hidden"
            />
          </div>

          {/* دکمه ارسال */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition-all"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}
