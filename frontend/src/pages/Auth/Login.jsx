import { useState } from "react";
import API from "../../api";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login/", form);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login Successful 🎉");
      window.location.href = "/";
    } catch {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="w-80 bg-neutral-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          placeholder="Username"
          className="w-full p-2 mb-3 text-black rounded"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 text-black rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleLogin} className="bg-green-500 w-full p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
