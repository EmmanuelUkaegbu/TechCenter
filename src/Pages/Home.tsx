import { Link } from "react-router-dom";
import Cards from "../Component/Cards";
import Cta from "../Component/Cta";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbarhome from "../Component/Navbarhome";
import Testimonial from "../Component/Testimonial";
import image from "../assets/images/cf086669-44cb-4154-8d51-3eafd7bf22f6.jpeg";
const Home = () => {
  return (
    <div>
      <Navbarhome />
      <Hero />
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-16 gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            className="w-full max-w-[320px] md:max-w-[450px] h-auto rounded-lg  hover:scale-105 transiton-all duration-300"
            alt="About Tech Center"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-amber-500 font-semibold ">ABOUT US</h1>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-7 md:leading-8 text-sm md:text-base">
            Tech Center is a modern technology training institution committed to
            developing skilled professionals for the digital economy. Our
            mission is to bridge the gap between academic knowledge and industry
            demands by providing practical, hands-on training that prepares
            learners for successful careers in technology.
            <br />
            Whether you're a beginner taking your first step into tech or a
            professional looking to upgrade your skills, our programs are
            carefully designed to provide a strong foundation and real-world
            experience.
          </p>
          <Link to="/about">
            <button className="mt-6 px-8 py-3 text-slate-900 font-semibold bg-amber-600 rounded-lg hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
      <Cards />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
