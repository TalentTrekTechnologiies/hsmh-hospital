// src/pages/user/Home.jsx
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

// images
import logo2 from "../../assets/logo2.png";
import hospital1 from "../../assets/hospital1.png";
import hospital2 from "../../assets/hospital2.png";
import hospital3 from "../../assets/abouthero.png";
import hospital4 from "../../assets/aboutpage2.png";

//Blogs - Import from your blog assets
import cardiologyBlogImg from '../../assets/Cardiolody blog .jpeg';
import generalMedicineBlogImg from '../../assets/General medicine blog.jpeg';
import orthoBlogImg from '../../assets/ortho.jpeg';

// Import all department images
import orthopedicsImg from '../../assets/Orthopedics and Trauma CareHome.jpg'
import neurologyImg from '../../assets/Neurology&Neurosurgery home.png'
import generalMedicineImg from '../../assets/General MedicineHome.png'
import generalSurgeryImg from '../../assets/General SurgeryHome.png'
import urologyImg from '../../assets/Urology and NephrologyHome.png'
import dentistryImg from '../../assets/Dentistry and Oro Maxillofacial Surgery.Home.jpg'
import oncologyImg from '../../assets/surgery Oncology home.jpg'  
import emergencyImg from '../../assets/Emergency and Critical Home.png' 
import anesthesiaImg from '../../assets/Anesthesia and Pain Home.jpg'
import infertilityImg from '../../assets/Infertility and Reproductive Home.png'
import obstetricsImg from '../../assets/Obstetrics and GynecologyHome.jpg'
import pediatricsImg from '../../assets/Pediatrics and NeonatologyHome.jpg'

// Insurance Partner Logos
import sbiGeneralLogo from "../../assets/sbi-general 2.avif";
import futureFamilyLogo from "../../assets/future-family.webp";
import universalWestLogo from "../../assets/universal-west 2.jpeg";
import eastWestAIGLogo from "../../assets/east-west-aig.jpg";

import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Ambulance,
} from "lucide-react";

import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";
import Button from "../../commoncomponents/Button";
import DepartmentCard from "../../commoncomponents/DepartmentCard";

export default function Home() {
  const navigate = useNavigate();
  
  /* ================= DATA ================= */

  const departments = [
    {
      title: "Anesthesia and Pain Medicine",
      description: "Safe anesthesia services and chronic pain management solutions.",
      image: anesthesiaImg,
    },
    {
      title: "Emergency and Critical Care",
      description: "24/7 emergency services with fully equipped ICU facilities.",
      image: emergencyImg,
    },
    {
      title: "Infertility and Reproductive Medicine",
      description: "Advanced fertility treatments and reproductive health services.",
      image: infertilityImg,
    },
    {
      title: "Obstetrics and Gynecology",
      description: "Comprehensive women's healthcare including maternity services.",
      image: obstetricsImg,
    },
    {
      title: "Pediatrics and Neonatology",
      description: "Complete child and newborn healthcare services.",
      image: pediatricsImg,
    },
    {
      title: "Orthopedics and Trauma Care",
      description: "Expert care for fractures, joint replacements, and trauma management.",
      image: orthopedicsImg,
    },
    {
      title: "General Medicine",
      description: "Primary healthcare and chronic disease management services.",
      image: generalMedicineImg,
    },
    {
      title: "General Surgery",
      description: "Advanced surgical procedures with modern operation theatres.",
      image: generalSurgeryImg,
    },
    {
      title: "Urology and Nephrology",
      description: "Comprehensive kidney and urinary tract treatment including dialysis.",
      image: urologyImg,
    },
    {
      title: "Neurology and Neurosurgery",
      description: "Specialized brain, spine, and nervous system treatments.",
      image: neurologyImg,
    },
    {
      title: "Dentistry and Oro Maxillofacial Surgery",
      description: "Complete dental care and facial surgical procedures.",
      image: dentistryImg,
    },
    {
      title: "Surgical Oncology",
      description: "Advanced cancer surgeries and comprehensive oncology care.",
      image: oncologyImg,
    },
  ];

  // Updated blogs with your top 3 from the blog list
  const blog = [
   { 
  id: 2, 
  title: "Understanding Brain and Nerve Health: Warning Signs & When to Seek Expert Care", 
  excerpt: "Neurological issues can affect anyone. Learn warning signs of stroke, headache red flags, and when to consult a specialist for brain and nerve health.", 
  image: neurologyImg,
  category: "Neurology and Neurosurgery",
  author: "Dr. Vikram Seth",
  date: "Feb 18, 2026"
},
    { 
      id: 6, 
      title: "Beating the Monsoon Blues", 
      excerpt: "Essential tips for preventing monsoon-related illnesses. Learn how to protect yourself and your family from seasonal infections.", 
      image: generalMedicineBlogImg,
      category: "General Medicine",
      author: "Dr. Monica Mahajan",
      date: "Feb 20, 2026"
    },
    { 
      id: 5, 
      title: "That Nagging Knee Pain: When to Rest and When to See a Doctor", 
      excerpt: "Understanding knee pain, warning signs, and treatment options. Learn when home care is enough and when to consult a specialist.", 
      image: orthoBlogImg,
      category: "Orthopaedics",
      author: "Dr. Rakesh Verma",
      date: "Feb 22, 2026"
    },
  ];

  // Insurance Partners with Logos
  const insurancePartners = [
    {
      name: "SBI General Insurance TPA",
      logo: sbiGeneralLogo
    },
    {
      name: "Future Family Health Plan (FHP) Insurance",
      logo: futureFamilyLogo
    },
    {
      name: "Universal West Assistant General Insurance TPA",
      logo: universalWestLogo
    },
    {
      name: "East West AIG General Insurance TPA",
      logo: eastWestAIGLogo
    }
  ];

  // Function to handle blog click
  const handleBlogClick = (blogId, category) => {
    navigate('/blog', { 
      state: { 
        openBlogId: blogId,
        category: category 
      } 
    });
  };

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

  const heroImages = [hospital1, hospital2, hospital3, hospital4];
  const [current, setCurrent] = useState(0);
  const deptScrollRef = useRef(null);
  const reviewScrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollDepartments = (direction) => {
    if (deptScrollRef.current) {
      deptScrollRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  const scrollReviews = (direction) => {
    if (reviewScrollRef.current) {
      reviewScrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f0] pt-16">
      <Header />
      <main className="flex-grow">

        {/* ================= HERO ================= */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden={i !== current}
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
                  <span>✔ 13+ Years Experience</span>
                  <span>✔ 10K+ Patients Treated</span>
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
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6 sm:gap-8">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">13+</p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 px-2">Years of Clinical Excellence</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">10+</p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 px-2">Specialist Doctors</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">10k+</p>
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
              {/* Left Arrow */}
              <button
                onClick={() => scrollDepartments('left')}
                className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                aria-label="Scroll departments left"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Scroll Container */}
              <div
                ref={deptScrollRef}
                className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth px-4 sm:px-10 no-scrollbar pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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

              {/* Right Arrow */}
              <button
                onClick={() => scrollDepartments('right')}
                className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                aria-label="Scroll departments right"
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
              {blog.map((blog) => (
                <div 
                  key={blog.id}
                  onClick={() => handleBlogClick(blog.id, blog.category)}
                  className="bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden group focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleBlogClick(blog.id, blog.category);
                    }
                  }}
                >
                  <div className="overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                      <span className="text-xs text-gray-500">
                        {blog.author}
                      </span>
                      <span className="text-emerald-700 font-semibold hover:underline text-sm sm:text-base inline-flex items-center gap-1">
                        Read More 
                        <span className="text-lg">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Blogs Button */}
            <div className="mt-10 sm:mt-12">
              <Link to="/blog">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base focus:ring-2 focus:ring-emerald-300 focus:outline-none">
                  View All Articles →
                </button>
              </Link>
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
              {/* Left Arrow */}
              <button
                onClick={() => scrollReviews('left')}
                className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                aria-label="Scroll reviews left"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Scroll Container */}
              <div
                ref={reviewScrollRef}
                className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 flex-shrink-0"
                  >
                    <div className="bg-[#faf3e0] p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex justify-center mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < t.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }
                            aria-hidden="true"
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

              {/* Right Arrow */}
              <button
                onClick={() => scrollReviews('right')}
                className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                bg-white shadow-md p-2 rounded-full hover:bg-emerald-100 transition focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                aria-label="Scroll reviews right"
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
        <Link 
          to="/services#insurance-partners"
          state={{ selectedInsurance: insurance.name }}
          key={index}
        >
          <div
            className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center border border-emerald-100 hover:border-emerald-300 flex items-center justify-center min-h-[100px] sm:min-h-[120px] cursor-pointer hover:-translate-y-1"
          >
            <img 
              src={insurance.logo} 
              alt={insurance.name}
              className="max-w-full max-h-16 sm:max-h-20 md:max-h-24 w-auto h-auto object-contain"
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>

    <div className="text-center mt-8 sm:mt-10">
      <Link to="/services#insurance-partners">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base focus:ring-2 focus:ring-emerald-300 focus:outline-none">
          View All Insurance Partners →
        </button>
      </Link>
      <p className="text-xs sm:text-sm text-gray-600 mt-4">
        For insurance queries, contact our front office at{" "}
        <a 
          href="tel:9704100136" 
          className="text-emerald-700 font-semibold hover:underline focus:ring-2 focus:ring-emerald-300 focus:outline-none"
        >
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
            <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-center relative overflow-hidden">
              {/* Elegant Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-800">
                24/7 Emergency & Critical Care
              </h2>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
                Emergency & Critical Care, Obstetrics & Gynaecology, and General Medicine serving since 13 years. 
                All other departments staffed with highly qualified and 10+ experienced doctors. 
                Immediate medical assistance available round the clock with rapid response teams 
                and fully equipped emergency facilities.
              </p>

              {/* Trust Line */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-emerald-700 tracking-wide">
               10K+ Patients Treated &nbsp; | &nbsp; 13+ Years of Excellence
              </p>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                {/* Emergency Call */}
                <a
                  href="tel:9640540475"
                  className="inline-block border-2 border-red-600 text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base
                  hover:bg-red-600 hover:text-white transition duration-300 focus:ring-2 focus:ring-red-300 focus:outline-none"
                >
                  Call Emergency: 9640540475
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Hide scrollbar style */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}