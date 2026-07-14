import Footer from "../Component/Footer";
import Navbarhome from "../Component/Navbarhome";
import hero from "../assets/images/image8.jpeg";
import image9 from "../assets/images/image9.jpeg";
import image11 from "../assets/images/image11.jpeg";
import Cta from "../Component/Cta";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export interface Post {
  id: Number;
  title: String;
  description: String;
  duration: String;
}
const Courses = () => {
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;

  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/courses/allcourses`);
      const data = await res.json();

      if (data.success) {
        setCourses(data.courses);
      }
      console.log("courses", data.courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <Navbarhome />
      <section
        className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center bg-cover bg-center px-4 py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2, 17, 54, 0.9), rgba(22, 40, 66, 0.75)), url(${hero}) `,
        }}
      >
        <div className="text-center ">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Master In-Demand Tech Skills
          </h1>

          <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-6">
            Learn by building. Graduate with confidence.
          </p>
          <Link to="/courses">
            <button className="mt-6 p-[10px]  text-slate-900 font-semibold  text-white rounded-lg border-[2px] border-amber-500 hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
              Explore Courses
            </button>
          </Link>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-16 gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-amber-500 font-semibold ">INTRODUCTION</h1>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
            Our Training Programs
          </h2>

          <p className="text-gray-600 leading-7 md:leading-8 text-sm md:text-base">
            At Tech Center, we offer comprehensive technology courses designed
            to prepare students for real-world careers. Every program combines
            expert instruction, practical projects, and career guidance to
            ensure you graduate with skills employers value.
            <br /> Our courses are beginner-friendly while also providing
            advanced learning opportunities for those looking to deepen their
            expertise.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image9}
            className="w-full max-w-[320px] md:max-w-[380px] h-auto rounded-lg  hover:scale-105 transiton-all duration-300"
            alt="About Tech Center"
          />
        </div>
      </div>

      <div className="text-center mt-10 ">
        <h1 className="text-3xl font-bold mb-6 text-amber-600 ">COURSES</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4   mt-10 p-6 gap-6">
        {courses.map((course: any) => (
          <div
            className=" bg-slate-900   p-9 rounded-lg  transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer"
            key={course._id}
          >
            <h1 className="font-bold text-amber-600  mb-3 text-xl ">
              {course.title}
            </h1>
            <p className="text-white">{course.description}</p>
            <h1 className="text-amber-600 mt-3">
              {" "}
              Duration: {course.duration}
            </h1>
            <Link to="/register">
              <button className="mt-7 p-3 pr-4 pl-4  mb-4 text-slate-900 font-bold text-l bg-amber-600 rounded-full  hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                Register course
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-16 gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-amber-500 font-semibold">CERTIFICATION</h1>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
            Graduate With Confidence
          </h2>

          <p className="text-gray-600 leading-7 md:leading-8 text-sm md:text-base">
            Upon successful completion of your chosen program, you'll receive a
            professional certificate recognizing your achievement and readiness
            for industry opportunities. Our graduates leave with practical
            experience, a portfolio of completed projects, and the confidence to
            pursue careers in technology.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image11}
            className="w-full max-w-[320px] md:max-w-[350px] h-auto rounded-lg hover:scale-105 transition-all duration-300"
            alt="About Tech Center"
          />
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default Courses;
