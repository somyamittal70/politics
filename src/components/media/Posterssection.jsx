import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  X,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ChevronDown,
  Link,
  Check,
} from "lucide-react";

const categories = [
  "All",
  "Event Posters",
  "Registration Campaigns",
  "Public Awareness",
  "National Day Campaigns",
  "Festival Greetings",
  "Community Service",
  "Organisational Activities",
];

const posters = [
  {
    id: 1,
    title: "Tiranga Salute Campaign 2026",
    date: "2026-06-12",
    category: "National Day Campaigns",
    image: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
    downloadEnabled: true,
  },
  {
    id: 2,
    title: "Student Felicitation Registration Open",
    date: "2026-06-10",
    category: "Registration Campaigns",
    image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg",
    downloadEnabled: true,
  },
  {
    id: 3,
    title: "Plantation Drive – Join the Green Mission",
    date: "2026-06-05",
    category: "Community Service",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    downloadEnabled: true,
  },
  {
    id: 4,
    title: "Free Health Camp – Know Your Numbers",
    date: "2026-05-28",
    category: "Public Awareness",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    downloadEnabled: true,
  },
  {
    id: 5,
    title: "Eid Mubarak – Community Greetings",
    date: "2026-04-01",
    category: "Festival Greetings",
    image: "https://images.pexels.com/photos/3581913/pexels-photo-3581913.jpeg",
    downloadEnabled: true,
  },
  {
    id: 6,
    title: "Annual Organisational Convention 2026",
    date: "2026-05-20",
    category: "Organisational Activities",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    downloadEnabled: true,
  },
  {
    id: 7,
    title: "Voter Awareness – Your Vote, Your Right",
    date: "2026-05-10",
    category: "Public Awareness",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
    downloadEnabled: true,
  },
  {
    id: 8,
    title: "Republic Day Celebration – 26 January",
    date: "2026-01-24",
    category: "National Day Campaigns",
    image: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
    downloadEnabled: true,
  },
  {
    id: 9,
    title: "Holi Greetings from the Constituency",
    date: "2026-03-14",
    category: "Festival Greetings",
    image: "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg",
    downloadEnabled: true,
  },
  {
    id: 10,
    title: "Aadhaar Camp – Register Today",
    date: "2026-06-01",
    category: "Registration Campaigns",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
    downloadEnabled: true,
  },
  {
    id: 11,
    title: "Youth Outreach Event Poster",
    date: "2026-04-15",
    category: "Event Posters",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
    downloadEnabled: true,
  },
  {
    id: 12,
    title: "Blood Donation Drive – Give Life",
    date: "2026-03-20",
    category: "Community Service",
    image: "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg",
    downloadEnabled: true,
  },
];

const categoryColors = {
  "Event Posters": { bg: "#EFF6FF", text: "#1D4ED8" },
  "Registration Campaigns": { bg: "#F5F3FF", text: "#6D28D9" },
  "Public Awareness": { bg: "#ECFDF5", text: "#065F46" },
  "National Day Campaigns": { bg: "#FFF7ED", text: "#C2410C" },
  "Festival Greetings": { bg: "#FDF2F8", text: "#9D174D" },
  "Community Service": { bg: "#F0FDF4", text: "#166534" },
  "Organisational Activities": { bg: "#FEFCE8", text: "#854D0E" },
};

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getPosterUrl() {
  return typeof window !== "undefined" ? window.location.href : "";
}

function handleDownload(poster) {
  const link = document.createElement("a");
  link.href = poster.image;
  link.download = `${poster.title.replace(/\s+/g, "_")}.jpg`;
  link.target = "_blank";
  link.click();
}

function handleWhatsApp(poster) {
  const text = encodeURIComponent(`${poster.title}\n${poster.image}`);
  window.open(`https://wa.me/?text=${text}`, "_blank");
}

function handleFacebook(poster) {
  const url = encodeURIComponent(poster.image);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function handleInstagram(poster) {
  handleDownload(poster);
}

function handleCopyLink(poster, setCopied) {
  const url = poster.image;
  navigator.clipboard.writeText(url).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  });
}

function ShareButtons({ poster, size = "card" }) {
  const [copied, setCopied] = useState(false);

  const isCard = size === "card";

  const btnBase = isCard
    ? "flex items-center justify-center rounded-xl transition-all duration-200 active:scale-95"
    : "flex items-center justify-center gap-2 rounded-xl transition-all duration-200 active:scale-95 font-semibold py-3 w-full";

  const iconSize = isCard ? 13 : 16;

  return (
    <div
      className={
        isCard
          ? "grid grid-cols-4 gap-1.5 mt-3"
          : "flex flex-col gap-2.5 mt-2"
      }
      onClick={(e) => e.stopPropagation()}
    >
      {/* WhatsApp */}
      <button
        onClick={() => handleWhatsApp(poster)}
        title="Share on WhatsApp"
        className={`${btnBase} ${
          isCard
            ? "bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white py-2"
            : "bg-[#25D366] hover:bg-[#1ebe5a] text-white"
        }`}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {!isCard && <span>Share on WhatsApp</span>}
      </button>

      {/* Facebook */}
      <button
        onClick={() => handleFacebook(poster)}
        title="Share on Facebook"
        className={`${btnBase} ${
          isCard
            ? "bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white py-2"
            : "bg-[#1877F2] hover:bg-[#1464d4] text-white"
        }`}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        {!isCard && <span>Share on Facebook</span>}
      </button>

      {/* Instagram — download first */}
      <button
        onClick={() => handleInstagram(poster)}
        title="Download for Instagram"
        className={`${btnBase} ${
          isCard
            ? "bg-[#E1306C]/10 hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-[#E1306C] hover:text-white py-2"
            : "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white"
        }`}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        {!isCard && <span>Download for Instagram</span>}
      </button>

      {/* Copy Link */}
      <button
        onClick={() => handleCopyLink(poster, setCopied)}
        title={copied ? "Copied!" : "Copy Link"}
        className={`${btnBase} ${
          isCard
            ? copied
              ? "bg-green-500 text-white py-2"
              : "bg-gray-100 hover:bg-gray-800 text-gray-500 hover:text-white py-2"
            : copied
            ? "bg-green-600 text-white"
            : "bg-gray-800 hover:bg-gray-900 text-white"
        }`}
      >
        {copied ? (
          <Check size={iconSize} />
        ) : (
          <Link size={iconSize} />
        )}
        {!isCard && <span>{copied ? "Copied!" : "Copy Link"}</span>}
      </button>
    </div>
  );
}

function PosterCard({ item, index, onClick }) {
  const color = categoryColors[item.category] || { bg: "#F3F4F6", text: "#374151" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Image — clickable for lightbox */}
      <div
        className="relative overflow-hidden aspect-[3/4] bg-gray-100 cursor-pointer"
        onClick={() => onClick(item)}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <ZoomIn size={20} className="text-white" />
            </div>
            <span className="text-white text-xs font-medium">Full Screen</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span
          className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: color.bg, color: color.text }}
        >
          {item.category}
        </span>

        <h3 className="text-[13px] font-semibold text-gray-900 leading-snug mt-2.5 mb-1 line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-400 text-[11px] mb-3">
          <Calendar size={10} />
          {formatDate(item.date)}
        </div>

        {/* Download button */}
        {item.downloadEnabled && (
          <button
            onClick={() => handleDownload(item)}
            className="w-full flex items-center justify-center gap-1.5 bg-[#FC8814] hover:bg-[#e07710] text-white text-[11px] font-semibold py-2 rounded-xl transition-colors duration-200 mb-1"
          >
            <Download size={12} />
            Download Poster
          </button>
        )}

        {/* Quick Share Row */}
        <div className="border-t border-gray-100 pt-3 mt-1">
          <p className="text-[10px] text-gray-400 mb-1.5 font-medium uppercase tracking-wide">
            Quick Share
          </p>
          <ShareButtons poster={item} size="card" />
        </div>
      </div>
    </motion.div>
  );
}

function LightboxModal({ poster, allPosters, onClose, onNavigate }) {
  if (!poster) return null;
  const currentIndex = allPosters.findIndex((p) => p.id === poster.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allPosters.length - 1;
  const color = categoryColors[poster.category] || { bg: "#F3F4F6", text: "#374151" };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.93 }}
          transition={{ duration: 0.22 }}
          className="relative w-full max-w-4xl flex flex-col lg:flex-row bg-[#111] rounded-2xl overflow-hidden max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-white" />
          </button>

          {/* Image */}
          <div className="relative lg:w-[55%] bg-black flex items-center justify-center min-h-[260px]">
            <img
              src={poster.image}
              alt={poster.title}
              className="w-full h-full object-contain max-h-[60vh] lg:max-h-[85vh]"
            />

            {hasPrev && (
              <button
                onClick={() => onNavigate(allPosters[currentIndex - 1])}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={18} className="text-white" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={() => onNavigate(allPosters[currentIndex + 1])}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            )}

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white/60 text-[11px] px-3 py-1 rounded-full">
              {currentIndex + 1} / {allPosters.length}
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:w-[45%] p-6 lg:p-7 flex flex-col overflow-y-auto">
            <div>
              <span
                className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                style={{ background: color.bg + "22", color: "#FC8814" }}
              >
                {poster.category}
              </span>

              <h2
                className="text-white text-xl font-bold leading-snug mt-4 mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {poster.title}
              </h2>

              <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
                <Calendar size={13} />
                {formatDate(poster.date)}
              </div>

              {/* Download */}
              {poster.downloadEnabled && (
                <button
                  onClick={() => handleDownload(poster)}
                  className="w-full flex items-center justify-center gap-2 bg-[#FC8814] hover:bg-[#e07710] text-white font-semibold py-3 rounded-xl transition-colors duration-200 mb-4"
                >
                  <Download size={16} />
                  Download Poster
                </button>
              )}

              {/* Share section */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-3">
                  Quick Share
                </p>
                <ShareButtons poster={poster} size="lightbox" />
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full text-white/30 hover:text-white/60 text-sm py-3 mt-4 transition-colors border-t border-white/10"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const INITIAL_COUNT = 8;

export default function PostersSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeFilter === "All"
      ? posters
      : posters.filter((p) => p.category === activeFilter);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <>
      <section className="bg-[#F9F6F1] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#FC8814]" />
                <span className="uppercase tracking-[0.2em] text-[#FC8814] text-xs font-semibold">
                  Creatives & Campaigns
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Posters &{" "}
                <span className="text-[#FC8814]">Campaign Creatives</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl"
              >
                Official posters, event graphics and campaign creatives — download
                or share directly on WhatsApp, Facebook and more.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-100 rounded-2xl px-5 py-3"
            >
              <Download size={14} className="text-[#FC8814]" />
              <span className="text-gray-900 font-semibold text-sm">
                {posters.filter((p) => p.downloadEnabled).length} Downloadable
              </span>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setVisible(INITIAL_COUNT);
                }}
                className={`text-xs px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#FC8814] text-white border-[#FC8814]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#FC8814] hover:text-[#FC8814]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          {shown.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {shown.map((item, index) => (
                <PosterCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={setLightbox}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              No posters in this category yet.
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setVisible((v) => v + 4)}
                className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#FC8814] text-gray-700 hover:text-[#FC8814] px-8 py-4 rounded-full transition-all duration-300 text-sm font-medium group"
              >
                Load More Posters
                <ChevronDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform duration-200 text-[#FC8814]"
                />
              </button>
            </motion.div>
          )}

          {!hasMore && shown.length > INITIAL_COUNT && (
            <p className="text-center text-gray-400 text-xs mt-10">
              All {filtered.length} posters loaded
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <LightboxModal
          poster={lightbox}
          allPosters={filtered}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}
    </>
  );
}