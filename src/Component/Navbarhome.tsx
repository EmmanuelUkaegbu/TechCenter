import logoo from "../assets/images/logo3.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbarhome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/">
              <img
                src={logoo}
                alt="Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transition-all duration-300 hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3">
            <Link
              to="/"
              className="relative px-2 lg:px-3 xl:px-4 py-2 text-white font-medium text-sm lg:text-base overflow-hidden"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                HOME
              </span>
            </Link>

            <Link
              to="/about"
              className="relative px-2 lg:px-3 xl:px-4 py-2 text-white font-medium text-sm lg:text-base overflow-hidden"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                ABOUT
              </span>
            </Link>

            <Link
              to="/courses"
              className="relative px-2 lg:px-3 xl:px-4 py-2 text-white font-medium text-sm lg:text-base overflow-hidden"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                COURSES
              </span>
            </Link>

            <Link
              to="/blog"
              className="relative px-2 lg:px-3 xl:px-4 py-2 text-white font-medium text-sm lg:text-base overflow-hidden"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                BLOG
              </span>
            </Link>

            <Link
              to="/contact"
              className="relative px-2 lg:px-3 xl:px-4 py-2 text-white font-medium text-sm lg:text-base overflow-hidden"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                CONTACTS
              </span>
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
            <Link to="/login">
              <button className="px-3 lg:px-4 xl:px-5 py-2 text-white font-medium text-sm lg:text-base border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 cursor-pointer">
                LOGIN
              </button>
            </Link>

            <Link to="/register">
              <button className="px-3 lg:px-4 xl:px-5 py-2 bg-amber-600 text-slate-900 font-bold text-sm lg:text-base rounded-lg hover:bg-amber-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                REGISTER
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-white hover:bg-slate-700/50 transition-all duration-300"
            >
              {isOpen ? (
                <X size={28} className="text-amber-500 cursor-pointer" />
              ) : (
                <Menu size={28} className="text-amber-500 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden w-full overflow-hidden pb-4">
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={closeMenu}
                className="block w-full px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.3s both" }}
              >
                HOME
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="block w-full px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.35s both" }}
              >
                ABOUT
              </Link>

              <Link
                to="/courses"
                onClick={closeMenu}
                className="block w-full px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.4s both" }}
              >
                COURSES
              </Link>

              <Link
                to="/blog"
                onClick={closeMenu}
                className="block w-full px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.45s both" }}
              >
                BLOG
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.5s both" }}
              >
                CONTACTS
              </Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 pt-4 mt-2 px-4 border-t border-amber-600/20">
                <Link to="/login" onClick={closeMenu}>
                  <button className="w-full px-4 py-3 text-white font-medium border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                    LOGIN
                  </button>
                </Link>

                <Link to="/register" onClick={closeMenu}>
                  <button className="w-full px-4 py-3 bg-amber-600 text-slate-900 font-bold rounded-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 cursor-pointer">
                    REGISTER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbarhome;
