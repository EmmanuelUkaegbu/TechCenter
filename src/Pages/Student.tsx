import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import NavbarStudent from "../Component/NavbarStudent";
import hero from "../assets/images/image15.jpeg";
import { FaBookOpen, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  age: number;
  gender: string;
  country: string;
}

const Student = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const handleOpenEdit = (user: User) => {
    setSelectedUser(user);

    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      address: user.address || "",
    });

    setShowEditModal(true);
  };

  const handleCloseEdit = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const token = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleUpdateUser = async () => {
    if (!selectedUser) return;

    try {
      setError("");
      setSuccess("");
      const userId = selectedUser._id;

      if (!userId) return;

      const response = await axios.put(
        `${API_BASE_URL}/auth/${userId}`,
        formData,
        axiosConfig,
      );

      console.log("Update response:", response.data);
      setSuccess("Profile updated successfully!");

      setTimeout(() => {
        handleCloseEdit();
      }, 2000);

      setUser((prev) =>
        prev
          ? {
              ...prev,
              ...formData,
            }
          : prev,
      );
    } catch (err) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to update user");
      } else {
        setError("Something went wrong");
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const res = await fetch(`${API_BASE_URL}/auth/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success) {
          setUser(data.user);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarStudent />

      <main className="flex-1 mt-16 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div
            className="rounded-3xl p-6 sm:p-8 shadow-xl mb-8 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(12,21,43,0.92), rgba(17,25,37,0.75)), url(${hero})`,
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Hero Text */}
              <div className="flex-1">
                <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold">
                  Welcome, {user?.firstName} 👋
                </h1>

                <p className="text-gray-200 mt-3 text-base sm:text-lg">
                  Empowering Your Learning Journey
                </p>

                <p className="text-gray-300 mt-4 max-w-2xl leading-7">
                  Welcome to your student portal! Access your enrolled courses,
                  track your learning progress, complete assignments and stay
                  connected with your instructors.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Link to="/registercourse" className="w-full sm:w-auto">
                  <button className="w-full bg-amber-500 hover:bg-amber-400 transition px-6 py-3 rounded-xl text-[#0C152B] font-semibold cursor-pointer">
                    Register New Course
                  </button>
                </Link>

                <button
                  onClick={() => user && handleOpenEdit(user)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 transition px-6 py-3 rounded-xl text-[#0C152B] font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaEdit />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Student Information */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-amber-500 mb-6">
                Student Information
              </h2>

              <div className="space-y-5">
                <div>
                  <p className="text-gray-400">Full Name</p>
                  <h3 className="font-semibold text-white text-lg">
                    {user?.firstName} {user?.lastName}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-400">Student ID</p>
                  <h3 className="font-semibold text-white"> {user?._id}</h3>
                </div>

                <div>
                  <p className="text-gray-400">Program</p>
                  <h3 className="font-semibold text-white">
                    Full Stack Web Development
                  </h3>
                </div>

                <div>
                  <p className="text-gray-400">Level</p>
                  <h3 className="font-semibold text-white">Beginner</h3>
                </div>

                <div>
                  <p className="text-gray-400">Batch</p>
                  <h3 className="font-semibold text-white">Morning</h3>
                </div>

                <div>
                  <p className="text-gray-400">Status</p>

                  <span className="inline-block mt-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                    Active Student
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Courses */}
              <div className="bg-slate-900 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-amber-500 mb-6">
                  My Courses
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Frontend Web Development", "Backend Development"].map(
                    (course) => (
                      <div
                        key={course}
                        className="bg-amber-600 rounded-xl p-4 hover:bg-amber-500 transition"
                      >
                        <div className="flex items-center gap-3">
                          <FaBookOpen className="text-slate-900 text-lg" />
                          <span className="font-medium">{course}</span>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Learning Goals */}
              <div className="bg-slate-900 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-amber-500 mb-6">
                  Learning Goals
                </h2>

                <ul className="space-y-4 text-gray-300">
                  <li>✅ Complete this week's lessons.</li>
                  <li>✅ Submit all pending assignments.</li>
                  <li>✅ Attend every scheduled class.</li>
                  <li>✅ Reach at least 80% overall progress.</li>
                </ul>
              </div>

              {/* Motivation */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-[#0C152B] mb-4">
                  Daily Motivation 🚀
                </h2>

                <p className="text-[#0C152B] text-base sm:text-lg font-medium leading-8">
                  "Success in tech comes from consistent learning, practice, and
                  perseverance. Keep building one project at a time!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showEditModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] sm:w-full max-w-lg rounded-2xl shadow-2xl p-5 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-5 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
              Edit Profile
            </h2>
            {error && (
              <div className="mb-4 rounded-lg bg-red-100 border border-red-400 text-red-700 px-4 py-3">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 rounded-lg bg-green-100 border border-green-400 text-green-700 px-4 py-3">
                {success}
              </div>
            )}

            <form className="space-y-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                name="address"
                placeholder="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-5 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleUpdateUser}
                  className="bg-slate-900 text-white px-5 py-2 rounded-lg cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Student;
