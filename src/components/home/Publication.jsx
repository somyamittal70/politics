import React, { useState } from "react";
import {
  FiDownload,
  FiExternalLink,
  FiChevronRight,
  FiBook,
} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

function Publication() {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const book = {
    id: 1,
    title: "Why Bharat Needs Modi",
    subtitle: "Beyond the Politics",
    author: "Insights on Indian Politics",
    description:
      "A comprehensive exploration of India's political landscape and the vision for national development. This book delves into the policies, strategies, and leadership qualities that have shaped modern India. Discover the strategic vision and governance philosophy that has influenced contemporary Indian politics.",
    image: "/images/Whyneed.jpg",
    rating: 4.5,
    reviews: 1240,
    publisher: "Amazon Digital",
    year: 2023,
    pages: 356,
    amazonLink:
      "https://www.amazon.in/Why-Bharat-Needs-Modi-Beyond/dp/B0DKC7LF3X",
    highlights: [
      "In-depth political analysis",
      "Strategic vision for India",
      "Contemporary governance insights",
      "Leadership perspectives",
      "National development policies",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-stone-50">
      {/* Header Section */}
      <div className="relative overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Publications
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore insightful works on politics, governance, and national
            development
          </p>
        </div>

        {/* Decorative accent */}
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#E8541A" }}
        />
      </div>

      {/* Books Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Single Book Card */}
        <div className="relative">
          {/* Book Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Book Image Section */}
              <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center min-h-96 md:min-h-full">
                <div
                  className="relative w-full h-full flex items-center justify-center p-8 md:p-6"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {!imageError ? (
                    <>
                      <img
                        src="/images/Whyneed.jpg"
                        alt={book.title}
                        onError={() => setImageError(true)}
                        loading="lazy"
                        className={`h-80 md:h-96 w-auto object-contain transition-transform duration-500 ${
                          isHovered ? "scale-105" : "scale-100"
                        }`}
                        crossOrigin="anonymous"
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-80 md:h-96 gap-4">
                      <div
                        className="p-6 rounded-full"
                        style={{ backgroundColor: "#E8541A", color: "white" }}
                      >
                        <FiBook size={48} />
                      </div>
                      <p className="text-slate-600 font-semibold">
                        {book.title}
                      </p>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
                </div>

                {/* Rating Badge */}
                <div
                  className="absolute top-4 right-4 bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg z-10"
                  style={{ borderLeft: `4px solid #E8541A` }}
                >
                  <AiFillStar
                    style={{ color: "#E8541A" }}
                    className="text-lg"
                  />
                  <span className="font-bold text-slate-900">
                    {book.rating}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({book.reviews})
                  </span>
                </div>
              </div>

              {/* Book Details Section */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                {/* Top Content */}
                <div>
                  <div className="mb-6">
                    <div
                      className="text-sm font-bold mb-2 uppercase tracking-wider"
                      style={{ color: "#E8541A" }}
                    >
                      {book.year} • {book.pages} Pages • {book.publisher}
                    </div>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {book.title}
                    </h2>
                    <p
                      className="text-lg mb-4"
                      style={{ color: "#E8541A", fontStyle: "italic" }}
                    >
                      {book.subtitle}
                    </p>
                    <p className="text-slate-600 text-base">{book.author}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-8 text-base font-light">
                    {book.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">
                      Key Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {book.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FiChevronRight
                            className="mt-1 flex-shrink-0"
                            style={{ color: "#E8541A" }}
                            size={18}
                            strokeWidth={3}
                          />
                          <span className="text-slate-700 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
                    <span>
                      ✓ {book.reviews.toLocaleString()} verified reviews
                    </span>
                    <span>•</span>
                    <span>Bestseller</span>
                  </div>
                </div>

                {/* Bottom - Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-95"
                    style={{
                      backgroundColor: "#E8541A",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-3px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <FiExternalLink size={20} />
                    <span>View on Amazon</span>
                  </a>
                  <button
                    className="flex-1 px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-2 border-2 transition-all duration-300 hover:shadow-lg active:scale-95"
                    style={{
                      borderColor: "#E8541A",
                      color: "#E8541A",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E8541A";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#E8541A";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FiDownload size={20} />
                    <span>Download Sample</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stay Updated with Latest Publications
          </h2>
          <p className="text-slate-600 mb-8 text-base">
            Subscribe to receive updates on new publications and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E8541A]"
            />
            <button
              className="px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg active:scale-95"
              style={{
                backgroundColor: "#E8541A",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
