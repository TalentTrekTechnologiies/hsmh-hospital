// src/pages/user/Doctors.jsx
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'
import PageHero from '../../commoncomponents/PageHero'

import herodoc from '../../assets/Our Doctors page.jpg'

// Doctor images
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.jpg'
import doc4 from '../../assets/doc4.jpg'
import doc5 from '../../assets/doc5.jpg'
import doc6 from '../../assets/doc6.jpg'

// Category images
import cardiologyImg from '../../assets/cardiologyImg.jpg'
import orthopedicsImg from '../../assets/orthopedicsImg.jpg'
import neurologyImg from '../../assets/neurologyImg.jpg'
import generalMedicineImg from '../../assets/generalMedicineImg.jpg'
import dermatologyImg from '../../assets/dermatologyImg.jpg'

// IMPORT YOUR REAL SPECIALIST IMAGES HERE
import specialist1 from '../../assets/Dr.Ganesh.png'
import specialist2 from '../../assets/Dr.Lakshmi.png'
import specialist3 from '../../assets/Dr.Nagendra.png'
import specialist4 from '../../assets/Dr.Revathi.png'
import specialist5 from '../../assets/Dr.Samita.png'

export default function Doctors() {

  const [selectedCategory, setSelectedCategory] = useState('All Doctors')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const location = useLocation()

  useEffect(() => {
  const params = new URLSearchParams(location.search)
  const dept = params.get('department')

  if (dept) {
    if (dept.toLowerCase() === 'cardiology') {
      setSelectedCategory('Cardiologists')
    }
    else if (dept.toLowerCase() === 'orthopedics') {
      setSelectedCategory('Orthopedic Surgeons')
    }
    else if (dept.toLowerCase() === 'neurology') {
      setSelectedCategory('Pulmonologist')
    }
    else if (dept.toLowerCase() === 'general-medicine') {
      setSelectedCategory('General Medicine')
    }
    else if (dept.toLowerCase() === 'dermatology') {
      setSelectedCategory('Dermatologist')
    }
  }
}, [location])


  // categories
  const categories = [
    { name: 'All Doctors', image: cardiologyImg },
    { name: 'Orthopedic Surgeons', image: orthopedicsImg },
    { name: 'Pulmonologist', image: neurologyImg },
    { name: 'Cardiologists', image: cardiologyImg },
    { name: 'General Medicine', image: generalMedicineImg },
    { name: 'Dermatologist', image: dermatologyImg }
  ]

  // grid doctors
  const allDoctors = [
    { name:'DR. Nirmala', specialty:'Cardiologist', image:doc1, category:'Cardiologists', key:'dr-nirmala'},
    { name:'DR. Nayrayan', specialty:'General surgeon', image:doc2, category:'All Doctors', key:'dr-nayrayan'},
    { name:'DR. Shanmukh', specialty:'Pulmonologist', image:doc3, category:'Pulmonologist', key:'dr-shanmukh'},
    { name:'DR. Venu', specialty:'Orthopedic surgeon', image:doc4, category:'Orthopedic Surgeons', key:'dr-venu'},
    { name:'DR. Arjun', specialty:'Cardiologist', image:doc5, category:'Cardiologists', key:'dr-arjun'},
    { name:'DR. Roopa', specialty:'General surgeon', image:doc6, category:'All Doctors', key:'dr-roopa'}
  ]

  // FULL DOCTOR DATA FOR MODAL
  const doctorsData = {
    'dr-nirmala': {
      fullName:'Dr. Nirmala Reddy',
      specialty:'Cardiologist',
      qualifications:'MBBS, MD, DM Cardiology',
      experience:'15+ years',
      image:doc1,
      about:'Dr. Nirmala Reddy is a highly experienced cardiologist with over 15 years of expertise in treating complex heart conditions. She specializes in interventional cardiology and has performed over 2000 successful angioplasties.',
      languages:'English, Hindi, Telugu',
      patients:'5000+',
      email:'dr.nirmala@harshahospital.com',
      phone:'+91 98765 43210'
    },
    'dr-nayrayan': {
      fullName:'Dr. Nayrayan Reddy',
      specialty:'General Surgeon',
      qualifications:'MBBS, MS, MCh',
      experience:'12+ years',
      image:doc2,
      about:'Dr. Nayrayan Reddy is a skilled general surgeon with expertise in laparoscopic and minimally invasive surgeries. He has successfully performed over 3000 surgical procedures.',
      languages:'English, Hindi, Telugu',
      patients:'3500+',
      email:'dr.nayrayan@harshahospital.com',
      phone:'+91 98765 43211'
    },
    'dr-shanmukh': {
      fullName:'Dr. Shanmukh K',
      specialty:'Pulmonologist',
      qualifications:'MBBS, MD, DNB Pulmonology',
      experience:'10+ years',
      image:doc3,
      about:'Dr. Shanmukh K is a renowned pulmonologist specializing in respiratory and sleep disorders. He has extensive experience in managing asthma, COPD, and interstitial lung diseases.',
      languages:'English, Hindi, Telugu',
      patients:'2800+',
      email:'dr.shanmukh@harshahospital.com',
      phone:'+91 98765 43212'
    },
    'dr-venu': {
      fullName:'Dr. Venu Gopal',
      specialty:'Orthopedic surgeon',
      qualifications:'MBBS, MS Ortho',
      experience:'18+ years',
      image:doc4,
      about:'Dr. Venu Gopal is a leading orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 5000 successful knee and hip replacements.',
      languages:'English, Hindi',
      patients:'5500+',
      email:'dr.venu@harshahospital.com',
      phone:'+91 98765 43213'
    },
    'dr-arjun': {
      fullName:'Dr. Arjun Reddy',
      specialty:'Cardiologist',
      qualifications:'MBBS, MD, DM',
      experience:'14+ years',
      image:doc5,
      about:'Dr. Arjun Reddy is an interventional cardiologist known for his expertise in complex coronary interventions and heart failure management.',
      languages:'English, Hindi',
      patients:'3200+',
      email:'dr.arjun@harshahospital.com',
      phone:'+91 98765 43214'
    },
    'dr-roopa': {
      fullName:'Dr. Roopa Devi',
      specialty:'General surgeon',
      qualifications:'MBBS, MS',
      experience:'9+ years',
      image:doc6,
      about:'Dr. Roopa Devi is a fellowship-trained laparoscopic surgeon specializing in minimally invasive surgeries. She is known for her compassionate patient care.',
      languages:'English, Kannada',
      patients:'2100+',
      email:'dr.roopa@harshahospital.com',
      phone:'+91 98765 43215'
    }
  }

  // UPDATED: specialists section with EXACT doctor details you provided
  const availableDoctors = [
    { 
      name:'Dr. Sri Lakshmi', 
      role:'Dental Surgeon',
      qualifications:'BDS', 
      experience:'10+ years', 
      availability:'Mon-Sat 9AM-6PM', 
      sundayAvailability:'Sun: 9AM-1PM', 
      image: specialist2, // Dr.Lakshmi.png
      education:'Government Dental College',
      patients:'3500+'
    },
    { 
      name:'Dr. Vijaya Nagendra', 
      role:'Interventional Pain Physician',
      qualifications:'MBBS, MD, IDCCM, FIPM, LLB', 
      experience:'15+ years', 
      availability:'Mon-Fri 9AM-5PM', 
      sundayAvailability:'Sun: 10AM-2PM', 
      image: specialist3, // Dr.Nagendra.png
      education:'Kakatiya Medical College',
      patients:'5000+'
    },
    { 
      name:'Dr. Revathi Reddy', 
      role:'Pediatrician',
      qualifications:'MBBS, DCH, PALS', 
      experience:'12+ years', 
      availability:'Mon-Sat 10AM-7PM', 
      sundayAvailability:'Sun: 10AM-1PM', 
      image: specialist4, // Dr.Revathi.png
      education:'CMC Vellore',
      patients:'4200+'
    },
    { 
      name:'Dr. Sai Ganesh', 
      role:'Orthopedician',
      qualifications:'MBBS, M.S, FIJR', 
      experience:'18+ years', 
      availability:'Mon-Sat 9AM-8PM', 
      sundayAvailability:'Sun: 9AM-12PM', 
      image: specialist1, // Dr.Ganesh.png
      education:'Osmania Medical College',
      patients:'6800+'
    },
    { 
      name:'Dr. Samita Padhi', 
      role:'Gynecologist & Fertility Specialist',
      qualifications:'M.S (OBG), Fellow IVF', 
      experience:'14+ years', 
      availability:'Mon-Sat 10AM-6PM', 
      sundayAvailability:'Sun: 11AM-3PM', 
      image: specialist5, // Dr.Samitha.png
      education:'Grant Medical College',
      patients:'5100+'
    }
  ]

  // ONLINE AVAILABLE DOCTORS - Only 3 doctors as requested
const onlineDoctors = [
  { 
    name:'Dr. Rajesh Khanna', 
    specialty:'Endocrinologist', 
    qualifications:'MBBS, MD, DM Endocrinology', 
    experience:'15+ years',
    rating:4.9,
    reviews:412,
    image:doc1,
    status: "Online",
    timings: "11:00 AM - 05:00 PM",
    consultationType: "Video",
    availableSlots: ["11:30 AM", "01:00 PM", "03:00 PM", "04:30 PM"]
  },
  { 
    name:'Dr. Meera Nair', 
    specialty:'Gynecologist', 
    qualifications:'MBBS, MS OB/GYN', 
    experience:'14+ years',
    rating:4.8,
    reviews:356,
    image:doc2,
    status: "Offline",
    timings: "09:00 AM - 02:00 PM",
    consultationType: "Video / Chat",
    availableSlots: []
  },
  { 
    name:'Dr. Vikram Singh', 
    specialty:'Neurologist', 
    qualifications:'MBBS, MD, DM Neurology', 
    experience:'16+ years',
    rating:4.9,
    reviews:289,
    image:doc3,
    status: "Online",
    timings: "01:00 PM - 07:00 PM",
    consultationType: "Video",
    availableSlots: ["02:00 PM", "04:00 PM", "06:30 PM"]
  }
];

  const filteredDoctors = selectedCategory === 'All Doctors'
    ? allDoctors
    : allDoctors.filter(doc=>doc.category===selectedCategory)

  return (
    <div className='min-h-screen bg-[#fff8f0] flex flex-col'>
      <Header/>

      <main className='flex-grow pt-10 md:pt-12 w-full'>

        <PageHero
          title='Our Doctors'
          subtitle='Qualified doctors across specialties committed to your health.'
          image={herodoc}
        />

        <div className='w-full px-4 sm:px-6 lg:px-8 py-12'>
          <div className='max-w-[1920px] mx-auto'>

          {/* MEET OUR SPECIALISTS - Edge to Edge Separate Section */}
          <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-20'>
            <div className='bg-white py-16 lg:py-20 shadow-lg'>
              <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
                
                {/* Section Header - Centered */}
                <div className='text-center mb-12'>
                  <h2 className='text-4xl md:text-5xl font-bold text-emerald-800 mb-4'>
                    Meet Our Specialists
                  </h2>
                  <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                    Highly qualified specialists with years of experience in their respective fields
                  </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className='flex gap-8 overflow-x-auto whitespace-nowrap scroll-smooth pb-4 no-scrollbar'>
                  {availableDoctors.map((doctor, index) => (
                    <div
                      key={index}
                      className='inline-block min-w-[320px] bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'
                    >
                      {/* Doctor Image */}
                      <div className='h-80 overflow-hidden'>
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className='w-full h-full object-cover hover:scale-110 transition duration-500'
                        />
                      </div>

                      {/* Doctor Info */}
                      <div className='p-6'>
                        <h3 className='text-xl font-bold text-emerald-800 mb-1'>
                          {doctor.name}
                        </h3>
                        <p className='text-emerald-600 font-medium text-sm mb-2'>
                          {doctor.role}
                        </p>
                        <p className='text-gray-600 text-sm mb-1'>
                          {doctor.qualifications}
                        </p>
                        <p className='text-gray-600 text-sm mb-1'>
                          {doctor.education}
                        </p>
                        <p className='text-gray-700 font-medium text-sm mt-2'>
                          Experience: {doctor.experience}
                        </p>
                        <p className='text-gray-700 font-medium text-sm'>
                          Patients: {doctor.patients}
                        </p>
                        <div className='mt-3 pt-3 border-t border-gray-200'>
                          <p className='text-gray-500 text-sm'>
                            {doctor.availability}
                          </p>
                          <p className='text-gray-500 text-sm'>
                            {doctor.sundayAvailability}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Online Doctors Grid - Now showing only 3 doctors */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  {onlineDoctors.map((doctor, index) => {

    const statusStyles =
      doctor.status === "Online"
        ? "bg-emerald-500 text-white"
        : doctor.status === "Busy"
        ? "bg-yellow-500 text-white"
        : "bg-gray-400 text-white"

    return (
      <div
        key={index}
        className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-emerald-100'
      >
        {/* Image + Dynamic Status */}
        <div className='relative'>
          <div className='h-48 overflow-hidden'>
            <img
              src={doctor.image}
              alt={doctor.name}
              className='w-full h-full object-cover'
            />
          </div>

          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles}`}>
            {doctor.status}
          </div>
        </div>

        {/* Doctor Details */}
        <div className='p-5'>
          <div className='flex justify-between items-start mb-2'>
            <h3 className='text-lg font-bold text-emerald-800'>
              {doctor.name}
            </h3>

            <div className='flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded'>
              <span className='text-yellow-500'>★</span>
              <span className='text-sm font-semibold text-gray-700'>
                {doctor.rating}
              </span>
              <span className='text-xs text-gray-500'>
                ({doctor.reviews})
              </span>
            </div>
          </div>

          <p className='text-emerald-600 font-medium text-sm mb-1'>
            {doctor.specialty}
          </p>

          <p className='text-gray-500 text-xs mb-3'>
            {doctor.qualifications} • {doctor.experience}
          </p>

          {/* Timings */}
          <div className='text-sm text-gray-600 space-y-1 mb-3'>
            <p><span className='font-semibold'>Timings:</span> {doctor.timings}</p>
            <p><span className='font-semibold'>Consultation:</span> {doctor.consultationType}</p>
          </div>

          {/* Available Slots */}
          <div className='mb-4'>
            <p className='text-sm font-semibold text-gray-700 mb-2'>
              Available Slots:
            </p>

            {doctor.availableSlots && doctor.availableSlots.length > 0 ? (
              <div className='flex flex-wrap gap-2'>
                {doctor.availableSlots.map((slot, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full'
                  >
                    {slot}
                  </span>
                ))}
              </div>
            ) : (
              <p className='text-xs text-gray-400'>No slots available</p>
            )}
          </div>

          {/* Book Button */}
          <button
            disabled={doctor.status !== "Online"}
            className={`w-full py-2 rounded-lg font-semibold transition
              ${
                doctor.status === "Online"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : doctor.status === "Busy"
                  ? "bg-yellow-400 text-white cursor-not-allowed"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            {doctor.status === "Online"
              ? "Book Now"
              : doctor.status === "Busy"
              ? "Currently Busy"
              : "Offline"}
          </button>

        </div>
      </div>
    )
  })}
</div><br /><br />
          {/* ALL DOCTORS - Edge to Edge Section */}
          <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
            <div className='bg-white py-16 lg:py-20 shadow-lg'>
              <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4'>
                  
                  <h1 className='text-3xl md:text-4xl font-bold text-emerald-800'>
                    All Doctors
                  </h1>

                  {/* SELECT DEPARTMENT DROPDOWN */}
                  <select
                    value={selectedCategory}
                    onChange={(e)=>setSelectedCategory(e.target.value)}
                    className='border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 min-w-[200px]'
                  >
                    {categories.map((cat)=>(
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {filteredDoctors.map((doc,i)=>(
                    <div key={i}
                      className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition'>
                      <div className='flex p-4'>
                        <div className='w-24 h-24 flex-shrink-0'>
                          <img src={doc.image} className='w-full h-full object-cover rounded-lg'/>
                        </div>

                        <div className='ml-4 flex-1'>
                          <h3 className='text-lg font-semibold text-gray-900'>{doc.name}</h3>
                          <p className='text-emerald-600 font-medium text-sm'>{doc.specialty}</p>

                          <button
                            onClick={()=>setSelectedDoctor(doctorsData[doc.key])}
                            className='mt-3 text-emerald-700 font-medium text-sm'>
                            View Profile →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </main>

      {/* MODAL */}
      {selectedDoctor && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center 
          bg-black/40 backdrop-blur-sm 
          transition-opacity duration-300 
          ${selectedDoctor ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={()=>setSelectedDoctor(null)}>

          <div className='bg-white rounded-2xl shadow-2xl w-[92%] max-w-3xl p-10 relative'
            onClick={(e)=>e.stopPropagation()}>

            <button onClick={()=>setSelectedDoctor(null)}
              className='absolute top-4 right-5 text-2xl font-bold text-gray-500'>×</button>

            <div className='flex gap-8'>
              <img src={selectedDoctor.image}
                className='w-40 h-40 rounded-xl object-cover shadow-md'/>

              <div>
                <h2 className='text-3xl font-bold text-emerald-800'>{selectedDoctor.fullName}</h2>
                <p className='text-emerald-600 font-semibold'>{selectedDoctor.specialty}</p>
                <p className='text-gray-500'>{selectedDoctor.qualifications}</p>
                <p className='text-gray-500'>{selectedDoctor.experience} experience</p>
              </div>
            </div>

            <p className='mt-6 text-gray-600 leading-relaxed'>{selectedDoctor.about}</p>

            <div className='grid grid-cols-2 gap-6 mt-6 text-sm'>
              <p className='text-gray-600'><span className='font-bold text-emerald-700'>Languages:</span> {selectedDoctor.languages}</p>
              <p className='text-gray-600'><span className='font-bold text-emerald-700'>Patients:</span> {selectedDoctor.patients}</p>
              <p className='text-gray-600'><span className='font-bold text-emerald-700'>Email:</span> {selectedDoctor.email}</p>
              <p className='text-gray-600'><span className='font-bold text-emerald-700'>Phone:</span> {selectedDoctor.phone}</p>
            </div>

            <div className='mt-8'>
              <Button text="Book Appointment" variant="primary" disabled hideWhenDisabled/>
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  )
}