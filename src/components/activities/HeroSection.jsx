import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Award, Users, MapPin, Calendar } from "lucide-react";

/* ─── ANIMATION VARIANTS ─────────────────────────────────── */
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

/* ─── COUNTER HOOK ───────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(target.replace(/[^0-9]/g, ""));
    if (!numeric) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  const suffix = target.replace(/[0-9]/g, "");
  return count + suffix;
}

/* ─── STAT ITEM ──────────────────────────────────────────── */
function StatItem({ stat, index, animate }) {
  const display = useCounter(stat.num, 1600 + index * 100, animate);
  const Icon = stat.Icon;
  return (
    <motion.div
      variants={fadeUp(0.6 + index * 0.08)}
      initial="hidden"
      animate={animate ? "show" : "hidden"}
      className="group flex-1 relative flex flex-col items-center justify-center gap-2
        py-6 px-4 border-r border-white/[0.06] last:border-r-0
        hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] opacity-0
          group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: stat.color }}
      />

      <Icon
        size={16}
        strokeWidth={1.5}
        className="mb-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: stat.color }}
      />

      <span
        className="text-[2.2rem] md:text-[2.6rem] font-black leading-none tabular-nums"
        style={{ fontFamily: "'Playfair Display', serif", color: stat.color }}
      >
        {display}
      </span>

      <span
        className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-white/40
          group-hover:text-white/65 transition-colors duration-300"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function ActivitiesHero() {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true, margin: "-40px" });
  const [activeTab, setActiveTab] = useState("Overview");

  /* Placeholder bg — replace src with your actual image path */
  const BG_IMAGE =
    "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1800&q=80";

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "sans-serif" }}
    >
      {/* ── BACKGROUND IMAGE + OVERLAYS ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* dark navy primary overlay */}
        <div className="absolute inset-0 bg-[#0A1628]/80" />
        {/* left-side vignette — content readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.82) 45%, rgba(10,22,40,0.30) 100%)",
          }}
        />
        {/* bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1628] to-transparent" />
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#FDFAF5 1px,transparent 1px),linear-gradient(90deg,#FDFAF5 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      {/* ── TOP TRICOLOR BAR ── */}
      <div className="absolute top-0 left-0 right-0 flex h-[3px] z-20">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white/60" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* ── SCROLL LABEL (right side vertical) ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-white/15" />
        <span
          className="text-[0.52rem] font-black tracking-[0.35em] uppercase text-white/25 [writing-mode:vertical-lr]"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-white/25" />
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-0">
        {/* Eyebrow */}
        <motion.div
          variants={fadeLeft(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-8 h-[2px] bg-[#E8541A] rounded" />
          <span
            className="text-[0.65rem] font-black tracking-[0.32em] uppercase text-[#E8541A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Activities & Initiatives
          </span>
        </motion.div>

        {/* Hero Title */}
        <div className="mb-4">
          <motion.h1
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9.5rem]
              font-black leading-[0.88] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Activities
          </motion.h1>
        </div>

        {/* Subtitle rule */}
        <motion.div
          variants={fadeLeft(0.18)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex gap-[3px] h-[3px] w-16">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white/30" />
            <div className="flex-1 bg-[#138808]" />
          </div>
          <span
            className="text-[0.68rem] font-black tracking-[0.28em] uppercase text-white/45"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Union Home Minister of India
          </span>
        </motion.div>

        {/* Quote / tagline */}
        <motion.p
          variants={fadeUp(0.24)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-[1.05rem] md:text-[1.2rem] italic text-white/55 leading-[1.85] max-w-lg mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "A tireless advocate for Bharat's security, cultural heritage, and
          grassroots development — bridging governance with the people it
          serves."
        </motion.p>
      </div>
    </section>
  );
}
