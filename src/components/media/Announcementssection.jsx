import { useState } from "react";
import { motion } from "framer-motion";
import { Pin, Calendar, ArrowRight, Clock, Archive, ChevronDown } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Student Felicitation Registration Open",
    date: "2026-06-20",
    publishDate: "2026-06-15",
    description:
      "Meritorious students from the constituency are invited to register for the annual felicitation ceremony. All students who have scored above 85% in Class 10 and 12 board exams are eligible.",
    image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg",
    pinned: true,
    status: "active",
    category: "Registration",
  },
  {
    id: 2,
    title: "Tiranga Salute Campaign",
    date: "2026-07-04",
    publishDate: "2026-06-14",
    description:
      "Join us in celebrating the spirit of our nation. Citizens across all wards are encouraged to participate in the Tiranga Salute Campaign on the occasion of Independence Day preparations.",
    image: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
    pinned: true,
    status: "active",
    category: "Campaign",
  },
  {
    id: 3,
    title: "Aadhaar Assistance Camp",
    date: "2026-06-22",
    publishDate: "2026-06-12",
    description:
      "Free Aadhaar enrolment, correction and update camp organised for senior citizens and residents who have not yet completed their biometric registration.",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
    pinned: false,
    status: "active",
    category: "Public Notice",
  },
  {
    id: 4,
    title: "Plantation Drive Registration",
    date: "2026-06-25",
    publishDate: "2026-06-10",
    description:
      "Be a part of the green mission. Register now to participate in the ward-level plantation drive. Saplings will be distributed free of cost to all registered volunteers.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    pinned: false,
    status: "active",
    category: "Registration",
  },
  {
    id: 5,
    title: "Health Camp Announcement",
    date: "2026-06-28",
    publishDate: "2026-06-09",
    description:
      "Free health check-up camp including blood pressure, sugar, eye testing and dental check-up. Specialists from district hospital will be present. No prior appointment needed.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    pinned: false,
    status: "active",
    category: "Health",
  },
  {
    id: 6,
    title: "Public Meeting Notice",
    date: "2026-06-18",
    publishDate: "2026-06-08",
    description:
      "A public meeting will be held at the Community Hall to discuss upcoming development works, infrastructure plans and address citizen grievances directly.",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    pinned: false,
    status: "active",
    category: "Meeting",
  },
  {
    id: 7,
    title: "Voter Registration Drive – May 2026",
    date: "2026-05-31",
    publishDate: "2026-05-15",
    description:
      "The voter registration drive conducted in May 2026 has concluded. Over 1,200 new voters were registered successfully across all booths.",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
    pinned: false,
    status: "expired",
    category: "Registration",
  },
  {
    id: 8,
    title: "Free Eye Check-up Camp – April 2026",
    date: "2026-04-20",
    publishDate: "2026-04-10",
    description:
      "The eye check-up camp held in April 2026 was a success. Over 800 residents received free spectacles under the government scheme.",
    image: "https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg",
    pinned: false,
    status: "expired",
    category: "Health",
  },
];

const categoryColors = {
  Registration: { bg: "#EEF2FF", text: "#3730A3" },
  Campaign: { bg: "#FFF7ED", text: "#C2410C" },
  "Public Notice": { bg: "#F0FDF4", text: "#166534" },
  Health: { bg: "#FDF2F8", text: "#9D174D" },
  Meeting: { bg: "#EFF6FF", text: "#1D4ED8" },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function AnnouncementCard({ item, index }) {
  const color = categoryColors[item.category] || {
    bg: "#F3F4F6",
    text: "#374151",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
        item.pinned
          ? "border-[#FC8814] shadow-[0_0_0_1px_#FC881422]"
          : "border-gray-100 hover:border-gray-200 hover:shadow-md"
      }`}
    >
      {item.pinned && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#FC8814] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          <Pin size={11} />
          Pinned
        </div>
      )}

      <div className="relative overflow-hidden h-[200px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="w-full h-full hidden items-center justify-center bg-gray-100"
          style={{ display: "none" }}
        >
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: color.bg, color: color.text }}
          >
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar size={12} />
            {formatDate(item.date)}
          </div>
        </div>

        <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3 mb-4">
          {item.description}
        </p>

        <button className="flex items-center gap-2 text-[#FC8814] text-[13px] font-semibold group/btn hover:gap-3 transition-all duration-200">
          Read More
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

function ArchiveCard({ item }) {
  const color = categoryColors[item.category] || {
    bg: "#F3F4F6",
    text: "#374151",
  };

  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full opacity-70"
            style={{ background: color.bg, color: color.text }}
          >
            {item.category}
          </span>
          <span className="text-[11px] text-gray-400">{formatDate(item.date)}</span>
        </div>
        <p className="text-[13px] font-medium text-gray-500 truncate">{item.title}</p>
      </div>
      <span className="text-[11px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full flex-shrink-0 mt-1">
        Expired
      </span>
    </div>
  );
}

export default function AnnouncementsSection() {
  const [showArchive, setShowArchive] = useState(false);
  const [filter, setFilter] = useState("All");

  const active = announcements.filter((a) => a.status === "active");
  const expired = announcements.filter((a) => a.status === "expired");

  const pinnedFirst = [...active].sort((a, b) => b.pinned - a.pinned);

  const categories = ["All", ...Array.from(new Set(active.map((a) => a.category)))];

  const filtered =
    filter === "All"
      ? pinnedFirst
      : pinnedFirst.filter((a) => a.category === filter);

  return (
    <section className="bg-[#F9F6F1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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
                Latest Updates
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
              Announcements &{" "}
              <span className="text-[#FC8814]">Updates</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl"
            >
              Important announcements, registration drives, public notices and
              citizen information updates from across the constituency.
            </motion.p>
          </div>

          {/* Active count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-100 rounded-2xl px-5 py-3"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-900 font-semibold text-sm">
              {active.length} Active
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400 text-sm">{expired.length} Archived</span>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-[#FC8814] text-white border-[#FC8814]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#FC8814] hover:text-[#FC8814]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <AnnouncementCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400 text-sm">
            No announcements in this category.
          </div>
        )}

        {/* Archive Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="flex items-center gap-3 w-full text-left group"
          >
            <div className="flex items-center gap-2.5 flex-1">
              <Archive size={18} className="text-gray-400" />
              <span className="text-gray-600 font-semibold text-sm">
                Archive — Expired Announcements ({expired.length})
              </span>
            </div>
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform duration-300 ${showArchive ? "rotate-180" : ""}`}
            />
          </button>

          <div className="h-px bg-gray-200 mt-3 mb-1" />

          {showArchive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl border border-gray-100 mt-4 px-6 py-2"
            >
              {expired.map((item) => (
                <ArchiveCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}