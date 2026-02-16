import React, { useState } from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

export default function Contact() {
  /* ================= FORM STATE ================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  /* ================= HANDLERS ================= */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowPopup(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-[#fff8f0] font-sans min-h-screen">
      <Header />

      {/* PAGE TITLE */}
      <div className="pt-[120px] pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-3">
          We're here to help you. Reach out anytime.
        </p>
      </div>

      <section className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">

          {/* ================= LEFT ================= */}
          <div className="space-y-6">

            {/* Contact Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 text-emerald-800 mb-4">
                Contact Information
              </h3>

              <div className="space-y-2 text-gray-700">
                <a href="tel:+917894561234" className="block hover:text-[#005c52]">
                  📞 +91 7894561234
                </a>
                <a
                  href="mailto:info@harshahospital.com"
                  className="block hover:text-[#005c52]"
                >
                  ✉️ info@harshahospital.com
                </a>
                <p>📍 123 Health Ave, Citysville</p>
              </div>

              {/* Emergency */}
              <a
                href="tel:7905616123"
                className="mt-6 flex items-center gap-4 bg-[#005c52] text-white p-4 rounded-xl hover:bg-[#004743] transition"
              >
                <span className="text-3xl">🚑</span>
                <div>
                  <h4 className="font-semibold">Emergency Care 24/7</h4>
                  <p className="text-sm opacity-90">
                    Call 7905616123 immediately
                  </p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="bg-white shadow-md rounded-2xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-emerald-800">
                Find Us
              </h3>
              <iframe
                title="hospital-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.9664596587377!2d77.61067917450494!3d13.120482811597858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190025b825c9%3A0x2695176bc910c797!2sSri%20siddeswara%20pg%20For%20Gents!5e1!3m2!1sen!2sin!4v1770965768402!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-xl"
              />
            </div>

            {/* Department Contacts */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-5">
                📞 Department Contacts
              </h3>

              <div className="space-y-3">

                <a href="tel:+91789456123" className="flex justify-between bg-gray-50 hover:bg-[#faf3e0] rounded-xl px-4 py-3 transition">
                  <span>Main Reception</span>
                  <span className="text-[#005c52] font-semibold">+91 789456123</span>
                </a>

                <a href="tel:+91147852369" className="flex justify-between bg-gray-50 hover:bg-[#faf3e0] rounded-xl px-4 py-3 transition">
                  <span>Gynecology</span>
                  <span className="text-[#005c52] font-semibold">+91 147852369</span>
                </a>

                <a href="tel:+91369852147" className="flex justify-between bg-gray-50 hover:bg-[#faf3e0] rounded-xl px-4 py-3 transition">
                  <span>Cardiology</span>
                  <span className="text-[#005c52] font-semibold">+91 369852147</span>
                </a>

                <a href="tel:+91258741369" className="flex justify-between bg-gray-50 hover:bg-[#faf3e0] rounded-xl px-4 py-3 transition">
                  <span>Orthopedics</span>
                  <span className="text-[#005c52] font-semibold">+91 258741369</span>
                </a>

              </div>

              <p className="text-xs text-gray-500 mt-4">
                📧 info@harshhospitals.com
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-6">

            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              {/* <h3 className="text-xl font-semibold mb-4 text-emerald-800">
            
              </h3> */}

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#005c52] outline-none"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#005c52] outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#005c52] outline-none"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl h-28 resize-none focus:ring-2 focus:ring-[#005c52] outline-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#005c52] text-white py-3 rounded-xl font-semibold hover:bg-[#004743] transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* OPD Hours */}
            <div className="bg-gradient-to-br from-[#faf3e0] to-white border border-[#f0e6d6] shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-5 text-center">
                🕒 OPD Working Hours
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="font-semibold">Mon – Sat</span>
                  <span className="text-[#005c52] font-bold">8:00 AM – 10:00 PM</span>
                </div>

                <div className="flex justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-[#005c52] font-bold">8:00 AM – 2:30 PM</span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                  🚑 Emergency Services: 24/7 Available
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-[90%] text-center shadow-xl">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Thank you for contacting us. We will get back to you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#005c52] text-white px-6 py-2 rounded-lg hover:bg-[#004743] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
