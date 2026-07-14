import {
  FaEdit,
  FaTrash,
  FaUserShield,
  FaUserGraduate,
  FaUsers,
  FaUserCog,
} from "react-icons/fa";
import NavbarStudent from "../Component/NavbarStudent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../Component/Footer";

interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  age: number;
  gender: string;
  userName: string;
  country: string;

  role: string;
}

const Admin = () => {
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState<"student" | "admin">("student");
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [success, setSuccess] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "",
  });

  const token = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_BASE_URL}/auth/allusers`,
        axiosConfig,
      );

      console.log("All users response:", response.data);

      const result = response.data;

      if (Array.isArray(result)) {
        setUsers(result);
      } else if (Array.isArray(result.users)) {
        setUsers(result.users);
      } else if (Array.isArray(result.data)) {
        setUsers(result.data);
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const changeUserRole = async (userId: string, role: "student" | "admin") => {
    const token = localStorage.getItem("token");

    const response = await axios.put(
      `${API_BASE_URL}/auth/${userId}/role`,
      { role },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  };

  const handleOpenEdit = (user: User) => {
    setSelectedUser(user);

    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      address: user.address || "",
      role: user.role || "",
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

  const handleUpdateUser = async () => {
    if (!selectedUser) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");
      const userId = selectedUser?._id;

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

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId
            ? {
                ...user,
                ...formData,
              }
            : user,
        ),
      );

      handleCloseEdit();
    } catch (err) {
      console.error(err);
      setError("Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);
      setError("");

      await axios.delete(`${API_BASE_URL}/auth/${id}`, axiosConfig);

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      navigate("/student");
    }
  }, [navigate]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalStudents: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/auth/stats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setStats(response.data.stats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  const handleChangeRole = async (
    userId: string,
    role: "admin" | "student",
  ) => {
    try {
      const data = await changeUserRole(userId, role);

      alert(data.message);

      setShowRoleModal(false);

      fetchUsers(); // Refresh users so the new role appears immediately
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarStudent />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16 sm:mt-20 pb-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage students, administrators and user roles.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {/* Total Students */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-600">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  {" "}
                  {stats.totalStudents}
                </h2>
              </div>

              <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
                <FaUserGraduate className="text-blue-600 text-2xl" />
              </div>
            </div>
          </div>

          {/* Total Admin */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-600">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-500 text-sm">Admins</p>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  {" "}
                  {stats.totalAdmins}
                </h2>
              </div>

              <div className="bg-green-100 p-3 sm:p-4 rounded-full">
                <FaUserShield className="text-green-600 text-2xl" />
              </div>
            </div>
          </div>

          {/* Total Users */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-600">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  {" "}
                  {stats.totalUsers}
                </h2>
              </div>

              <div className="bg-purple-100 p-3 sm:p-4 rounded-full">
                <FaUsers className="text-purple-600 text-2xl" />
              </div>
            </div>
          </div>

          {/* Active */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-amber-500">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-500 text-sm">Active Students</p>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  {" "}
                  {stats.activeUsers}
                </h2>
              </div>

              <div className="bg-amber-100 p-3 sm:p-4 rounded-full">
                <FaUserCog className="text-amber-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#0B1F3A] px-6 py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Manage Students
            </h2>

            <p className="text-gray-300 mt-1">
              Edit, delete and manage student roles.
            </p>
          </div>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          {loading && users.length === 0 ? (
            <div className="flex justify-center py-5">
              <div className="flex justify-center items-center py-6">
                <div className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-blue-600 animate-spin"></div>
              </div>
            </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <table className="min-w-[850px] w-full">
                <thead className="bg-gray-100">
                  <tr className="text-left text-gray-700">
                    <th className="px-3 py-3 text-sm">First Name</th>

                    <th className="px-3 py-3 text-sm">Last Name</th>

                    <th className="px-3 py-3 text-sm">Email</th>

                    <th className="hidden md:table-cell px-3 py-3 text-sm">
                      Phone
                    </th>

                    <th className="hidden lg:table-cell px-3 py-3 text-sm">
                      Address
                    </th>

                    <th className="px-3 py-3 text-sm">Role</th>

                    <th className="px-3 py-3 text-sm text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-3 text-sm">{user.firstName}</td>

                      <td className="px-3 py-3 text-sm">{user.lastName}</td>

                      <td className="px-3 py-3 text-sm break-all">
                        {user.email}
                      </td>
                      <td className="hidden md:table-cell px-3 py-3 text-sm">
                        {user.phoneNumber}
                      </td>

                      <td className="hidden lg:table-cell px-3 py-3 text-sm">
                        {user.address}
                      </td>

                      <td className="px-3 py-3 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            user.role === "admin"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-3 py-3 text-sm">
                        <div className="flex flex-wrap justify-center gap-2">
                          <button onClick={() => handleOpenEdit(user)}>
                            <FaEdit className="text-blue-600" />
                          </button>

                          <button onClick={() => handleDeleteUser(user._id)}>
                            <FaTrash className="text-red-600" />
                          </button>

                          <button
                            onClick={() => {
                              setSelectedUser(user);
                              setUserId(user._id);
                              setRole(user.role as "student" | "admin");
                              setShowRoleModal(true);
                            }}
                            className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap"
                          >
                            Edit Role
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
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
                  className="bg-slate-900 text-white px-5 py-2 rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-5 sm:p-8 max-w-md w-[95%] text-center">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>

            <h2 className="text-2xl font-bold">Delete Account?</h2>

            <p className="text-gray-600 mt-3">
              This action cannot be undone. All your registered courses and
              profile information will be permanently removed.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="border px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
      {showRoleModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setShowRoleModal(false)}
              className="absolute top-4 right-5 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
              Change User Role
            </h2>

            <div className="space-y-4">
              <div>
                <label className="font-semibold text-gray-700">Student</label>

                <input
                  value={
                    selectedUser
                      ? `${selectedUser.firstName} ${selectedUser.lastName}`
                      : ""
                  }
                  readOnly
                  className="w-full border rounded-lg p-3 mt-2 bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700">
                  Current Role
                </label>

                <input
                  value={selectedUser?.role || ""}
                  readOnly
                  className="w-full border rounded-lg p-3 mt-2 bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700">New Role</label>

                <select
                  name="role"
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value as "student" | "admin")
                  }
                  className="w-full border rounded-lg p-3 mt-2"
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowRoleModal(false)}
                  className="border px-5 py-2 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={() => handleChangeRole(userId, role)}
                  className="bg-[#0B1F3A] hover:bg-[#17345d] text-white px-5 py-2 rounded-lg"
                >
                  Save Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Admin;
