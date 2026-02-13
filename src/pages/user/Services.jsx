import React from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

/* IMAGES */
import ambulanceImg from "../../assets/Ambulnace.jpeg";
import serviceImg from "../../assets/Ambulanceservice.jpeg";
import oxygenImg from "../../assets/OxygenService.jpeg";

import img1 from "../../assets/Image1.png";
import img2 from "../../assets/Image2.png";
import img3 from "../../assets/Image3.png";
import img4 from "../../assets/image4.png";

export default function Services() {
  return (
    <>
      <Header />

      {/* ✅ header offset */}
      <main className="bg-[#f8f1e7] pt-[140px] pb-16">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* ===== TITLE ===== */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-gray-800">
            Our Services
          </h2>

          {/* ===== ASSISTANCE ===== */}
          <section className="flex flex-col lg:flex-row items-center gap-10 mb-20">
            
            <div className="w-full lg:max-w-[520px]">
              <img
                src={ambulanceImg}
                alt="Ambulance and Doctor"
                className="w-full rounded-2xl shadow-md hover:scale-[1.02] transition duration-300"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                24/7 Assistance Center
              </h3>

              <p className="font-semibold text-gray-600 mb-4">
                Emergencies Don't Clock Out, Neither We Do...
              </p>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                We know emergencies don't wait for regular business hours.
                That's why we operate a 24/7 Assistance Center. Our dedicated
                professional team is always ready to assist you whenever you
                need emergency support.
              </p>
            </div>
          </section>

          {/* ===== NORMAL AMBULANCE ===== */}
          <section className="bg-[#004743] text-white rounded-2xl p-6 md:p-8 mb-12 flex flex-col lg:flex-row items-center gap-8 shadow-lg">
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Normal Ambulance Services
              </h3>

              <p className="text-gray-200 max-w-xl leading-relaxed">
                Fast and reliable normal ambulance services with professional
                medical support whenever you need it.
              </p>

              <button className="mt-6 bg-white text-[#004743] hover:bg-gray-100 px-6 py-2.5 rounded-lg font-semibold transition duration-300 shadow">
                📞 Call Now +91-9015099049
              </button>
            </div>

            <div className="w-full lg:w-[420px] h-[230px]">
              <img
                src={serviceImg}
                alt="Normal Ambulance"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </section>

          {/* ===== OXYGEN ===== */}
          <section className="bg-[#004743] text-white rounded-2xl p-6 md:p-8 mb-20 flex flex-col lg:flex-row items-center gap-8 shadow-lg">
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Oxygen Ambulance Services
              </h3>

              <p className="text-gray-200 max-w-xl leading-relaxed">
                Safe transport with medical oxygen support and trained
                emergency staff for critical care situations.
              </p>

              <button className="mt-6 bg-white text-[#004743] hover:bg-gray-100 px-6 py-2.5 rounded-lg font-semibold transition duration-300 shadow">
                📞 Call Now +91-9015099049
              </button>
            </div>

            <div className="w-full lg:w-[420px] h-[230px]">
              <img
                src={oxygenImg}
                alt="Oxygen Ambulance"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </section>

          {/* ===== TYPES ===== */}
          <section className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Types of Ambulance We Provide
            </h3>

            <p className="max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed text-[15px]">
              Our ambulance network ensures fast and reliable emergency
              transportation services across multiple regions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { img: img1, title: "Ambulance" },
                { img: img2, title: "Oxygen Ambulance" },
                { img: img3, title: "ICU Ventilator Ambulance" },
                { img: img4, title: "Mortuary Van" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-5 rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[150px] h-[100px] object-contain mb-4"
                  />

                  <p className="font-semibold text-gray-800 text-sm text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
