import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

import blogHero from "../../assets/Hospital blog cover.png";

/* ================= DATA ================= */

export const recentArticlesData = [
  {
    id: 1,
    category: "WORLD CANCER DAY",
    featuredImage:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    articleTitle:
      "World Cancer Day 2026: Awareness is the Best Defence",
    description:
      "Cancer is a major global health issue, especially in developing countries such as India.",
    authorName: "Dr. Meenu Walia",
    publishDate: "Feb 03, 2026",
  },
  {
    id: 2,
    category: "Internal Medicine",
    featuredImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    articleTitle:
      "What is Nipah Virus: Symptoms, Transmission and Prevention Tips",
    description:
      "The Nipah virus, a zoonotic virus, has become a recurring public health concern.",
    authorName: "Dr. Monica Mahajan",
    publishDate: "Feb 02, 2026",
  },
  {
    id: 3,
    category: "Cardiology",
    featuredImage:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
    articleTitle:
      "Understanding Heart Attacks: Signs You Should Never Ignore",
    description:
      "Heart attacks can happen suddenly. Knowing early signs can save lives.",
    authorName: "Dr. Rajesh Sharma",
    publishDate: "Jan 28, 2026",
  },
  {
    id: 4,
    category: "Pediatrics",
    featuredImage:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80",
    articleTitle:
      "Common Childhood Illnesses: A Guide for Parents",
    description:
      "From fevers to rashes, learn how to identify and manage illnesses.",
    authorName: "Dr. Anita Desai",
    publishDate: "Jan 25, 2026",
  },
  {
    id: 5,
    category: "Neurology",
    featuredImage:
      "https://tse1.mm.bing.net/th/id/OIP.dbtx8NJ4hwJ26gWdzDOJyQHaD_?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    articleTitle: "Migraine vs Headache: Know the Difference",
    description:
      "Many people confuse migraines with normal headaches.",
    authorName: "Dr. Rakesh Verma",
    publishDate: "Jan 20, 2026",
  },
  {
    id: 6,
    category: "Diabetology",
    featuredImage:
      "https://tse3.mm.bing.net/th/id/OIP.qD5O2NLClvaG6hg5K7mwUQHaE8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    articleTitle: "Early Signs of Diabetes You Should Not Ignore",
    description:
      "Recognizing early symptoms of diabetes can prevent complications.",
    authorName: "Dr. Kavita Rao",
    publishDate: "Jan 18, 2026",
  },
];

/* ================= MOST READ ================= */

const mostReadData = [
  {
    id: 101,
    featuredImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    articleTitle: "Simple Home Remedies For Loose Motions",
    description:
      "Loose motions or Diarrhea is one of the most common ailments.",
    authorName: "Max Team In Internal Medicine",
    publishDate: "Feb 22, 2018",
  },
  {
    id: 102,
    featuredImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    articleTitle: "Top 10 Superfoods for a Healthy Heart",
    description:
      "Heart healthy foods can reduce cardiovascular risks.",
    authorName: "Cardiac Wellness Team",
    publishDate: "Mar 10, 2023",
  },
];

/* ================= COMPONENT ================= */

export default function BlogList() {
  const navigate = useNavigate();

  const [recentPage, setRecentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mostPage, setMostPage] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const RECENT_PER_PAGE = 4;
  const intervalRef = useRef(null);

  /* categories */
  const categories = useMemo(() => {
    const cats = recentArticlesData.map((a) => a.category);
    return ["All", ...new Set(cats)];
  }, []);

  /* filter */
  const filteredArticles = useMemo(() => {
    return recentArticlesData.filter((item) => {
      const matchesSearch =
        item.articleTitle.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* SAFE pagination */
  const totalRecentPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / RECENT_PER_PAGE)
  );

  useEffect(() => {
    if (recentPage > totalRecentPages) {
      setRecentPage(totalRecentPages);
    }
  }, [totalRecentPages, recentPage]);

  const recentStart = (recentPage - 1) * RECENT_PER_PAGE;
  const recentItems = filteredArticles.slice(
    recentStart,
    recentStart + RECENT_PER_PAGE
  );

  /* MOST READ AUTO */
  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(() => {
      setMostPage((prev) =>
        prev === mostReadData.length ? 1 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  const goPrevMost = () =>
    setMostPage((p) => (p === 1 ? mostReadData.length : p - 1));

  const goNextMost = () =>
    setMostPage((p) => (p === mostReadData.length ? 1 : p + 1));

  const mostItem = mostReadData[mostPage - 1];

  /* ================= UI ================= */

  return (
    <>
      <Helmet>
        <title>Health Blogs & Articles | Hospital</title>
        <meta
          name="description"
          content="Read expert health blogs, medical tips and latest updates."
        />
      </Helmet>

      <Header />

      <main className="bg-[#fff8f0] min-h-screen">
        {/* HERO */}
        <section className="relative w-full">
          <div className="relative h-[240px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden">
            <img
              src={blogHero}
              alt="Health Blogs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[70px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Health Blogs & Articles
              </h1>
              <p className="text-white/90 mt-3 max-w-2xl text-sm sm:text-base font-semibold">
                Stay informed with expert medical insights.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">

            {/* CONTROLS */}
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
              <input
                aria-label="Search articles"
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setRecentPage(1);
                }}
                className="w-full md:w-[350px] px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm"
              />

              <select
                aria-label="Filter by category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setRecentPage(1);
                }}
                className="w-full md:w-[220px] px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* RECENT */}
            <section className="mb-20">
              <h2 className="text-center text-2xl sm:text-3xl font-bold text-emerald-800 mb-8">
                Recent Articles
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                {recentItems.map((item) => (
                  <article
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/blog/${item.id}`)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      navigate(`/blog/${item.id}`)
                    }
                    className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-5 flex flex-col"
                  >
                    <img
                      src={item.featuredImage}
                      alt={item.articleTitle}
                      loading="lazy"
                      className="w-full h-[190px] sm:h-[210px] object-cover rounded-lg mb-4"
                    />

                    <div className="text-xs text-[#005c52] font-bold uppercase mb-1">
                      {item.category}
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {item.articleTitle}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {item.description}
                    </p>

                    <div className="text-xs text-gray-500 font-medium">
                      {item.authorName} | {item.publishDate}
                    </div>
                  </article>
                ))}
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center mt-10 gap-4 items-center">
                <button
                  onClick={() =>
                    setRecentPage((p) => Math.max(p - 1, 1))
                  }
                  disabled={recentPage === 1}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40"
                >
                  Prev
                </button>

                <span className="font-semibold text-sm sm:text-base">
                  Page {recentPage} / {totalRecentPages}
                </span>

                <button
                  onClick={() =>
                    setRecentPage((p) =>
                      Math.min(p + 1, totalRecentPages)
                    )
                  }
                  disabled={recentPage >= totalRecentPages}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </section>

            {/* MOST READ */}
            <section className="mb-10">
              <h2 className="text-center text-2xl sm:text-3xl font-bold text-emerald-800 mb-8">
                Most Read Blogs
              </h2>

              {mostItem && (
                <div
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center"
                >
                  {/* LEFT ARROW */}
                  <button
                    aria-label="Previous"
                    onClick={goPrevMost}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    ‹
                  </button>

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/blog/${mostItem.id}`)}
                    className="flex flex-col md:flex-row gap-6 items-center cursor-pointer"
                  >
                    <img
                      src={mostItem.featuredImage}
                      alt={mostItem.articleTitle}
                      className="w-full md:w-[320px] h-[220px] object-cover rounded-xl"
                    />

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                        {mostItem.articleTitle}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {mostItem.description}
                      </p>

                      <div className="text-gray-500 font-semibold text-sm">
                        {mostItem.authorName}
                        <br />
                        {mostItem.publishDate}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT ARROW */}
                  <button
                    aria-label="Next"
                    onClick={goNextMost}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    ›
                  </button>
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