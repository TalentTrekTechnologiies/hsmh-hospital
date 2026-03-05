import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";
import PageHero from "../../commoncomponents/PageHero";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";

/* IMAGES */
import servicesHero from "../../assets/Services.jpg";


import radiologyImg from "../../assets/radiology.png";
import orthoImg from "../../assets/Orthopaedic.png";
import dentalImg from "../../assets/dentalservice page.png";
import emergencyImg from "../../assets/emergency.png";
import pharmacyImg from "../../assets/pharmacy.jpeg";
import homecareImg from "../../assets/homecare.png";

/* VIDEOS (keep <5MB each) */
import serviceVideo1 from "../../assets/video2.mp4";
import serviceVideo2 from "../../assets/video3.mp4";
import serviceVideo3 from "../../assets/video6.mp4";

const serviceVideos = [
  {
    id: 1,
    name: "Dr. Narma Teja",
    qualification: "MD Radiology",
    title: "Consultant Radiologist",
    experience: "15+ Years Experience",
    patients: "10,000+ Patients Treated",
    src: serviceVideo1,
  },
  {
    id: 2,
    name: "Dr. Sri Lakshmi Bollashetty",
    qualification: "MDS",
    title: "Consultant Dentist",
    experience: "12+ Years Experience",
    patients: "8,500+ Patients Treated",
    src: serviceVideo2,
  },
  {
    id: 3,
    name: "Dr. GaddamSetti Sai Ganesh",
    qualification: "MS Orthopaedics",
    title: "Consultant Orthopaedician",
    experience: "18+ Years Experience",
    patients: "12,000+ Patients Treated",
    src: serviceVideo3,
  },
];

const ServiceCard = ({ title, description, image, hours, phone }) => (
  <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_22px_65px_rgba(0,0,0,0.14)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-gray-100 h-full">
    <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={`${title} medical service`}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>

    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-2 sm:mb-3 text-center min-h-[48px] sm:min-h-[56px] flex items-center justify-center">
        {title}
      </h3>

      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
        {description}
      </p>

      <div className="text-xs sm:text-sm text-gray-500 text-center mb-4 sm:mb-5">
        ⏰ {hours}
      </div>

      <a
        href={`tel:${phone}`}
        className="mt-auto bg-emerald-700 text-white text-center py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-800 transition block w-full"
      >
        📞 Call Now
      </a>
    </div>
  </div>
);

export default function Services() {
  const videoRefs = useRef([]);
  const containerRefs = useRef([]);
  const hoverTimeoutRef = useRef(null);
  const observersRef = useRef([]);
  
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [videosLoaded, setVideosLoaded] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Insurance Partners Data
  const insurancePartners = [
    "Vidal Health Insurance TPA",
    "Vipul Medicare Insurance TPA",
    "Ericson Insurance TPA",
    "SBI General Insurance TPA",
    "Future Family Health Plan (FHP) Insurance",
    "Universal West Assistant General Insurance TPA",
    "East West AIG General Insurance TPA",
    "ICICI Lombard General Insurance TPA",
  ];

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cleanup all videos
  const pauseAllVideos = useCallback((exceptIndex = null) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== exceptIndex) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  }, []);

  // Handle hover start with delay for professional feel (disabled on mobile)
  const handleHoverStart = useCallback((index) => {
    if (isMobile) return; // Disable hover preview on mobile
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      // Don't preview if this video is already playing with sound
      if (activeVideo === index) return;

      // Pause any other playing videos
      pauseAllVideos(index);
      
      const videoEl = videoRefs.current[index];
      if (videoEl) {
        videoEl.muted = true;
        videoEl.play()
          .then(() => {
            setHoveredVideo(index);
          })
          .catch(() => {});
      }
    }, 100);
  }, [activeVideo, pauseAllVideos, isMobile]);

  // Handle hover end
  const handleHoverEnd = useCallback((index) => {
    if (isMobile) return; // Disable hover preview on mobile
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Only reset if this video is not the active playing one
    if (activeVideo !== index) {
      const videoEl = videoRefs.current[index];
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
      setHoveredVideo(null);
    }
  }, [activeVideo, isMobile]);

  // Handle click/tap
  const handleVideoClick = useCallback((index) => {
    const videoEl = videoRefs.current[index];
    if (!videoEl) return;

    if (activeVideo === index) {
      // Toggle mute for active video
      videoEl.muted = !videoEl.muted;
      if (!videoEl.muted && videoEl.paused) {
        videoEl.play().catch(() => {});
      }
      // Force re-render to update UI
      setActiveVideo(null);
      setTimeout(() => setActiveVideo(index), 0);
    } else {
      // Pause all videos first
      pauseAllVideos();
      
      // Play new video with sound
      videoEl.muted = false;
      videoEl.volume = 1;
      videoEl.play()
        .then(() => {
          setActiveVideo(index);
          setHoveredVideo(null);
        })
        .catch((error) => {
          console.log("Playback failed:", error);
        });
    }
  }, [activeVideo, pauseAllVideos]);

  // Setup IntersectionObserver for viewport detection
  useEffect(() => {
    const observers = observersRef.current;
    
    serviceVideos.forEach((_, index) => {
      const container = containerRefs.current[index];
      if (!container) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = videoRefs.current[index];
            if (!video) return;

            // If video leaves viewport and is playing, pause it
            if (!entry.isIntersecting) {
              if (!video.paused) {
                video.pause();
                if (activeVideo === index) {
                  setActiveVideo(null);
                }
                if (hoveredVideo === index) {
                  setHoveredVideo(null);
                }
              }
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(container);
      observers[index] = observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [activeVideo, hoveredVideo]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      pauseAllVideos();
    };
  }, [pauseAllVideos]);

  // Handle video loaded
  const handleVideoLoaded = useCallback((index) => {
    setVideosLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  const services = [
    {
      title: "Radiology & Imaging",
      description:
        "Accurate and fast diagnostic imaging including X-ray, CT and ultrasound for reliable medical evaluation.",
      image: radiologyImg,
      hours: "8 AM – 8 PM",
      phone: "+919000011111",
    },
    {
      title: "Orthopaedic Care",
      description:
        "Expert treatment for bone, joint and spine conditions using advanced orthopaedic techniques.",
      image: orthoImg,
      hours: "9 AM – 7 PM",
      phone: "+919000022222",
    },
    {
      title: "Dental Care",
      description:
        "Complete dental solutions including root canal, cosmetic dentistry and preventive oral care.",
      image: dentalImg,
      hours: "10 AM – 6 PM",
      phone: "+919000033333",
    },
    {
      title: "Emergency & Trauma",
      description:
        "24/7 rapid emergency response supported by modern life-saving equipment and trained team.",
      image: emergencyImg,
      hours: "24×7",
      phone: "+919000044444",
    },
    {
      title: "Pharmacy Services",
      description:
        "Fully stocked in-house pharmacy providing genuine medicines with quick dispensing support.",
      image: pharmacyImg,
      hours: "24×7",
      phone: "+919000055555",
    },
    {
      title: "Home Healthcare",
      description:
        "Professional home nursing, post-surgery care and patient monitoring at your doorstep.",
      image: homecareImg,
      hours: "By Appointment",
      phone: "+919000066666",
    },
  ];

  // Function to determine if play button should be visible
  const shouldShowPlayButton = (index) => {
    const video = videoRefs.current[index];
    
    // If video exists and is playing (not paused) AND not muted - hide play button
    if (video && !video.paused && !video.muted) {
      return false;
    }
    
    // Show play button in all other cases
    return true;
  };

  return (
    <div className="min-h-screen bg-[#fff8f0] flex flex-col">
      <Header />

      <main className="flex-grow pt-10 md:pt-12">
        {/* HERO - Responsive */}
      
        <PageHero
          title="Our Medical Services"
          subtitle="Delivering safe, advanced and compassionate healthcare you can trust."
          image={servicesHero}
        />

        {/* WHY CHOOSE US - Responsive Grid */}
        <section className="bg-emerald-700 text-white py-6 sm:py-8">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center px-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-800">10+</h3>
              <p className="text-xs sm:text-sm text-white-600">Expert Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-800">10K+</h3>
              <p className="text-xs sm:text-sm text-white-600">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-800">13+</h3>
              <p className="text-xs sm:text-sm text-white-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-800">24×7</h3>
              <p className="text-xs sm:text-sm text-white-600">Medical Support</p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - WITH HEADING */}
        <section className="py-12 sm:py-16 px-4 sm:px-5">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
                Our Medical Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Comprehensive healthcare solutions tailored to your needs with state-of-the-art facilities
              </p>
              <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-[#faf3e0] rounded-xl sm:rounded-[20px] md:rounded-[28px] p-4 sm:p-6 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INSURANCE PARTNERS SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-5 bg-white">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
                Insurance Partners
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Cashless treatment available with all major insurance providers for your peace of mind
              </p>
              <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-[#faf3e0] rounded-xl sm:rounded-[20px] md:rounded-[28px] p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {insurancePartners.map((insurance, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center border border-emerald-100 hover:border-emerald-300 hover:-translate-y-1"
                  >
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                      {insurance}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 sm:mt-10">
                <p className="text-xs sm:text-sm text-gray-600">
                  For insurance queries, contact our front office at{" "}
                  <a href="tel:9704100136" className="text-emerald-700 font-semibold hover:underline">
                    9704100136
                  </a>
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Or visit our hospital for assistance with claim processing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOCTOR VIDEOS SECTION - WITH HEADING */}
        <section className="py-12 sm:py-16 px-4 sm:px-5 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
                Expert Doctors at Your Service
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Experienced consultants delivering trusted medical care with compassion and expertise
              </p>
              <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {serviceVideos.map((video, index) => (
                <div
                  key={video.id}
                  ref={el => containerRefs.current[index] = el}
                  className="group cursor-pointer"
                  onMouseEnter={() => handleHoverStart(index)}
                  onMouseLeave={() => handleHoverEnd(index)}
                  onClick={() => handleVideoClick(index)}
                >
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] transition-all duration-500 bg-black">
                    <div className="aspect-[3/4] sm:aspect-[9/12] relative">
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                          if (el) {
                            el.addEventListener('loadeddata', () => handleVideoLoaded(index));
                          }
                        }}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="metadata"
                        muted
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>

                      {!videosLoaded[index] && (
                        <div className="absolute inset-0 bg-emerald-900/20 flex items-center justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-12 border-3 sm:border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}

                      {/* Play button - only shows when video is NOT playing with sound */}
                      {shouldShowPlayButton(index) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 border-2 border-white/50 hover:bg-white/30 transition-all">
                            <Play className="text-white fill-white" size={isMobile ? 20 : 28} />
                          </div>
                        </div>
                      )}

                      {/* Status indicator - Responsive */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/60 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1">
                        {activeVideo === index ? (
                          videoRefs.current[index]?.muted ? (
                            <><VolumeX size={isMobile ? 10 : 12} /> <span className="hidden xs:inline">Muted</span></>
                          ) : (
                            <><Volume2 size={isMobile ? 10 : 12} /> <span className="hidden xs:inline">Playing</span></>
                          )
                        ) : hoveredVideo === index ? (
                          "Preview"
                        ) : (
                          isMobile ? "Tap" : "Tap to play"
                        )}
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 bg-white text-center">
                      <h3 className="font-semibold text-emerald-800 text-xs sm:text-sm">
                        {video.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-emerald-700 font-medium">
                        {video.qualification}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-600">{video.title}</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                        {video.experience}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        {video.patients}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}