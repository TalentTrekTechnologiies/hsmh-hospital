import React, {useState, useEffect} from 'react'
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react'

import logo2 from '../../assets/logo2.png'
import hospital1 from '../../assets/hospital1.png'
import hospital2 from '../../assets/hospital2.png'
import hospital3 from '../../assets/abouthero.png'
import hospital4 from '../../assets/aboutpage2.png'

import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
//import hearticon from '../../assets/hearticon.png'
//import brainicon from '../../assets/brainicon.png'
//import boneicon from '../../assets/boneicon.png'

import {
  HeartPulse, Brain, Bone, Baby, Activity,
  Stethoscope, Microscope, Ear, Droplet, Wind
} from 'lucide-react'

import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'
import DepartmentCard from '../../commoncomponents/DepartmentCard'
import DoctorCard from '../../commoncomponents/DoctorCard'
import BlogCard from '../../commoncomponents/BlogCard'



export default function Home() {
  // Dummy data for now
  const departments = [
  { title: "Cardiology", description: "Heart & vascular care", icon: HeartPulse, image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=60" },
  { title: "Neurology", description: "Brain & spine care", icon: Brain, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" },
  { title: "Orthopedics", description: "Bone & joint care", icon: Bone, image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=60" },
  { title: "Pediatrics", description: "Child health specialists", icon: Baby, image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=800&q=60" },
  { title: "Oncology", description: "Cancer diagnosis & therapy", icon: Microscope, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=60" },
  { title: "Dermatology", description: "Skin & cosmetic care", icon: Droplet, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=60" },
  { title: "Pulmonology", description: "Respiratory care", icon: Wind, image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=60" },
  { title: "ENT", description: "Ear, nose & throat", icon: Ear, image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=60" },
  { title: "General Medicine", description: "Primary care", icon: Stethoscope, image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60" },
  { title: "Critical Care", description: "24/7 ICU support", icon: Activity, image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop" },
];


  const doctors = [
    { name: 'Dr. Ayesha Khan', specialty: 'Cardiology', qualifications: 'MBBS, MD (Cardiology), FACC', image: doc2 },
    { name: 'Dr. Ravi Mehta', specialty: 'Neurology', qualifications: 'MBBS, DM (Neurology)', image: doc1 },
    { name: 'Dr. Priya Sharma', specialty: 'Orthopedics', qualifications: 'MBBS, MS (Orthopedics)', image: doc2 },
    { name: 'Dr. Raghav Gupta', specialty: 'Oncology', qualifications: 'MBBS, MD (Oncology)', image: doc1 },
    { name: 'Dr. Richa Sharma', specialty: 'Pediatrics', qualifications: 'MBBS, MD (Pediatrics)', image: doc2 },
    { name: "Dr. Kavya Iyer", specialty: "ENT Specialist", qualifications: "MS ENT", image: doc2 },
    { name: "Dr. Vikram Singh", specialty: "Pulmonologist", qualifications: "MD Pulmonary Medicine", image: doc1 }
  ]

  const blogs = [
    { id: 1, title: 'Healthy Heart Tips', excerpt: 'Simple lifestyle changes for a stronger heart.', image: hospital1 },
    { id: 2, title: 'Advances in Neurology', excerpt: 'Latest breakthroughs in brain care.', image: hospital2 },
    { id: 3, title: 'Orthopedic Care Essentials', excerpt: 'Maintain strong bones and joints.', image: doc1 },
  ]

  const heroImages = [hospital1, hospital2, hospital3, hospital4]  // array of images
  const [current, setCurrent] = useState(0)

  // Auto-rotate every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [heroImages.length])



  return (
    <div className='min-h-screen flex flex-col bg-[#fff8f0] pt-16'> {/* bg-gray-50  info section: #faf3e0 others: #fff8f0 */ }
      <Header />
      <main className='flex-grow pt-10 md:pt-10  text-center'>
        {/* Hero Section */}
        <section className="relative h-[85vh] bg-cover bg-center">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1500 ${
                i === current ? 'opacity-100' : 'opacity-0'
              } pointer-events-none`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center text-white">
             <h1 className="text-5xl font-bold">Harsha Multi Speciality Hospital</h1>
              <p className="mt-4 text-lg max-w-2xl">
                Health. Hope. Happiness. Providing exceptional healthcare with compassion and innovation.
              </p>
              <div className="mt-6 flex space-x-4 relative z-10">
               <Button text="Book Appointment" variant="primary" disabled hideWhenDisabled/>
               <Button text="Emergency: 020 123 456 789" variant="emergency" disabled hideWhenDisabled/>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-1.5 h-1.5 ${ index === current ? 'bg-white' : 'bg-gray-400'} hover:bg-gray-700 hover:scale-125 `}
              style={{borderRadius:'1.5px'}}
           />
         ))}
        </div>
        </section>

         {/* STATS STRIP */}
        <section className="bg-emerald-700 text-white py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><p className="text-3xl font-bold">25+</p><p className="text-sm">Years of Excellence</p></div>
            <div><p className="text-3xl font-bold">150+</p><p className="text-sm">Specialist Doctors</p></div>
            <div><p className="text-3xl font-bold">50K+</p><p className="text-sm">Patients Treated</p></div>
            <div><p className="text-3xl font-bold">24/7</p><p className="text-sm">Emergency Care</p></div>
          </div>
        </section>

        {/* Hospital Info Section */}
<section className="bg-[#faf3e0] py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    {/* LEFT – Logo + Hospital Name */}
    <div className="text-center md:text-left">
      <img
        src={logo2}
        alt="HMSH Logo"
        className="mx-auto md:mx-0 w-24 h-24 mb-6"
      />

      <h2 className="text-3xl font-bold text-emerald-800 mb-4">
        Harsha Multi Speciality Hospital
      </h2>

      <p className="text-gray-700 max-w-md">
        Committed to providing comprehensive medical care with compassion and
        personalized attention.
      </p>
    </div>

    {/* RIGHT – Contact Details */}
    <div className="space-y-7 text-medium text-gray-700">

      <p className="flex items-start gap-3">
        <MapPin size={22} className="mt-0.5 text-emerald-700" />
        <span>
          Bollavaram, Jagannathapuram Road,
          Proddatur – 516361
        </span>
      </p>

      <p className="flex items-center gap-3">
        <Phone size={22} className="text-emerald-700" />
        +91 789654123
      </p>

      <p className="flex items-center gap-3">
        <Phone size={22} className="text-emerald-700" />
        +91 988744455
      </p>

      <p className="flex items-center gap-3">
        <Mail size={22} className="text-emerald-700" />
        info@harshahospital.com
      </p>

      <p className="flex items-center gap-3">
        <Clock size={22} className="text-emerald-700" />
        Mon – Sat: 8:00 AM – 10:00 PM
      </p>

    </div>

  </div>
</section>



        {/* CENTERS OF EXCELLENCE */}
        <section className='bg-white py-12 relative'>
          <h2 className='text-3xl font-bold text-emerald-800'>Centers of Excellence</h2>
          <p className='text-gray-600 text-sm mb-6'>
            Discover our specialized care units designed to deliver excellence in every field.
          </p>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => document.getElementById('deptSlider').scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              <ChevronLeft size={20} />
            </button>

            <div id="deptSlider" className="flex gap-6 overflow-x-auto scroll-smooth px-10 py-6 no-scrollbar">
              {departments.map((dept, i) => (
                <DepartmentCard key={i} {...dept} />
              ))}
            </div>

            <button
              onClick={() => document.getElementById('deptSlider').scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* DOCTORS */}
        <section className='bg-[#005c52] py-12 relative'>
          <h2 className='text-3xl font-bold text-white'>Meet Our Specialists</h2>
          <p className='text-emerald-100 text-sm mb-6'>
            Experienced consultants across all major disciplines.
          </p>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => document.getElementById('docSlider').scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              <ChevronLeft size={20} />
            </button>

            <div id="docSlider" className="flex gap-6 overflow-x-auto scroll-smooth px-8 py-4 no-scrollbar">
              {doctors.map((doc, i) => (
                <DoctorCard key={i} {...doc} showButton={false} />
              ))}
            </div>

            <button
              onClick={() => document.getElementById('docSlider').scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
              <ChevronRight size={20} />
            </button>
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

        {/* CTA BAND */}
        <section className='bg-emerald-700 text-white py-10'>
          <h2 className='text-2xl font-bold'>Need immediate medical assistance?</h2>
          <p className='text-sm mb-4'>Our emergency team is available 24/7.</p>
          <div className='flex justify-center gap-4'>
            <Button text="Call Emergency" variant="emergency" />
            <Button text="Book Appointment" variant="primary" />
          </div>
        </section>

      </main>
      <Footer />
    </div>

  )
}