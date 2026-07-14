import Footer from "../Component/Footer";
import Navbarhome from "../Component/Navbarhome";

import hero from "../assets/images/image15.jpeg";
import image5 from "../assets/images/WhatsApp Image 2026-07-02 at 10.31.00 AM.jpeg";
import Ctac from "../Component/Ctac";

const Contact = () => {
  return (
    <div>
      <Navbarhome />

      {/* Hero */}
      <section
        className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center bg-cover bg-center px-4 py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2,17,54,.92), rgba(22,40,66,.78)), url(${hero})`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center py-8">
          <h1 className="text-amber-600 font-bold text-base xs:text-lg sm:text-2xl md:text-3xl mb-2">
            CONTACT US
          </h1>

          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-6">
            Whether you have questions about our training programs, software
            development services, partnerships, or general enquiries, our team
            is ready to help. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-5 sm:px-8 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="bg-white shadow-xl rounded-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-4xl">📍</div>

            <h2 className="text-2xl font-bold mt-5 text-slate-900">Visit Us</h2>

            <p className="text-gray-600 mt-4 leading-7">
              Dreamland Junction, Off Port Harcourt Road,
              <br />
              World Bank, New Owerri,
              <br />
              New Owerri, Imo State,Nigeria
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-4xl">📞</div>

            <h2 className="text-2xl font-bold mt-5 text-slate-900">Call Us</h2>

            <p className="text-gray-600 mt-4 leading-7">
              +234 81354647747
              <br />
              +234 92314152651
              <br />
              Mon - Fri (8AM - 5PM)
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-4xl">✉️</div>

            <h2 className="text-2xl font-bold mt-5 text-slate-900">Email Us</h2>

            <p className="text-gray-600 mt-4 leading-7">
              info@techcenter.com
              <br />
              support@techcenter.com
              <br />
              partnerships@techcenter.com
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-4xl">🕒</div>

            <h2 className="text-2xl font-bold mt-5 text-slate-900">
              Office Hours
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Monday - Friday
              <br />
              8:00 AM - 5:00 PM
              <br />
              Saturday: 9AM - 2PM
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-5 sm:px-8 lg:px-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <img
              src={image5}
              alt=""
              className="rounded-xl shadow-xl w-[450px]"
            />
          </div>

          {/* Right */}
          <div>
            <p className="text-amber-600 font-semibold">GET IN TOUCH</p>

            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Have a project in mind or need more information about our
              services? Complete the form below and one of our team members will
              get back to you as soon as possible.
            </p>

            <form className="mt-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="border rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="border rounded-lg px-5 py-4 w-full outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>

              <button className="bg-amber-600 hover:bg-amber-500 transition px-8 py-4 rounded-lg text-white font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-slate-100 py-20 px-5 sm:px-8 lg:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-amber-600 font-semibold">WHY CHOOSE US</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            We're Ready to Help You Succeed
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Our team combines technical expertise with exceptional customer
            service to ensure every enquiry receives the attention it deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl">⚡</div>

            <h3 className="font-bold text-2xl mt-6">Fast Response</h3>

            <p className="text-gray-600 mt-4 leading-7">
              We aim to respond to every enquiry within one business day.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl">💼</div>

            <h3 className="font-bold text-2xl mt-6">Professional Support</h3>

            <p className="text-gray-600 mt-4 leading-7">
              Experienced professionals ready to guide you through every step.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl">🤝</div>

            <h3 className="font-bold text-2xl mt-6">Trusted Partnership</h3>

            <p className="text-gray-600 mt-4 leading-7">
              We believe in building lasting relationships through quality
              service and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900">Find Our Office</h2>

          <p className="text-gray-600 mt-4">
            Visit us for consultations, meetings, or technology training.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Dreamland+Junction,+Off+Port+Harcourt+Road,+World+Bank,+New+Owerri,+Imo+State,+Nigeria&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Ctac />

      <Footer />
    </div>
  );
};

export default Contact;
