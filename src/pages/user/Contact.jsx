// src/pages/user/Contact.jsx
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
import hospitalBuilding from "../../assets/ContactUs.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      // Simulate API call
      try {
        // Replace this with your actual API endpoint
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData)
        // });
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/harshahospital", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com/harshahospital", label: "Instagram" },
    { icon: Youtube, url: "https://youtube.com/harshahospital", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* HERO SECTION */}
        <section className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
            <img
              src={hospitalBuilding}
              alt="Hospital Building"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x500?text=Hospital+Building';
              }}
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Centered Hero Content */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-center px-6 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
     Find Us
    </h1>
    <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
      Your health and safety are our highest priority. Experience world-class healthcare 
      delivered with compassion, integrity, and excellence.
    </p>
  </div>
</div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12">

            {/* LEFT COLUMN */}
            <div className="space-y-10">

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-[#005c52] mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 text-gray-700">

                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#005c52] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium">
                        2/207, Bollavaram, Jammalamadugu Road, Proddatur
                      </p>
                      <a
                        href="https://maps.google.com/?q=2/207+Bollavaram+Proddatur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#005c52] text-sm font-medium hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-red-600 font-semibold">
                    <Phone size={20} />
                    <span>Emergency (24×7): <a href="tel:+919640540475" className="hover:underline">+91 9640540475</a></span>
                  </div>

                  {[
                    ["Reception:", "+91 9876543210"],
                    ["Appointment / Helpline:", "+91 8888888888"],
                    ["OPD Enquiry:", "+91 7777777777"],
                  ].map(([label, number], idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <Phone className="text-[#005c52] flex-shrink-0" size={18} />
                      <span>
                        <span className="font-medium">{label}</span>{" "}
                        <a href={`tel:${number.replace(/\D/g, '')}`} className="hover:underline">
                          {number}
                        </a>
                      </span>
                    </div>
                  ))}

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-green-600 font-medium hover:underline group"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp: <span className="group-hover:underline">+91 9876543210</span></span>
                  </a>

                  <div className="pt-4 border-t">
                    {[
                      ["General:", "info@harshahospital.com"],
                      ["Appointments:", "appointments@harshahospital.com"],
                      ["Emergency:", "emergency@harshahospital.com"],
                    ].map(([label, email], idx) => (
                      <div key={idx} className="flex items-center gap-4 mt-3">
                        <Mail className="text-[#005c52] flex-shrink-0" size={18} />
                        <span>
                          <span className="font-medium">{label}</span>{" "}
                          <a href={`mailto:${email}`} className="hover:underline">
                            {email}
                          </a>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-md p-4">
                <iframe
                  title="Harsha Hospital Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.594562!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="rounded-xl"
                  aria-label="Google Maps location of Harsha Hospital"
                />
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-[#005c52] mb-6">
                  Send Us a Message
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                    ✓ Your message has been submitted successfully. We'll get back to you soon!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                    ✗ Something went wrong. Please try again later.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {["name", "email", "phone"].map((field) => (
                    <div key={field}>
                      <input
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        className={`w-full border ${
                          errors[field] ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#005c52] focus:outline-none transition-colors`}
                        aria-invalid={!!errors[field]}
                        aria-describedby={errors[field] ? `${field}-error` : undefined}
                      />
                      {errors[field] && (
                        <p id={`${field}-error`} className="text-red-500 text-xs mt-1" role="alert">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } px-4 py-3 rounded-xl resize-none focus:ring-2 focus:ring-[#005c52] focus:outline-none transition-colors`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#005c52] text-white rounded-full py-3 font-semibold transition duration-300 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#004743]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h3 className="text-2xl font-semibold text-[#005c52] mb-6">
                  Follow Us
                </h3>

                <div className="flex justify-center gap-8">
                  {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#005c52] hover:text-[#004743] transition-colors"
                      aria-label={label}
                    >
                      <Icon size={28} />
                    </a>
                  ))}
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