import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="py-10">
      {/* Heading */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600">
          OUR COURSES
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-slate-900">
          Industry-Relevant Programs
        </h2>

        <p className="font-bold text-slate-900 mt-2 max-w-3xl mx-auto">
          We offer comprehensive training programs designed to meet current
          industry standards.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10">
        <div className="bg-slate-900 p-9 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <h1 className="font-bold text-amber-600 mb-3 text-xl">
            Frontend Development
          </h1>

          <p className="text-white">
            Learn HTML, CSS, JavaScript, React, Tailwind CSS, and responsive web
            design while building modern user interfaces.
          </p>
        </div>

        <div className="bg-slate-900 p-9 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <h1 className="font-bold text-amber-600 mb-3 text-xl">
            Backend Development
          </h1>

          <p className="text-white">
            Master Node.js, Express.js, databases, REST APIs, authentication,
            and server-side application development.
          </p>
        </div>

        <div className="bg-slate-900 p-9 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <h1 className="font-bold text-amber-600 mb-3 text-xl">
            Full Stack Development
          </h1>

          <p className="text-white">
            Become a complete software developer by combining frontend and
            backend technologies to build scalable web applications.
          </p>
        </div>

        <div className="bg-slate-900 p-9 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <h1 className="font-bold text-amber-600 mb-3 text-xl">
            UI/UX Design
          </h1>

          <p className="text-white">
            Design intuitive digital experiences using design thinking,
            wireframing, prototyping, Figma, and user-centered design
            principles.
          </p>
        </div>

        <div className="bg-slate-900 p-9 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <h1 className="font-bold text-amber-600 mb-3 text-xl">
            Data Analysis
          </h1>

          <p className="text-white">
            Develop analytical skills using Excel, SQL, Python, Power BI, and
            data visualization techniques to transform data into actionable
            insights.
          </p>
        </div>

        <div className="bg-slate-900 p-9 rounded-lg transition-all duration-300 hover:-translate-y hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <h1 className="font-bold text-amber-600 mb-3 text-xl">
            Cybersecurity
          </h1>

          <p className="text-white">
            Understand digital security, ethical hacking, network security, risk
            management, and modern security best practices.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center px-4">
        <Link to="/courses">
          <button className="mb-6 px-8 py-3 text-slate-900 font-semibold bg-amber-600 rounded-lg hover:bg-amber-500 cursor-pointer transition-all duration-300 hover:scale-105">
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
