import logoo from "../assets/images/logo3.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const NavbarStudent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-16 md:h-20 flex-nowrap">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/home">
              <img
                src={logoo}
                alt="Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-all duration-300 hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center whitespace-nowrap md:gap-0 lg:gap-2 xl:gap-4">
            <Link
              to="/home"
              className="px-2 lg:px-4 py-2 text-white font-medium text-sm lg:text-base"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                HOME
              </span>
            </Link>

            <Link
              to="/about"
              className="px-2 lg:px-4 py-2 text-white font-medium text-sm lg:text-base"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                ABOUT
              </span>
            </Link>

            <Link
              to="/courses"
              className="px-2 lg:px-4 py-2 text-white font-medium text-sm lg:text-base"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                COURSES
              </span>
            </Link>

            <Link
              to="/blog"
              className="px-2 lg:px-4 py-2 text-white font-medium text-sm lg:text-base"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                BLOG
              </span>
            </Link>

            <Link
              to="/contact"
              className="px-2 lg:px-4 py-2 text-white font-medium text-sm lg:text-base"
            >
              <span className="transition-all duration-300 hover:text-amber-400">
                CONTACTS
              </span>
            </Link>
          </div>

          {/* Desktop Logout */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={handleLogout}
              className="px-4 lg:px-5 py-2 text-white font-medium text-sm lg:text-base border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 cursor-pointer whitespace-nowrap"
            >
              LOGOUT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden w-full overflow-hidden">
            <div className="pb-4">
              <Link
                to="/home"
                onClick={closeMenu}
                className="block px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.3s both" }}
              >
                HOME
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.35s both" }}
              >
                ABOUT
              </Link>

              <Link
                to="/courses"
                onClick={closeMenu}
                className="block px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.4s both" }}
              >
                COURSES
              </Link>

              <Link
                to="/blog"
                onClick={closeMenu}
                className="block px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.45s both" }}
              >
                BLOG
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-white font-medium rounded-lg hover:text-amber-400 transition-all duration-300"
                style={{ animation: "slideIn 0.5s both" }}
              >
                CONTACTS
              </Link>

              {/* Mobile Logout */}
              <div className="flex flex-col gap-2 pt-4 px-4 border-t border-amber-600/20">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 text-white font-medium border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                >
                  LOGOUT
                </button>
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

export default NavbarStudent;
