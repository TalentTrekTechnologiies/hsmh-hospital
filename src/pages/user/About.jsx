// src/pages/user/About.jsx
import React from 'react'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import PageHero from '../../commoncomponents/PageHero'
import DoctorCard from '../../commoncomponents/DoctorCard'

import aboutImage from '../../assets/abouthero.png'
import aboutImage2 from '../../assets/aboutpage2.png'
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import hospital1 from '../../assets/hospital1.png'
import hospital2 from '../../assets/hospital2.png'
import award from '../../assets/award1.png'



export default function About() {
  // Dummy data for About page
  const leadership = [
    { name: 'Dr. Anil Kumar', role: 'Chief Medical Officer',qualifications: 'MBBS, MD (Internal Medicine), MBA (Healthcare)', image: doc1 },
    { name: 'Dr. Priya Sharma', role: 'Head of Surgery',qualifications: 'MBBS, MS (General Surgery), Fellowship in Minimally Invasive Surgery',  image: doc2 },
    { name: 'Dr. Ravi Mehta', role: 'Director of Neurology', qualifications: 'MBBS, DM (Neurology), FRCP', image: doc1 },
    { name: 'Dr. Raghav Gupta', role: 'Head of Oncology', qualifications: 'MBBS, MD (Oncology)', image: doc2 },
    { name: 'Dr. Richa Sharma', role: 'Head of Pediatrics', qualifications: 'MBBS, MD (Pediatrics)', image: doc1 },
  ]
  const infrastructure = {
    description: [
      "Equipped with modern facilities, Harsha Hospital offers over 100 beds including ICU, emergency, and specialty wards.",
      "Advanced diagnostic labs, imaging centers (MRI, CT, ultrasound), and state‑of‑the‑art operation theatres support precise treatment.",
      "Support services include 24/7 pharmacy, blood bank, ambulance fleet, and rehabilitation units.",
      "With NABH/ISO accreditation, strict infection control, and digital health systems, we ensure safety and efficiency at every step."
    ],
    image: hospital2
  }
  const awards = {
    text: "Harsha Hospital is proud to be NABH accredited and ISO certified, recognized for excellence in patient safety, quality care, and innovation in healthcare delivery.",
    image: hospital1
  }
  const awardsImages = [
    award,  award,  award, award, award,
  ]
  const galleryImages = [
    aboutImage,
    aboutImage2,
  //  aboutImage,
  //  aboutImage2,
    aboutImage, 
  ]


  return (
    <div className='min-h-screen bg-[#fff8f0] flex flex-col'>
      <Header />
      <main className='flex-grow pt-10 md:pt-12 text-center'>
        {/* Hero Section*/}
        <PageHero
          title='About Us'
          subtitle='Your health is our priority. Welcome to better care.'
          image={aboutImage}
        />

        {/* Hospital Overview */}
        <section className='bg-[#f5f5dc] py-16'>
          <div className='w-full px-6 text-center'>
            <h2 className='text-3xl font-bold text-emerald-800 mb-6'>Our Journey</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>
              Harsha Multi Speciality Hospital was founded with a vision to bring
              advanced healthcare closer to the community of Proddatur. What began
              as a modest facility has grown into a trusted institution, serving
              thousands of patients with compassion and expertise.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>
              From the very beginning, our mission has been to combine medical
              excellence with patient‑centric values. Over the years, we have
              expanded our specialties, strengthened our team of doctors and
              nurses, and invested in modern technology to ensure that every
              patient receives the highest standard of care.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Today, Harsha Hospital stands as one of the leading multi‑speciality
              centers in the region. Our reputation is built on consistent
              outcomes, ethical practices, and a dedication to continuous
              improvement. With a growing network of patients who trust us, we
              remain committed to advancing healthcare for generations to come.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className='bg-white py-16'>
          <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left Column: Image */}
              <div className='w-full h-full'>
              <img src={aboutImage2} alt='Mission and Vision' className='w-full h-full object-cover border border-gray-200 rounded-none shadow-md'/>                </div>
            {/* Right Column: Mission & Vision Text */}
            <div className='text-left'>
              <h2 className='text-3xl font-bold text-emerald-800 mb-6'>Mission & Vision</h2>
    
              <div className='mb-6'>
                <h3 className='text-2xl font-semibold text-emerald-700 mb-2'>Our Mission</h3>
                <p className='text-gray-700 leading-relaxed'>
                  To deliver comprehensive, compassionate, and patient‑centric care under one roof, 
                  combining medical excellence with personalized attention.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-emerald-700 mb-2'>Our Vision</h3>
                <p className='text-gray-700 leading-relaxed'>
                  To be recognized as a leading healthcare institution in the region, 
                  setting benchmarks in quality, innovation, and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Leadership Team Section */}
      <section className='bg-[#fdf6ec] py-16'>
        <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
          Our Leadership Team
        </h2>
      <div className='w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {leadership.map((leader, i) => (
          <DoctorCard
            key={i}
            name={leader.name}
            specialty={leader.role}             // reuse specialty field for role
            qualifications={leader.qualifications} // now included
            image={leader.image}
            showButton={false}                  // no button for leadership
          />
        ))}
      </div>
    </section>



        {/* Infrastructure Section */}
        <section className='bg-[#005c52] py-16 text-white'>
          <h2 className='text-3xl font-bold text-center mb-4'>Our Facilities</h2>
          <p className='text-gray-300 mb-8'>
            Modern infrastructure designed to deliver trusted care and comfort.
          </p>
          <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left Column: Text */}
            <div className='text-left'>
              {infrastructure.description.map((line, i) => (
                <p key={i} className='mb-4'>{line}</p>
              ))}
            </div>

            {/* Right Column: Image */}
            <div className='flex justify-center'>
              <img src={infrastructure.image}alt='Hospital Infrastructure' className=' shadow-md w-full md:w-3/4 object-cover'/>
            </div>
          </div>
        </section>
        
        {/* Accreditations and Awards Section */}
        <section className='bg-[#faf3e0] py-16'>
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
            Accreditations and Awards
          </h2>
          <div className='w-full px-6 text-center'>
            {/* Row of Images */}
            <div className='flex flex-wrap justify-center gap-8 mb-8'>
              {awardsImages.map((img, i) => (
                <img key={i} src={img} alt={`Award ${i + 1}`} className='rounded-lg shadow-md w-32 h-32 object-contain'/>
              ))}
            </div>

           {/* Text  */}
            <p className='text-gray-700 leading-relaxed max-w-3xl mx-auto'>
              Harsha Hospital is proud to be NABH accredited and ISO certified, recognized for excellence in patient safety, quality care, and innovation in healthcare delivery.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className='bg-white py-16'>
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
            Gallery
          </h2>
          <div className='w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {galleryImages.map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i + 1}`} className='shadow-md w-full h-64 object-cover'/>
            ))}
          </div>
        </section>
        
 
      </main>
      <Footer />
    </div>
  )
}

