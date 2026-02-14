// src/pages/user/Doctors.jsx
import React, { useState } from 'react'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'
import PageHero from '../../commoncomponents/PageHero'

import herodoc from '../../assets/herodoc.jpg'

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

export default function Doctors() {

  const [selectedCategory, setSelectedCategory] = useState('All Doctors')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

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

  // specialists section
  const availableDoctors = [
    { name:'Dr. Kalva Vijaya Nagendra', qualifications:'MBBS, MD', experience:'+15', availability:'Mon-Fri 8AM-6PM', sundayAvailability:'Sun: 10AM-2PM', image:doc1 },
    { name:'Dr. D Ramesh', qualifications:'MBBS, MS', experience:'+10', availability:'Mon-Sat 9AM-10PM', sundayAvailability:'Sun: 9AM-12PM', image:doc2 },
    { name:'Dr. Suresh Reddy', qualifications:'MBBS, MD', experience:'+20', availability:'Mon-Sat 9AM-5PM', sundayAvailability:'Sun: Closed', image:doc3 }
  ]

  const filteredDoctors = selectedCategory === 'All Doctors'
    ? allDoctors
    : allDoctors.filter(doc=>doc.category===selectedCategory)

  return (
    <div className='min-h-screen bg-[#fff8f0] flex flex-col'>
      <Header/>

      <main className='flex-grow pt-10 md:pt-12'>

        <PageHero
          title='Our Doctors'
          subtitle='Qualified doctors across specialties committed to your health.'
          image={herodoc}
        />

        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='flex flex-col lg:flex-row gap-8'>

            {/* LEFT */}
            <div className='w-full lg:w-1/4'>
              <h2 className='text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b-2 border-emerald-800'>
                Our Doctors
              </h2>

              <ul className='space-y-4'>
                {categories.map(cat=>(
                  <li key={cat.name}
                    onClick={()=>setSelectedCategory(cat.name)}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      selectedCategory===cat.name
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }`}>
                    <div className='flex items-center'>
                      <img src={cat.image} className='w-16 h-16 object-cover'/>
                      <div className='px-4 font-medium'>{cat.name}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className='w-full lg:w-3/4'>
              <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
                <h1 className='text-3xl font-bold text-emerald-800 mb-6'>{selectedCategory}</h1>

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

          {/* OUR SPECIALISTS */}
          <div className='mt-12'>
            <h2 className='text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b-2 border-emerald-800'>
              Our Specialists
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {availableDoctors.map((doctor,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition'>
                  <div className='flex gap-4'>
                    <img src={doctor.image} className='w-24 h-24 rounded-lg object-cover'/>

                    <div className='flex-1'>
                      <h3 className='text-xl font-bold'>{doctor.name}</h3>
                      <p className='text-gray-600 text-sm'>{doctor.qualifications}</p>

                      <p className='text-gray-700 text-sm'><b>Experience:</b> {doctor.experience}</p>
                      <p className='text-gray-700 text-sm'>{doctor.availability}</p>
                      <p className='text-gray-700 text-sm'>{doctor.sundayAvailability}</p>

                      {/* disabled button */}
                      <div className='mt-4'>
                        <Button text="Book Appointment" variant="primary" disabled hideWhenDisabled/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* MODAL */}
      {selectedDoctor && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'
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