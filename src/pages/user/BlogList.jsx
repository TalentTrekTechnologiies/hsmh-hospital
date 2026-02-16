import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

/* ⭐ HERO IMAGE */
import blogHero from "../../assets/blogs.png";

/* ================= RECENT DATA ================= */

const recentArticlesData = [
  {
    id: 1,
    category: "WORLD CANCER DAY",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    title: "World Cancer Day 2026: Awareness is the Best Defence",
    description:
      "Cancer is a major global health issue, especially in developing countries such as India.",
    author: "Dr. Meenu Walia",
    date: "Feb 03, 2026",
  },
  {
    id: 2,
    category: "Internal Medicine",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    title:
      "What is Nipah Virus: Symptoms, Transmission and Prevention Tips",
    description:
      "The Nipah virus, a zoonotic virus, has become a recurring public health concern.",
    author: "Dr. Monica Mahajan",
    date: "Feb 02, 2026",
  },
  {
    id: 3,
    category: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
    title: "Understanding Heart Attacks: Signs You Should Never Ignore",
    description:
      "Heart attacks can happen suddenly. Knowing early signs can save lives.",
    author: "Dr. Rajesh Sharma",
    date: "Jan 28, 2026",
  },
  {
    id: 4,
    category: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80",
    title: "Common Childhood Illnesses: A Guide for Parents",
    description:
      "From fevers to rashes, learn how to identify and manage illnesses.",
    author: "Dr. Anita Desai",
    date: "Jan 25, 2026",
  },
];

/* ================= MOST READ ================= */

const mostReadData = [
  {
    id: 101,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    title: "Simple Home Remedies For Loose Motions",
    description:
      "Loose motions or Diarrhea is one of the most common ailments.",
    author: "Max Team In Internal Medicine",
    date: "Feb 22, 2018",
  },
  {
    id: 102,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    title: "Top 10 Superfoods for a Healthy Heart",
    description:
      "Heart healthy foods can reduce cardiovascular risks.",
    author: "Cardiac Wellness Team",
    date: "Mar 10, 2023",
  },
];

/* ================= COMPONENT ================= */

export default function BlogList() {
  const navigate = useNavigate();

  const [recentPage, setRecentPage] = useState(1);
  const [mostPage, setMostPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const RECENT_PER_PAGE = 4;

  /* categories */
  const categories = useMemo(() => {
    const cats = recentArticlesData.map((a) => a.category);
    return ["All", ...new Set(cats)];
  }, []);

  /* filter */
  const filteredArticles = useMemo(() => {
    return recentArticlesData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const recentStart = (recentPage - 1) * RECENT_PER_PAGE;
  const recentItems = filteredArticles.slice(
    recentStart,
    recentStart + RECENT_PER_PAGE
  );

  /* MOST READ SLIDER */
  const totalMostPages = mostReadData.length;
  const mostItem = mostReadData[mostPage - 1];

  useEffect(() => {
    const timer = setInterval(() => {
      setMostPage((prev) =>
        prev === totalMostPages ? 1 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [totalMostPages]);

  return (
    <>
      <Header />

      <main className="bg-[#fff8f0] min-h-screen">

        {/* ================= HERO ================= */}
        <section className="relative w-full">
          <div className="relative h-[260px] md:h-[320px] lg:h-[380px] w-full overflow-hidden">
            <img
              src={blogHero}
              alt="Health Blogs"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[80px]">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Health Blogs & Articles
              </h1>

              <p className="text-white/90 mt-3 max-w-2xl text-sm md:text-base font-semibold leading-relaxed">
                Stay informed with expert medical insights, health tips and
                latest updates from our specialists.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-12 px-5">
          <div className="max-w-[1200px] mx-auto">

            {/* CONTROLS */}
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-12">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-[350px] px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005c52] outline-none bg-white shadow-sm"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full md:w-[220px] px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* RECENT */}
            <section className="mb-20">
              <h2 className="text-center text-3xl font-bold text-emerald-800 mb-10">
                Recent Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {recentItems.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => navigate(`/blog/${item.id}`)}
                    className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-5 flex flex-col h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] object-cover rounded-lg mb-4"
                    />

                    <div className="text-xs text-[#005c52] font-bold uppercase mb-1">
                      {item.category}
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {item.description}
                    </p>

                    <div className="text-xs text-gray-500 font-medium">
                      {item.author} | {item.date}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* MOST READ */}
            <section className="mb-20">
              <h2 className="text-center text-3xl font-bold text-emerald-800 mb-10">
                Most Read Blogs
              </h2>

              {mostItem && (
                <div
                  onClick={() => navigate(`/blog/${mostItem.id}`)}
                  className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="overflow-hidden rounded-xl w-full md:w-[320px]">
                    <img
                      src={mostItem.image}
                      alt={mostItem.title}
                      className="w-full h-[220px] object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                      {mostItem.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {mostItem.description}
                    </p>

                    <div className="text-gray-500 font-semibold text-sm">
                      {mostItem.author}
                      <br />
                      {mostItem.date}
                    </div>
                  </div>
                </div>
              )}
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
