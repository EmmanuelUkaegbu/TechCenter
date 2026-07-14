import Navbarhome from "../Component/Navbarhome";
import hero from "../assets/images/logo3.png";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";
import Cta from "../Component/Cta";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbarhome />

      {/* Hero */}
      <section
        className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center bg-cover bg-center px-4 py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2, 17, 54, 0.9), rgba(22, 40, 66, 0.75)), url(${hero})`,
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
            Learn, create, and innovate with industry-focused training designed
            to prepare you for the future.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="w-full sm:w-auto">
              <button className="px-6 py-3 text-white font-semibold rounded-lg border-2 border-amber-500 hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                Explore Courses
              </button>
            </Link>
            <Link to="/courses" className="w-full sm:w-auto">
              <button className="px-6 py-3 text-white font-bold bg-amber-600 rounded-lg hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-amber-500 font-semibold">ABOUT US</h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Welcome to Tech Center
            </h2>

            <p className="text-gray-600 leading-8 text-sm sm:text-base">
              At Tech Center, we are committed to shaping the next generation of
              technology professionals through practical, industry-focused
              education. Our goal is to bridge the gap between theoretical
              knowledge and real-world application by providing students with
              the technical skills, hands-on experience, and confidence required
              to thrive in today's fast-changing digital world.
              <br />
              <br />
              Whether you are a complete beginner looking to start a career in
              technology or a professional seeking to upgrade your skills, Tech
              Center provides a supportive learning environment where
              innovation, creativity, and continuous learning are encouraged.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={image5}
              alt="About Tech Center"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-lg object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <img
              src={image6}
              alt="Our Story"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-lg object-cover hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            <h1 className="text-amber-500 font-semibold">OUR STORY</h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-6">
              How WE Started
            </h2>

            <p className="text-gray-600 leading-8 text-sm sm:text-base">
              Tech Center was established with a simple but powerful vision to
              make quality technology education accessible to everyone. We
              recognized the growing demand for skilled digital professionals
              and the need for practical training that prepares learners for
              real workplace challenges.
              <br />
              <br />
              Since our inception, we have remained dedicated to delivering
              high-quality instruction, project-based learning, and
              career-focused programs that empower individuals to succeed in the
              global technology industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-lg hover:scale-105 transition-all duration-300">
            <h1 className="font-bold text-amber-400 text-2xl md:text-3xl text-center mb-8">
              OUR MISSION
            </h1>

            <p className="text-slate-900 font-bold italic text-center md:text-left leading-8">
              To empower individuals with practical technology skills that
              inspire innovation, create career opportunities, and contribute to
              digital transformation.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-lg hover:scale-105 transition-all duration-300">
            <h1 className="font-bold text-amber-400 text-2xl md:text-3xl text-center mb-8">
              OUR VISION
            </h1>

            <p className="text-slate-900 font-bold italic text-center md:text-left leading-8">
              To become one of the leading technology training institutions
              recognized for producing highly skilled, innovative, and globally
              competitive professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Makes Us Different
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-amber-600 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-amber-500 cursor-pointer">
            <h1 className="font-bold text-white mb-4 text-xl">
              Practical Learning
            </h1>

            <p className="text-slate-900 font-bold leading-7">
              Our curriculum focuses on hands-on projects that simulate real
              workplace experiences, allowing students to build confidence while
              developing practical skills.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-slate-800 cursor-pointer">
            <h1 className="font-bold text-amber-600 mb-4 text-xl">
              Experienced Instructors
            </h1>

            <p className="text-white leading-7">
              Learn from professionals with real industry experience who are
              passionate about mentoring and helping students achieve success.
            </p>
          </div>

          <div className="bg-amber-600 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-amber-500 cursor-pointer">
            <h1 className="font-bold text-white mb-4 text-xl">
              Career-Focused Training
            </h1>

            <p className="text-slate-900 font-bold leading-7">
              Every program is designed with employability in mind, equipping
              students with the knowledge and portfolio needed for today's
              competitive job market.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-slate-800 cursor-pointer">
            <h1 className="font-bold text-amber-600 mb-4 text-xl">
              Modern Curriculum
            </h1>

            <p className="text-white leading-7">
              Our courses are regularly updated to reflect current technologies,
              industry standards, and market demands.
            </p>
          </div>

          <div className="bg-amber-600 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-amber-500 cursor-pointer">
            <h1 className="font-bold text-white mb-4 text-xl">
              Supportive Learning Environment
            </h1>

            <p className="text-slate-900 font-bold leading-7">
              We foster collaboration, creativity, and continuous improvement
              through mentorship, teamwork, and personalized guidance.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-slate-800 cursor-pointer">
            <h1 className="font-bold text-amber-600 mb-4 text-xl">
              Flexible Learning
            </h1>

            <p className="text-white leading-7">
              We offer learning options that accommodate students, graduates,
              entrepreneurs, and working professionals.
            </p>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default About;
