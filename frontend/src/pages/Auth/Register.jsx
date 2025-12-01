import { useState } from "react";
import API from "../../api";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      await API.post("/auth/register/", form);
      alert("Account created successfully 🎉");
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed ❌");
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="w-80 bg-neutral-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        <input
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded text-black"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded text-black"
          onChange={handleChange}
        />

        <button
          onClick={registerUser}
          className="w-full bg-green-500 hover:bg-green-600 transition p-2 rounded font-semibold"
        >
          Register
        </button>

        <p className="text-sm text-center mt-3 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-green-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
