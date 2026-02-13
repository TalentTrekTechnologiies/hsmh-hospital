// src/pages/user/Doctors.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'

// Import doctor images
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.jpg'
import doc4 from '../../assets/doc4.jpg'
import doc5 from '../../assets/doc5.jpg'
import doc6 from '../../assets/doc6.jpg'

// Import category/department images
import cardiologyImg from '../../assets/cardiologyImg.jpg'
import orthopedicsImg from '../../assets/orthopedicsImg.jpg'
import neurologyImg from '../../assets/neurologyImg.jpg'
import generalMedicineImg from '../../assets/generalMedicineImg.jpg'
import dermatologyImg from '../../assets/dermatologyImg.jpg'

export default function Doctors() {
  // Doctor categories/specializations with images
  const categories = [
    { name: 'All Doctors', image: cardiologyImg },
    { name: 'Orthopedic Surgeons', image: orthopedicsImg },
    { name: 'Pulmonologist', image: neurologyImg },
    { name: 'Cardiologists', image: cardiologyImg },
    { name: 'General Medicine', image: generalMedicineImg },
    { name: 'Dermatologist', image: dermatologyImg }
  ]

  const [selectedCategory, setSelectedCategory] = useState('All Doctors')

  // All doctors data
  const allDoctors = [
    {
      name: 'DR. Nirmala',
      specialty: 'Cardiologist',
      image: doc1,
      category: 'Cardiologists'
    },
    {
      name: 'DR. Nayrayan',
      specialty: 'General surgeon',
      image: doc2,
      category: 'All Doctors'
    },
    {
      name: 'DR. Shanmukh',
      specialty: 'Pulmonologist',
      image: doc3,
      category: 'Pulmonologist'
    },
    {
      name: 'DR. Venu',
      specialty: 'Orthopedic surgeon',
      image: doc4,
      category: 'Orthopedic Surgeons'
    },
    {
      name: 'DR. Arjun',
      specialty: 'Cardiologist',
      image: doc5,
      category: 'Cardiologists'
    },
    {
      name: 'DR. Roopa',
      specialty: 'General surgeon',
      image: doc6,
      category: 'All Doctors'
    },
    // Adding General Medicine doctors
    {
      name: 'DR. Suresh Reddy',
      specialty: 'General Physician',
      image: doc1,
      category: 'General Medicine'
    },
    {
      name: 'DR. Kavita Iyer',
      specialty: 'Diabetologist',
      image: doc2,
      category: 'General Medicine'
    }
  ]

  // Available doctors with detailed info
  const availableDoctors = [
    {
      name: 'Dr. Kalva Vijaya Nagendra',
      qualifications: 'MBBS, MD, IDCCM, FIPM, LLB.',
      status: 'Available Now',
      experience: '+15',
      availability: 'Mon to Fri : 08.00 AM to 06.00 PM',
      sundayAvailability: 'Sun : 10.00 AM to 02.00 PM',
      image: doc1
    },
    {
      name: 'Dr. D Ramesh',
      qualifications: 'MBBS, MS, M. Ch(Urology)',
      status: 'Available Now',
      experience: '+10',
      availability: 'Mon to Sat : 09.00 AM to 10.00 PM',
      sundayAvailability: 'Sun : 09.00 AM to 12.00 PM',
      image: doc2
    },
    {
      name: 'Dr. Suresh Reddy',
      qualifications: 'MBBS, MD General Medicine',
      status: 'Available Now',
      experience: '+20',
      availability: 'Mon to Sat : 09.00 AM to 05.00 PM',
      sundayAvailability: 'Sun : Closed',
      image: doc3
    }
  ]

  // Filter doctors based on selected category
  const filteredDoctors = selectedCategory === 'All Doctors' 
    ? allDoctors 
    : allDoctors.filter(doc => doc.category === selectedCategory)

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      
      <main className='pt-40 md:pt-44'>
        {/* FOR EMERGENCY Banner */}
        

        {/* Main Content - Doctors Section */}
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='flex flex-col lg:flex-row gap-8'>
            
            {/* Left Sidebar - Our Doctors Categories with Images */}
            <div className='w-full lg:w-1/4'>
              <h2 className='text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b-2 border-emerald-800'>
                Our Doctors
              </h2>
              <ul className='space-y-4'>
                {categories.map((category) => (
                  <li 
                    key={category.name}
                    className={`cursor-pointer rounded-lg transition overflow-hidden ${
                      selectedCategory === category.name 
                        ? 'bg-emerald-700 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className='flex items-center'>
                      {/* Category Image */}
                      <div className='w-16 h-16 flex-shrink-0'>
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      {/* Category Name */}
                      <div className={`flex-1 px-4 font-medium ${
                        selectedCategory === category.name ? 'text-white' : 'text-gray-800'
                      }`}>
                        {category.name}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Doctors Grid */}
            <div className='w-full lg:w-3/4'>
              <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
                <h1 className='text-3xl md:text-4xl font-bold text-emerald-800 mb-6'>
                  {selectedCategory}
                </h1>
                
                {/* Doctors Grid - 2x3 or as per filtered results */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {filteredDoctors.map((doctor, index) => (
                    <div 
                      key={index}
                      className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition'
                    >
                      <div className='flex p-4'>
                        {/* Doctor Image */}
                        <div className='w-24 h-24 flex-shrink-0'>
                          <img 
                            src={doctor.image} 
                            alt={doctor.name}
                            className='w-full h-full object-cover rounded-lg'
                          />
                        </div>
                        
                        {/* Doctor Info */}
                        <div className='ml-4 flex-1'>
                          <h3 className='text-lg font-semibold text-gray-900'>
                            {doctor.name}
                          </h3>
                          <p className='text-emerald-600 font-medium text-sm'>
                            {doctor.specialty}
                          </p>
                          
                          {/* View Profile Link */}
                          <div className='mt-3'>
                            <Link 
                              to={`/doctor/${doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                              className='text-emerald-700 hover:text-emerald-800 font-medium text-sm inline-flex items-center gap-1'
                            >
                              View Profile
                              <span className='text-lg'>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show message if no doctors in category */}
                {filteredDoctors.length === 0 && (
                  <div className='text-center py-12'>
                    <p className='text-gray-500 text-lg'>No doctors found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Available Doctors Section */}
          <div className='mt-12'>
            <h2 className='text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b-2 border-emerald-800'>
              Available Doctors
            </h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {availableDoctors.map((doctor, index) => (
                <div 
                  key={index}
                  className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition'
                >
                  <div className='flex flex-col md:flex-row gap-4'>
                    {/* Doctor Image */}
                    <div className='w-24 h-24 flex-shrink-0 mx-auto md:mx-0'>
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>
                    
                    {/* Doctor Details */}
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {doctor.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-2'>
                        {doctor.qualifications}
                      </p>
                      
                      {/* Status */}
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 mb-3'>
                        <span className='w-2 h-2 bg-green-600 rounded-full mr-2'></span>
                        {doctor.status}
                      </span>
                      
                      {/* Qualifications Detail */}
                      <div className='space-y-1 text-sm'>
                        <p className='text-gray-700'>
                          <span className='font-semibold'>Qualifications:</span> {doctor.qualifications}
                        </p>
                        <p className='text-gray-700'>
                          <span className='font-semibold'>Years of experience:</span> {doctor.experience}
                        </p>
                        <p className='text-gray-700'>
                          <span className='font-semibold'>Available:</span> {doctor.availability}
                        </p>
                        <p className='text-gray-700'>
                          <span className='font-semibold'></span> {doctor.sundayAvailability}
                        </p>
                      </div>
                      
                      {/* Book Appointment Button */}
                      <div className='mt-4'>
                        <Button 
                          text="Book Appointment" 
                          variant="primary"
                          className="w-full md:w-auto px-6 py-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Hours and Address Section - Exactly as per Figma */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
            {/* Contact & Hours */}
            <div className='bg-emerald-800 text-white rounded-lg p-8'>
              <h3 className='text-2xl font-bold mb-6'>Contact & Hours</h3>
              <div className='space-y-4'>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📞</span>
                  +91 789654123
                </p>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📞</span>
                  +91 988744455
                </p>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📧</span>
                  info@harshahospital.com
                </p>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📍</span>
                  Open Hours: Mon-Sat 8AM to 10PM
                </p>
              </div>
            </div>

            {/* Address */}
            <div className='bg-emerald-800 text-white rounded-lg p-8'>
              <h3 className='text-2xl font-bold mb-6'>Address</h3>
              <div className='space-y-4'>
                <p className='text-gray-200 leading-relaxed'>
                  Bollavaram, Jagannathapuram Road,<br />
                  Proddatur - 516361
                </p>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📞</span>
                  08065096165
                </p>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📞</span>
                  040 6723 2348
                </p>
                <p className='flex items-center gap-3 text-gray-200'>
                  <span className='text-xl'>📧</span>
                  query@Harshahospital.com
                </p>
                <div className='mt-4'>
                  <Link 
                    to="#" 
                    className='inline-flex items-center gap-2 text-emerald-300 hover:text-white transition font-medium'
                  >
                    View on google map
                    <span className='text-lg'>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}