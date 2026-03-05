import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo2 from "../assets/logo2.png";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#004743] text-white mt-5">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Hospital Info with Logo */}
    <div>
      {/* Hospital Logo - Uncommented and added */}
      <img 
        src={logo2} 
        alt="Harsha Multi Speciality Hospital Logo" 
        className="w-20 h-20 mb-4 object-contain"
        loading="lazy"
      />
      
      <h2 className="text-xl font-bold mb-4">
        Harsha Multi Speciality Hospital
      </h2>

      <p className="text-sm mt-2">
        Providing trusted healthcare with modern facilities and compassionate care.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>

      <ul className="space-y-2 text-sm">
        <li><Link to="/" onClick={scrollToTop} className="hover:underline">Home</Link></li>
        <li><Link to="/about" onClick={scrollToTop} className="hover:underline">About Us</Link></li>
        <li><Link to="/departments" onClick={scrollToTop} className="hover:underline">Departments</Link></li>
        <li><Link to="/doctors" onClick={scrollToTop} className="hover:underline">Doctors</Link></li>
        <li><Link to="/services" onClick={scrollToTop} className="hover:underline">Services</Link></li>
        <li><Link to="/contact" onClick={scrollToTop} className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-emerald-300">Twitter</a></li>
        <li><a href="#" className="hover:text-emerald-300">Instagram</a></li>
        <li><a href="#" className="hover:text-emerald-300">Facebook</a></li>
        <li><a href="#" className="hover:text-emerald-300">LinkedIn</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="font-medium">
      <h2 className="text-xl font-bold mb-4">Contact</h2>

      <p className="text-sm leading-relaxed">
        📍 2/207, Bollavaram,<br />
        Jammalamadugu Road,<br />
        Proddatur
      </p>

      <p className="text-sm">📞 9640540475</p>
      <p className="text-sm">✉️ info@hmsh.com</p>

      <div className="mt-4 flex flex-col space-y-2">
        <Button
          text="Book Appointment"
          variant="outline"
          className="w-[200px]"
          disabled
          hideWhenDisabled
        />

        <Button
          text="020123456789"
          variant="outline"
          className="mt-2 w-[200px]"
          disabled
          hideWhenDisabled
        />
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-[#333333] text-center text-xs text-white mt-12 border-t border-gray-700 py-3 space-y-1">

    <p>
      © {new Date().getFullYear()} Harsha Multi Speciality Hospital. All rights reserved.
    </p>

    {/* Legal Links */}
    <p className="space-x-2">
      <Link to="/privacy-policy" onClick={scrollToTop} className="hover:underline">
        Privacy Policy
      </Link>

      <span>|</span>

      <Link to="/terms-of-use" onClick={scrollToTop} className="hover:underline">
        Terms of Use
      </Link>
    </p>

  </div>
</footer>
  );
}