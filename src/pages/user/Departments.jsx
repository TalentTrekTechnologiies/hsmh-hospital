// src/pages/user/Departments.jsx
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

// Import department images
import cardiologyImg from '../../assets/cardiologyImg.jpg'
import orthopedicsImg from '../../assets/orthopedicsImg.jpg'
import neurologyImg from '../../assets/neurologyImg.jpg'
import generalMedicineImg from '../../assets/generalMedicineImg.jpg'
import dermatologyImg from '../../assets/dermatologyImg.jpg'

export default function Departments() {
  // Departments list with images
  const departments = [
    { name: 'Cardiology', image: cardiologyImg },
    { name: 'Orthopedics', image: orthopedicsImg },
    { name: 'Neurology', image: neurologyImg },
    { name: 'General Medicine', image: generalMedicineImg },
    { name: 'Dermatology', image: dermatologyImg }
  ]

  // Selected department state
  const [selectedDept, setSelectedDept] = useState('Cardiology')

  // Complete department details for ALL departments matching Figma pattern
  const departmentDetails = {
    Cardiology: {
      title: 'Cardiology',
      subtitle: 'Advanced Heart Care',
      description: 'Our Cardiology department offers comprehensive care for heart conditions with state-of-the-art diagnostic and treatment facilities. Our team of experienced cardiologist is dedicated to providing advanced heart care.',
      services: [
        'Advanced diagnostic tests including ECG, Echocardiography, and Stress Tests',
        'Angioplasty and stent placement',
        'Heart failure management & rehabilitation',
        '24/7 cardiac emergency care'
      ],
      contact: 'Contact Cardiology Department',
      doctors: [
        {
          name: 'Dr. Sri Lakshmi B',
          specialty: 'Dental Surgeon',
          experience: '12 years experience overall',
          fee: '₹600 Consultation fee at clinic',
          status: 'Available Now',
          image: doc1
        },
        {
          name: 'Dr. Siddharth M',
          specialty: 'Plastic Surgeon',
          experience: '15 years experience overall',
          fee: '₹1000 Consultation fee at clinic',
          status: 'Available Now',
          image: doc2
        },
        {
          name: 'Dr. Ramesh Babu',
          specialty: 'General Surgery',
          experience: '10 years experience overall',
          fee: '₹800 Consultation fee at clinic',
          status: 'Available Now',
          image: doc3
        },
        {
          name: 'Dr. Ghadhamsetty Sai Ganesh',
          specialty: 'Orthopedician & Joint Replacement Surgeon',
          experience: '30 years experience overall',
          fee: '₹1200 Consultation fee at clinic',
          status: 'Available Now',
          image: doc4
        }
      ]
    },
    
    Orthopedics: {
      title: 'Orthopedics',
      subtitle: 'Bone & Joint Care',
      description: 'Our Orthopedics department provides comprehensive care for bone, joint, and musculoskeletal conditions with modern surgical and non-surgical treatment options. Our team of expert orthopedicians is dedicated to restoring mobility and improving quality of life.',
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
        {
          name: 'Dr. Ramesh Babu',
          specialty: 'Joint Replacement Surgeon',
          experience: '15 years experience overall',
          fee: '₹1000 Consultation fee at clinic',
          status: 'Available Now',
          image: doc1
        },
        {
          name: 'Dr. Anita Desai',
          specialty: 'Pediatric Orthopedics',
          experience: '12 years experience overall',
          fee: '₹900 Consultation fee at clinic',
          status: 'Available Now',
          image: doc2
        },
        {
          name: 'Dr. Vikram Singh',
          specialty: 'Sports Medicine Specialist',
          experience: '8 years experience overall',
          fee: '₹800 Consultation fee at clinic',
          status: 'Available Now',
          image: doc3
        },
        {
          name: 'Dr. Sunita Reddy',
          specialty: 'Spine Surgeon',
          experience: '14 years experience overall',
          fee: '₹1100 Consultation fee at clinic',
          status: 'Available Now',
          image: doc4
        }
      ]
    },
    
    Neurology: {
      title: 'Neurology',
      subtitle: 'Brain & Nervous System',
      description: 'Our Neurology department offers advanced diagnostic and therapeutic services for disorders of the brain, spinal cord, and nervous system. Our team of experienced neurologists provides comprehensive care using cutting-edge technology.',
      services: [
        'Stroke management and thrombolysis',
        'Epilepsy and seizure disorder treatment',
        'Movement disorders (Parkinson\'s disease)',
        'Headache and migraine management',
        'Multiple sclerosis care',
        'Neuro-rehabilitation and physiotherapy'
      ],
      contact: 'Contact Neurology Department',
      doctors: [
        {
          name: 'Dr. Priya Sharma',
          specialty: 'Senior Neurologist',
          experience: '14 years experience overall',
          fee: '₹900 Consultation fee at clinic',
          status: 'Available Now',
          image: doc2
        },
        {
          name: 'Dr. Rajesh Kumar',
          specialty: 'Stroke Specialist',
          experience: '10 years experience overall',
          fee: '₹850 Consultation fee at clinic',
          status: 'Available Now',
          image: doc1
        },
        {
          name: 'Dr. Meera Nair',
          specialty: 'Epileptologist',
          experience: '9 years experience overall',
          fee: '₹800 Consultation fee at clinic',
          status: 'Available Now',
          image: doc3
        },
        {
          name: 'Dr. Arjun Reddy',
          specialty: 'Neurophysiologist',
          experience: '7 years experience overall',
          fee: '₹750 Consultation fee at clinic',
          status: 'Available Now',
          image: doc4
        }
      ]
    },
    
    'General Medicine': {
      title: 'General Medicine',
      subtitle: 'Comprehensive Primary Care',
      description: 'Our General Medicine department serves as the primary point of contact for comprehensive healthcare. Our team of experienced physicians provides expert diagnosis, treatment, and prevention of a wide range of adult medical conditions.',
      services: [
        'Preventive healthcare and annual checkups',
        'Chronic disease management (Diabetes, Hypertension)',
        'Acute illness care and infections',
        'Vaccinations and immunization',
        'Geriatric care and elderly health',
        'Thyroid and metabolic disorders'
      ],
      contact: 'Contact General Medicine Department',
      doctors: [
        {
          name: 'Dr. Suresh Reddy',
          specialty: 'Senior Physician',
          experience: '20 years experience overall',
          fee: '₹600 Consultation fee at clinic',
          status: 'Available Now',
          image: doc1
        },
        {
          name: 'Dr. Kavita Iyer',
          specialty: 'Diabetologist',
          experience: '12 years experience overall',
          fee: '₹650 Consultation fee at clinic',
          status: 'Available Now',
          image: doc2
        },
        {
          name: 'Dr. Anil Joshi',
          specialty: 'Geriatric Specialist',
          experience: '15 years experience overall',
          fee: '₹700 Consultation fee at clinic',
          status: 'Available Now',
          image: doc3
        },
        {
          name: 'Dr. Pooja Singh',
          specialty: 'Infectious Diseases',
          experience: '8 years experience overall',
          fee: '₹750 Consultation fee at clinic',
          status: 'Available Now',
          image: doc4
        }
      ]
    },
    
    Dermatology: {
      title: 'Dermatology',
      subtitle: 'Skin, Hair & Nail Care',
      description: 'Our Dermatology department offers comprehensive medical and surgical care for all skin, hair, and nail conditions. Our team of expert dermatologists provides advanced treatments using modern technology and cosmetic procedures.',
      services: [
        'Medical dermatology (Acne, Eczema, Psoriasis)',
        'Cosmetic dermatology and Botox',
        'Laser treatments and hair removal',
        'Hair transplantation',
        'Pediatric dermatology',
        'Skin cancer screening and surgery'
      ],
      contact: 'Contact Dermatology Department',
      doctors: [
        {
          name: 'Dr. Lakshmi Reddy',
          specialty: 'Consultant Dermatologist',
          experience: '12 years experience overall',
          fee: '₹700 Consultation fee at clinic',
          status: 'Available Now',
          image: doc2
        },
        {
          name: 'Dr. Neha Kapoor',
          specialty: 'Cosmetic Dermatologist',
          experience: '8 years experience overall',
          fee: '₹1000 Consultation fee at clinic',
          status: 'Available Now',
          image: doc3
        },
        {
          name: 'Dr. Rohan Mehta',
          specialty: 'Pediatric Dermatologist',
          experience: '6 years experience overall',
          fee: '₹650 Consultation fee at clinic',
          status: 'Available Now',
          image: doc1
        },
        {
          name: 'Dr. Sneha Reddy',
          specialty: 'Dermatosurgeon',
          experience: '10 years experience overall',
          fee: '₹900 Consultation fee at clinic',
          status: 'Available Now',
          image: doc4
        }
      ]
    }
  }

  const currentDept = departmentDetails[selectedDept]

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      
      <main className='pt-40 md:pt-44'>
        {/* FOR EMERGENCY Banner - Exactly as per Figma */}
       

        {/* Main Content - Departments Section */}
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='flex flex-col lg:flex-row gap-8'>
            
            {/* Left Sidebar - Our Departments List with Images */}
            <div className='w-full lg:w-1/4'>
              <h2 className='text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b-2 border-emerald-800'>
                Our Departments
              </h2>
              <ul className='space-y-4'>
                {departments.map((dept) => (
                  <li 
                    key={dept.name}
                    className={`cursor-pointer rounded-lg transition overflow-hidden ${
                      selectedDept === dept.name 
                        ? 'bg-emerald-700 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }`}
                    onClick={() => setSelectedDept(dept.name)}
                  >
                    <div className='flex items-center'>
                      {/* Department Image */}
                      <div className='w-16 h-16 flex-shrink-0'>
                        <img 
                          src={dept.image} 
                          alt={dept.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      {/* Department Name */}
                      <div className={`flex-1 px-4 font-medium ${
                        selectedDept === dept.name ? 'text-white' : 'text-gray-800'
                      }`}>
                        {dept.name}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Selected Department Details */}
            <div className='w-full lg:w-3/4'>
              {currentDept && (
                <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
                  {/* Department Title */}
                  <h1 className='text-3xl md:text-4xl font-bold text-emerald-800 mb-2'>
                    {currentDept.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <h3 className='text-xl text-emerald-600 font-semibold mb-4'>
                    {currentDept.subtitle}
                  </h3>
                  
                  {/* Horizontal Line */}
                  <hr className='border-gray-200 my-4' />
                  
                  {/* Department Description */}
                  <p className='text-gray-700 mb-6 leading-relaxed'>
                    {currentDept.description}
                  </p>

                  {/* Services List - With Bullet Points */}
                  <ul className='list-disc pl-5 space-y-2 text-gray-700 mb-6'>
                    {currentDept.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>

                  {/* Contact Department - With Phone Icon */}
                  <div className='bg-emerald-50 border-l-4 border-emerald-700 p-4 mb-8'>
                    <p className='text-emerald-800 font-medium flex items-center gap-2'>
                      <span className='text-xl'>📞</span>
                      {currentDept.contact}
                    </p>
                  </div>

                  {/* Doctors Grid - 2x2 Exactly as Figma */}
                  <div className='mt-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {currentDept.doctors.map((doctor, index) => (
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
                              <p className='text-gray-600 text-sm mt-1'>
                                {doctor.experience}
                              </p>
                              <p className='text-gray-800 font-medium text-sm mt-1'>
                                {doctor.fee}
                              </p>
                              
                              {/* Status and Book Button */}
                              <div className='flex items-center justify-between mt-3'>
                                <span className='text-green-600 text-sm font-semibold flex items-center'>
                                  <span className='w-2 h-2 bg-green-600 rounded-full mr-2'></span>
                                  {doctor.status}
                                </span>
                                <Button 
                                  text="Book Appointment" 
                                  variant="primary"
                                  className="text-xs px-3 py-1.5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View More Link */}
                    <div className='text-right mt-6'>
                      <Link 
                        to="/doctors" 
                        className='text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1'
                      >
                        View More
                        <span className='text-lg'>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hospital Info Section - Exactly as per Figma */}
        
      </main>
      
      <Footer />
    </div>
  )
}