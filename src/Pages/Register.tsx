import hero from "../assets/images/image10.jpeg";
import heros from "../assets/images/image11.jpeg";
import logo from "../assets/images/logo3.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  phoneNumber: string;
  age: number | "";
  country: string;
  gender: string;
  address: string;
  password: string;
}
const Register: React.FC = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    age: "",
    country: "",
    gender: "",
    address: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registration successful!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        phoneNumber: "",
        age: 0,
        country: "",
        gender: "",
        address: "",
        password: "",
      });

      console.log("Registered user:", formData);

      navigate("/login");
    } catch (error: any) {
      setError(error.message || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(12, 21, 43, 0.9), rgba(17, 25, 37, 0.75)), url(${hero})`,
      }}
    >
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
          <div
            className="
flex
flex-col
justify-center
items-center
text-center
px-6
sm:px-10
lg:px-12
py-10
sm:py-14
bg-cover
bg-center
"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(200, 212, 247, 0.9), rgba(150, 186, 245, 0.75)), url(${heros})`,
            }}
          >
            <img
              src={logo}
              alt="Tech Center Logo"
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain mb-5"
            />

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Welcome to Tech Center
            </h1>

            <p className="max-w-md lg:max-w-lg text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              Join us on a transformative tech journey. Learn from experienced
              instructors, build real-world projects, and develop the skills
              needed to succeed in today's technology industry.
            </p>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
              Create Account
            </h1>

            <p className="text-center text-gray-500 mb-8">
              Register to get started
            </p>
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}
            {success && (
              <p className="text-green-600 text-center mb-4">{success}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />

                {/* Username */}
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />

                {/* Phone */}
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />

                {/* Age */}
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />

                {/* Country */}
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />

                {/* Gender */}
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                {/* Address */}
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="md:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="md:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-xl py-3 bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
              <p className="text-center mt-6 text-gray-500 text-sm sm:text-base">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1 text-amber-600 hover:text-amber-500 font-semibold cursor-pointer transition-colors"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
