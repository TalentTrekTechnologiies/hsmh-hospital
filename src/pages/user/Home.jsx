import React from 'react'

import logo2 from '../../assets/logo2.png'
// import hospital1 from '../../assets/hospital1.png'
// import hospital2 from '../../assets/hospital2.png'
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import hearticon from '../../assets/hearticon.png'

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
    { title: 'Neurology', description: 'Comprehensive treatment for brain and nervous system.', image: hearticon},
    { title: 'Orthopedics', description: 'Specialized care for bones, joints, and muscles.' , image: hearticon },
  ]

  const doctors = [
    { name: 'Dr. Ayesha Khan', specialty: 'Cardiology', image: doc2 },
    { name: 'Dr. Ravi Mehta', specialty: 'Neurology', image: doc1 },
    { name: 'Dr. Priya Sharma', specialty: 'Orthopedics', image: doc2 },
  ]

  const blogs = [
    { id: 1, title: 'Healthy Heart Tips', excerpt: 'Learn how to keep your heart healthy with these simple lifestyle changes.' },
    { id: 2, title: 'Advances in Neurology', excerpt: 'Discover the latest breakthroughs in brain and nervous system care.' },
    { id: 3, title: 'Orthopedic Care Essentials', excerpt: 'Tips for maintaining strong bones and joints.' },
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='pt-40 md:pt-44 px-6 text-center'>
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
        <section className="bg-[#f5f5dc] py-16 text-center">
          <img src={logo2} alt="HMSH Logo" className="mx-auto w-20 h-20 mb-6" />
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Welcome to </h2>
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Harsha Multi Speciality Hospital</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            Committed to providing comprehensive medical care with compassion and personalized attention.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
        </section>


        {/* Departments Section */}
        <section className='bg-white mt-20'>
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
            Our Key Departments
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {departments.map((dept, i) => (
              <DepartmentCard key={i} title={dept.title} description={dept.description} />
            ))}
          </div>
        </section>

        {/* Doctors Section */}
        <section className='bg-emerald-100 mt-20'>
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
            Meet Our Doctors
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {doctors.map((doc, i) => (
              <DoctorCard key={i} name={doc.name} specialty={doc.specialty} image={doc.image} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className='bg-#f5f5dc mt-20'>
          <h2 className='text-3xl font-bold text-emerald-800 text-center mb-10'>
            Latest Articles
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} />
            ))}
          </div>
        </section>

        {/*Testimonials Section */}
        <section className="bg-emerald-100 py-16">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-10">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            <blockquote className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700">"The staff was amazing and the care I received was outstanding."</p>
              <footer className="mt-4 text-sm text-emerald-700">— Sunita R.</footer>
            </blockquote>
            <blockquote className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700">"I had a great experience with Dr. Sri Lakshmi. Highly recommend!"</p>
            <footer className="mt-4 text-sm text-emerald-700">— Rohit K.</footer>
            </blockquote>
            <blockquote className="bg-white shadow-md rounded-lg p-6">
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