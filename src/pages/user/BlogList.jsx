import React, { useMemo, useState } from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

/* ================= DATA ================= */

const recentArticlesData = [
  {
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
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    title: "Simple Home Remedies For Loose Motions",
    description:
      "Loose motions or Diarrhea is one of the most common ailments.",
    author: "Max Team In Internal Medicine",
    date: "Feb 22, 2018",
  },
];

/* ================= COMPONENT ================= */

export default function Blog() {
  const [recentPage, setRecentPage] = useState(1);
  const [mostPage, setMostPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const RECENT_PER_PAGE = 4;
  const MOST_PER_PAGE = 1;

  /* ===== UNIQUE CATEGORIES ===== */
  const categories = useMemo(() => {
    const cats = recentArticlesData.map((a) => a.category);
    return ["All", ...new Set(cats)];
  }, []);

  /* ===== FILTERED DATA (REAL-TIME) ===== */
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

  /* ===== PAGINATION ===== */
  const totalRecentPages = Math.ceil(
    filteredArticles.length / RECENT_PER_PAGE
  );

  const recentStart = (recentPage - 1) * RECENT_PER_PAGE;
  const recentItems = filteredArticles.slice(
    recentStart,
    recentStart + RECENT_PER_PAGE
  );

  const mostItem = mostReadData[(mostPage - 1) * MOST_PER_PAGE];

  /* reset page when filter changes */
  React.useEffect(() => {
    setRecentPage(1);
  }, [search, category]);

  return (
    <>
      <Header />

      {/* spacing for your fixed header */}
      <main className="bg-[#f9f9f9] py-10 pt-[140px]">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* ================= TOP CONTROLS ================= */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
            
            {/* 🔍 Search */}
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[350px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* 🏷 Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-[220px] px-4 py-2 border rounded-lg"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* ================= RECENT ARTICLES ================= */}
          <section className="mb-16">
            <h2 className="text-center text-3xl font-bold mb-8">
              Recent Articles
            </h2>

            {recentItems.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No articles found.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {recentItems.map((item, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl hover:scale-[1.02] transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] object-cover rounded-lg mb-4"
                    />

                    <div className="text-xs text-blue-600 font-bold uppercase mb-1">
                      {item.category}
                    </div>

                    <h3 className="text-lg font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>

                    <div className="text-xs text-gray-500 font-medium">
                      {item.author} | {item.date}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalRecentPages > 1 && (
              <div className="flex justify-center gap-4 mt-8 font-bold">
                <button
                  onClick={() =>
                    setRecentPage((p) => Math.max(1, p - 1))
                  }
                >
                  &lt;
                </button>

                {Array.from(
                  { length: totalRecentPages },
                  (_, i) => i + 1
                ).map((n) => (
                  <button
                    key={n}
                    onClick={() => setRecentPage(n)}
                    className={`px-2 ${
                      recentPage === n
                        ? "border-b-2 border-black"
                        : ""
                    }`}
                  >
                    {n}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setRecentPage((p) =>
                      Math.min(totalRecentPages, p + 1)
                    )
                  }
                >
                  &gt;
                </button>
              </div>
            )}
          </section>

          {/* ================= MOST READ ================= */}
          <section className="mb-16">
            <h2 className="text-center text-3xl font-bold mb-8">
              Most Read Blogs
            </h2>

            {mostItem && (
              <div className="bg-white shadow-md p-6 flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={mostItem.image}
                  alt={mostItem.title}
                  className="w-full md:w-[300px] h-[200px] object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
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
      </main>

      <Footer />
    </>
  );
}
