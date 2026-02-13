// src/pages/user/DoctorProfile.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
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

export default function DoctorProfile() {
  const { id } = useParams()

  // Complete doctor data
  const doctorsData = {
    'dr-nirmala': {
      name: 'DR. Nirmala',
      fullName: 'Dr. Nirmala Reddy',
      specialty: 'Cardiologist',
      qualifications: 'MBBS, MD, DM Cardiology',
      experience: '15+ years',
      status: 'Available Now',
      image: doc1,
      about: 'Dr. Nirmala Reddy is a highly experienced cardiologist with over 15 years of expertise in treating complex heart conditions. She specializes in interventional cardiology and has performed over 2000 successful angioplasties.',
      education: [
        'DM Cardiology - All India Institute of Medical Sciences, Delhi',
        'MD General Medicine - Stanley Medical College, Chennai',
        'MBBS - Osmania Medical College, Hyderabad'
      ],
      experience_details: [
        'Senior Consultant Cardiologist - Apollo Hospitals, Hyderabad (2015-Present)',
        'Consultant Cardiologist - Care Hospitals, Hyderabad (2010-2015)',
        'Fellowship in Interventional Cardiology - USA (2008-2010)'
      ],
      specializations: [
        'Interventional Cardiology',
        'Complex Angioplasty',
        'Peripheral Vascular Interventions',
        'Cardiac Electrophysiology'
      ],
      availability: {
        monday: '10:00 AM - 4:00 PM',
        tuesday: '10:00 AM - 4:00 PM',
        wednesday: '10:00 AM - 4:00 PM',
        thursday: '10:00 AM - 4:00 PM',
        friday: '10:00 AM - 4:00 PM',
        saturday: 'Closed',
        sunday: 'Closed'
      },
      consultation_fee: '₹800',
      languages: 'English, Hindi, Telugu',
      patients: '5000+',
      awards: [
        'Best Cardiologist Award - 2022',
        'Excellence in Healthcare - 2020',
        'Young Achiever Award - 2015'
      ],
      email: 'dr.nirmala@harshahospital.com',
      phone: '+91 98765 43210'
    },
    'dr-nayrayan': {
      name: 'DR. Nayrayan',
      fullName: 'Dr. Nayrayan Reddy',
      specialty: 'General Surgeon',
      qualifications: 'MBBS, MS, MCh',
      experience: '12+ years',
      status: 'Available Now',
      image: doc2,
      about: 'Dr. Nayrayan Reddy is a skilled general surgeon with expertise in laparoscopic and minimally invasive surgeries. He has successfully performed over 3000 surgical procedures.',
      education: [
        'MCh Surgical Gastroenterology - AIIMS, Delhi',
        'MS General Surgery - NIMS, Hyderabad',
        'MBBS - Gandhi Medical College, Hyderabad'
      ],
      experience_details: [
        'Senior Consultant Surgeon - Yashoda Hospitals (2018-Present)',
        'Consultant Surgeon - KIMS Hospital (2012-2018)',
        'Senior Resident - NIMS (2010-2012)'
      ],
      specializations: [
        'Laparoscopic Surgery',
        'Gastrointestinal Surgery',
        'Hernia Repair',
        'Gallbladder Surgery'
      ],
      availability: {
        monday: '9:00 AM - 5:00 PM',
        tuesday: '9:00 AM - 5:00 PM',
        wednesday: '9:00 AM - 5:00 PM',
        thursday: '9:00 AM - 5:00 PM',
        friday: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      },
      consultation_fee: '₹600',
      languages: 'English, Hindi, Telugu',
      patients: '3500+',
      awards: [
        'Best Surgeon Award - 2021',
        'Excellence in Laparoscopic Surgery - 2019'
      ],
      email: 'dr.nayrayan@harshahospital.com',
      phone: '+91 98765 43211'
    },
    'dr-shanmukh': {
      name: 'DR. Shanmukh',
      specialty: 'Pulmonologist',
      fullName: 'Dr. Shanmukh K',
      qualifications: 'MBBS, MD, DNB Pulmonology',
      experience: '10+ years',
      status: 'Available Now',
      image: doc3,
      about: 'Dr. Shanmukh K is a renowned pulmonologist specializing in respiratory and sleep disorders. He has extensive experience in managing asthma, COPD, and interstitial lung diseases.',
      education: [
        'DNB Pulmonology - National Board of Examinations',
        'MD Respiratory Medicine - Osmania Medical College',
        'MBBS - Kakatiya Medical College'
      ],
      experience_details: [
        'Consultant Pulmonologist - Chest Hospital (2016-Present)',
        'Associate Consultant - Apollo Hospitals (2012-2016)',
        'Registrar - NIMS (2010-2012)'
      ],
      specializations: [
        'Asthma Management',
        'COPD Treatment',
        'Sleep Disorders',
        'Interventional Pulmonology'
      ],
      availability: {
        monday: '11:00 AM - 6:00 PM',
        tuesday: '11:00 AM - 6:00 PM',
        wednesday: '11:00 AM - 6:00 PM',
        thursday: '11:00 AM - 6:00 PM',
        friday: '11:00 AM - 6:00 PM',
        saturday: '11:00 AM - 3:00 PM',
        sunday: 'Closed'
      },
      consultation_fee: '₹750',
      languages: 'English, Hindi, Telugu',
      patients: '2800+',
      awards: [
        'Young Pulmonologist Award - 2018',
        'Excellence in Respiratory Care - 2020'
      ],
      email: 'dr.shanmukh@harshahospital.com',
      phone: '+91 98765 43212'
    },
    'dr-venu': {
      name: 'DR. Venu',
      specialty: 'Orthopedic surgeon',
      fullName: 'Dr. Venu Gopal',
      qualifications: 'MBBS, MS Ortho, DNB Ortho',
      experience: '18+ years',
      status: 'Available Now',
      image: doc4,
      about: 'Dr. Venu Gopal is a leading orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 5000 successful knee and hip replacements.',
      education: [
        'DNB Orthopedics - National Board of Examinations',
        'MS Orthopedics - Stanley Medical College, Chennai',
        'MBBS - Andhra Medical College'
      ],
      experience_details: [
        'Chief Orthopedic Surgeon - Sunshine Hospitals (2015-Present)',
        'Senior Consultant - Apollo Hospitals (2008-2015)',
        'Fellowship in Joint Replacement - Germany (2006-2008)'
      ],
      specializations: [
        'Knee Replacement Surgery',
        'Hip Replacement Surgery',
        'Sports Injuries',
        'Arthroscopy'
      ],
      availability: {
        monday: '9:00 AM - 5:00 PM',
        tuesday: '9:00 AM - 5:00 PM',
        wednesday: '9:00 AM - 5:00 PM',
        thursday: '9:00 AM - 5:00 PM',
        friday: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      consultation_fee: '₹1000',
      languages: 'English, Hindi, Telugu, Tamil',
      patients: '5500+',
      awards: [
        'Best Orthopedic Surgeon - 2022',
        'Lifetime Achievement Award - 2021',
        'Excellence in Joint Replacement - 2019'
      ],
      email: 'dr.venu@harshahospital.com',
      phone: '+91 98765 43213'
    },
    'dr-arjun': {
      name: 'DR. Arjun',
      specialty: 'Cardiologist',
      fullName: 'Dr. Arjun Reddy',
      qualifications: 'MBBS, MD, DM Cardiology',
      experience: '14+ years',
      status: 'Available Now',
      image: doc5,
      about: 'Dr. Arjun Reddy is an interventional cardiologist known for his expertise in complex coronary interventions and heart failure management.',
      education: [
        'DM Cardiology - CMC Vellore',
        'MD General Medicine - Osmania Medical College',
        'MBBS - Kakatiya Medical College'
      ],
      experience_details: [
        'Consultant Cardiologist - Medicover Hospitals (2016-Present)',
        'Associate Consultant - Apollo Hospitals (2012-2016)',
        'Senior Resident - NIMS (2010-2012)'
      ],
      specializations: [
        'Coronary Angioplasty',
        'Heart Failure Management',
        'Echocardiography',
        'Preventive Cardiology'
      ],
      availability: {
        monday: '2:00 PM - 8:00 PM',
        tuesday: '2:00 PM - 8:00 PM',
        wednesday: '2:00 PM - 8:00 PM',
        thursday: '2:00 PM - 8:00 PM',
        friday: '2:00 PM - 8:00 PM',
        saturday: '10:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      consultation_fee: '₹850',
      languages: 'English, Hindi, Telugu',
      patients: '3200+',
      awards: [
        'Young Cardiologist Award - 2019',
        'Excellence in Research - 2020'
      ],
      email: 'dr.arjun@harshahospital.com',
      phone: '+91 98765 43214'
    },
    'dr-roopa': {
      name: 'DR. Roopa',
      specialty: 'General surgeon',
      fullName: 'Dr. Roopa Devi',
      qualifications: 'MBBS, MS, FMAS',
      experience: '9+ years',
      status: 'Available Now',
      image: doc6,
      about: 'Dr. Roopa Devi is a fellowship-trained laparoscopic surgeon specializing in minimally invasive surgeries. She is known for her compassionate patient care.',
      education: [
        'FMAS - Fellowship in Minimal Access Surgery',
        'MS General Surgery - Gandhi Medical College',
        'MBBS - Osmania Medical College'
      ],
      experience_details: [
        'Consultant Surgeon - Care Hospitals (2018-Present)',
        'Senior Resident - NIMS (2015-2018)',
        'Registrar - Yashoda Hospitals (2013-2015)'
      ],
      specializations: [
        'Laparoscopic Surgery',
        'Breast Surgery',
        'Thyroid Surgery',
        'Hernia Repair'
      ],
      availability: {
        monday: '10:00 AM - 5:00 PM',
        tuesday: '10:00 AM - 5:00 PM',
        wednesday: '10:00 AM - 5:00 PM',
        thursday: '10:00 AM - 5:00 PM',
        friday: '10:00 AM - 5:00 PM',
        saturday: '10:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      consultation_fee: '₹650',
      languages: 'English, Hindi, Telugu, Kannada',
      patients: '2100+',
      awards: [
        'Best Woman Surgeon - 2021',
        'Excellence in Laparoscopy - 2020'
      ],
      email: 'dr.roopa@harshahospital.com',
      phone: '+91 98765 43215'
    }
  }

  // Get current doctor data based on URL param
  const currentDoctor = doctorsData[id] || doctorsData['dr-nirmala']

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      
      <main className='pt-40 md:pt-44'>
        {/* FOR EMERGENCY Banner */}
        <div className='bg-red-600 text-white py-4'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <span className='text-2xl md:text-3xl font-bold'># FOR EMERGENCY</span>
              <span className='text-2xl md:text-3xl font-bold'>Contact (789654123)</span>
            </div>
          </div>
        </div>

        {/* Doctor Profile Content */}
        <div className='max-w-7xl mx-auto px-6 py-12'>
          {/* Back to Doctors Link */}
          <div className='mb-6'>
            <Link 
              to="/doctors" 
              className='text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-2'
            >
              <span className='text-xl'>←</span>
              Back to Doctors
            </Link>
          </div>

          {/* Doctor Profile Card */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            {/* Top Section - Doctor Basic Info */}
            <div className='bg-gradient-to-r from-emerald-800 to-emerald-700 px-8 py-6'>
              <div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
                {/* Doctor Image */}
                <div className='w-32 h-32 flex-shrink-0 border-4 border-white rounded-lg overflow-hidden'>
                  <img 
                    src={currentDoctor.image} 
                    alt={currentDoctor.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                
                {/* Doctor Basic Info */}
                <div className='flex-1 text-white'>
                  <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                    {currentDoctor.fullName}
                  </h1>
                  <p className='text-xl text-emerald-100 mb-2'>
                    {currentDoctor.specialty}
                  </p>
                  <div className='flex flex-wrap gap-4 items-center'>
                    <span className='bg-white text-emerald-800 px-4 py-1 rounded-full text-sm font-semibold'>
                      {currentDoctor.qualifications}
                    </span>
                    <span className='flex items-center gap-2 text-emerald-100'>
                      <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                      {currentDoctor.status}
                    </span>
                  </div>
                </div>
                
                {/* Consultation Fee */}
                <div className='bg-white rounded-lg p-4 text-center min-w-[150px]'>
                  <p className='text-sm text-gray-600'>Consultation Fee</p>
                  <p className='text-3xl font-bold text-emerald-800'>{currentDoctor.consultation_fee}</p>
                  <Button 
                    text="Book Appointment" 
                    variant="primary"
                    className="w-full mt-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section - Detailed Info */}
            <div className='p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Left Column - About & Experience */}
                <div className='lg:col-span-2 space-y-8'>
                  {/* About Doctor */}
                  <div>
                    <h2 className='text-2xl font-bold text-emerald-800 mb-4 pb-2 border-b-2 border-emerald-800'>
                      About Doctor
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      {currentDoctor.about}
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-3'>
                      Education & Training
                    </h3>
                    <ul className='space-y-2'>
                      {currentDoctor.education.map((edu, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-emerald-600 mt-1'>✓</span>
                          <span className='text-gray-700'>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-3'>
                      Work Experience
                    </h3>
                    <ul className='space-y-2'>
                      {currentDoctor.experience_details.map((exp, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-emerald-600 mt-1'>🏥</span>
                          <span className='text-gray-700'>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specializations */}
                  <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-3'>
                      Specializations
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {currentDoctor.specializations.map((spec, index) => (
                        <span 
                          key={index}
                          className='bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium'
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards & Recognition */}
                  <div>
                    <h3 className='text-xl font-semibold text-emerald-700 mb-3'>
                      Awards & Recognition
                    </h3>
                    <ul className='space-y-2'>
                      {currentDoctor.awards.map((award, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-emerald-600 mt-1'>🏆</span>
                          <span className='text-gray-700'>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Contact & Availability */}
                <div className='lg:col-span-1 space-y-6'>
                  {/* Contact Information */}
                  <div className='bg-gray-50 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-emerald-800 mb-4'>
                      Contact Information
                    </h3>
                    <div className='space-y-3'>
                      <p className='flex items-center gap-3 text-gray-700'>
                        <span className='text-emerald-600'>📞</span>
                        {currentDoctor.phone}
                      </p>
                      <p className='flex items-center gap-3 text-gray-700'>
                        <span className='text-emerald-600'>✉️</span>
                        {currentDoctor.email}
                      </p>
                      <p className='flex items-center gap-3 text-gray-700'>
                        <span className='text-emerald-600'>🗣️</span>
                        {currentDoctor.languages}
                      </p>
                      <p className='flex items-center gap-3 text-gray-700'>
                        <span className='text-emerald-600'>👥</span>
                        {currentDoctor.patients} Patients
                      </p>
                      <p className='flex items-center gap-3 text-gray-700'>
                        <span className='text-emerald-600'>⏳</span>
                        {currentDoctor.experience} Experience
                      </p>
                    </div>
                  </div>

                  {/* Availability Schedule */}
                  <div className='bg-gray-50 rounded-lg p-6'>
                    <h3 className='text-xl font-bold text-emerald-800 mb-4'>
                      Availability
                    </h3>
                    <div className='space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Monday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.monday}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Tuesday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.tuesday}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Wednesday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.wednesday}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Thursday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.thursday}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Friday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.friday}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Saturday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.saturday}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Sunday</span>
                        <span className='font-medium text-gray-900'>{currentDoctor.availability.sunday}</span>
                      </div>
                    </div>
                    
                    <div className='mt-6'>
                      <Button 
                        text="Book Appointment" 
                        variant="primary"
                        className="w-full"
                      />
                    </div>
                  </div>
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