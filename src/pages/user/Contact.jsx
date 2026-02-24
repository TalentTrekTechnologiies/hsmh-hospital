import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

// Import dummy image
import hospitalBuilding from "../../assets/contact Us 1.jpeg"; // You can replace this path

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
      alert("Your message has been submitted successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50 pt-16">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, emerald 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <Header />
      <main className="flex-grow relative">

        {/* Hero Section with Background Image */}
        <section className="relative w-full h-[400px] overflow-hidden">
          {/* Background Image - Full width, fixed height */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img 
              src={hospitalBuilding} 
              alt="Hospital Building" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-900/60 to-amber-900/60"></div>
          </div>
          
          {/* Centered Content - Perfectly centered vertically and horizontally */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3 drop-shadow-lg">
              Contact & Location
            </h1>
            <p className="text-white/90 text-center max-w-2xl text-base md:text-lg">
              We are committed to providing compassionate, responsive and 
              round-the-clock medical care. Reach out to us anytime.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

            {/* Left Column */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                  Contact Information
                </h3>

                <div className="space-y-5 text-gray-700">

                  {/* Address */}
                  <div className="group hover:bg-emerald-50 p-3 rounded-xl transition duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-5 flex justify-center mt-1 text-emerald-600">
                        <MapPin size={18} />
                      </div>
                      <p className="font-medium">
                        2/207, Bollavaram , Jammalamadugu Road , Proddatur
                      </p>
                    </div>

                    <div className="pl-9 mt-2">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-medium text-sm hover:underline inline-flex items-center gap-1"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Emergency Numbers */}
                  <div className="group hover:bg-red-50 p-3 rounded-xl transition duration-300">
                    <div className="flex items-center gap-4 font-semibold text-red-600">
                      <div className="w-5 flex justify-center">
                        <Phone size={18} />
                      </div>
                      <span>Emergency (24×7): +91 9640540475</span>
                    </div>
                  </div>

                  {/* Other Numbers */}
                  {[
                    ["Reception:", "+91 9876543210"],
                    ["Appointment / Helpline:", "+91 8888888888"],
                    ["OPD Enquiry:", "+91 7777777777"],
                  ].map(([label, number], idx) => (
                    <div key={idx} className="group hover:bg-emerald-50 p-3 rounded-xl transition duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-5 flex justify-center text-emerald-600">
                          <Phone size={18} />
                        </div>
                        <span><span className="font-medium">{label}</span> {number}</span>
                      </div>
                    </div>
                  ))}

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-green-600 font-medium group hover:bg-green-50 p-3 rounded-xl transition duration-300"
                  >
                    <div className="w-5 flex justify-center">
                      <MessageCircle size={18} />
                    </div>
                    <span>WhatsApp: +91 9876543210</span>
                  </a>

                  {/* Emails */}
                  <div className="pt-4 space-y-3 border-t border-emerald-100">
                    {[
                      ["General:", "info@harshahospital.com"],
                      ["Appointments:", "appointments@harshahospital.com"],
                      ["Emergency:", "emergency@harshahospital.com"],
                    ].map(([label, email], idx) => (
                      <div key={idx} className="flex items-center gap-4 group hover:bg-emerald-50 p-2 rounded-lg transition duration-300">
                        <div className="w-5 flex justify-center text-emerald-600">
                          <Mail size={18} />
                        </div>
                        <span><span className="font-medium">{label}</span> {email}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Department Emergency Contacts */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                  Department Emergency Contacts
                </h3>

                <div className="divide-y divide-emerald-100">

                  {[
                    ["❤️ Cardiology", "+91 9011111111"],
                    ["🦴 Orthopedics", "+91 9022222222"],
                    ["🌸 Gynecology", "+91 9033333333"],
                    ["👶 Pediatrics", "+91 9044444444"],
                    ["🫁 Pulmonology", "+91 9055555555"],
                    ["🧠 Neurology", "+91 9066666666"],
                  ].map(([dept, number], index) => (
                    <a
                      key={index}
                      href={`tel:${number}`}
                      className="flex justify-between items-center py-4 px-2 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-amber-50 transition duration-200 rounded-lg group"
                    >
                      <span className="font-medium text-gray-700 group-hover:text-emerald-700">
                        {dept}
                      </span>

                      <span className="font-semibold text-emerald-700 group-hover:text-emerald-800 group-hover:scale-105 transition duration-200">
                        {number}
                      </span>
                    </a>
                  ))}

                </div>
              </div>
            
              {/* Google Map */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-4 border border-emerald-100">
                <iframe
                  title="hospital-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.594562!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0, width: '100%', height: '280px' }}
                  loading="lazy"
                  className="rounded-xl hover:shadow-lg transition duration-300"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">

              {/* Contact Form */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border border-emerald-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none bg-white/80 hover:bg-white transition duration-200"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full border border-emerald-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none bg-white/80 hover:bg-white transition duration-200"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="relative">
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full border border-emerald-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none bg-white/80 hover:bg-white transition duration-200"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full border border-emerald-200 px-4 py-3 rounded-xl h-28 resize-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none bg-white/80 hover:bg-white transition duration-200"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-3 rounded-md font-semibold hover:from-emerald-800 hover:to-emerald-700 transition duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Working Hours */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                  Working Hours
                </h3>

                <div className="space-y-4 text-gray-700">
                  {[
                    ["Hospital Services", "24×7", "text-emerald-700"],
                    ["OPD (Mon–Sat)", "8AM – 10PM", "text-gray-700"],
                    ["OPD (Sunday)", "8AM – 12PM", "text-gray-700"],
                    ["Pharmacy", "24×7", "text-emerald-700"],
                    ["Laboratory", "6AM – 9PM", "text-gray-700"],
                    ["Emergency Services", "24×7", "text-red-600 font-semibold"],
                  ].map(([service, hours, color], idx) => (
                    <div key={idx} className="flex justify-between items-center group hover:bg-emerald-50 p-2 rounded-lg transition duration-200">
                      <span className="font-medium">{service}</span>
                      <span className={`font-semibold ${color} group-hover:scale-105 transition duration-200`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                  Follow Us
                </h3>

                <div className="flex gap-8 justify-center">
                  <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:scale-125 transition duration-300 hover:rotate-6 bg-blue-50 p-3 rounded-full hover:shadow-lg"
                  >
                    <Facebook size={32} />
                  </a>

                  <a
                    href="https://www.instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:scale-125 transition duration-300 hover:-rotate-6 bg-pink-50 p-3 rounded-full hover:shadow-lg"
                  >
                    <Instagram size={32} />
                  </a>

                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:scale-125 transition duration-300 hover:rotate-6 bg-red-50 p-3 rounded-full hover:shadow-lg"
                  >
                    <Youtube size={32} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}