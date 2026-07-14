import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbarhome from "../Component/Navbarhome";
import hero from "../assets/images/image12.jpeg";
import image5 from "../assets/images/image13.jpeg";
import image6 from "../assets/images/image14.jpeg";
import image4 from "../assets/images/image15.jpeg";

const Blog = () => {
  return (
    <div>
      <Navbarhome />

      {/* Hero */}
      <section
        className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center bg-cover bg-center px-4 py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2,17,54,.9), rgba(22,40,66,.75)), url(${hero})`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center py-8">
          <h1 className="text-amber-600 font-bold text-base xs:text-lg sm:text-2xl md:text-3xl mb-2">
            OUR BLOG
          </h1>

          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Insights, Tutorials & Technology Updates
          </h2>

          <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-6">
            Stay informed with practical guides, industry insights, programming
            tutorials, career advice, and the latest technology trends designed
            to help you grow your skills and stay ahead in the digital world.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="px-5 sm:px-8 lg:px-20 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={image5}
              alt=""
              className="w-full rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          <div>
            <p className="text-amber-500 font-semibold">FEATURED ARTICLE</p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Why Practical Tech Skills Matter More Than Ever
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Technology continues to reshape industries around the world,
              creating new opportunities for individuals with practical digital
              skills. Learning by building real-world projects not only improves
              technical knowledge but also develops problem-solving abilities
              that employers value. In this article, we explore why hands-on
              learning remains the fastest path to becoming job-ready in today's
              technology landscape.
            </p>
            <Link to="/about">
              <button className="mt-8 bg-amber-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-amber-500 transition">
                Read Article
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="text-center px-5">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Latest Articles
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover helpful resources to improve your knowledge and stay current
          with emerging technologies.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-5 sm:px-8 lg:px-20 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
          <img src={image4} alt="" className="w-full h-56 object-cover" />

          <div className="p-6">
            <p className="text-amber-500 font-semibold">Web Development</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Getting Started with HTML, CSS and JavaScript
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              A beginner-friendly guide covering the essential building blocks
              of modern web development and how to start creating responsive
              websites.
            </p>
            <Link to="/about">
              <button className="mt-6 text-amber-600 font-semibold hover:text-amber-500">
                Read More →
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
          <img src={image6} alt="" className="w-full h-56 object-cover" />

          <div className="p-6">
            <p className="text-amber-500 font-semibold">Programming</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              How to Think Like a Software Developer
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Programming is more than writing code. Learn how developers
              approach problems, break down complex tasks, and build scalable
              solutions.
            </p>
            <Link to="/about">
              <button className="mt-6 text-amber-600 font-semibold hover:text-amber-500">
                Read More →
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
          <img src={image5} alt="" className="w-full h-56 object-cover" />

          <div className="p-6">
            <p className="text-amber-500 font-semibold">Career Development</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Building a Strong Tech Portfolio
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Discover practical strategies for showcasing your projects,
              improving your online presence, and attracting internship or
              employment opportunities.
            </p>
            <Link to="/about">
              <button className="mt-6 text-amber-600 font-semibold hover:text-amber-500">
                Read More →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-5 sm:px-8 lg:px-20 py-12">
        <h1 className="text-3xl font-bold text-center text-slate-900">
          Browse by Category
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            "Web Development",
            "Programming",
            "Cyber Security",
            "UI/UX Design",
            "Career Tips",
          ].map((item, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg text-white transition ${
                index % 2 === 0
                  ? "bg-slate-900 hover:bg-slate-800"
                  : "bg-amber-600 hover:bg-amber-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 sm:px-8 lg:px-20 py-16">
        <div className="bg-slate-900 rounded-xl p-8 sm:p-10 lg:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Never Miss an Update
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-8">
            Subscribe to receive the latest articles, tutorials, technology
            news, and career resources delivered directly to your inbox.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[400px] px-5 py-4 rounded-lg bg-white outline-none"
            />

            <button className="bg-amber-600 px-8 py-4 rounded-lg text-white font-semibold hover:bg-amber-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
