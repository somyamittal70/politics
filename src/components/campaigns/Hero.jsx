import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Flag, Users, Megaphone, Globe } from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────── */
const STATS = [
  { num: "120+", label: "Campaigns Launched", Icon: Flag, color: "#fc8814" },
  { num: "28", label: "States Covered", Icon: Globe, color: "#e8e7e6" },
  { num: "10Cr+", label: "Citizens Mobilised", Icon: Users, color: "#fc8814" },
  { num: "350+", label: "Public Rallies", Icon: Megaphone, color: "#e8e7e6" },
];

const TABS = [
  "All Campaigns",
  "National Security",
  "Digital India",
  "Jan Kalyan",
  "Cultural",
];

/* ─── ANIMATION HELPERS ──────────────────────────────────── */
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] },
  },
});
const fadeLeft = (d = 0) => ({
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ─── COUNTER ────────────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(target.replace(/[^0-9]/g, ""));
    if (!numeric) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * numeric));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start]);
  return count + target.replace(/[0-9]/g, "");
}

function StatItem({ stat, index, animate }) {
  const display = useCounter(stat.num, 1600 + index * 100, animate);
  const Icon = stat.Icon;
  return (
    <motion.div
      variants={fadeUp(0.55 + index * 0.08)}
      initial="hidden"
      animate={animate ? "show" : "hidden"}
      className="group flex-1 relative flex flex-col items-center justify-center gap-0.5 sm:gap-1.5
        py-5 sm:py-6 md:py-7 px-2 sm:px-3 md:px-4 border-r border-white/[0.06] last:border-r-0
        hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-[2px] opacity-0
        group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: stat.color }}
      />
      <Icon
        size={12}
        strokeWidth={1.5}
        className="mb-0 sm:mb-0.5 opacity-40 group-hover:opacity-90 transition-opacity duration-300"
        style={{ color: stat.color }}
      />
      <span
        className="text-[1.4rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] font-black leading-none tabular-nums"
        style={{ fontFamily: "'Playfair Display', serif", color: stat.color }}
      >
        {display}
      </span>
      <span
        className="text-[0.45rem] sm:text-[0.52rem] md:text-[0.58rem] font-black tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] uppercase
        group-hover:text-white/65 transition-colors duration-300 text-center leading-tight"
        style={{ fontFamily: "Raleway, sans-serif", color: "#e8e7e6", opacity: 0.55 }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────── */
export default function CampaignsHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [activeTab, setActiveTab] = useState("All Campaigns");

  const BG =
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1800&q=80";

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
    >
      {/* BG image + overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0A1628]/82" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(108deg,rgba(10,22,40,0.97) 0%,rgba(10,22,40,0.78) 48%,rgba(10,22,40,0.28) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0A1628] to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#FDFAF5 1px,transparent 1px),linear-gradient(90deg,#FDFAF5 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      {/* Top tricolor */}
      <div className="absolute top-0 left-0 right-0 flex h-[3px] z-20">
        <div className="flex-1 bg-[#fc8814]" />
        <div className="flex-1 bg-[#e8e7e6]/50" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-14 bg-white/12" />
        <span
          className="text-[0.5rem] font-black tracking-[0.35em] uppercase text-white/22 [writing-mode:vertical-lr]"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={13} className="text-white/22" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-16 sm:pt-20 md:pt-28 pb-0">
        <div className="max-w-[1280px] mx-auto w-full">
          {/* Eyebrow */}
          <motion.div
            variants={fadeLeft(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5"
          >
            <span className="w-5 sm:w-8 h-[2px] rounded" style={{ background: "#fc8814" }} />
            <span
              className="text-[0.55rem] sm:text-[0.63rem] font-black tracking-[0.25em] sm:tracking-[0.32em] uppercase"
              style={{ fontFamily: "Raleway, sans-serif", color: "#fc8814" }}
            >
              Campaigns & Movements
            </span>
            <span className="w-5 sm:w-8 h-[2px] bg-[#138808] rounded" />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp(0.07)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem]
              font-black leading-[0.87] mb-3 sm:mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
          >
            Campaigns
          </motion.h1>

          {/* Subtitle rule */}
          <motion.div
            variants={fadeLeft(0.17)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-5 sm:mb-6"
          >
            <div className="flex gap-[3px] h-[3px] w-12 sm:w-16">
              <div className="flex-1" style={{ background: "#fc8814" }} />
              <div className="flex-1" style={{ background: "#ffffff"}} />
              <div className="flex-1 bg-[#138808]" />
            </div>
            <span
              className="text-[0.55rem] sm:text-[0.67rem] font-black tracking-[0.22em] sm:tracking-[0.28em] uppercase"
              style={{ fontFamily: "Raleway, sans-serif", color: "#e8e7e6", opacity: 0.5 }}
            >
              Union Home Minister of India
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp(0.23)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-[0.85rem] sm:text-[1.05rem] md:text-[1.18rem] italic leading-[1.6] sm:leading-[1.88] max-w-2xl mb-6 sm:mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e7e6", opacity: 0.6 }}
          >
            "From digital literacy to national security — every campaign is a
            promise kept, every movement a step closer to a stronger Bharat."
          </motion.p>

          {/* Tab pills */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-10 sm:mb-16"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-3 sm:px-5 py-[6px] sm:py-[9px] text-[0.5rem] sm:text-[0.62rem] font-black tracking-[0.15em] sm:tracking-[0.18em] uppercase
                  transition-all duration-250 overflow-hidden whitespace-nowrap"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {activeTab === tab ? (
                  <>
                    <span className="relative z-10" style={{ color: "#FFFFFF" }}>{tab}</span>
                    <span className="absolute inset-0" style={{ background: "#fc8814" }} />
                  </>
                ) : (
                  <>
                    <span
                      className="relative z-10 transition-colors duration-200"
                      style={{ color: "#e8e7e6", opacity: 0.55 }}
                    >
                      {tab}
                    </span>
                    <span className="absolute inset-0 border border-white/14 hover:border-white/30" />
                  </>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stat bar */}
      <div className="relative z-10 w-full border-t border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex divide-x divide-white/[0.06]">
            {STATS.map((s, i) => (
              <StatItem key={i} stat={s} index={i} animate={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}