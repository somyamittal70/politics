import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ChevronDown, ChevronUp, RotateCcw, Trash2,
  Megaphone, CalendarDays, Play, Image, Newspaper,
  Download, Flag, Inbox, Archive
} from "lucide-react";

const CAT_CFG = {
  Announcements: { bg: "#EFF6FF", text: "#1D4ED8", Icon: Megaphone },
  Events:        { bg: "#F5F3FF", text: "#6D28D9", Icon: CalendarDays },
  Videos:        { bg: "#FEF2F2", text: "#B91C1C", Icon: Play },
  Posters:       { bg: "#F0FDF4", text: "#15803D", Icon: Image },
  "Press Coverage": { bg: "#FEFCE8", text: "#854D0E", Icon: Newspaper },
  Downloads:     { bg: "#FFF7ED", text: "#C2410C", Icon: Download },
  Initiatives:   { bg: "#FDF2F8", text: "#9D174D", Icon: Flag },
};

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const CATEGORIES = ["All", ...Object.keys(CAT_CFG)];

const INITIAL_DATA = [
  { id: 1,  title: "Ward Development Budget Allocation Announced", cat: "Announcements",   year: 2026, month: 5,  day: 28, desc: "Full budget allocation for Q1–Q2 infrastructure works shared publicly." },
  { id: 2,  title: "Holi Celebration – Community Gathering",        cat: "Events",          year: 2026, month: 2,  day: 14, desc: "Colourful Holi event held at the community ground with 800+ attendees." },
  { id: 3,  title: "Cleanliness Drive – Video Report",              cat: "Videos",          year: 2026, month: 3,  day: 6,  desc: "Video coverage of the monthly cleanliness and sanitisation drive." },
  { id: 4,  title: "Republic Day Poster 2026",                      cat: "Posters",         year: 2026, month: 0,  day: 22, desc: "Official Republic Day celebration poster distributed across the ward." },
  { id: 5,  title: "Dainik Jagran – Infrastructure Interview",      cat: "Press Coverage",  year: 2026, month: 1,  day: 10, desc: "Interview on road widening and flyover projects published in Dainik Jagran." },
  { id: 6,  title: "Ration Card Correction Form",                   cat: "Downloads",       year: 2026, month: 0,  day: 5,  desc: "Archived correction form for ration card data updates (Form B-7)." },
  { id: 7,  title: "Green Mission – Phase 1 Completed",             cat: "Initiatives",     year: 2026, month: 4,  day: 18, desc: "Phase 1 of the ward-level plantation drive completed with 4,200 saplings." },
  { id: 8,  title: "Diwali Light Festival – Event Report",          cat: "Events",          year: 2025, month: 10, day: 2,  desc: "Recap of the Diwali lighting event at the main market square." },
  { id: 9,  title: "Voter ID Camp – Announcement",                  cat: "Announcements",   year: 2025, month: 9,  day: 15, desc: "Free Voter ID enrolment camp announced for the ward boundary areas." },
  { id: 10, title: "Independence Day Video Highlights",             cat: "Videos",          year: 2025, month: 7,  day: 16, desc: "Highlights reel from the Independence Day flag hoisting and parade." },
  { id: 11, title: "Navratri Event Poster",                         cat: "Posters",         year: 2025, month: 9,  day: 1,  desc: "Official poster for the ward-level Navratri Garba celebration." },
  { id: 12, title: "Amar Ujala – Health Camp Feature",              cat: "Press Coverage",  year: 2025, month: 8,  day: 22, desc: "Feature article in Amar Ujala covering the free health camp outcomes." },
  { id: 13, title: "Welfare Scheme Application Form 2025",          cat: "Downloads",       year: 2025, month: 5,  day: 10, desc: "Archived application form for ward welfare scheme benefits (now closed)." },
  { id: 14, title: "Road Repair Initiative – Phase 2 Complete",     cat: "Initiatives",     year: 2025, month: 11, day: 4,  desc: "Second phase of road resurfacing covering 12 lanes completed." },
  { id: 15, title: "New Year Greetings – Community Notice",         cat: "Announcements",   year: 2025, month: 0,  day: 1,  desc: "Official new year message from the constituency office." },
  { id: 16, title: "Summer Health Awareness Camp",                  cat: "Events",          year: 2025, month: 4,  day: 20, desc: "Free health screening camp held at the primary school grounds." },
  { id: 17, title: "Water Conservation Poster",                     cat: "Posters",         year: 2024, month: 5,  day: 14, desc: "Awareness poster for the Jal Bachao campaign distributed to all schools." },
  { id: 18, title: "Flood Relief Initiative 2024",                  cat: "Initiatives",     year: 2024, month: 7,  day: 30, desc: "Emergency relief distributed to 340 flood-affected families in the ward." },
  { id: 19, title: "Hindustan Times – Budget Report",               cat: "Press Coverage",  year: 2024, month: 2,  day: 8,  desc: "Coverage of the annual constituency budget report in Hindustan Times." },
  { id: 20, title: "Kisan Samman Event",                            cat: "Events",          year: 2024, month: 11, day: 16, desc: "Felicitation ceremony for 60 local farmers recognising their contributions." },
];

// ─── Toast ───────────────────────────────────────────────────────────────────
function Toast({ msg }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-lg"
        >
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Entry Card ──────────────────────────────────────────────────────────────
function EntryCard({ item, onRestore, onDelete }) {
  const cfg = CAT_CFG[item.cat] || { bg: "#F3F4F6", text: "#374151", Icon: Archive };
  const { Icon } = cfg;
  const date = `${item.day} ${MONTHS[item.month].slice(0, 3)} ${item.year}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="group flex items-start gap-3 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl px-4 py-3 transition-all duration-200"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: cfg.bg }}
      >
        <Icon size={17} style={{ color: cfg.text }} />
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-gray-900 leading-snug">{item.title}</p>
        <div className="flex flex-wrap items-center gap-2 mt-1.5">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-md"
            style={{ background: cfg.bg, color: cfg.text }}
          >
            {item.cat}
          </span>
          <span className="text-[11px] text-gray-400">{date}</span>
          <span className="text-[11px] text-gray-400 hidden sm:inline truncate max-w-[260px]">
            {item.desc}
          </span>
        </div>
      </div>

      {/* Admin actions */}
      <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onRestore(item)}
          title="Restore to live"
          className="flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 border border-gray-200 rounded-lg hover:border-green-400 hover:text-green-600 hover:bg-green-50 transition-colors"
        >
          <RotateCcw size={12} /> Restore
        </button>
        <button
          onClick={() => onDelete(item)}
          title="Permanently delete"
          className="flex items-center gap-1 text-[11px] font-medium px-2 py-1.5 border border-gray-200 rounded-lg hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Month Block ─────────────────────────────────────────────────────────────
function MonthBlock({ month, items, onRestore, onDelete }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3 sticky top-0 bg-[#F9F6F1] py-1.5 z-10">
        <span className="text-[13px] font-bold text-gray-800">{MONTHS[month]}</span>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-[11px] text-gray-400">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <AnimatePresence>
          {items.map((item) => (
            <EntryCard key={item.id} item={item} onRestore={onRestore} onDelete={onDelete} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Mobile Accordion ────────────────────────────────────────────────────────
function MobYearAccordion({ year, items, defaultOpen, onRestore, onDelete }) {
  const [open, setOpen] = useState(defaultOpen);
  const byMonth = {};
  items.forEach((d) => {
    if (!byMonth[d.month]) byMonth[d.month] = [];
    byMonth[d.month].push(d);
  });
  const months = Object.keys(byMonth).map(Number).sort((a, b) => b - a);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden mb-3 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-[14px] font-bold text-gray-900">{year}</span>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-gray-400">{items.length} items</span>
          {open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">
              {months.map((m) => (
                <div key={m} className="mb-4">
                  <p className="text-[11px] font-bold text-[#FC8814] uppercase tracking-wide mb-2 border-b border-gray-100 pb-1">
                    {MONTHS[m]}
                  </p>
                  <div className="flex flex-col gap-2">
                    {byMonth[m].map((item) => (
                      <EntryCard key={item.id} item={item} onRestore={onRestore} onDelete={onDelete} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ArchiveSection() {
  const [data, setData] = useState(INITIAL_DATA);
  const [activeYear, setActiveYear] = useState(2026);
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");

  const years = useMemo(
    () => [...new Set(data.map((d) => d.year))].sort((a, b) => b - a),
    [data]
  );

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2600);
  };

  const handleRestore = (item) => {
    setData((prev) => prev.filter((d) => d.id !== item.id));
    showToast(`"${item.title.slice(0, 40)}…" restored to live content.`);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Permanently delete "${item.title}"? This cannot be undone.`)) {
      setData((prev) => prev.filter((d) => d.id !== item.id));
      showToast("Item permanently deleted.");
    }
  };

  // Desktop filtered list
  const desktopFiltered = useMemo(() => {
    return data.filter((d) => {
      if (d.year !== activeYear) return false;
      if (activeCat !== "All" && d.cat !== activeCat) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !d.title.toLowerCase().includes(q) &&
          !d.cat.toLowerCase().includes(q) &&
          !d.desc.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [data, activeYear, activeCat, query]);

  // Group desktop filtered by month
  const byMonth = useMemo(() => {
    const map = {};
    desktopFiltered.forEach((d) => {
      if (!map[d.month]) map[d.month] = [];
      map[d.month].push(d);
    });
    return map;
  }, [desktopFiltered]);

  const monthsSorted = Object.keys(byMonth).map(Number).sort((a, b) => b - a);

  // Mobile: group all filtered data by year
  const mobByYear = useMemo(() => {
    const map = {};
    data
      .filter((d) => {
        if (activeCat !== "All" && d.cat !== activeCat) return false;
        if (query) {
          const q = query.toLowerCase();
          if (
            !d.title.toLowerCase().includes(q) &&
            !d.cat.toLowerCase().includes(q) &&
            !d.desc.toLowerCase().includes(q)
          )
            return false;
        }
        return true;
      })
      .forEach((d) => {
        if (!map[d.year]) map[d.year] = [];
        map[d.year].push(d);
      });
    return map;
  }, [data, activeCat, query]);

  const totalItems = data.length;

  return (
    <section className="bg-[#F9F6F1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
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
                Historical Record
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
              Content{" "}
              <span className="text-[#FC8814]">Archive</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl"
            >
              Browse past announcements, events, posters, videos, press coverage and completed
              initiatives — organised by year, month and type.
            </motion.p>
          </div>

          {/* Stats pill */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3"
          >
            <Archive size={14} className="text-[#FC8814]" />
            <span className="text-gray-900 font-semibold text-sm">{totalItems} Items</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 text-sm">{years.length} Years</span>
          </motion.div>
        </div>

        {/* ── Search + Category Filter ── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-shrink-0 sm:w-64">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search archive..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-[#FC8814] bg-white placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 flex-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`text-xs px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                  activeCat === cat
                    ? "bg-[#FC8814] text-white border-[#FC8814]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#FC8814] hover:text-[#FC8814]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Desktop Layout ── */}
        <div className="hidden md:grid grid-cols-[200px_1fr] gap-7">
          {/* Year Sidebar */}
          <div className="flex flex-col gap-2">
            {years.map((y) => {
              const count = data.filter((d) => d.year === y).length;
              return (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`w-full flex items-center justify-between text-left px-4 py-2.5 rounded-xl border font-semibold text-[13px] transition-all duration-200 ${
                    activeYear === y
                      ? "bg-[#FFF7ED] text-[#FC8814] border-[#FC8814]/30"
                      : "bg-white text-gray-500 border-gray-100 hover:bg-[#FFF7ED] hover:text-[#FC8814]"
                  }`}
                >
                  {y}
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      activeYear === y
                        ? "bg-[#FED7AA] text-[#92400E]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div>
            {monthsSorted.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Inbox size={36} className="mb-3 text-gray-300" />
                <p className="text-sm">No archived items found.</p>
              </div>
            ) : (
              monthsSorted.map((m) => (
                <MonthBlock
                  key={m}
                  month={m}
                  items={byMonth[m]}
                  onRestore={handleRestore}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>

        {/* ── Mobile Accordion Layout ── */}
        <div className="md:hidden">
          {years
            .filter((y) => mobByYear[y] && mobByYear[y].length > 0)
            .map((y) => (
              <MobYearAccordion
                key={y}
                year={y}
                items={mobByYear[y]}
                defaultOpen={y === Math.max(...years)}
                onRestore={handleRestore}
                onDelete={handleDelete}
              />
            ))}
          {Object.keys(mobByYear).length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Inbox size={36} className="mb-3 text-gray-300" />
              <p className="text-sm">No archived items found.</p>
            </div>
          )}
        </div>

      </div>

      <Toast msg={toast} />
    </section>
  );
}