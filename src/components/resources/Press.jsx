import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Security",
  "Legislation",
  "Development",
  "Foreign Affairs",
  "Party",
];

const releases = [
  {
    id: 1,
    cat: "Legislation",
    date: "12 Mar 2024",
    title: "Government Releases CAA Implementation Rules",
    summary:
      "The Ministry of Home Affairs has released the detailed rules for implementation of the Citizenship Amendment Act, clarifying the application process for eligible persons from three neighbouring countries.",
    tag: "New",
    readTime: "4 min",
  },
  {
    id: 2,
    cat: "Security",
    date: "05 Mar 2024",
    title: "Anti-Naxal Operations: Major Success in Chhattisgarh",
    summary:
      "Security forces in a coordinated operation neutralised a key Maoist stronghold in Bastar region, marking a significant breakthrough in the ongoing counter-insurgency operations.",
    tag: "Press",
    readTime: "3 min",
  },
  {
    id: 3,
    cat: "Development",
    date: "28 Feb 2024",
    title: "Smart Cities Mission: 100 Cities Phase Completed",
    summary:
      "Under the leadership of MHA, the Smart Cities Mission has successfully completed infrastructure development in all 100 designated cities across India with record-breaking timelines.",
    tag: "Press",
    readTime: "5 min",
  },
  {
    id: 4,
    cat: "Foreign Affairs",
    date: "20 Feb 2024",
    title: "Indo-Bhutan Border Management Agreement Signed",
    summary:
      "A landmark border management and connectivity agreement between India and Bhutan was signed, strengthening bilateral relations and ensuring secure, well-defined border infrastructure.",
    tag: "Statement",
    readTime: "3 min",
  },
  {
    id: 5,
    cat: "Party",
    date: "14 Feb 2024",
    title: "BJP Announces Candidates for Upcoming Assembly Elections",
    summary:
      "The BJP Central Election Committee, under the guidance of Amit Shah, has released the first list of candidates for the upcoming state assembly elections, reflecting grassroots connect.",
    tag: "Announcement",
    readTime: "4 min",
  },
  {
    id: 6,
    cat: "Security",
    date: "08 Feb 2024",
    title: "New Coastal Security Protocol Implemented Nationwide",
    summary:
      "A comprehensive coastal security upgrade involving all coastal states and union territories has been implemented, significantly enhancing maritime surveillance and rapid response capability.",
    tag: "Press",
    readTime: "6 min",
  },
  {
    id: 7,
    cat: "Development",
    date: "01 Feb 2024",
    title: "Aspirational Districts Programme Achieves Key Milestones",
    summary:
      "112 Aspirational Districts have achieved transformational improvement across health, education, and livelihoods, setting a benchmark for inclusive governance-led development.",
    tag: "Report",
    readTime: "7 min",
  },
  {
    id: 8,
    cat: "Legislation",
    date: "25 Jan 2024",
    title: "UAPA Amendment: Strengthened Counter-Terror Framework",
    summary:
      "Amendments to the Unlawful Activities (Prevention) Act provide security agencies with modernised investigative tools to combat evolving terror financing and cyber-enabled extremism.",
    tag: "Statement",
    readTime: "5 min",
  },
];

const tagColors = {
  New: "bg-[#E8541A] text-[#FDFAF5]",
  Press: "bg-[#0D1B3E] text-[#FDFAF5]",
  Statement: "bg-[#C9A84C] text-[#0D1B3E]",
  Announcement: "bg-[#138808] text-[#FDFAF5]",
  Report: "bg-[#162547] text-[#FDFAF5]",
};

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function PressRelease() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = releases.filter(
    (r) =>
      (active === "All" || r.cat === active) &&
      (search === "" ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.summary.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <section
      id="press-release"
      className="relative bg-[#0D1B3E] overflow-hidden py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#FDFAF5 1px,transparent 1px),linear-gradient(90deg,#FDFAF5 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle,#C9A84C,transparent 70%)",
        }}
      />

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
                Official Statements
              </span>
            </div>
            <h2
              className="text-[2.2rem] md:text-[3rem] font-black text-[#FDFAF5] leading-[1.1]"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              Press{" "}
              <em className="text-[#E8541A] not-italic italic">Releases</em>
            </h2>
          </div>
          {/* Search */}
          <div className="flex items-center gap-0 border border-[#FDFAF5]/10 bg-[#162547]/60 overflow-hidden min-w-[240px]">
            <div className="px-3 py-[10px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FDFAF5"
                strokeWidth="2"
                opacity="0.3"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search releases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-[#FDFAF5] placeholder-[#FDFAF5]/25 text-[0.82rem] outline-none py-[10px] pr-3"
              style={{ fontFamily: "Raleway,sans-serif" }}
            />
          </div>
        </motion.div>

        {/* Filter tabs */}
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div
            className="
      flex
      gap-3
      overflow-x-auto
      lg:flex-wrap
      scrollbar-hide
      pb-2
      snap-x
    "
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`
          shrink-0
          whitespace-nowrap
          px-5
          py-3
         
          text-[11px]
          sm:text-xs
          font-bold
          tracking-wide
          transition-all
          duration-300
          border
          snap-start

          ${
            active === c
              ? `
                bg-[#FC8814]
                border-[#FC8814]
                text-white
                shadow-lg
                shadow-[#FC8814]/20
              `
              : `
                bg-[#FFFFFF]
                border-[#E8E7E6]
                text-gray-700
                hover:border-[#FC8814]
                hover:text-[#FC8814]
                hover:bg-[#FC8814]/5
              `
          }
        `}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* List */}
        <div ref={ref} className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                variants={fadeUp(i * 0.06)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                exit={{ opacity: 0, y: -10 }}
                layout
                className={`group border cursor-pointer overflow-hidden transition-all duration-300
                  ${
                    expanded === r.id
                      ? "border-[#E8541A]/40 bg-[#162547]"
                      : "border-[#FDFAF5]/[0.07] bg-[#162547]/40 hover:border-[#E8541A]/25 hover:bg-[#162547]/70"
                  }`}
                onClick={() => setExpanded(expanded === r.id ? null : r.id)}
              >
                <div className="flex items-start gap-4 p-5 md:p-6">
                  {/* Date col */}
                  <div className="flex-shrink-0 w-16 text-center hidden sm:block">
                    <p
                      className="text-[0.6rem] font-black tracking-widest uppercase text-[#E8541A]"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      {r.date.split(" ")[1]}&nbsp;{r.date.split(" ")[2]}
                    </p>
                    <p
                      className="text-[1.5rem] font-black text-[#FDFAF5]/20 leading-none"
                      style={{ fontFamily: "'Playfair Display',serif" }}
                    >
                      {r.date.split(" ")[0]}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] self-stretch bg-[#FDFAF5]/[0.06] hidden sm:block" />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`text-[0.55rem] font-black tracking-[0.18em] uppercase px-2 py-[3px] ${tagColors[r.tag] || "bg-[#0D1B3E] text-[#FDFAF5]"}`}
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        {r.tag}
                      </span>
                      <span
                        className="text-[0.6rem] font-bold text-[#FDFAF5]/25 uppercase tracking-widest"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        {r.cat}
                      </span>
                      <span
                        className="ml-auto text-[0.6rem] text-[#FDFAF5]/25"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        📖 {r.readTime}
                      </span>
                    </div>
                    <h3
                      className={`text-[1rem] md:text-[1.1rem] font-black leading-snug transition-colors duration-200
                      ${expanded === r.id ? "text-[#E8541A]" : "text-[#FDFAF5] group-hover:text-[#E2C06A]"}`}
                      style={{ fontFamily: "'Playfair Display',serif" }}
                    >
                      {r.title}
                    </h3>

                    <AnimatePresence>
                      {expanded === r.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <p
                            className="text-[0.88rem] text-[#FDFAF5]/45 leading-[1.8] mt-3 italic"
                            style={{ fontFamily: "'Cormorant Garamond',serif" }}
                          >
                            {r.summary}
                          </p>
                          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-[#FDFAF5]/[0.07]">
                            <button
                              className="text-[0.68rem] font-black tracking-[0.14em] uppercase text-[#E8541A]
                              flex items-center gap-2 hover:gap-3 transition-all duration-200"
                              style={{ fontFamily: "Raleway,sans-serif" }}
                            >
                              Read Full Release
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
                            <button
                              className="text-[0.68rem] font-black tracking-[0.14em] uppercase text-[#FDFAF5]/30
                              flex items-center gap-2 hover:text-[#FDFAF5]/60 transition-all duration-200"
                              style={{ fontFamily: "Raleway,sans-serif" }}
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
                              Download PDF
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expand arrow */}
                  <motion.div
                    animate={{ rotate: expanded === r.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-[#FDFAF5]/25 group-hover:text-[#E8541A] transition-colors duration-200 mt-1"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div
              className="text-center py-16 text-[#FDFAF5]/20"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              No press releases found.
            </div>
          )}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <button
            className="text-[0.75rem] font-black tracking-[0.18em] uppercase text-[#FDFAF5]/40
            border border-[#FDFAF5]/10 px-8 py-3 hover:border-[#E8541A]/50 hover:text-[#E8541A]
            transition-all duration-200 flex items-center gap-2"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Load More Releases
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
