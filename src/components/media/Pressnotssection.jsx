import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  FileText,
  Newspaper,
  Megaphone,
  ClipboardList,
  BookOpen,
  Building2,
  ChevronDown,
  X,
  Download,
  ExternalLink,
  Archive,
  Search,
} from "lucide-react";

const contentTypes = [
  "All",
  "Press Releases",
  "Media Coverage",
  "Newspaper Articles",
  "Event Reports",
  "Official Statements",
  "Organisational Updates",
];

const typeConfig = {
  "Press Releases": {
    icon: Megaphone,
    bg: "#FFF7ED",
    text: "#C2410C",
    border: "#FED7AA",
  },
  "Media Coverage": {
    icon: Newspaper,
    bg: "#EFF6FF",
    text: "#1D4ED8",
    border: "#BFDBFE",
  },
  "Newspaper Articles": {
    icon: BookOpen,
    bg: "#F5F3FF",
    text: "#6D28D9",
    border: "#DDD6FE",
  },
  "Event Reports": {
    icon: ClipboardList,
    bg: "#F0FDF4",
    text: "#166534",
    border: "#BBF7D0",
  },
  "Official Statements": {
    icon: FileText,
    bg: "#FDF2F8",
    text: "#9D174D",
    border: "#FBCFE8",
  },
  "Organisational Updates": {
    icon: Building2,
    bg: "#FEFCE8",
    text: "#854D0E",
    border: "#FEF08A",
  },
};

const pressEntries = [
  {
    id: 1,
    headline: "Constituency Development Fund Allocated for Road Widening Project",
    date: "2026-06-12",
    source: "Dainik Jagran",
    sourceLang: "Hindi",
    type: "Media Coverage",
    summary:
      "Local media covered the announcement of Rs. 4.2 crore allocated from the constituency development fund for widening of the main road connecting the ward to the district headquarters.",
    image: "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg",
    hasPdf: false,
    archived: false,
    featured: true,
  },
  {
    id: 2,
    headline: "Press Release: Student Felicitation Ceremony – June 2026",
    date: "2026-06-08",
    source: "Official Media Cell",
    sourceLang: "English",
    type: "Press Releases",
    summary:
      "Official press release announcing the annual student felicitation ceremony. All students who have secured distinction in Class 10 and Class 12 board examinations are eligible for recognition.",
    image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg",
    hasPdf: true,
    pdfLabel: "Download Press Release",
    archived: false,
    featured: true,
  },
  {
    id: 3,
    headline: "Aadhaar Camp a Success: Over 600 Residents Enrolled in One Day",
    date: "2026-06-05",
    source: "Amar Ujala",
    sourceLang: "Hindi",
    type: "Event Reports",
    summary:
      "Local newspaper reported the successful conclusion of the Aadhaar enrolment and correction camp. Over 600 residents, including senior citizens and first-time applicants, were enrolled in a single day.",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
    hasPdf: false,
    archived: false,
    featured: false,
  },
  {
    id: 4,
    headline: "Official Statement on Plantation Drive – Green Mission 2026",
    date: "2026-05-30",
    source: "Official Media Cell",
    sourceLang: "English",
    type: "Official Statements",
    summary:
      "Official statement issued regarding the ward-level plantation drive. The statement outlines targets, participating volunteers, species of trees planted and future plans for the green mission initiative.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    hasPdf: true,
    pdfLabel: "Download Statement",
    archived: false,
    featured: false,
  },
  {
    id: 5,
    headline: "Annual Convention Resolution Published – Organisational Direction for 2026–27",
    date: "2026-05-22",
    source: "Internal Bulletin",
    sourceLang: "Hindi",
    type: "Organisational Updates",
    summary:
      "The resolutions passed at the Annual Organisational Convention have been published. The document outlines the key priorities, leadership responsibilities and community initiatives planned for the coming year.",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    hasPdf: true,
    pdfLabel: "Download Resolution",
    archived: false,
    featured: false,
  },
  {
    id: 6,
    headline: "Health Camp Reaches 800 Citizens, Free Medicines Distributed",
    date: "2026-05-15",
    source: "Hindustan",
    sourceLang: "Hindi",
    type: "Newspaper Articles",
    summary:
      "Hindustan's local edition covered the free health camp organised for residents. The report highlighted the participation of doctors from the district hospital and the distribution of free medicines to over 800 citizens.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    hasPdf: false,
    archived: false,
    featured: false,
  },
  {
    id: 7,
    headline: "Public Meeting Held to Address Drainage and Infrastructure Concerns",
    date: "2026-05-08",
    source: "Navbharat Times",
    sourceLang: "Hindi",
    type: "Media Coverage",
    summary:
      "A public meeting was covered by Navbharat Times in which citizens raised concerns about waterlogging, drainage maintenance and upcoming road repair works. Officials committed to resolving issues within 60 days.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    hasPdf: false,
    archived: false,
    featured: false,
  },
  {
    id: 8,
    headline: "Voter Awareness Campaign Recognised by District Administration",
    date: "2026-04-20",
    source: "Pioneer",
    sourceLang: "English",
    type: "Media Coverage",
    summary:
      "The voter awareness initiative conducted ahead of local elections was recognised by the district administration and covered by The Pioneer. Over 5,000 first-time voters were reached through door-to-door outreach.",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
    hasPdf: false,
    archived: false,
    featured: false,
  },
  {
    id: 9,
    headline: "Republic Day Event Report – Constituency Celebrations 2026",
    date: "2026-01-27",
    source: "Official Media Cell",
    sourceLang: "English",
    type: "Event Reports",
    summary:
      "Official event report from the Republic Day celebrations held at the constituency grounds. The report includes programme schedule, attendance figures, cultural highlights and photographs from the event.",
    image: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
    hasPdf: true,
    pdfLabel: "Download Event Report",
    archived: true,
  },
  {
    id: 10,
    headline: "Blood Donation Drive Collects 120 Units – A Constituency Record",
    date: "2026-03-21",
    source: "Dainik Bhaskar",
    sourceLang: "Hindi",
    type: "Newspaper Articles",
    summary:
      "Dainik Bhaskar reported that the blood donation drive organised by constituency volunteers achieved a record 120 units of blood donated in a single day, all directed to the district hospital blood bank.",
    image: "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg",
    hasPdf: false,
    archived: true,
  },
];

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function TypeBadge({ type, small = false }) {
  const cfg = typeConfig[type] || { bg: "#F3F4F6", text: "#374151", icon: FileText };
  const Icon = cfg.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full ${
        small ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1"
      }`}
      style={{ background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}` }}
    >
      <Icon size={small ? 10 : 11} />
      {type}
    </span>
  );
}

function FeaturedCard({ item, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer lg:col-span-2"
      onClick={() => onClick(item)}
    >
      <div className="flex flex-col sm:flex-row h-full">
        <div className="relative sm:w-[42%] overflow-hidden bg-gray-100 min-h-[220px]">
          <img
            src={item.image}
            alt={item.headline}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
          <div className="absolute top-3 left-3">
            <span className="bg-[#FC8814] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              Featured
            </span>
          </div>
        </div>
        <div className="flex-1 p-6 lg:p-7 flex flex-col justify-between">
          <div>
            <TypeBadge type={item.type} />
            <h3 className="text-gray-900 text-lg lg:text-xl font-bold leading-snug mt-3 mb-3 line-clamp-3">
              {item.headline}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {item.summary}
            </p>
          </div>
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Calendar size={12} />
                {formatDate(item.date)}
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                <Newspaper size={12} className="text-[#FC8814]" />
                {item.source}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[#FC8814] text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
              Read More <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StandardCard({ item, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden h-[180px] bg-gray-100">
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {item.hasPdf && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
            <FileText size={9} />
            PDF
          </div>
        )}
      </div>
      <div className="p-5">
        <TypeBadge type={item.type} small />
        <h3 className="text-gray-900 text-[14px] font-bold leading-snug mt-2.5 mb-2 line-clamp-2">
          {item.headline}
        </h3>
        <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2 mb-4">
          {item.summary}
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div>
            <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
              <Calendar size={10} />
              {formatDate(item.date)}
            </div>
            <div className="flex items-center gap-1 text-[#FC8814] text-[11px] font-semibold mt-0.5">
              <Newspaper size={10} />
              {item.source}
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#FC8814] text-[11px] font-semibold group-hover:gap-2 transition-all">
            Read <ArrowRight size={11} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DetailModal({ entry, onClose }) {
  if (!entry) return null;
  const cfg = typeConfig[entry.type] || { bg: "#F3F4F6", text: "#374151", icon: FileText };
  const Icon = cfg.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.22 }}
          className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-[220px] bg-gray-100 flex-shrink-0">
            <img
              src={entry.image}
              alt={entry.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            >
              <X size={15} className="text-white" />
            </button>
            <div className="absolute bottom-4 left-5">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: cfg.bg, color: cfg.text }}
              >
                <Icon size={11} />
                {entry.type}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1">
            <h2 className="text-gray-900 text-xl font-bold leading-snug mb-3">
              {entry.headline}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mb-5 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Calendar size={13} className="text-[#FC8814]" />
                {formatDate(entry.date)}
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Newspaper size={13} className="text-[#FC8814]" />
                <span className="font-medium">{entry.source}</span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-400 text-xs">{entry.sourceLang}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {entry.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {entry.hasPdf && (
                <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                  <Download size={15} />
                  {entry.pdfLabel || "Download PDF"}
                </button>
              )}
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#FC8814] hover:bg-[#e07710] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                <ExternalLink size={15} />
                Read Full Article
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const INITIAL_COUNT = 6;

export default function PressNotesSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [selected, setSelected] = useState(null);
  const [showArchive, setShowArchive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const active = pressEntries.filter((e) => !e.archived);
  const archived = pressEntries.filter((e) => e.archived);

  const byType =
    activeFilter === "All"
      ? active
      : active.filter((e) => e.type === activeFilter);

  const searched = searchQuery.trim()
    ? byType.filter(
        (e) =>
          e.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : byType;

  const featured = searched.filter((e) => e.featured);
  const standard = searched.filter((e) => !e.featured);
  const shownStandard = standard.slice(0, visible);
  const hasMore = visible < standard.length;

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
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
                  In The News
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
                Press Notes &{" "}
                <span className="text-[#FC8814]">Media Coverage</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl"
              >
                Press releases, newspaper coverage, event reports and official
                communications — all in one archive.
              </motion.p>
            </div>

            {/* Stats pill */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3"
            >
              <Newspaper size={14} className="text-[#FC8814]" />
              <span className="text-gray-900 font-semibold text-sm">
                {active.length} Articles
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400 text-sm">{archived.length} Archived</span>
            </motion.div>
          </div>

          {/* Search + Filter Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* Search */}
            <div className="relative flex-shrink-0 sm:w-64">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-[#FC8814] bg-gray-50 placeholder-gray-400 text-gray-700"
              />
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setActiveFilter(t);
                    setVisible(INITIAL_COUNT);
                  }}
                  className={`text-xs px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                    activeFilter === t
                      ? "bg-[#FC8814] text-white border-[#FC8814]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#FC8814] hover:text-[#FC8814]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>

          {/* No results */}
          {searched.length === 0 && (
            <div className="text-center py-20 text-gray-400 text-sm">
              No articles found matching your search.
            </div>
          )}

          {/* Featured Cards */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {featured.map((item) => (
                <FeaturedCard key={item.id} item={item} onClick={setSelected} />
              ))}
            </div>
          )}

          {/* Standard Grid */}
          {shownStandard.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {shownStandard.map((item, index) => (
                <StandardCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={setSelected}
                />
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-10"
            >
              <button
                onClick={() => setVisible((v) => v + 3)}
                className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#FC8814] text-gray-700 hover:text-[#FC8814] px-8 py-4 rounded-full transition-all duration-300 text-sm font-medium group"
              >
                Load More Articles
                <ChevronDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform duration-200 text-[#FC8814]"
                />
              </button>
            </motion.div>
          )}

          {/* Archive Section */}
          {archived.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 border-t border-gray-100 pt-10"
            >
              <button
                onClick={() => setShowArchive(!showArchive)}
                className="flex items-center gap-3 w-full text-left group mb-4"
              >
                <Archive size={17} className="text-gray-400" />
                <span className="text-gray-600 font-semibold text-sm flex-1">
                  Archive — Older Press Notes & Articles ({archived.length})
                </span>
                <ChevronDown
                  size={15}
                  className={`text-gray-400 transition-transform duration-300 ${showArchive ? "rotate-180" : ""}`}
                />
              </button>

              {showArchive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4"
                >
                  {archived.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setSelected(item)}
                      className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 cursor-pointer hover:border-gray-200 transition-all"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                        <img
                          src={item.image}
                          alt={item.headline}
                          className="w-full h-full object-cover opacity-60"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <TypeBadge type={item.type} small />
                        <p className="text-gray-600 text-[12px] font-semibold mt-1 line-clamp-2 leading-snug">
                          {item.headline}
                        </p>
                        <p className="text-gray-400 text-[10px] mt-1">{formatDate(item.date)} · {item.source}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <DetailModal entry={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}