import React from 'react'

import logo2 from '../../assets/logo2.png'
import hospital1 from '../../assets/hospital1.png'
import hospital2 from '../../assets/hospital2.png'
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import hearticon from '../../assets/hearticon.png'
import brainicon from '../../assets/brainicon.png'
import boneicon from '../../assets/boneicon.png'

import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'
import DepartmentCard from '../../commoncomponents/DepartmentCard'
import DoctorCard from '../../commoncomponents/DoctorCard'
import BlogCard from '../../commoncomponents/BlogCard'



export default function Home() {
  // Dummy data for now
  const departments = [
    { title: 'Cardiology', description: 'Advanced heart care with expert cardiologists.',image: hearticon },
    { title: 'Neurology', description: 'Comprehensive treatment for brain and nervous system.', image: brainicon},
    { title: 'Orthopedics', description: 'Specialized care for bones, joints, and muscles.' , image: boneicon },
    
  ]

  const doctors = [
    { name: 'Dr. Ayesha Khan', specialty: 'Cardiology',qualifications: 'MBBS, MD (Cardiology), FACC', image: doc2 },
    { name: 'Dr. Ravi Mehta', specialty: 'Neurology', qualifications: 'MBBS, DM (Neurology)', image: doc1 },
    { name: 'Dr. Priya Sharma', specialty: 'Orthopedics', qualifications: 'MBBS, MS (Orthopedics)', image: doc2 },
    { name: 'Dr. Raghav Gupta', specialty: 'Oncology', qualifications: 'MBBS, MD (Oncology)', image: doc1 },
    { name: 'Dr. Richa Sharma', specialty: 'Pediatrics', qualifications: 'MBBS, MD (Pediatrics)', image: doc2 }, 
  ]

  const blogs = [
    { id: 1, title: 'Healthy Heart Tips', excerpt: 'Learn how to keep your heart healthy with these simple lifestyle changes.', image: hospital1 },
    { id: 2, title: 'Advances in Neurology', excerpt: 'Discover the latest breakthroughs in brain and nervous system care.', image: hospital2 },
    { id: 3, title: 'Orthopedic Care Essentials', excerpt: 'Tips for maintaining strong bones and joints.', image: doc1 },
  ]

  return (
    <div className='min-h-screen flex flex-col bg-[#fff8f0] pt-16'> {/* bg-gray-50  info section: #faf3e0 others: #fff8f0 */ }
      <Header />
      <main className='flex-grow pt-10 md:pt-12  text-center'>
        {/* Hero Section */}
        <section
          className="relative h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/hospital1.png')" }}
        >
          <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl font-bold">Harsha Multi Speciality Hospital</h1>
            <p className="mt-4 text-lg max-w-2xl">
              Health. Hope. Happiness. Providing exceptional healthcare with compassion and innovation.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button text="Book Appointment" />
              <Button text="Emergency: 020 123 456 789" variant="emergency" />
            </div>
          </div>
        </section>


        {/*Hospital Info Section */}
        <section className='bg-[#faf3e0] py-16'>
          <div className=' w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'> {/* max-w-6xl mx-auto */ }
            {/* Left column: logo + text */}
            <div className='text-center '>
              <img src={logo2} alt='HMSH Logo' className='mx-auto  w-24 h-24 mb-6' />
              <h2 className='text-3xl font-bold text-emerald-800 mb-4'>Harsha Multi Speciality Hospital</h2>
              <p className='text-gray-700'>
                Committed to providing comprehensive medical care with compassion and personalized attention.
              </p>
            </div> 
            {/* Right column: stats */} 
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-emerald-700">50,000+</h3>
                <p className="text-gray-600">Patients Treated</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-700">150+</h3>
                <p className="text-gray-600">Expert Doctors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-700">14+</h3>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-700">98%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div> 
        </section>


        {/* Centers of Excellence or Key Departments Section */}
        <section className='bg-white py-10'> {/* className='bg-white py-16' */}
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-2'>
            Centers of Excellence
          </h2>
          <p className='text-gray-700 text-center mb-4'>
            Discover our specialized care units designed to deliver excellence in every field.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {departments.map((dept, i) => (
              <DepartmentCard key={i} title={dept.title} description={dept.description} image={dept.image} />
            ))}
          </div>
        </section>

        {/*Top Doctors Section */}
        <section className='bg-[#005c52] py-10'>
          <h2 className='text-3xl font-bold text-white text-center mb-10'>
            Meet Our Top Doctors
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto'>
            {doctors.map((doc, i) => (
              <DoctorCard key={i} name={doc.name} specialty={doc.specialty} qualifications={doc.qualifications} image={doc.image} showButton={false} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className='bg-[#fff8f0] py-10'>
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
            Latest News, Events and Blogs
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} image={blog.image} />
            ))}
          </div>
        </section>

        {/*Testimonials Section */}
        <section className="bg-white py-10">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-10">What our Patients Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            <blockquote className="bg-[#fff8f0] shadow-md rounded-lg p-6">
              <p className="text-gray-700">"The staff was amazing and the care I received was outstanding."</p>
              <footer className="mt-4 text-sm text-emerald-700">— Sunita R.</footer>
            </blockquote>
            <blockquote className="bg-[#fff8f0] shadow-md rounded-lg p-6">
              <p className="text-gray-700">"I had a great experience with Dr. Sri Lakshmi. Highly recommend!"</p>
            <footer className="mt-4 text-sm text-emerald-700">— Rohit K.</footer>
            </blockquote>
            <blockquote className="bg-[#fff8f0] shadow-md rounded-lg p-6">
              <p className="text-gray-700">"Excellent service and very compassionate doctors."</p>
              <footer className="mt-4 text-sm text-emerald-700">— Anjali S.</footer>
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  )
}