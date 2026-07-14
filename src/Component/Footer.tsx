import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Tech Center</h2>

            <p className="text-gray-400 leading-7 text-sm sm:text-base">
              Empowering future innovators through quality technology education,
              practical experience, and career-focused training.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/home" className="hover:text-amber-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-amber-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/course" className="hover:text-amber-500 transition">
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-amber-500 transition"
                >
                  Admissions
                </Link>
              </li>

              <li>
                <Link
                  to="/testimonial"
                  className="hover:text-amber-500 transition"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-amber-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Programs</h3>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>UI/UX Design</li>
              <li>Cybersecurity</li>
              <li>Data Analysis</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact</h3>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base">
              <p>
                📍 Dreamland Junction, Off Port Harcourt Road, World Bank, New
                Owerri, Imo State
              </p>

              <p>📞 +234 8136870487</p>

              <p>✉️ info@techcenter.com</p>

              <p>🕒 Mon – Fri: 9AM – 4PM</p>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>

              <p className="text-sm text-gray-400 mb-4 leading-6">
                Stay informed about upcoming programs and workshops.
              </p>

              <div className="flex flex-col sm:flex-row w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800 outline-none rounded-lg sm:rounded-r-none"
                />

                <button className="bg-amber-600 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg sm:rounded-l-none mt-3 sm:mt-0 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 border-t border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white mb-2">
                Do I need prior programming experience?
              </h4>

              <p className="text-gray-400 leading-7">
                No. Many of our courses are designed for complete beginners.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">
                Do you offer certificates?
              </h4>

              <p className="text-gray-400 leading-7">
                Yes. Students receive a certificate after successfully
                completing their training.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">
                Are classes practical?
              </h4>

              <p className="text-gray-400 leading-7">
                Absolutely. Every course includes hands-on projects and
                practical assignments.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">
                Can students attend while working?
              </h4>

              <p className="text-gray-400 leading-7">
                Yes. We offer flexible schedules to accommodate working
                professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 Tech Center. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-5 text-2xl">
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-300 hover:scale-110 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://wa.me/message/T6UW23ZCSO6ML1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-300 hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
