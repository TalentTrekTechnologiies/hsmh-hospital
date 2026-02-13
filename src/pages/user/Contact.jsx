import React from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      {/* ✅ header offset added */}
      <main className="bg-[#f8f1e7] pt-[140px] pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-[42px] md:text-[50px] text-center font-bold mb-10">
            Contact Us
          </h1>

          <section className="py-6">
            <h1 className="text-3xl font-semibold text-center mb-10">
              Get in Touch
            </h1>

            <div className="grid md:grid-cols-2 gap-8">

              {/* LEFT COLUMN */}
              <div className="space-y-6">

                {/* Contact Card */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h2>

                  <div className="mb-2">📞 +91 7894561234</div>
                  <div className="mb-2">
                    ✉️ info@harshahospital.com
                  </div>
                  <div className="mb-4">
                    📍 123 Health Ave, Citysville
                  </div>

                  <div className="flex items-center gap-3 bg-red-100 p-3 rounded-lg">
                    <span className="text-2xl">🚑</span>
                    <div>
                      <h3 className="font-semibold text-red-600">
                        Emergency Care 24/7
                      </h3>
                      <p>Immediate Assistance Call 7905616123</p>
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
                  </h3>

                  <p>📞 <strong>Main Phone:</strong> +91 789456123</p>
                  <p>📍 <strong>Gynecology:</strong> +91 147852369</p>
                  <p>❤️ <strong>Cardiology:</strong> +91 369852147</p>
                  <p>🦴 <strong>Orthopedics:</strong> +91 258741369</p>
                  <p>💬 <strong>WhatsApp:</strong> +91 4569874123</p>
                  <small className="block mt-2">
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
                      className="w-full border p-2 rounded-md h-24"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#004743] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* OPD Hours */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">OPD Hours</h3>
                  <p><b>Mon – Sat: 8AM to 10PM</b></p>
                  <p><b>Sunday: 8AM to 2:30PM</b></p>
                </div>

              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
