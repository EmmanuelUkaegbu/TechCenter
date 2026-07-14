import { Link } from "react-router-dom";
import hero from "../assets/images/back.jpeg";

export default function Hero() {
  return (
    <section
      className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center bg-cover bg-center px-4 py-16"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(12, 21, 43, 0.9), rgba(17, 25, 37, 0.75)), url(${hero})`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center py-8">
        <h1 className="text-amber-600 font-bold text-base xs:text-lg sm:text-2xl md:text-3xl mb-2">
          Welcome To
        </h1>

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          TECH CENTER
        </h1>

        <h2 className="mt-4 text-base sm:text-2xl md:text-3xl font-bold text-amber-600 leading-snug">
          Empowering the Next Generation of Tech Innovators
        </h2>

        <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-6">
          Learn, create, and innovate with industry-focused training designed to
          prepare you for the future.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/courses" className="w-full sm:w-auto">
            <button className="px-6 py-3 text-white font-semibold rounded-lg border-2 border-amber-500 hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
              Explore Courses
            </button>
          </Link>

          <Link to="/register" className="w-full sm:w-auto">
            <button className="px-6 py-3 text-white font-bold bg-amber-600 rounded-lg hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
