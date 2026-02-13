// src/pages/user/DepartmentDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'

// Import department images
import cardiologyImg from '../../assets/cardiologyImg.jpg'
import orthopedicsImg from '../../assets/orthopedicsImg.jpg'
import neurologyImg from '../../assets/neurologyImg.jpg'
import generalMedicineImg from '../../assets/generalMedicineImg.jpg'
import dermatologyImg from '../../assets/dermatologyImg.jpg'

// Import doctor images
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.jpg'
import doc4 from '../../assets/doc4.jpg'

export default function DepartmentDetails() {
  const { id } = useParams()
  
  // Department images mapping
  const departmentImages = {
    cardiology: cardiologyImg,
    orthopedics: orthopedicsImg,
    neurology: neurologyImg,
    'general-medicine': generalMedicineImg,
    dermatology: dermatologyImg
  }

  // Complete department data
  const departmentsData = {
    cardiology: {
      id: 'cardiology',
      title: 'Cardiology',
      subtitle: 'Advanced Heart Care',
      description: 'Our Cardiology department offers comprehensive care for heart conditions with state-of-the-art diagnostic and treatment facilities. Our team of experienced cardiologist is dedicated to providing advanced heart care.',
      services: [
        'Advanced diagnostic tests including ECG, Echocardiography, and Stress Tests',
        'Angioplasty and stent placement',
        'Heart failure management & rehabilitation',
        '24/7 cardiac emergency care',
        'Pediatric cardiology',
        'Cardiac surgery'
      ],
      facilities: [
        'Modern Cath Lab',
        'Echocardiography',
        'Stress Testing Lab',
        'Holter Monitoring',
        'Cardiac ICU'
      ],
      contact: '📞 Contact Cardiology Department: +91 98765 43210',
      hod: 'Dr. Ayesha Khan',
      hodExperience: '18+ years experience',
      totalDoctors: '12+ Specialists',
      image: cardiologyImg
    },
    orthopedics: {
      id: 'orthopedics',
      title: 'Orthopedics',
      subtitle: 'Bone & Joint Care',
      description: 'Our Orthopedics department provides comprehensive care for bone, joint, and muscle conditions. We offer both surgical and non-surgical treatments using the latest techniques.',
      services: [
        'Joint replacement surgery (Knee & Hip)',
        'Arthroscopy',
        'Sports medicine',
        'Spine surgery',
        'Fracture care',
        'Pediatric orthopedics'
      ],
      facilities: [
        'Modern OT with C-arm',
        'Arthroscopy Suite',
        'Physiotherapy Center',
        'Bone Densitometry',
        'Rehabilitation Unit'
      ],
      contact: '📞 Contact Orthopedics Department: +91 98765 43211',
      hod: 'Dr. Ramesh Babu',
      hodExperience: '15+ years experience',
      totalDoctors: '10+ Specialists',
      image: orthopedicsImg
    },
    neurology: {
      id: 'neurology',
      title: 'Neurology',
      subtitle: 'Brain & Nervous System',
      description: 'Our Neurology department offers advanced diagnostic and treatment facilities for disorders of the brain and nervous system.',
      services: [
        'Stroke management',
        'Epilepsy treatment',
        'Movement disorders',
        'Headache management',
        'Multiple sclerosis care',
        'Neuro-rehabilitation'
      ],
      facilities: [
        'EEG Lab',
        'EMG/NCV Lab',
        'Neuro ICU',
        'Sleep Lab',
        'Advanced Imaging'
      ],
      contact: '📞 Contact Neurology Department: +91 98765 43212',
      hod: 'Dr. Priya Sharma',
      hodExperience: '14+ years experience',
      totalDoctors: '8+ Specialists',
      image: neurologyImg
    },
    'general-medicine': {
      id: 'general-medicine',
      title: 'General Medicine',
      subtitle: 'Comprehensive Primary Care',
      description: 'Our General Medicine department provides comprehensive primary care for adults, focusing on prevention, diagnosis, and treatment of various medical conditions.',
      services: [
        'Preventive healthcare',
        'Chronic disease management',
        'Acute illness care',
        'Health checkups',
        'Vaccinations',
        'Geriatric care'
      ],
      facilities: [
        'Outpatient Clinics',
        'Day Care Center',
        'Diagnostic Services',
        'Health Screening Suite',
        'Treatment Room'
      ],
      contact: '📞 Contact General Medicine: +91 98765 43213',
      hod: 'Dr. Suresh Reddy',
      hodExperience: '20+ years experience',
      totalDoctors: '15+ Specialists',
      image: generalMedicineImg
    },
    dermatology: {
      id: 'dermatology',
      title: 'Dermatology',
      subtitle: 'Skin, Hair & Nail Care',
      description: 'Our Dermatology department offers comprehensive care for all skin, hair, and nail conditions with modern treatment facilities.',
      services: [
        'Medical dermatology',
        'Cosmetic dermatology',
        'Laser treatments',
        'Hair transplantation',
        'Pediatric dermatology',
        'Dermatosurgery'
      ],
      facilities: [
        'Laser Suite',
        'Phototherapy Unit',
        'Dermoscopy',
        'Minor OT',
        'Skin Lab'
      ],
      contact: '📞 Contact Dermatology Department: +91 98765 43214',
      hod: 'Dr. Lakshmi Reddy',
      hodExperience: '12+ years experience',
      totalDoctors: '6+ Specialists',
      image: dermatologyImg
    }
  }

  // Doctors data for each department
  const doctorsByDepartment = {
    cardiology: [
      {
        name: 'Dr. Ayesha Khan',
        specialty: 'Senior Cardiologist',
        experience: '18 years experience',
        fee: '₹800 Consultation fee',
        status: 'Available Today',
        image: doc1,
        education: 'MBBS, MD, DM Cardiology',
        availability: 'Mon-Fri, 10AM-4PM'
      },
      {
        name: 'Dr. Ravi Mehta',
        specialty: 'Interventional Cardiologist',
        experience: '12 years experience',
        fee: '₹1000 Consultation fee',
        status: 'Available Now',
        image: doc2,
        education: 'MBBS, MD, DNB Cardiology',
        availability: 'Tue-Sat, 9AM-3PM'
      },
      {
        name: 'Dr. Priya Nair',
        specialty: 'Pediatric Cardiologist',
        experience: '10 years experience',
        fee: '₹700 Consultation fee',
        status: 'Available Now',
        image: doc3,
        education: 'MBBS, MD, Fellowship in Pediatric Cardiology',
        availability: 'Mon-Wed-Fri, 11AM-5PM'
      },
      {
        name: 'Dr. Sanjay Gupta',
        specialty: 'Cardiac Electrophysiologist',
        experience: '15 years experience',
        fee: '₹1200 Consultation fee',
        status: 'Available Tomorrow',
        image: doc4,
        education: 'MBBS, MD, DM Cardiology',
        availability: 'Thu-Sat, 2PM-8PM'
      }
    ],
    orthopedics: [
      {
        name: 'Dr. Ramesh Babu',
        specialty: 'Joint Replacement Surgeon',
        experience: '15 years experience',
        fee: '₹1000 Consultation fee',
        status: 'Available Now',
        image: doc1,
        education: 'MBBS, MS Ortho, MCh Ortho',
        availability: 'Mon-Fri, 9AM-5PM'
      },
      {
        name: 'Dr. Ghadhamsetty Sai Ganesh',
        specialty: 'Orthopedician & Joint Replacement Surgeon',
        experience: '30 years experience',
        fee: '₹1200 Consultation fee',
        status: 'Available Now',
        image: doc2,
        education: 'MBBS, MS Ortho, DNB Ortho',
        availability: 'Mon-Sat, 10AM-4PM'
      },
      {
        name: 'Dr. Anita Desai',
        specialty: 'Pediatric Orthopedics',
        experience: '12 years experience',
        fee: '₹900 Consultation fee',
        status: 'Available Now',
        image: doc3,
        education: 'MBBS, MS Ortho, Fellowship in Pediatric Ortho',
        availability: 'Mon-Wed-Fri, 10AM-6PM'
      },
      {
        name: 'Dr. Vikram Singh',
        specialty: 'Sports Medicine Specialist',
        experience: '8 years experience',
        fee: '₹800 Consultation fee',
        status: 'Available Today',
        image: doc4,
        education: 'MBBS, DNB Ortho, Diploma in Sports Medicine',
        availability: 'Tue-Thu-Sat, 3PM-8PM'
      }
    ],
    neurology: [
      {
        name: 'Dr. Priya Sharma',
        specialty: 'Senior Neurologist',
        experience: '14 years experience',
        fee: '₹900 Consultation fee',
        status: 'Available Now',
        image: doc2,
        education: 'MBBS, MD, DM Neurology',
        availability: 'Mon-Thu, 10AM-6PM'
      },
      {
        name: 'Dr. Rajesh Kumar',
        specialty: 'Stroke Specialist',
        experience: '10 years experience',
        fee: '₹850 Consultation fee',
        status: 'Available Today',
        image: doc1,
        education: 'MBBS, MD, Fellowship in Stroke Medicine',
        availability: 'Mon-Fri, 9AM-5PM'
      },
      {
        name: 'Dr. Meera Nair',
        specialty: 'Epileptologist',
        experience: '9 years experience',
        fee: '₹800 Consultation fee',
        status: 'Available Now',
        image: doc3,
        education: 'MBBS, DM Neurology, Fellowship in Epilepsy',
        availability: 'Tue-Thu-Sat, 11AM-7PM'
      },
      {
        name: 'Dr. Arjun Reddy',
        specialty: 'Neurophysiologist',
        experience: '7 years experience',
        fee: '₹750 Consultation fee',
        status: 'Available Tomorrow',
        image: doc4,
        education: 'MBBS, MD, DNB Neurology',
        availability: 'Mon-Wed-Fri, 2PM-8PM'
      }
    ],
    'general-medicine': [
      {
        name: 'Dr. Suresh Reddy',
        specialty: 'Senior Physician',
        experience: '20 years experience',
        fee: '₹600 Consultation fee',
        status: 'Available Now',
        image: doc1,
        education: 'MBBS, MD General Medicine',
        availability: 'Mon-Sat, 9AM-5PM'
      },
      {
        name: 'Dr. Kavita Iyer',
        specialty: 'Diabetologist',
        experience: '12 years experience',
        fee: '₹650 Consultation fee',
        status: 'Available Now',
        image: doc2,
        education: 'MBBS, MD, Fellowship in Diabetology',
        availability: 'Mon-Fri, 10AM-6PM'
      },
      {
        name: 'Dr. Anil Joshi',
        specialty: 'Geriatric Specialist',
        experience: '15 years experience',
        fee: '₹700 Consultation fee',
        status: 'Available Today',
        image: doc3,
        education: 'MBBS, MD, Diploma in Geriatric Medicine',
        availability: 'Tue-Thu-Sat, 11AM-7PM'
      }
    ],
    dermatology: [
      {
        name: 'Dr. Lakshmi Reddy',
        specialty: 'Consultant Dermatologist',
        experience: '12 years experience',
        fee: '₹700 Consultation fee',
        status: 'Available Now',
        image: doc2,
        education: 'MBBS, MD Dermatology',
        availability: 'Mon-Fri, 11AM-7PM'
      },
      {
        name: 'Dr. Neha Kapoor',
        specialty: 'Cosmetic Dermatologist',
        experience: '8 years experience',
        fee: '₹1000 Consultation fee',
        status: 'Available Now',
        image: doc3,
        education: 'MBBS, MD, Fellowship in Cosmetic Dermatology',
        availability: 'Mon-Wed-Fri, 10AM-6PM'
      },
      {
        name: 'Dr. Rohan Mehta',
        specialty: 'Pediatric Dermatologist',
        experience: '6 years experience',
        fee: '₹650 Consultation fee',
        status: 'Available Today',
        image: doc1,
        education: 'MBBS, DNB Dermatology',
        availability: 'Tue-Thu-Sat, 9AM-5PM'
      }
    ]
  }

  // Get current department data based on URL param
  const currentDepartment = departmentsData[id?.toLowerCase()] || departmentsData.cardiology
  const departmentDoctors = doctorsByDepartment[id?.toLowerCase()] || doctorsByDepartment.cardiology
  const departmentImage = departmentImages[id?.toLowerCase()] || cardiologyImg

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      
      <main className='pt-40 md:pt-44'>
        {/* Hero Section with Department Image */}
        <section 
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${departmentImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className='max-w-7xl mx-auto px-6 text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-2'>
                {currentDepartment.title}
              </h1>
              <p className='text-xl text-emerald-200'>
                {currentDepartment.subtitle}
              </p>
              <div className='mt-4 flex gap-4'>
                <Button 
                  text="Book Appointment" 
                  variant="primary"
                />
                <Button 
                  text="🚑 Emergency: 789654123" 
                  variant="emergency"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-6 py-12'>
          {/* Department Overview */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
            {/* Left Column - Description & Services */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-lg shadow-md p-8'>
                <h2 className='text-2xl font-bold text-emerald-800 mb-4'>
                  About the Department
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  {currentDepartment.description}
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Services */}
                  <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-3'>
                      Our Services
                    </h3>
                    <ul className='space-y-2'>
                      {currentDepartment.services.map((service, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-emerald-600 mt-1'>✓</span>
                          <span className='text-gray-700'>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Facilities */}
                  <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-3'>
                      Facilities
                    </h3>
                    <ul className='space-y-2'>
                      {currentDepartment.facilities.map((facility, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-emerald-600 mt-1'>🏥</span>
                          <span className='text-gray-700'>{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Department Info Card */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-bold text-emerald-800 mb-4'>
                  Department Info
                </h3>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-sm text-gray-600'>Head of Department</p>
                    <p className='font-semibold text-gray-900'>{currentDepartment.hod}</p>
                    <p className='text-sm text-emerald-600'>{currentDepartment.hodExperience}</p>
                  </div>
                  
                  <div>
                    <p className='text-sm text-gray-600'>Total Specialists</p>
                    <p className='font-semibold text-gray-900'>{currentDepartment.totalDoctors}</p>
                  </div>
                  
                  <div className='pt-4 border-t'>
                    <p className='text-sm text-gray-600 mb-2'>Contact Department</p>
                    <p className='text-emerald-700 font-medium'>
                      {currentDepartment.contact}
                    </p>
                  </div>
                  
                  <Button 
                    text="Book Appointment" 
                    variant="primary"
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Doctors Section */}
          <section className='bg-white rounded-lg shadow-md p-8'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-emerald-800'>
                Our {currentDepartment.title} Specialists
              </h2>
              <span className='bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold'>
                {departmentDoctors.length}+ Doctors
              </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {departmentDoctors.map((doctor, index) => (
                <div 
                  key={index}
                  className='flex border rounded-lg p-4 hover:shadow-lg transition'
                >
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
                    <p className='text-gray-600 text-xs mt-1'>
                      {doctor.education}
                    </p>
                    <p className='text-gray-700 text-sm mt-1'>
                      {doctor.experience}
                    </p>
                    <p className='text-gray-800 font-medium text-sm'>
                      {doctor.fee}
                    </p>
                    <p className='text-gray-500 text-xs mt-1'>
                      🕒 {doctor.availability}
                    </p>
                    
                    {/* Status and Button */}
                    <div className='flex items-center justify-between mt-3'>
                      <span className={`text-sm font-semibold flex items-center
                        ${doctor.status === 'Available Now' ? 'text-green-600' : 'text-orange-600'}`}>
                        <span className={`w-2 h-2 rounded-full mr-2
                          ${doctor.status === 'Available Now' ? 'bg-green-600' : 'bg-orange-600'}`}>
                        </span>
                        {doctor.status}
                      </span>
                      <Button 
                        text="Book Now" 
                        variant="primary"
                        className="text-xs px-4 py-1.5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Doctors Button */}
            <div className='text-center mt-8'>
              <Button 
                text="View All Doctors in This Department" 
                variant="outline"
                className="px-8 py-3"
              />
            </div>
          </section>

          {/* Appointment CTA Section */}
          <section className='bg-emerald-50 rounded-lg p-8 mt-12'>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-emerald-800 mb-3'>
                Need Immediate Appointment?
              </h3>
              <p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
                Get in touch with our {currentDepartment.title} department for quick consultation and treatment.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button 
                  text="📞 Call: +91 789654123" 
                  variant="emergency"
                  className="px-6 py-3"
                />
                <Button 
                  text="Request Call Back" 
                  variant="primary"
                  className="px-6 py-3"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}