import image from "../assets/images/Image1.jpeg";
import image2 from "../assets/images/Image2.jpeg";
import image3 from "../assets/images/Image3.jpeg";
import image1 from "../assets/images/Image4.jpeg";

import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-6 text-amber-600">TESTIMONIALS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 p-6 gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 bg-slate-200 mx-2 sm:mx-6 lg:mx-20 p-5 sm:p-8 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-300 cursor-pointer">
          <div>
            <img
              src={image}
              className="h-[100px] w-full sm:w-[400px] rounded-lg mt-2.5"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="font-bold text-amber-500 text-xl">
              Michael E., Full Stack Developer
            </h1>

            <p className="text-slate-900 italic">
              "From beginner to confident developer, Tech Center exceeded my
              expectations. The environment is motivating and professional."
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaRegStar className="text-amber-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 bg-slate-200 mx-2 sm:mx-6 lg:mx-20 p-5 sm:p-8 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-300 cursor-pointer">
          <div>
            <img
              src={image3}
              className="h-[100px] w-full sm:w-[400px] rounded-lg mt-2.5"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="font-bold text-amber-500 text-xl">
              Daniel A., Frontend Developer
            </h1>

            <p className="text-slate-900 italic">
              "The instructors were knowledgeable, supportive, and genuinely
              invested in our success. I gained confidence through hands-on
              projects and mentorship."
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaRegStar className="text-amber-500" />
              <FaRegStar className="text-amber-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 bg-slate-200 mx-2 sm:mx-6 lg:mx-20 p-5 sm:p-8 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-300 cursor-pointer">
          <div>
            <img
              src={image1}
              className="h-[100px] w-full sm:w-[350px] rounded-lg mt-2.5"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="font-bold text-amber-500 text-xl">
              Peter D., Backend Developer
            </h1>

            <p className="text-slate-900 italic">
              "The hands-on training gave me the confidence to build real
              projects. I highly recommend Tech Center!"
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStarHalfAlt className="text-amber-500" />
              <FaRegStar className="text-amber-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 bg-slate-200 mx-2 sm:mx-6 lg:mx-20 p-5 sm:p-8 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-300 cursor-pointer">
          <div>
            <img
              src={image2}
              className="h-[100px] w-full sm:w-[400px] rounded-lg mt-2.5"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="font-bold text-amber-500 text-xl">
              Sarah M., UI/UX Designer
            </h1>

            <p className="text-slate-900 italic">
              "Joining Tech Center was one of the best decisions I made. The
              curriculum was up-to-date, I built a strong portfolio that
              impressed employers."
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStarHalfAlt className="text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
