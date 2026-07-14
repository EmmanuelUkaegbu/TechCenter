import { Link } from "react-router-dom";
import hero from "../assets/images/image7.jpeg";

const Cta = () => {
  return (
    <div className="w-full">
      <section
        className="
          min-h-[30vh]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          rounded-[30px]
          sm:rounded-[35px]
          md:rounded-full
          mx-4
          sm:mx-6
          md:mx-12
          lg:mx-20
          xl:mx-36
          2xl:mx-52
          mt-10
          md:mt-14
          mb-10
          md:mb-20
          px-5
          sm:px-8
          md:px-10
          py-8
        "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(7, 30, 77, 0.9), rgb(232, 236, 241)), url(${hero})`,
        }}
      >
        <div className="text-center max-w-3xl w-full">
          <h1 className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-amber-600 font-poppins mb-4 leading-tight">
            Ready to Start Your Tech Journey?
          </h1>

          <p className="mt-4 text-white text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-4">
            Join hundreds of aspiring tech professionals learning practical,
            industry-relevant skills from experienced instructors. Your future
            in technology begins with one decision.
          </p>

          <div className="mt-7 mb-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto p-3 px-6 text-slate-900 font-bold bg-amber-600 rounded-full hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                Enroll Now
              </button>
            </Link>

            <Link to="/courses" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto p-3 px-6 text-slate-900 font-bold bg-amber-600 rounded-full hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
                View Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
