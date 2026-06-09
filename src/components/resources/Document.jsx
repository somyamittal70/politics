import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLayerGroup,
  FaFileAlt,
  FaChartBar,
  FaGavel,
  FaMicrophone,
  FaWallet,
  FaShieldAlt,
  FaClipboardList,
  FaAnchor,
  FaDownload,
} from "react-icons/fa";

const docCategories = [
  "All",
  "Policy",
  "Reports",
  "Bills",
  "Speeches",
  "Budget",
];

const categoryIcons = {
  All: <FaLayerGroup />,
  Policy: <FaFileAlt />,
  Reports: <FaChartBar />,
  Bills: <FaGavel />,
  Speeches: <FaMicrophone />,
  Budget: <FaWallet />,
};

const documentIcons = {
  Policy: <FaShieldAlt />,
  Bills: <FaGavel />,
  Reports: <FaChartBar />,
  Budget: <FaWallet />,
  Speeches: <FaMicrophone />,
};

const documents = [
  {
    id: 1,
    cat: "Policy",
    title: "National Security Policy Framework 2023",
    size: "4.2 MB",
    pages: 88,
    type: "PDF",
    date: "Dec 2023",
    icon: "🔐",
    color: "#E8541A",
  },
  {
    id: 2,
    cat: "Bills",
    title: "Citizenship Amendment Act — Full Text",
    size: "1.8 MB",
    pages: 32,
    type: "PDF",
    date: "Jan 2020",
    icon: "⚖️",
    color: "#C9A84C",
  },
  {
    id: 3,
    cat: "Reports",
    title: "Annual Report: Ministry of Home Affairs 2023",
    size: "12.4 MB",
    pages: 240,
    type: "PDF",
    date: "Mar 2024",
    icon: "📊",
    color: "#138808",
  },
  {
    id: 4,
    cat: "Policy",
    title: "J&K Reorganisation — White Paper",
    size: "2.9 MB",
    pages: 56,
    type: "PDF",
    date: "Aug 2019",
    icon: "🏔",
    color: "#E8541A",
  },
  {
    id: 5,
    cat: "Budget",
    title: "Home Ministry Budget Allocations 2024–25",
    size: "3.1 MB",
    pages: 44,
    type: "PDF",
    date: "Feb 2024",
    icon: "💰",
    color: "#C9A84C",
  },
  {
    id: 6,
    cat: "Reports",
    title: "Aspirational Districts Programme — Progress 2023",
    size: "8.7 MB",
    pages: 180,
    type: "PDF",
    date: "Jan 2024",
    icon: "📈",
    color: "#138808",
  },
  {
    id: 7,
    cat: "Speeches",
    title: "Selected Parliamentary Speeches — Compendium",
    size: "5.5 MB",
    pages: 112,
    type: "PDF",
    date: "Dec 2023",
    icon: "🎙",
    color: "#E8541A",
  },
  {
    id: 8,
    cat: "Bills",
    title: "UAPA Amendment Bill — Explanatory Notes",
    size: "1.2 MB",
    pages: 24,
    type: "PDF",
    date: "Aug 2019",
    icon: "📋",
    color: "#C9A84C",
  },
  {
    id: 9,
    cat: "Policy",
    title: "Coastal Security Protocol 2024",
    size: "2.4 MB",
    pages: 48,
    type: "PDF",
    date: "Feb 2024",
    icon: "⚓",
    color: "#138808",
  },
];

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function DocumentsSection() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All" ? documents : documents.filter((d) => d.cat === active);

  return (
    <section
      id="documents"
      className="relative bg-[#F7F2E8] overflow-hidden py-20 md:py-28"
    >
      <div
        className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[12rem] font-black
          text-[#0D1B3E]/[0.03] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display',serif" }}
      >
        DOCS
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
            <span
              className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Official Downloads
            </span>
          </div>
          <h2
            className="text-[2.2rem] md:text-[3rem] font-black text-[#0D1B3E] leading-[1.1]"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Documents &amp;{" "}
            <em className="text-[#E8541A] not-italic italic">Reports</em>
          </h2>
        </motion.div>

        {/* Filter */}
        {/* Filter */}
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
            {docCategories.map((c) => (
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
          border
          transition-all
          duration-300
          snap-start

          ${
            active === c
              ? `
                bg-[#FC8814]
                border-[#FC8814]
                text-white
                shadow-md
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
                style={{
                  fontFamily: "Raleway,sans-serif",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Documents grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.id}
              variants={fadeUp(i * 0.07)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="group flex items-start gap-4 bg-[#FFFFFF] border border-[#E8E7E6] p-5
                hover:border-[#E8541A]/35 hover:shadow-[0_8px_28px_rgba(232,84,26,0.09)]
                transition-all duration-300 relative overflow-hidden"
              whileHover={{ y: -3 }}
            >
              {/* Left color bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: doc.color }}
              />

              {/* Icon box */}
              <div
                className="
    flex-shrink-0
    w-12
    h-12
    rounded-xl
    flex
    items-center
    justify-center
    border
    border-[#E8E7E6]
    bg-white
    text-[#FC8814]
    text-lg
    transition-all
    duration-300
    group-hover:bg-[#FC8814]
    group-hover:text-white
    group-hover:scale-110
  "
              >
                {documentIcons[doc.cat] || <FaFileAlt />}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-[0.55rem] font-black tracking-[0.18em] uppercase text-[#FDFAF5] px-2 py-[2px]"
                    style={{
                      fontFamily: "Raleway,sans-serif",
                      background: doc.color,
                    }}
                  >
                    {doc.cat}
                  </span>
                  <span
                    className="text-[0.58rem] text-[#7A6E5F]"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {doc.date}
                  </span>
                </div>
                <h4
                  className="text-[0.92rem] font-black text-[#0D1B3E] leading-snug mb-2 group-hover:border-[#FC8814] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  {doc.title}
                </h4>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-[0.6rem] text-[#7A6E5F]"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    📄 {doc.type}
                  </span>
                  <span
                    className="text-[0.6rem] text-[#7A6E5F]"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {doc.pages} pages
                  </span>
                  <span
                    className="text-[0.6rem] text-[#7A6E5F]"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {doc.size}
                  </span>
                </div>
              </div>

              {/* Download button */}
              <motion.button
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center
                  border border-[#EDE5D0] text-[#7A6E5F] rounded-sm
                  group-hover:border-[#E8541A] group-hover:bg-[#E8541A] group-hover:text-[#FDFAF5]
                  transition-all duration-250"
                whileTap={{ scale: 0.9 }}
                aria-label="Download"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12
            bg-[#0D1B3E] p-7 md:p-9"
        >
          <div>
            <h4
              className="text-[1.1rem] font-black text-[#FDFAF5]"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              Can't find what you're looking for?
            </h4>
            <p
              className="text-[0.82rem] text-[#FDFAF5]/40 mt-1"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Send a document request and our team will respond within 48 hours.
            </p>
          </div>
          <motion.a
            href="#contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#E8541A] text-[#FDFAF5]
              text-[0.75rem] font-black tracking-[0.16em] uppercase px-7 py-4 no-underline
              hover:bg-[#F4712E] transition-colors duration-200"
            style={{
              fontFamily: "Raleway,sans-serif",
              clipPath:
                "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Request Document
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
