// src/pages/user/Departments.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'
import PageHero from '../../commoncomponents/PageHero'
import herodept from '../../assets/herodept.jpg'

// Doctor images
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.jpg'
import doc4 from '../../assets/doc4.jpg'

// Department images
import cardiologyImg from '../../assets/cardiologyImg.jpg'
import orthopedicsImg from '../../assets/orthopedicsImg.jpg'
import neurologyImg from '../../assets/neurologyImg.jpg'
import generalMedicineImg from '../../assets/generalMedicineImg.jpg'
import dermatologyImg from '../../assets/dermatologyImg.jpg'

export default function Departments() {

  const departments = [
    { name: 'Cardiology', image: cardiologyImg },
    { name: 'Orthopedics', image: orthopedicsImg },
    { name: 'Neurology', image: neurologyImg },
    { name: 'General Medicine', image: generalMedicineImg },
    { name: 'Dermatology', image: dermatologyImg }
  ]

  const [selectedDept, setSelectedDept] = useState('Cardiology')

  const departmentDetails = {
    Cardiology: {
      title: 'Cardiology',
      subtitle: 'Advanced Heart Care',
      description:
        'Our Cardiology department offers comprehensive care for heart conditions with state-of-the-art diagnostic and treatment facilities. Our team of experienced cardiologist is dedicated to providing advanced heart care.',
      services: [
        'Advanced diagnostic tests including ECG, Echocardiography, and Stress Tests',
        'Angioplasty and stent placement',
        'Heart failure management & rehabilitation',
        '24/7 cardiac emergency care'
      ],
      contact: 'Contact Cardiology Department',
      doctors: [
        { name: 'Dr. Sri Lakshmi B', specialty: 'Dental Surgeon', experience: '12 years experience overall', image: doc1 },
        { name: 'Dr. Siddharth M', specialty: 'Plastic Surgeon', experience: '15 years experience overall', image: doc2 },
        { name: 'Dr. Ramesh Babu', specialty: 'General Surgery', experience: '10 years experience overall', image: doc3 },
        { name: 'Dr. Ghadhamsetty Sai Ganesh', specialty: 'Orthopedician & Joint Replacement Surgeon', experience: '30 years experience overall', image: doc4 }
      ]
    },

    Orthopedics: {
      title: 'Orthopedics',
      subtitle: 'Bone & Joint Care',
      description:
        'Our Orthopedics department provides comprehensive care for bone, joint, and musculoskeletal conditions with modern surgical and non-surgical treatment options.',
      services: [
        'Joint replacement surgery (Knee & Hip)',
        'Arthroscopy and sports medicine',
        'Spine surgery and disc replacement',
        'Fracture and trauma care',
        'Pediatric orthopedics',
        'Rehabilitation and physiotherapy'
      ],
      contact: 'Contact Orthopedics Department',
      doctors: [
        { name: 'Dr. Ramesh Babu', specialty: 'Joint Replacement Surgeon', experience: '15 years experience overall', image: doc1 },
        { name: 'Dr. Anita Desai', specialty: 'Pediatric Orthopedics', experience: '12 years experience overall', image: doc2 },
        { name: 'Dr. Vikram Singh', specialty: 'Sports Medicine Specialist', experience: '8 years experience overall', image: doc3 },
        { name: 'Dr. Sunita Reddy', specialty: 'Spine Surgeon', experience: '14 years experience overall', image: doc4 }
      ]
    },

    Neurology: {
      title: 'Neurology',
      subtitle: 'Brain & Nervous System',
      description:
        'Our Neurology department offers advanced diagnostic and therapeutic services for disorders of the brain, spinal cord, and nervous system.',
      services: [
        'Stroke management and thrombolysis',
        'Epilepsy and seizure disorder treatment',
        'Movement disorders (Parkinson’s disease)',
        'Headache and migraine management',
        'Multiple sclerosis care',
        'Neuro-rehabilitation and physiotherapy'
      ],
      contact: 'Contact Neurology Department',
      doctors: [
        { name: 'Dr. Priya Sharma', specialty: 'Senior Neurologist', experience: '14 years experience overall', image: doc2 },
        { name: 'Dr. Rajesh Kumar', specialty: 'Stroke Specialist', experience: '10 years experience overall', image: doc1 },
        { name: 'Dr. Meera Nair', specialty: 'Epileptologist', experience: '9 years experience overall', image: doc3 },
        { name: 'Dr. Arjun Reddy', specialty: 'Neurophysiologist', experience: '7 years experience overall', image: doc4 }
      ]
    },

    'General Medicine': {
      title: 'General Medicine',
      subtitle: 'Comprehensive Primary Care',
      description:
        'Our General Medicine department serves as the primary point of contact for comprehensive healthcare.',
      services: [
        'Preventive healthcare and annual checkups',
        'Chronic disease management',
        'Acute illness care',
        'Vaccinations and immunization',
        'Geriatric care',
        'Thyroid and metabolic disorders'
      ],
      contact: 'Contact General Medicine Department',
      doctors: [
        { name: 'Dr. Suresh Reddy', specialty: 'Senior Physician', experience: '20 years experience overall', image: doc1 },
        { name: 'Dr. Kavita Iyer', specialty: 'Diabetologist', experience: '12 years experience overall', image: doc2 },
        { name: 'Dr. Anil Joshi', specialty: 'Geriatric Specialist', experience: '15 years experience overall', image: doc3 },
        { name: 'Dr. Pooja Singh', specialty: 'Infectious Diseases', experience: '8 years experience overall', image: doc4 }
      ]
    },

    Dermatology: {
      title: 'Dermatology',
      subtitle: 'Skin, Hair & Nail Care',
      description:
        'Our Dermatology department offers comprehensive medical and surgical care for all skin, hair, and nail conditions.',
      services: [
        'Medical dermatology',
        'Cosmetic dermatology',
        'Laser treatments',
        'Hair transplantation',
        'Pediatric dermatology',
        'Skin cancer screening'
      ],
      contact: 'Contact Dermatology Department',
      doctors: [
        { name: 'Dr. Lakshmi Reddy', specialty: 'Consultant Dermatologist', experience: '12 years experience overall', image: doc2 },
        { name: 'Dr. Neha Kapoor', specialty: 'Cosmetic Dermatologist', experience: '8 years experience overall', image: doc3 },
        { name: 'Dr. Rohan Mehta', specialty: 'Pediatric Dermatologist', experience: '6 years experience overall', image: doc1 },
        { name: 'Dr. Sneha Reddy', specialty: 'Dermatosurgeon', experience: '10 years experience overall', image: doc4 }
      ]
    }
  }

  const currentDept = departmentDetails[selectedDept]

  return (
    <div className='min-h-screen bg-[#fff8f0] flex flex-col'>
      <Header />

      <main className='flex-grow pt-10 md:pt-12'>
        <PageHero
          title='Our Departments'
          subtitle='Comprehensive specialties under one roof, providing coordinated and advanced medical care.'
          image={herodept}
        />

        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='flex flex-col lg:flex-row gap-8'>

            {/* LEFT SIDEBAR */}
            <div className='w-full lg:w-1/4'>
              <h2 className='text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b-2 border-emerald-800'>
                Our Departments
              </h2>

              <ul className='space-y-4'>
                {departments.map((dept) => (
                  <li
                    key={dept.name}
                    onClick={() => setSelectedDept(dept.name)}
                    className={`cursor-pointer rounded-lg overflow-hidden transition
                      ${selectedDept === dept.name
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                      }`}
                  >
                    <div className='flex items-center'>
                      <div className='w-16 h-16 flex-shrink-0'>
                        <img src={dept.image} alt={dept.name} className='w-full h-full object-cover'/>
                      </div>
                      <div className='flex-1 px-4 font-medium'>
                        {dept.name}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className='w-full lg:w-3/4'>
              {currentDept && (
                <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>

                  <h1 className='text-3xl md:text-4xl font-bold text-emerald-800 mb-2'>
                    {currentDept.title}
                  </h1>

                  <h3 className='text-xl text-emerald-600 font-semibold mb-4'>
                    {currentDept.subtitle}
                  </h3>

                  <hr className='border-gray-200 my-4' />

                  <p className='text-gray-700 mb-6 leading-relaxed'>
                    {currentDept.description}
                  </p>

                  <ul className='list-disc pl-5 space-y-2 text-gray-700 mb-6'>
                    {currentDept.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>

                  <div className='bg-emerald-50 border-l-4 border-emerald-700 p-4 mb-8'>
                    <p className='text-emerald-800 font-medium flex items-center gap-2'>
                      📞 {currentDept.contact}
                    </p>
                  </div>

                  {/* DOCTORS */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {currentDept.doctors.map((doctor, index) => (
                      <div key={index} className='bg-white border border-gray-200 rounded-lg overflow-hidden'>
                        <div className='flex p-4'>
                          <div className='w-24 h-24 flex-shrink-0'>
                            <img src={doctor.image} alt={doctor.name} className='w-full h-full object-cover rounded-lg'/>
                          </div>

                          <div className='ml-4 flex-1'>
                            <h3 className='text-lg font-semibold text-gray-900'>{doctor.name}</h3>
                            <p className='text-emerald-600 font-medium text-sm'>{doctor.specialty}</p>
                            <p className='text-gray-600 text-sm mt-1'>{doctor.experience}</p>

                            {/* Hidden fee & availability intentionally removed */}

                            <div className='flex items-center justify-end mt-4'>
                              <Button
                                text="Book Appointment"
                                variant="primary"
                                className="text-xs px-3 py-1.5"
                                disabled
                                hideWhenDisabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Emergency Button (Hidden) */}
                  <div className="mt-6">
                    <Button
                      text="Emergency: 020 123 456 789"
                      variant="emergency"
                      disabled
                      hideWhenDisabled
                    />
                  </div>

                  <div className='text-right mt-6'>
                    <Link to="/doctors" className='text-emerald-700 font-semibold'>
                      View More →
                    </Link>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}