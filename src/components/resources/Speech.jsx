import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const filters = [
  "All",
  "Parliament",
  "Rally",
  "Press Conference",
  "Interview",
  "International",
];

const speeches = [
  {
    id: 1,
    tag: "Parliament",
    title: "Budget Session Address",
    date: "Feb 2024",
    duration: "42 min",
    views: "2.1M",
    featured: true,
    thumb:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=700&q=80",
    desc: "Comprehensive address on national security, border management and internal affairs during the Budget Session of Parliament.",
  },
  {
    id: 2,
    tag: "Rally",
    title: "Gandhinagar Public Rally",
    date: "Nov 2023",
    duration: "68 min",
    views: "3.4M",
    featured: true,
    thumb:
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=700&q=80",
    desc: "Landmark rally addressing development agenda, farmer welfare and youth empowerment in Gandhinagar constituency.",
  },
  {
    id: 3,
    tag: "Press Conference",
    title: "CAA Implementation Briefing",
    date: "Mar 2024",
    duration: "35 min",
    views: "1.8M",
    featured: false,
    thumb:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80",
    desc: "Detailed briefing on the implementation framework and humanitarian intent of the Citizenship Amendment Act.",
  },
  {
    id: 4,
    tag: "International",
    title: "G20 Ministerial — New Delhi",
    date: "Sep 2023",
    duration: "28 min",
    views: "980K",
    featured: false,
    thumb:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=700&q=80",
    desc: "Address at G20 Interior Ministers' Meeting on global counter-terrorism cooperation and border security.",
  },
  {
    id: 5,
    tag: "Interview",
    title: "National Security — TV Interview",
    date: "Jan 2024",
    duration: "55 min",
    views: "4.2M",
    featured: false,
    thumb:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=700&q=80",
    desc: "In-depth interview covering North-East peace accords, cyber security initiatives and India's internal security roadmap.",
  },
  {
    id: 6,
    tag: "Parliament",
    title: "Rajya Sabha — J&K Reorganisation",
    date: "Aug 2019",
    duration: "90 min",
    views: "8.7M",
    featured: false,
    thumb:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=700&q=80",
    desc: "Historic speech in Rajya Sabha introducing the J&K Reorganisation Bill, articulating the constitutional and national security rationale.",
  },
    {
    id: 7,
    tag: "Parliament",
    title: "Rajya Sabha — J&K Reorganisation",
    date: "Aug 2019",
    duration: "90 min",
    views: "8.7M",
    featured: false,
    thumb:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=700&q=80",
    desc: "Historic speech in Rajya Sabha introducing the J&K Reorganisation Bill, articulating the constitutional and national security rationale.",
  },
    {
    id: 8,
    tag: "Parliament",
    title: "Rajya Sabha — J&K Reorganisation",
    date: "Aug 2019",
    duration: "90 min",
    views: "8.7M",
    featured: false,
    thumb:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=700&q=80",
    desc: "Historic speech in Rajya Sabha introducing the J&K Reorganisation Bill, articulating the constitutional and national security rationale.",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

function SpeechCard({ s, index, inView }) {
  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="group relative flex flex-col bg-[#FDFAF5] border border-[#EDE5D0] overflow-hidden
        hover:border-[#E8541A]/35 hover:shadow-[0_12px_40px_rgba(232,84,26,0.1)]
        transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={s.thumb}
          alt={s.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top,rgba(8,15,34,0.7) 0%,transparent 60%)",
          }}
        />

        {/* Play btn */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center
              bg-[#FDFAF5]/20 backdrop-blur-sm border border-[#FDFAF5]/30
              group-hover:bg-[#E8541A] group-hover:border-[#E8541A]
              transition-all duration-300"
            whileHover={{ scale: 1.12 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDFAF5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </motion.div>
        </div>

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[0.55rem] font-black tracking-[0.2em] uppercase bg-[#E8541A] text-[#FDFAF5] px-2 py-1"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            {s.tag}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1">
          <span
            className="text-[0.62rem] font-bold text-[#FDFAF5]/80 bg-[#080F22]/60 px-2 py-[3px] backdrop-blur-sm"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            ⏱ {s.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center justify-between">
          <span
            className="text-[0.6rem] font-bold text-[#7A6E5F] tracking-widest uppercase"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            {s.date}
          </span>
          <span
            className="text-[0.6rem] text-[#7A6E5F]"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            👁 {s.views}
          </span>
        </div>
        <h3
          className="text-[1rem] font-black text-[#0D1B3E] leading-snug group-hover:text-[#E8541A] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display',serif" }}
        >
          {s.title}
        </h3>
        <p
          className="text-[0.82rem] text-[#7A6E5F] leading-relaxed line-clamp-2 flex-1 italic"
          style={{ fontFamily: "'Cormorant Garamond',serif" }}
        >
          {s.desc}
        </p>
        <div className="flex items-center gap-2 pt-3 border-t border-[#EDE5D0] mt-1">
          <button
            className="text-[0.7rem] font-black tracking-[0.14em] uppercase text-[#E8541A]
            flex items-center gap-1 group/btn hover:gap-2 transition-all duration-200"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Watch Now
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <span className="ml-auto">
            <button
              className="w-7 h-7 flex items-center justify-center border border-[#EDE5D0]
              hover:border-[#E8541A] hover:text-[#E8541A] text-[#7A6E5F] transition-all duration-200 rounded-sm"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </span>
        </div>
      </div>

      {/* Saffron bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8541A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export default function SpeechesSection() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All" ? speeches : speeches.filter((s) => s.tag === active);
  const featured = filtered.find((s) => s.featured);
  const rest = filtered.filter((s) => !s.featured);

  return (
    <section
      id="speeches"
      className="relative bg-[#F7F2E8] overflow-hidden py-20 md:py-28"
    >
      <div
        className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[12rem] font-black
          text-[#0D1B3E]/[0.03] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display',serif" }}
      >
        SPEAKS
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
              <span
                className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Audio & Video
              </span>
            </div>
            <h2
              className="text-[2.2rem] md:text-[3rem] font-black text-[#0D1B3E] leading-[1.1]"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              Speeches &amp;{" "}
              <em className="text-[#E8541A] not-italic italic">Addresses</em>
            </h2>
          </div>
          <a
            href="#"
            className="text-[0.72rem] font-black tracking-[0.16em] uppercase text-[#E8541A]
            flex items-center gap-2 no-underline hover:gap-3 transition-all duration-200 flex-shrink-0 group"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            View All
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[0.7rem] font-black tracking-[0.14em] uppercase px-4 py-[9px]
                transition-all duration-200 rounded-sm
                ${
                  active === f
                    ? "bg-[#E8541A] text-[#FDFAF5]"
                    : "bg-[#0D1B3E]/[0.06] text-[#0D1B3E]/50 hover:bg-[#0D1B3E]/12 hover:text-[#0D1B3E]/80"
                }`}
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured + grid */}
        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured large card */}
              {featured && (
                <motion.div
                  variants={fadeUp(0)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="group relative grid grid-cols-1 md:grid-cols-2 border border-[#EDE5D0]
                    bg-[#FDFAF5] overflow-hidden mb-6
                    hover:border-[#E8541A]/35 hover:shadow-[0_16px_48px_rgba(232,84,26,0.1)]
                    transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ minHeight: 300 }}
                  >
                    <img
                      src={featured.thumb}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right,transparent 50%,#FDFAF5 100%)",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center
                          bg-[#FDFAF5]/20 backdrop-blur-sm border border-[#FDFAF5]/30
                          group-hover:bg-[#E8541A] group-hover:border-[#E8541A] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="#FDFAF5"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[0.55rem] font-black tracking-[0.2em] uppercase bg-[#C9A84C] text-[#0D1B3E] px-2 py-1"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-center gap-3 p-7 md:p-10">
                    <span
                      className="text-[0.6rem] font-black tracking-[0.22em] uppercase text-[#E8541A]"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      {featured.tag} · {featured.date}
                    </span>
                    <h3
                      className="text-[1.5rem] md:text-[1.9rem] font-black text-[#0D1B3E] leading-tight"
                      style={{ fontFamily: "'Playfair Display',serif" }}
                    >
                      {featured.title}
                    </h3>
                    <p
                      className="text-[0.92rem] text-[#7A6E5F] leading-[1.8] italic"
                      style={{ fontFamily: "'Cormorant Garamond',serif" }}
                    >
                      {featured.desc}
                    </p>
                    <div className="flex items-center gap-5 pt-3 border-t border-[#EDE5D0]">
                      <span
                        className="text-[0.65rem] text-[#7A6E5F]"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        ⏱ {featured.duration}
                      </span>
                      <span
                        className="text-[0.65rem] text-[#7A6E5F]"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        👁 {featured.views}
                      </span>
                      <button
                        className="ml-auto text-[0.72rem] font-black tracking-[0.14em] uppercase text-[#E8541A]
                        flex items-center gap-2 hover:gap-3 transition-all duration-200"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        Watch Now{" "}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {rest.map((s, i) => (
                  <SpeechCard key={s.id} s={s} index={i} inView={inView} />
                ))}
              </div>

              {filtered.length === 0 && (
                <div
                  className="text-center py-20 text-[#0D1B3E]/30"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  No speeches found in this category.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
