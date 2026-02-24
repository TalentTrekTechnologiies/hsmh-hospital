// src/pages/user/Home.jsx
import { Link } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Ambulance
} from "lucide-react";

import logo2 from "../../assets/logo2.png";
import hospital1 from "../../assets/hospital1.png";
import hospital2 from "../../assets/hospital2.png";
import hospital3 from "../../assets/abouthero.png";
import hospital4 from "../../assets/aboutpage2.png";

import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Stethoscope,
  Microscope,
  Ear,
  Droplet,
  Wind,
} from "lucide-react";

import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";
import Button from "../../commoncomponents/Button";
import DepartmentCard from "../../commoncomponents/DepartmentCard";

export default function Home() {

    /* ================= DATA ================= */

  const departments = [
  {
    title: "Cardiology",
    description: "Advanced heart & vascular care with modern cath lab facilities.",
    icon: HeartPulse,
    image: hospital1,
  },
  {
    title: "Neurology",
    description: "Comprehensive brain & spine treatment with expert neurologists.",
    icon: Brain,
    image: hospital2,
  },
  {
    title: "Orthopedics",
    description: "Joint replacement, trauma care & sports injury specialists.",
    icon: Bone,
    image: hospital3,
  },
  {
    title: "Pediatrics",
    description: "Complete child healthcare & vaccination services.",
    icon: Baby,
    image: hospital4,
  },
  {
    title: "ENT",
    description: "Ear, nose & throat specialists with modern diagnostics.",
    icon: Ear,
    image: hospital2,
  },
  {
    title: "General Medicine",
    description: "Primary healthcare & chronic disease management.",
    icon: Stethoscope,
    image: hospital3,
  },
  {
    title: "Nephrology",
    description: "Kidney care, dialysis & renal treatment solutions.",
    icon: Droplet,
    image: hospital1,
  },
  {
    title: "Gastroenterology",
    description: "Digestive system care with advanced endoscopy.",
    icon: Activity,
    image: hospital3,
  },
  {
    title: "Dermatology",
    description: "Skin, hair & cosmetic dermatology treatments.",
    icon: HeartPulse,
    image: hospital4,
  },
];ss
  const blogs = [
    { id: 1, title: "Healthy Heart Tips", excerpt: "Simple lifestyle changes for a stronger heart.", image: hospital1 },
    { id: 2, title: "Advances in Neurology", excerpt: "Latest breakthroughs in brain care.", image: hospital2 },
    { id: 3, title: "Orthopedic Care Essentials", excerpt: "Maintain strong bones and joints.", image: hospital3 },
  ];

/* ================= Testimonials ================= */

  const testimonials = [
  {
    name: "Sunita R.",
    role: "Cardiac Care Patient",
    rating: 4,
    date: "Dec 2025",
    review:
      "Doctors explained my heart condition clearly and guided us patiently. Waiting time was slightly longer, but treatment quality was very good."
  },
  {
    name: "Rohit K.",
    role: "Orthopedic Surgery Patient",
    rating: 5,
    date: "Jan 2026",
    review:
      "Had knee surgery here. The doctors and physiotherapy team supported me throughout recovery. Facilities were clean and well maintained."
  },
  {
    name: "Anjali S.",
    role: "Neurology Consultation",
    rating: 4,
    date: "Nov 2025",
    review:
      "Consulted for migraine treatment. Specialist listened carefully and adjusted medication properly. Improvement seen within few weeks."
  },
  {
    name: "Imran T.",
    role: "Emergency Care Patient",
    rating: 4,
    date: "Oct 2025",
    review:
      "Emergency team responded quickly during a late-night situation. Staff handled everything professionally."
  },
  {
    name: "Lakshmi P.",
    role: "Pediatrics Visit",
    rating: 5,
    date: "Jan 2026",
    review:
      "Visited for my child's vaccination. Doctor was friendly and explained everything clearly. Good experience overall."
  }
];

  const insurancePartners = [
    "Vidal Health Insurance TPA",
    "Vipul Medicare Insurance TPA",
    "Ericson Insurance TPA",
    "SBI General Insurance TPA",
  ];

  const heroImages = [hospital1, hospital2, hospital3, hospital4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f0] pt-16">
      <Header />
      <main className="flex-grow">
        

        {/* ================= HERO ================= */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">

          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  Trusted Medical Excellence <br />
                  <span className="text-emerald-400">For Every Generation</span>
                </h1>

                <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-200 px-4">
                  Compassionate Care. Advanced Technology. Trusted by Families Across Proddatur.
                </p>

                {/* Glass Trust Panel */}
                <div className="mt-6 sm:mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 sm:px-8 py-4 sm:py-6 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base">
                  <span>✔ NABH Accredited</span>
                  <span>✔ 25+ Years Experience</span>
                  <span>✔ 50,000+ Patients Treated</span>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link to="/departments">
                    <Button text="View Departments" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </section>

        {/* ================= STATS ================= */}
        <section className="bg-emerald-700 text-white py-10 sm:py-14">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6 sm:gap-8 divide-x divide-emerald-500">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">25+</p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 px-2">Years of Clinical Excellence</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">150+</p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 px-2">Specialist Doctors</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">50K+</p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 px-2">Successful Treatments</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 px-2">Emergency Services</p>
            </div>
          </div>
        </section>

        {/* ================= FEATURED DEPARTMENTS ================= */}
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-2 sm:mb-4">
              Specialized Medical Departments
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">
              Dedicated teams delivering advanced and compassionate healthcare.
            </p>

            <div className="relative">

              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={() =>
                  document.getElementById("deptScroll").scrollBy({
                    left: -350,
                    behavior: "smooth",
                  })
                }
                className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Scroll Container */}
              <div
                id="deptScroll"
                className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth px-4 sm:px-10 no-scrollbar pb-4"
              >
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    className="min-w-[200px] sm:min-w-[240px] md:min-w-[260px] flex-shrink-0 transition hover:-translate-y-2 hover:shadow-xl duration-300"
                  >
                    <DepartmentCard {...dept} />
                  </div>
                ))}
              </div>

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={() =>
                  document.getElementById("deptScroll").scrollBy({
                    left: 350,
                    behavior: "smooth",
                  })
                }
                className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition"
              >
                <ChevronRight size={24} />
              </button>

            </div>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="bg-[#faf3e0] py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-8 sm:mb-12">
              Health Insights & Updates
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 sm:h-52 object-cover hover:scale-105 transition duration-500"/>
                  <div className="p-4 sm:p-6 text-left">
                    <h3 className="text-base sm:text-lg font-semibold">{blog.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">{blog.excerpt}</p>
                    <button className="mt-3 sm:mt-4 text-emerald-700 font-semibold hover:underline text-sm sm:text-base">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative">

            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-2 sm:mb-4">
              Patient Experiences
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">
              Genuine feedback from our patients
            </p>

            <div className="relative">

              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={() =>
                  document.getElementById("reviewScroll").scrollBy({
                    left: -300,
                    behavior: "smooth",
                  })
                }
                className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Scroll Container */}
              <div
                id="reviewScroll"
                className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
              >
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 flex-shrink-0"
                  >
                    <div className="bg-[#faf3e0] p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col h-full">

                      {/* Rating */}
                      <div className="flex justify-center mb-2 sm:mb-3">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={14}
                            className={
                              index < t.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow text-left">
                        "{t.review}"
                      </p>

                      {/* Name + Role */}
                      <div className="text-center mt-2 sm:mt-4">
                        <p className="font-semibold text-emerald-700 text-xs sm:text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {t.role}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={() =>
                  document.getElementById("reviewScroll").scrollBy({
                    left: 300,
                    behavior: "smooth",
                  })
                }
                className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition"
              >
                <ChevronRight size={22} />
              </button>

            </div>
          </div>
        </section>

        {/* ================= INSURANCE PARTNERS ================= */}
        <section className="bg-[#faf3e0] py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 text-center mb-2 sm:mb-4">
              Insurance Partners
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12">
              Cashless treatment available with all major insurance providers
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {insurancePartners.map((insurance, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center border border-emerald-100 hover:border-emerald-300"
                >
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                    {insurance}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10">
             
<Link to="/services#insurance-partners">
  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base">
    View All Insurance Partners →
  </button>
</Link>
              <p className="text-xs sm:text-sm text-gray-600 mt-4">
                For insurance queries, contact our front office at{" "}
                <a href="tel:9704100136" className="text-emerald-700 font-semibold hover:underline">
                  9704100136
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= ELITE EMERGENCY SECTION ================= */}
        <section className="relative bg-emerald-700 py-12 sm:py-16 md:py-24 overflow-hidden">

          {/* Subtle Background Texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full 
              bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] 
              bg-[length:40px_40px]">
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-center relative overflow-hidden">

              {/* Elegant Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-800">
                24/7 Emergency & Critical Care
              </h2>

              {/* Description - Updated with correct info */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
                Emergency & Critical Care, Obstetrics & Gynaecology, and General Medicine serving since 15 years. 
                All other departments staffed with highly qualified and experienced doctors. 
                Immediate medical assistance available round the clock with rapid response teams 
                and fully equipped emergency facilities.
              </p>

              {/* Trust Line */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-emerald-700 tracking-wide">
                ISO Certified &nbsp; | &nbsp; NABH Accredited &nbsp; | &nbsp; 15+ Years of Excellence
              </p>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

                {/* Emergency Call */}
                <a
                  href="tel:9640540475"
                  className="inline-block border-2 border-red-600 text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base
                  hover:bg-red-600 hover:text-white transition duration-300"
                >
                  Call Emergency: 9640540475
                </a>

                {/* Front Office */}
              

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}