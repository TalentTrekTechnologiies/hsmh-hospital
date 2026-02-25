// src/pages/user/BlogDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

/* ================= DATA ================= */

const blogData = [
  {
    id: 1,
    category: "WORLD CANCER DAY",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    title: "World Cancer Day 2026: Awareness is the Best Defence",
    author: "Dr. Meenu Walia",
    date: "Feb 03, 2026",
    content: `
Cancer is one of the leading health concerns worldwide. Early detection and awareness play a crucial role in saving lives.

World Cancer Day reminds us about the importance of regular screenings, healthy lifestyle choices, and timely medical consultation.

Hospitals and healthcare providers across the world are working continuously to improve cancer treatment facilities and patient outcomes.

Maintaining a balanced diet, regular exercise, and avoiding tobacco significantly reduces cancer risk.

If you notice unusual symptoms, consult a healthcare professional immediately.
    `,
  },
  {
    id: 2,
    category: "Internal Medicine",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    title:
      "What is Nipah Virus: Symptoms, Transmission and Prevention Tips",
    author: "Dr. Monica Mahajan",
    date: "Feb 02, 2026",
    content: `
The Nipah virus is a zoonotic virus that spreads from animals to humans.

Common symptoms include fever, headache, dizziness, and respiratory issues.

Preventive measures include avoiding contact with infected animals and maintaining proper hygiene.

Early medical attention is critical for managing complications effectively.

Public awareness and surveillance are key to preventing outbreaks.
    `,
  },
  {
    id: 3,
    category: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=900&q=80",
    title: "Understanding Heart Attacks: Signs You Should Never Ignore",
    author: "Dr. Rajesh Sharma",
    date: "Jan 28, 2026",
    content: `
Heart attacks can occur suddenly and require immediate medical attention.

Warning signs include chest pain, shortness of breath, nausea, and sweating.

Lifestyle changes such as healthy diet, regular exercise, and stress management reduce risk.

Timely treatment can save heart muscle and improve survival rates.

Always call emergency services if symptoms appear.
    `,
  },
  {
    id: 4,
    category: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80",
    title: "Common Childhood Illnesses: A Guide for Parents",
    author: "Dr. Anita Desai",
    date: "Jan 25, 2026",
    content: `
Children commonly experience fevers, colds, and minor infections.

Parents should monitor symptoms and maintain proper hygiene at home.

Vaccinations play a vital role in preventing serious childhood diseases.

Consult a pediatrician if symptoms persist or worsen.

Early care ensures faster recovery and better child health.
    `,
  },
  {
    id: 5,
    category: "Neurology",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.dbtx8NJ4hwJ26gWdzDOJyQHaD_?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Migraine vs Headache: Know the Difference",
    author: "Dr. Rakesh Verma",
    date: "Jan 20, 2026",
    content: `
Many people confuse migraines with normal headaches.

Migraines often include severe throbbing pain, nausea, and sensitivity to light.

Identifying triggers such as stress, lack of sleep, and certain foods helps prevention.

Consult a neurologist if headaches are frequent or severe.
    `,
  },
  {
    id: 6,
    category: "Diabetology",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.qD5O2NLClvaG6hg5K7mwUQHaE8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Early Signs of Diabetes You Should Not Ignore",
    author: "Dr. Kavita Rao",
    date: "Jan 18, 2026",
    content: `
Diabetes often develops silently in early stages.

Common warning signs include frequent urination, excessive thirst, and fatigue.

Healthy diet, weight management, and regular checkups help control diabetes.

Early diagnosis prevents long-term complications.
    `,
  },
  {
    id: 101,
    category: "Health Tips",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    title: "Simple Home Remedies For Loose Motions",
    author: "Max Team In Internal Medicine",
    date: "Feb 22, 2018",
    content: `
Loose motions or diarrhea is very common across all age groups.

Home remedies such as proper hydration, ORS solution, and light diet can help manage symptoms.

However, if dehydration or persistent symptoms occur, immediate medical consultation is necessary.

Maintaining hygiene and safe food habits significantly reduces the risk of infection.
    `,
  },
  {
    id: 102,
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
    title: "Top 10 Superfoods for a Healthy Heart",
    author: "Cardiac Wellness Team",
    date: "Mar 10, 2023",
    content: `
Heart healthy foods play a crucial role in preventing cardiovascular diseases.

Include nuts, berries, fatty fish, whole grains, and leafy vegetables in your daily diet.

Regular exercise along with balanced nutrition significantly improves heart health.

Always consult a healthcare professional before making major dietary changes.
    `,
  },
];

/* ================= COMPONENT ================= */

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogId = Number(id);
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <>
        <Header />
        <main className="bg-[#fff8f0] pt-[120px] min-h-screen flex items-center justify-center">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-800">
            Blog not found
          </h2>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = blogData.findIndex((b) => b.id === blogId);
  const prevBlog = blogData[currentIndex - 1];
  const nextBlog = blogData[currentIndex + 1];

  // Handle keyboard navigation
  const handleKeyDown = (e, direction) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (direction === 'prev' && prevBlog) {
        navigate(`/blog/${prevBlog.id}`);
      } else if (direction === 'next' && nextBlog) {
        navigate(`/blog/${nextBlog.id}`);
      }
    }
  };

  return (
    <>
      <Header />

      <main className="bg-[#fff8f0] pt-[100px] sm:pt-[110px] pb-16 min-h-screen">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6">
          <article className="bg-white rounded-3xl shadow-lg p-5 sm:p-8 md:p-10">

            {/* CATEGORY */}
            <div className="text-[#005c52] font-bold uppercase mb-2 text-xs sm:text-sm tracking-wide">
              {blog.category}
            </div>

            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-emerald-800">
              {blog.title}
            </h1>

            {/* META */}
            <div className="text-gray-500 mb-6 sm:mb-8 font-medium text-sm sm:text-base">
              {blog.author} • {blog.date}
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl mb-6 sm:mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover rounded-2xl hover:scale-[1.02] transition duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/900x600?text=Image+Not+Found';
                }}
              />
            </div>

            {/* CONTENT */}
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px] sm:text-[17px] md:text-lg">
              {blog.content}
            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-between mt-12 gap-4">
              <button
                disabled={!prevBlog}
                onClick={() => prevBlog && navigate(`/blog/${prevBlog.id}`)}
                onKeyDown={(e) => handleKeyDown(e, 'prev')}
                className={`px-5 py-3 rounded-full font-semibold transition border ${
                  prevBlog
                    ? "bg-white border-gray-300 hover:bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#005c52] focus:outline-none"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                aria-label="Previous article"
                tabIndex={prevBlog ? 0 : -1}
              >
                ← Previous
              </button>

              <button
                disabled={!nextBlog}
                onClick={() => nextBlog && navigate(`/blog/${nextBlog.id}`)}
                onKeyDown={(e) => handleKeyDown(e, 'next')}
                className={`px-5 py-3 rounded-full font-semibold transition border ${
                  nextBlog
                    ? "bg-[#005c52] text-white hover:bg-[#004743] focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                aria-label="Next article"
                tabIndex={nextBlog ? 0 : -1}
              >
                Next →
              </button>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}