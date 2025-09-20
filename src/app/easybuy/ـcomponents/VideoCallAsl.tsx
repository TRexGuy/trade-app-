"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user1");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("لطفا همه فیلدها را پر کنید!");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("role", role);

    router.push(role === "user1" ? "/user1" : "/user2");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100  ">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-96 flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-gray-800 text-center">ورود کاربران</h1>
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 px-5 py-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 placeholder-gray-400 transition-all"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-5 py-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 placeholder-gray-400 transition-all"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 px-5 py-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 transition-all"
        >
          <option value="user1">کاربر اول</option>
          <option value="user2">کاربر دوم</option>
        </select>
        <button
          onClick={handleLogin}
          className="mt-3 py-4 bg-green-300 hover:bg-green-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          ورود
        </button>
      </div>
    </div>
  );
}

