import hero from "../assets/images/image10.jpeg";
import logo from "../assets/images/logo3.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_BASE_URL;
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      console.log("Login response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      console.log(data.token);

      const user = data.user;

      if (!user) {
        throw new Error("User information was not returned from the server.");
      }

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", user._id);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      console.log("Saved user:", user);
      console.log("Saved userId:", user._id);

      setSuccess("Login successful!");

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      setError(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-6 sm:py-10 overflow-y-auto"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(12,21,43,0.9), rgba(17,25,37,0.75)), url(${hero})`,
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl p-5 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 object-contain"
          />
        </div>

        {/* Heading */}
        <div className="text-center mt-3 sm:mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Sign in to continue learning.
          </p>
        </div>

        {error && (
          <p className="text-red-600 text-center text-sm mt-4">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-center text-sm mt-4">{success}</p>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-slate-900 text-sm sm:text-base">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-full px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-slate-900 text-sm sm:text-base">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-full px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-amber-600 py-3 text-white font-semibold hover:bg-amber-400 transition duration-300 hover:scale-[1.02] disabled:bg-gray-400 cursor-pointer"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>

          <p className="text-center text-gray-500 text-sm sm:text-base">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 font-semibold text-amber-600 hover:text-amber-500"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
