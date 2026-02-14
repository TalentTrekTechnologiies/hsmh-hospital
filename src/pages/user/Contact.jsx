import React from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

export default function Contact() {
  return (
    <div className="bg-[#f2ebe6] font-sans">
      <Header />

      <h1 className="text-[50px] text-center font-bold mt-6">
        Contact Us
      </h1>

      <section className="py-10 px-6">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* Contact Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 flex flex-col gap-4">
              <h2 className="text-xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
                Contact Information
              </h2>

              <div className="flex items-center gap-2 text-base">📞 +91 7894561234</div>
              <div className="flex items-center gap-2 text-base">✉️ info@harshahospital.com</div>
              <div className="flex items-center gap-2 text-base">📍 123 Health Ave, Citysville</div>

              <div className="mt-auto flex items-center gap-3 bg-green-600 p-3 rounded-lg">
                <span className="text-2xl">🚑</span>
                <div>
                  <h3 className="font-semibold text--600">
                    Emergency Care 24/7
                  </h3>
                  <p className="text-sm">Immediate Assistance Call 7905616123</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white shadow-lg rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3">Find Us</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.9664596587377!2d77.61067917450494!3d13.120482811597858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190025b825c9%3A0x2695176bc910c797!2sSri%20siddeswara%20pg%20For%20Gents!5e1!3m2!1sen!2sin!4v1770965768402!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Department Info */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 underline">
                Department Information
              </h3><br />

              <p>📞 <strong>Main Phone:</strong> +91 789456123</p> <br />
              <p>📍 <strong>Gynecology:</strong> +91 147852369</p><br />
              <p>❤️ <strong>Cardiology:</strong> +91 369852147</p><br />
              <p>🦴 <strong>Orthopedics:</strong> +91 258741369</p><br />
              <p>💬 <strong>WhatsApp:</strong> +91 4569874123</p><br />
              <small className="block mt-2 text-gray-600 text-sm">
                info@harshhospitals.com
              </small>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">
                Send us a Message
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border p-2 rounded-md"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full border p-2 rounded-md h-24 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* OPD Hours */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">OPD Hours :</h3><br />
              <p className="font-bold">Mon – Sat: 8AM to 10PM</p><br />
              <p className="font-bold">Sunday: 8AM to 2:30PM</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}