import hero from "../assets/images/image10.jpeg";
import NavbarStudent from "../Component/NavbarStudent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterCourses = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({
    course: "",
    learningMode: "",
    batch: "",
    startDate: "",
    level: "",
    goal: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (!user._id) {
        setError("Please login again.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/registrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student: user._id,
          course: formData.course,
          learningMode: formData.learningMode,
          batch: formData.batch,
          startDate: formData.startDate,
          level: formData.level,
          goal: formData.goal,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
      } else {
        setSuccess(data.message);

        setFormData({
          course: "",
          learningMode: "",
          batch: "",
          startDate: "",
          level: "",
          goal: "",
        });

        navigate("/student");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavbarStudent />

      <section
        className="relative bg-cover bg-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(6,18,48,0.9), rgba(10,32,72,0.8)), url(${hero})`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <span className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                Course Registration
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Register for
                <span className="text-amber-500"> Your Course</span>
              </h1>

              <p className="mt-5 text-gray-300 text-base sm:text-lg leading-7">
                Select your preferred course and learning schedule. Begin your
                journey with our Tech Center and gain practical,
                industry-relevant skills through expert-led training.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-400">
                    20+
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Professional Courses
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-400">
                    Flexible
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Learning Options
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-3xl shadow-2xl p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Course Registration
              </h2>

              <p className="text-gray-300 mt-2 mb-6 text-sm sm:text-base">
                Complete the form below to register for your preferred course.
              </p>

              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}

              {success && (
                <p className="text-green-500 text-center mb-4">{success}</p>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Course */}
                <div>
                  <label className="block text-white mb-2">Course Name</label>

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full rounded-lg p-3 bg-white text-gray-700 outline-none"
                  >
                    <option value="">Select Course</option>
                    <option value="Frontend Development">
                      Frontend Development
                    </option>
                    <option value="Backend Development">
                      Backend Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Artificial Intelligence & Machine Learning">
                      Artificial Intelligence & Machine Learning
                    </option>
                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                  </select>
                </div>

                {/* Learning Mode */}

                <div>
                  <label className="block text-white mb-2">Learning Mode</label>

                  <select
                    name="learningMode"
                    value={formData.learningMode}
                    onChange={handleChange}
                    className="w-full rounded-lg p-3 bg-white text-gray-700 outline-none"
                  >
                    <option value="">Select Mode</option>
                    <option value="Online">Online</option>
                    <option value="Physical">Physical</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Batch + Date */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white mb-2">
                      Preferred Batch
                    </label>

                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      className="w-full rounded-lg p-3 bg-white text-gray-700 outline-none"
                    >
                      <option value="">Select Batch</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Start Date</label>

                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full rounded-lg p-3 bg-white text-gray-700 outline-none"
                    />
                  </div>
                </div>

                {/* Level */}

                <div>
                  <label className="block text-white mb-2">
                    Experience Level
                  </label>

                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full rounded-lg p-3 bg-white text-gray-700 outline-none"
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                {/* Goal */}

                <div>
                  <label className="block text-white mb-2">
                    Learning Goal (Optional)
                  </label>

                  <textarea
                    rows={3}
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    placeholder="What do you hope to achieve?"
                    className="w-full rounded-lg p-3 bg-white text-gray-700 outline-none"
                  />
                </div>

                {/* Checkbox */}

                <div className="space-y-3 text-sm sm:text-base text-white">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 cursor-pointer" />
                    <span>
                      I confirm that the information provided is correct.
                    </span>
                  </label>

                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 cursor-pointer" />
                    <span>
                      I agree to the registration terms and conditions.
                    </span>
                  </label>
                </div>

                {/* Buttons */}

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 rounded-lg transition cursor-pointer"
                  >
                    {loading ? "Registering..." : "Register Course"}
                  </button>

                  <button
                    type="reset"
                    className="w-full border border-white text-white hover:bg-white hover:text-slate-900 py-3 rounded-lg transition cursor-pointer"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterCourses;
