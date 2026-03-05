// src/pages/user/About.jsx
import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, X, Volume2, VolumeX, Camera } from 'lucide-react'

import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import PageHero from '../../commoncomponents/PageHero'
import DoctorCard from '../../commoncomponents/DoctorCard'

import aboutImage from '../../assets/About US.png'


import doc1 from '../../assets/Dr.Lakshmi.png'
import doc2 from '../../assets/Dr.Nagendra.png'
import doc4 from '../../assets/Dr.Ganesh.png'
import doc3 from '../../assets/Dr.Revathi.png'
import doc5 from '../../assets/Dr.Samita.png'
import award from '../../assets/award1.png'
import video1 from '../../assets/video1.mp4'
import doctorsGroup from '../../assets/MedicalTeam.avif'

const missionVisionImage =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=60"

const infrastructureImage =
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=60"

const awardsImages = [award, award, award, award, award]

// EXPANDED GALLERY IMAGES - 12 images for better scrolling
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=60",
    title: "Modern Operation Theatre",
    category: "Facilities"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=60",
    title: "Patient Ward",
    category: "Patient Care"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=60",
    title: "Emergency Department",
    category: "Emergency"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=60",
    title: "ICU Unit",
    category: "Critical Care"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=60",
    title: "Diagnostic Center",
    category: "Diagnostics"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=60",
    title: "Pharmacy",
    category: "Services"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=60",
    title: "Waiting Area",
    category: "Comfort"
  },
  {
    id: 8,
    url: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/08/B.Sc_.jpg",
    title: "Medical Lab",
    category: "Diagnostics"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1581056771392-8a90ddb76831?auto=format&fit=crop&w=800&q=60",
    title: "Consultation Room",
    category: "Patient Care"
  },
  {
    id: 10,
    url: "https://wellknox.com/wp-content/uploads/2022/12/Neuro-rehabilitation-services.webp",
    title: "Rehabilitation Center",
    category: "Recovery"
  },
  {
    id: 11,
    url: "https://www.cdc.gov/project-firstline/training/Nurses-Station/images/nurses-station-final-high-res-rev4-508-revision-optimized.jpg",
    title: "Nursing Station",
    category: "Staff"
  },
  {
    id: 12,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId1pyG9dXG0DDQGYvT1Zt_Q17Ujoh2NxHlg&s",
    title: "Hospital Corridor",
    category: "Infrastructure"
  }
]

// PREMIUM VIDEOS WITH METADATA - Using static data
const hospitalVideos = [
  { 
    id: 1, 
    title: "Hospital Overview", 
    description: "Take a virtual tour of our state-of-the-art facility",
    src: video1,
    duration: "2:30",
    category: "Facility Tour",
    thumbnail: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 2, 
    title: "Doctor Health Talk", 
    description: "Expert advice on maintaining optimal health",
    src: video1,
    duration: "2:30",
    category: "Health Tips",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 3, 
    title: "Patient Care & Treatment", 
    description: "Experience our compassionate approach to healthcare",
    src: video1,
    duration: "2:30",
    category: "Patient Stories",
    thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=60"
  }
]

export default function About() {
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const [muted, setMuted] = useState(true)
  const videoRefs = useRef([])
  const [activeVideo, setActiveVideo] = useState(null)
  const leadershipSliderRef = useRef(null)
  const gallerySliderRef = useRef(null)

  const leadership = [
    { name: 'Dr. Sri Lakshmi', role: 'Dental Surgeon', qualifications: 'BDS', image: doc1 },
    { name: 'Dr. Vijaya Nagendra', role: 'Interventional Pain Physician', qualifications: 'MBBS, MD, IDCCM, FIPM, LLB', image: doc2 },
    { name: 'Dr. Revathi Reddy', role: 'Pediatrician', qualifications: 'MBBS, DCH, PALS', image: doc3 },
    { name: 'Dr. Sai Ganesh', role: 'Orthopedician', qualifications: 'MBBS, M.S, FIJR', image: doc4 },
    { name: 'Dr. Samita Padhi', role: 'Gynecologist & Fertility Specialist', qualifications: 'M.S (OBG), Fellow IVF', image: doc5 },
  ]

  const infrastructure = {
    description: [
      "Equipped with modern facilities, Harsha Hospital offers over 100 beds including ICU, emergency, and specialty wards.",
      "Advanced diagnostic labs, imaging centers (MRI, CT, ultrasound), and state-of-the-art operation theatres support precise treatment.",
      "Support services include 24/7 pharmacy, blood bank, ambulance fleet, and rehabilitation units.",
      "With NABH/ISO accreditation, strict infection control, and digital health systems, we ensure safety and efficiency at every step."
    ],
    image: infrastructureImage
  }

  // Handle video hover
  const handleVideoHover = (index, isHovering) => {
    if (isHovering) {
      setHoveredVideo(index)
      // Use promise to handle autoplay restrictions
      const playPromise = videoRefs.current[index]?.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented, handle gracefully
          console.log('Autoplay prevented:', error)
        })
      }
    } else {
      setHoveredVideo(null)
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause()
        videoRefs.current[index].currentTime = 0
      }
    }
  }

  const scrollLeadership = (dir) => {
    if (leadershipSliderRef.current) {
      leadershipSliderRef.current.scrollBy({
        left: dir === 'left' ? -320 : 320,
        behavior: 'smooth'
      })
    }
  }

  const scrollGallery = (dir) => {
    if (gallerySliderRef.current) {
      gallerySliderRef.current.scrollBy({
        left: dir === 'left' ? -400 : 400,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#fff8f0] flex flex-col">
      <Header />
      <main className="flex-grow pt-10 md:pt-12">

        {/* Hero Section */}
        
        <PageHero
          title="About Us"
          subtitle="We combine experienced doctors, advanced medical technology, and compassionate care to deliver trusted and high-quality treatment for every patient."
          image={aboutImage}
        />

        {/* TRUST STATS */}
        <section className="bg-emerald-700 text-white py-8">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-sm text-white/80">Expert Doctors</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="text-sm text-white/80">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">13+</h3>
              <p className="text-sm text-white/80">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">24×7</h3>
              <p className="text-sm text-white/80">Medical Support</p>
            </div>
          </div>
        </section>

        {/* Hospital Overview */}
        <section className="bg-[#f5f5dc] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              
              {/* Left Text  */}
              <div>
                <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                  Our Journey
                </h2>

                <p className="text-m text-gray-600 leading-relaxed mb-6">
                  Harsha Multi Speciality Hospital was founded with a vision to bring
                  advanced healthcare closer to the community of Proddatur. What began
                  as a modest facility has grown into a trusted institution, serving
                  thousands of patients with compassion and expertise.
                </p>

                <p className="text-m text-gray-600 leading-relaxed mb-6">
                  From the very beginning, our mission has been to combine medical
                  excellence with patient-centric values. Over the years, we have
                  expanded our specialties, strengthened our team of doctors and
                  nurses, and invested in modern technology to ensure that every
                  patient receives the highest standard of care.
                </p>

                <p className="text-m text-gray-600 leading-relaxed">
                  Today, Harsha Hospital stands as one of the leading multi-speciality
                  centers in the region. Our reputation is built on consistent
                  outcomes, ethical practices, and a dedication to continuous
                  improvement.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src={doctorsGroup}
                  alt="Hospital Doctors Group"
                  className="w-full h-auto rounded shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              

            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
              <img
                src={missionVisionImage}
                alt="Mission and Vision"
                className="h-80 w-full max-w-md rounded-lg shadow-md"
                loading="lazy"
              />
            </div>

            <div className="text-left">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Mission & Vision</h2>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver comprehensive, compassionate, and patient-centric care under one roof,
                  combining medical excellence with personalized attention.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as a leading healthcare institution in the region,
                  setting benchmarks in quality, innovation, and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-[#fdf6ec] py-16 relative">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-10">
            Our Leadership Team
          </h2>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => scrollLeadership('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-emerald-50 transition-colors"
              aria-label="Previous leader"
            >
              <ChevronLeft size={20} className="text-emerald-700" />
            </button>

            <div
              ref={leadershipSliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth px-8 py-4 no-scrollbar snap-x"
            >
              {leadership.map((leader, i) => (
                <div key={i} className="snap-start flex-shrink-0">
                  <DoctorCard
                    name={leader.name}
                    specialty={leader.role}
                    qualifications={leader.qualifications}
                    image={leader.image}
                    showButton={false}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollLeadership('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-emerald-50 transition-colors"
              aria-label="Next leader"
            >
              <ChevronRight size={20} className="text-emerald-700" />
            </button>
          </div>
        </section>

        {/* VIDEO GALLERY */}
        <section className="bg-gradient-to-b from-white to-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                Video Gallery
              </span>
              <h2 className="text-3xl font-bold text-emerald-800 mb-3">
                Experience Healthcare Through Our Lens
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take a visual journey through our facilities, meet our experts, and see the difference
                compassionate care makes in real lives.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {hospitalVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => handleVideoHover(index, true)}
                  onMouseLeave={() => handleVideoHover(index, false)}
                  onClick={() => setActiveVideo(video)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveVideo(video)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play video: ${video.title}`}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    
                    {/* Video Container - 16:9 aspect ratio */}
                    <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                      {/* Poster image as fallback */}
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ display: hoveredVideo === index ? 'none' : 'block' }}
                      />
                      
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className={`absolute inset-0 w-full h-full ${hoveredVideo === index ? 'block' : 'hidden'}`}
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        muted={muted}
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          {video.category}
                        </span>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg">
                          {video.duration}
                        </span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-emerald-600 rounded-full p-4 transform hover:scale-110 transition-transform shadow-lg">
                          <Play className="text-white fill-white" size={28} />
                        </div>
                      </div>

                      {/* Volume Control */}
                      {hoveredVideo === index && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setMuted(!muted)
                            if (videoRefs.current[index]) {
                              videoRefs.current[index].muted = !muted
                            }
                          }}
                          className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                          aria-label={muted ? "Unmute video" : "Mute video"}
                        >
                          {muted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
                        </button>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="p-4 bg-white text-left flex-grow">
                      <h3 className="font-semibold text-emerald-800 text-base mb-1 line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO MODAL */}
        {activeVideo && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveVideo(null)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setActiveVideo(null)
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <X size={32} />
              </button>

              <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              <div className="mt-4 text-left">
                <h3 className="text-white text-xl font-bold mb-1">{activeVideo.title}</h3>
                <p className="text-gray-300">{activeVideo.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-emerald-600 text-white text-xs rounded-full">
                  {activeVideo.category} • {activeVideo.duration}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Infrastructure */}
        <section className="bg-[#005c52] py-16 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Facilities</h2>
            <p className="text-gray-300 text-center mb-8">
              Modern infrastructure designed to deliver trusted care and comfort.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-4">
                {infrastructure.description.map((line, i) => (
                  <p key={i} className="text-gray-200">{line}</p>
                ))}
              </div>

              <div className="flex justify-center">
                <img
                  src={infrastructure.image}
                  alt="Hospital Infrastructure"
                  className="rounded-lg shadow-lg w-full md:w-3/4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="bg-[#faf3e0] py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-emerald-800 mb-10">
              Accreditations and Awards
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {awardsImages.map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt={`Award ${i + 1}`} 
                  className="rounded-lg shadow-md w-28 h-28 object-contain hover:scale-105 transition-transform"
                  loading="lazy"
                />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Harsha Hospital is proud to be NABH accredited and ISO certified, 
              recognized for excellence in patient safety, quality care, and innovation in healthcare delivery.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Gallery Header with Camera Icon */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <Camera className="text-emerald-600" size={28} />
                <h2 className="text-3xl font-bold text-emerald-800">
                  Our Gallery
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our state-of-the-art facilities and compassionate care environment
              </p>
            </div>

            {/* Scrollable Gallery Container */}
            <div className="relative group">
              {/* Left Scroll Button */}
              <button
                onClick={() => scrollGallery('left')}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-emerald-50 border border-gray-200"
                aria-label="Previous images"
              >
                <ChevronLeft size={24} className="text-emerald-700" />
              </button>

              {/* Gallery Slider */}
              <div
                ref={gallerySliderRef}
                className="flex gap-6 overflow-x-auto scroll-smooth px-2 py-4 no-scrollbar snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="snap-start flex-shrink-0 w-80 group/image cursor-pointer"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-64 w-80">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                            {image.category}
                          </span>
                        </div>
                        
                        {/* Image Info - Slides up on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover/image:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-semibold text-lg">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                onClick={() => scrollGallery('right')}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-emerald-50 border border-gray-200"
                aria-label="Next images"
              >
                <ChevronRight size={24} className="text-emerald-700" />
              </button>
            </div>

            {/* Scroll Indicator Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (gallerySliderRef.current) {
                      gallerySliderRef.current.scrollTo({
                        left: index * 336,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-emerald-500 transition-colors"
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-4 text-sm text-gray-500">
              <span className="font-semibold text-emerald-600">{galleryImages.length}</span> images in gallery
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* Style tag to hide scrollbar but keep functionality */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}