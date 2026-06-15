import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Search,
  FileText,
  Image,
  File,
  TrendingUp,
  Clock,
  Star,
  ChevronDown,
  Eye,
} from "lucide-react";

const categories = [
  "All",
  "Registration Forms",
  "Event Brochures",
  "Campaign Materials",
  "Information Booklets",
  "Printable Posters",
  "Public Awareness Material",
];

const fileTypeConfig = {
  PDF: { bg: "#FEF2F2", text: "#B91C1C", border: "#FECACA", icon: FileText },
  JPG: { bg: "#F0FDF4", text: "#15803D", border: "#BBF7D0", icon: Image },
  PNG: { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE", icon: Image },
  DOC: { bg: "#F5F3FF", text: "#6D28D9", border: "#DDD6FE", icon: FileText },
  DOCX: { bg: "#F5F3FF", text: "#6D28D9", border: "#DDD6FE", icon: FileText },
};

const categoryColors = {
  "Registration Forms": { bg: "#FFF7ED", text: "#C2410C" },
  "Event Brochures": { bg: "#EFF6FF", text: "#1D4ED8" },
  "Campaign Materials": { bg: "#FDF2F8", text: "#9D174D" },
  "Information Booklets": { bg: "#F5F3FF", text: "#6D28D9" },
  "Printable Posters": { bg: "#ECFDF5", text: "#065F46" },
  "Public Awareness Material": { bg: "#FEFCE8", text: "#854D0E" },
};

const resources = [
  {
    id: 1,
    title: "Student Felicitation – Registration Form 2026",
    category: "Registration Forms",
    fileType: "PDF",
    fileSize: "420 KB",
    downloads: 1840,
    addedDate: "2026-06-10",
    downloadEnabled: true,
    description: "Official registration form for the student felicitation ceremony. Fill and submit at the ward office or online.",
  },
  {
    id: 2,
    title: "Plantation Drive – Volunteer Registration Form",
    category: "Registration Forms",
    fileType: "PDF",
    fileSize: "310 KB",
    downloads: 1220,
    addedDate: "2026-06-05",
    downloadEnabled: true,
    description: "Register as a volunteer for the ward-level plantation drive. Saplings will be allocated based on registration.",
  },
  {
    id: 3,
    title: "Tiranga Salute Campaign – Event Brochure",
    category: "Event Brochures",
    fileType: "PDF",
    fileSize: "1.8 MB",
    downloads: 980,
    addedDate: "2026-06-08",
    downloadEnabled: true,
    description: "Complete event brochure for the Tiranga Salute Campaign including schedule, venue map and participation guidelines.",
  },
  {
    id: 4,
    title: "Annual Organisational Convention – Programme Brochure",
    category: "Event Brochures",
    fileType: "PDF",
    fileSize: "2.4 MB",
    downloads: 760,
    addedDate: "2026-05-18",
    downloadEnabled: true,
    description: "Official programme brochure for the Annual Convention including agenda, speaker profiles and venue details.",
  },
  {
    id: 5,
    title: "Voter Awareness – Printable Poster (A3)",
    category: "Printable Posters",
    fileType: "PNG",
    fileSize: "3.2 MB",
    downloads: 2100,
    addedDate: "2026-05-10",
    downloadEnabled: true,
    description: "High-resolution printable A3 poster for voter awareness campaign. Print and display at community notice boards.",
  },
  {
    id: 6,
    title: "Plantation Drive – Campaign Poster (Print Ready)",
    category: "Printable Posters",
    fileType: "JPG",
    fileSize: "2.8 MB",
    downloads: 1540,
    addedDate: "2026-06-04",
    downloadEnabled: true,
    description: "Print-ready campaign poster for the Green Mission plantation drive. Available in A4 and A3 sizes.",
  },
  {
    id: 7,
    title: "Aadhaar Enrolment – Information Booklet",
    category: "Information Booklets",
    fileType: "PDF",
    fileSize: "890 KB",
    downloads: 670,
    addedDate: "2026-05-30",
    downloadEnabled: true,
    description: "Step-by-step guide to Aadhaar enrolment, correction and update process. Available in Hindi and English.",
  },
  {
    id: 8,
    title: "Health Camp – Public Awareness Leaflet",
    category: "Public Awareness Material",
    fileType: "PDF",
    fileSize: "560 KB",
    downloads: 430,
    addedDate: "2026-05-25",
    downloadEnabled: true,
    description: "Awareness leaflet listing symptoms, health tips and information about the free health check-up camp.",
  },
  {
    id: 9,
    title: "Constituency Development Report 2025–26",
    category: "Information Booklets",
    fileType: "PDF",
    fileSize: "4.1 MB",
    downloads: 390,
    addedDate: "2026-05-01",
    downloadEnabled: true,
    description: "Annual development report covering all infrastructure projects, welfare schemes and community initiatives completed in 2025–26.",
  },
  {
    id: 10,
    title: "Blood Donation Drive – Campaign Poster",
    category: "Campaign Materials",
    fileType: "PNG",
    fileSize: "1.9 MB",
    downloads: 810,
    addedDate: "2026-03-18",
    downloadEnabled: true,
    description: "Campaign poster for the Blood Donation Drive. Share digitally or print for community display.",
  },
  {
    id: 11,
    title: "Republic Day – Official Programme Sheet",
    category: "Event Brochures",
    fileType: "PDF",
    fileSize: "280 KB",
    downloads: 290,
    addedDate: "2026-01-22",
    downloadEnabled: true,
    description: "Official programme sheet for Republic Day celebrations including event schedule and chief guest details.",
  },
  {
    id: 12,
    title: "Community Grievance – Submission Form",
    category: "Registration Forms",
    fileType: "DOCX",
    fileSize: "48 KB",
    downloads: 560,
    addedDate: "2026-04-10",
    downloadEnabled: true,
    description: "Official form for submitting community grievances to the ward office. Fill and submit in person or via post.",
  },
];

function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return n.toString();
}

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function FileTypeBadge({ type }) {
  const cfg = fileTypeConfig[type] || { bg: "#F3F4F6", text: "#374151", border: "#E5E7EB", icon: File };
  const Icon = cfg.icon;
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded"
      style={{ background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}` }}
    >
      <Icon size={9} />
      {type}
    </span>
  );
}

function CategoryBadge({ category }) {
  const cfg = categoryColors[category] || { bg: "#F3F4F6", text: "#374151" };
  return (
    <span
      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
      style={{ background: cfg.bg, color: cfg.text }}
    >
      {category}
    </span>
  );
}

function handleDownload(resource) {
  alert(`Downloading: ${resource.title}\n(Connect your file storage URL here)`);
}

function ResourceRow({ item, index }) {
  const Icon = (fileTypeConfig[item.fileType] || { icon: File }).icon;
  const catCfg = categoryColors[item.category] || { bg: "#F3F4F6", text: "#374151" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 px-5 py-4"
    >
      {/* File icon block */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: (fileTypeConfig[item.fileType] || { bg: "#F3F4F6" }).bg }}
      >
        <Icon
          size={22}
          style={{ color: (fileTypeConfig[item.fileType] || { text: "#374151" }).text }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <FileTypeBadge type={item.fileType} />
          <CategoryBadge category={item.category} />
        </div>
        <h3 className="text-[14px] font-semibold text-gray-900 leading-snug truncate">
          {item.title}
        </h3>
        <p className="text-gray-400 text-[11px] mt-0.5 line-clamp-1 hidden sm:block">
          {item.description}
        </p>
      </div>

      {/* Meta */}
      <div className="hidden md:flex flex-col items-end gap-1 flex-shrink-0 text-right">
        <span className="text-gray-400 text-[11px]">{item.fileSize}</span>
        <div className="flex items-center gap-1 text-gray-400 text-[11px]">
          <Download size={10} />
          {formatCount(item.downloads)}
        </div>
      </div>

      {/* Download btn */}
      {item.downloadEnabled ? (
        <button
          onClick={() => handleDownload(item)}
          className="flex-shrink-0 flex items-center gap-1.5 bg-[#FC8814] hover:bg-[#e07710] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors duration-200 active:scale-95"
        >
          <Download size={13} />
          <span className="hidden sm:inline">Download</span>
        </button>
      ) : (
        <span className="flex-shrink-0 text-gray-300 text-xs px-4 py-2.5 border border-gray-100 rounded-xl">
          Disabled
        </span>
      )}
    </motion.div>
  );
}

function SmallCard({ item, rank }) {
  const Icon = (fileTypeConfig[item.fileType] || { icon: File }).icon;
  const ftCfg = fileTypeConfig[item.fileType] || { bg: "#F3F4F6", text: "#374151" };

  return (
    <div
      className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer group"
      onClick={() => handleDownload(item)}
    >
      {rank && (
        <span className="text-[12px] font-bold text-gray-200 w-5 text-center flex-shrink-0">
          {rank}
        </span>
      )}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: ftCfg.bg }}
      >
        <Icon size={16} style={{ color: ftCfg.text }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-semibold text-gray-800 line-clamp-1 leading-snug">
          {item.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <FileTypeBadge type={item.fileType} />
          {rank ? (
            <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
              <Download size={9} />{formatCount(item.downloads)}
            </span>
          ) : (
            <span className="text-[10px] text-gray-400">{formatDate(item.addedDate)}</span>
          )}
        </div>
      </div>
      <Download size={14} className="text-[#FC8814] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

const INITIAL_COUNT = 6;

export default function DownloadsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("search");
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [viewMode, setViewMode] = useState("list");

  const filtered = useMemo(() => {
    let result = activeFilter === "All"
      ? resources
      : resources.filter((r) => r.category === activeFilter);
    if (searchQuery.trim() && searchQuery !== "search") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.fileType.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeFilter, searchQuery]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const mostDownloaded = [...resources]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 4);

  const recentlyAdded = [...resources]
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
    .slice(0, 4);

  const totalDownloads = resources.reduce((s, r) => s + r.downloads, 0);

  return (
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
                Resources
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
              Downloads &{" "}
              <span className="text-[#FC8814]">Resources</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl"
            >
              Forms, brochures, posters, campaign materials and public documents — all in one place, free to download.
            </motion.p>
          </div>

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3"
          >
            <Download size={14} className="text-[#FC8814]" />
            <span className="text-gray-900 font-semibold text-sm">
              {resources.length} Files
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 text-sm">{formatCount(totalDownloads)} Downloads</span>
          </motion.div>
        </div>

        {/* Most Downloaded + Recently Added */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Most Downloaded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-5"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#FFF7ED] flex items-center justify-center">
                <TrendingUp size={15} className="text-[#FC8814]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-gray-900">Most Downloaded</h3>
                <p className="text-[11px] text-gray-400">Top 4 by total downloads</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {mostDownloaded.map((item, i) => (
                <SmallCard key={item.id} item={item} rank={i + 1} />
              ))}
            </div>
          </motion.div>

          {/* Recently Added */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 p-5"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                <Clock size={15} className="text-[#1D4ED8]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-gray-900">Recently Added</h3>
                <p className="text-[11px] text-gray-400">Latest uploads to the library</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {recentlyAdded.map((item) => (
                <SmallCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Search + Filter + View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-6 items-start sm:items-center"
        >
          {/* Search */}
          <div className="relative flex-shrink-0 sm:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              defaultValue=""
              onChange={(e) => setSearchQuery(e.target.value || "search")}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-[#FC8814] bg-white placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 flex-1">
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
          </div>

          {/* View toggle */}
          <div className="flex-shrink-0 flex items-center bg-white border border-gray-200 rounded-xl p-1 gap-1">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === "list"
                  ? "bg-[#FC8814] text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-[#FC8814] text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Grid
            </button>
          </div>
        </motion.div>

        {/* Results count */}
        {filtered.length !== resources.length && (
          <p className="text-sm text-gray-400 mb-4">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="flex flex-col gap-3">
            {shown.length > 0 ? (
              shown.map((item, index) => (
                <ResourceRow key={item.id} item={item} index={index} />
              ))
            ) : (
              <div className="text-center py-16 text-gray-400 text-sm">
                No files found matching your search.
              </div>
            )}
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shown.length > 0 ? (
              shown.map((item, index) => {
                const ftCfg = fileTypeConfig[item.fileType] || { bg: "#F3F4F6", text: "#374151", icon: File };
                const Icon = ftCfg.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 p-5 flex flex-col gap-4"
                  >
                    {/* Top */}
                    <div className="flex items-start gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: ftCfg.bg }}
                      >
                        <Icon size={22} style={{ color: ftCfg.text }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-1.5 mb-1.5">
                          <FileTypeBadge type={item.fileType} />
                          <CategoryBadge category={item.category} />
                        </div>
                        <h3 className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-gray-400">{item.fileSize}</span>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400">
                          <Download size={10} />
                          {formatCount(item.downloads)} downloads
                        </div>
                      </div>
                      {item.downloadEnabled ? (
                        <button
                          onClick={() => handleDownload(item)}
                          className="flex items-center gap-1.5 bg-[#FC8814] hover:bg-[#e07710] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors active:scale-95"
                        >
                          <Download size={13} />
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-300 text-xs px-4 py-2.5 border border-gray-100 rounded-xl">
                          Disabled
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-16 text-gray-400 text-sm">
                No files found matching your search.
              </div>
            )}
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
              onClick={() => setVisible((v) => v + 4)}
              className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#FC8814] text-gray-700 hover:text-[#FC8814] px-8 py-4 rounded-full transition-all duration-300 text-sm font-medium group"
            >
              Load More Files
              <ChevronDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform duration-200 text-[#FC8814]"
              />
            </button>
          </motion.div>
        )}

        {!hasMore && shown.length >= INITIAL_COUNT && (
          <p className="text-center text-gray-400 text-xs mt-8">
            All {filtered.length} files loaded
          </p>
        )}
      </div>
    </section>
  );
}