import React from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

/* IMAGES */
import servicesHero from "../../assets/services.png";
import ambulanceImg from "../../assets/Ambulnace.jpeg";
import labImg from "../../assets/labtest.jpg";
import doctorImg from "../../assets/doctor consultation.jpg";
import pharmacyImg from "../../assets/Image3.png";
import emergencyImg from "../../assets/image4.png";
import homecareImg from "../../assets/Image1.png";

/* ===============================
   ⭐ PREMIUM SERVICE CARD
================================ */

const ServiceCard = ({ title, description, image }) => (
  <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
    
    {/* IMAGE */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
    </div>

    {/* CONTENT */}
    <div className="p-6 text-center flex flex-col flex-grow">
      <span className="mx-auto mb-3 text-xs font-semibold tracking-wide bg-[#faf3e0] text-[#005c52] px-3 py-1 rounded-full w-fit">
        HMSH Service
      </span>

      <h3 className="text-xl font-semibold text-emerald-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

/* ===============================
   ⭐ MAIN COMPONENT
================================ */

export default function Services() {
  const services = [
    {
      title: "Ambulance Service",
      description:
        "24/7 fast and reliable ambulance support for emergency patient transport with trained medical staff.",
      image: ambulanceImg,
    },
    {
      title: "Lab Tests",
      description:
        "Accurate diagnostic lab tests with quick digital reports and convenient home sample collection.",
      image: labImg,
    },
    {
      title: "Doctor Consultation",
      description:
        "Consult experienced specialists across multiple departments with personalized care.",
      image: doctorImg,
    },
    {
      title: "Pharmacy",
      description:
        "Round-the-clock pharmacy with genuine medicines and fast prescription support.",
      image: pharmacyImg,
    },
    {
      title: "Emergency Care",
      description:
        "Immediate emergency medical care with advanced life-saving facilities and rapid response team.",
      image: emergencyImg,
    },
    {
      title: "Home Care Services",
      description:
        "Professional home healthcare including nursing, post-surgery care and medical monitoring.",
      image: homecareImg,
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#fff8f0] min-h-screen">

        {/* ================= FULL WIDTH HERO (LIKE ABOUT) ================= */}
        <section className="relative w-full">

          {/* Background */}
          <div className="relative h-[260px] md:h-[320px] lg:h-[380px] w-full overflow-hidden">
            <img
              src={servicesHero}
              alt="Our Services"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

            {/* Text */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[80px]">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Our Services
              </h1>

              <p className="text-white/90 mt-3 max-w-2xl text-sm md:text-base font-medium">

                We provide comprehensive, patient-focused healthcare services
                designed to deliver quality treatment with compassion and speed.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="py-16 px-5">
          <div className="max-w-[1200px] mx-auto">

            <div className="bg-[#faf3e0] rounded-[28px] p-6 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
