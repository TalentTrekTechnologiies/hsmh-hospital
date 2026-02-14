import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

/* ✅ SAME DATA (must match BlogList ids) */

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

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogId = Number(id);
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <>
        <Header />
        <main className="pt-[140px] text-center py-20">
          <h2 className="text-2xl font-bold">Blog not found</h2>
        </main>
        <Footer />
      </>
    );
  }

  /* ===== NEXT / PREV ===== */
  const currentIndex = blogData.findIndex((b) => b.id === blogId);
  const prevBlog = blogData[currentIndex - 1];
  const nextBlog = blogData[currentIndex + 1];

  return (
    <>
      <Header />

      <main className="bg-[#f9f9f9] pt-[140px] pb-16">
        <div className="max-w-[900px] mx-auto px-5">

          {/* CATEGORY */}
          <div className="text-blue-600 font-bold uppercase mb-2">
            {blog.category}
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>

          {/* META */}
          <div className="text-gray-500 mb-6">
            {blog.author} • {blog.date}
          </div>

          {/* IMAGE */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[350px] object-cover rounded-xl mb-8 shadow-md"
          />

          {/* CONTENT */}
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
            {blog.content}
          </div>

          {/* NAV BUTTONS */}
          <div className="flex justify-between mt-12 gap-4">

            <button
              disabled={!prevBlog}
              onClick={() => prevBlog && navigate(`/blog/${prevBlog.id}`)}
              className={`px-5 py-2 rounded-lg font-semibold ${
                prevBlog
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
            >
              ← Previous
            </button>

            <button
              disabled={!nextBlog}
              onClick={() => nextBlog && navigate(`/blog/${nextBlog.id}`)}
              className={`px-5 py-2 rounded-lg font-semibold ${
                nextBlog
                  ? "bg-[#004743] text-white hover:opacity-90"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
