import { Link } from "react-router-dom";
import hero from "../assets/images/image9.jpeg";

const Ctac = () => {
  return (
    <div>
      <section
        className="
          min-h-[30vh]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          rounded-[30px]
          sm:rounded-[40px]
          md:rounded-full
          mx-4
          sm:mx-6
          md:mx-12
          lg:mx-20
          xl:mx-32
          2xl:mx-48
          mt-10
          mb-10
          md:mb-20
          px-6
          sm:px-8
          md:px-10
          py-10
          sm:py-12
        "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(7, 30, 77, 0.9), rgb(31, 65, 107)), url(${hero})`,
        }}
      >
        <div className="text-center w-full max-w-3xl mx-auto">
          <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-amber-600 font-poppins mb-4">
            Ready to Start Your Tech Journey?
          </h1>

          <p className="mt-4 text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're looking to develop new digital skills, build custom
            software, or collaborate on innovative projects, our team is here to
            help you achieve your goals.
          </p>

          <div className="mt-8 mb-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses">
              <button className="w-full sm:w-auto p-3 px-6 text-slate-900 font-bold bg-amber-600 rounded-full hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                Enroll Now
              </button>
            </Link>

            <Link to="/contact">
              <button className="w-full sm:w-auto p-3 px-6 text-slate-900 font-bold bg-amber-600 rounded-full hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ctac;
