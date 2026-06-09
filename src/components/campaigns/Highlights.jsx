import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Wifi, Heart } from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    Icon: Shield,
    color: "#fc8814",
    label: "National Security",
    year: "2023",
    title: "Nasha Mukt Bharat Abhiyan",
    pull: "India's largest anti-narcotics movement — reaching every district, every village.",
    body: "Launched as a multi-ministry convergence programme, the Nasha Mukt Bharat Abhiyan has mobilised over 10 crore citizens, trained 2 lakh volunteers, and established dedicated de-addiction centres across 272 identified districts. Amit Shah's personal involvement in ground-level reviews has kept the campaign accountable and impactful.",
    stats: [
      { num: "10Cr+", label: "Citizens Engaged" },
      { num: "272",   label: "Districts Covered" },
      { num: "2L+",   label: "Volunteers Trained" },
    ],
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80",
  },
  {
    Icon: Wifi,
    color: "#1A6BB5",
    label: "Digital India",
    year: "2022",
    title: "Cyber Suraksha Abhiyan",
    pull: "Making every citizen a guardian of their own digital identity.",
    body: "The Cyber Suraksha Abhiyan redefined public outreach on digital safety — deploying trained cyber ambassadors across schools, colleges, and panchayats. The campaign addressed online fraud, cyber bullying, and data privacy, equipping over 1 crore citizens with actionable digital hygiene practices.",
    stats: [
      { num: "1Cr+", label: "People Trained" },
      { num: "22",   label: "States Covered" },
      { num: "5000+", label: "Workshops Held" },
    ],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
  },
  {
    Icon: Heart,
    color: "#138808",
    label: "Jan Kalyan",
    year: "2023",
    title: "Vanvasi Kalyan Sampark",
    pull: "No tribal hamlet left behind — welfare that walks the last mile.",
    body: "Through dedicated sampark yatras, government officials and social workers reached over 800 villages across Gujarat, Madhya Pradesh, Chhattisgarh, and Jharkhand. The initiative ensured that Ayushman Bharat, PM Awas Yojana, and Jal Jeevan Mission benefits were delivered directly, bypassing intermediaries.",
    stats: [
      { num: "800+", label: "Villages Covered" },
      { num: "4",    label: "States" },
      { num: "12L+", label: "Beneficiaries" },
    ],
    img: "https://images.unsplash.com/photo-1593642532559-0c6d3fc62b89?w=900&q=80",
  },
];

/* ─── ANIMATIONS ─────────────────────────────────────────── */
const fadeUp   = (d = 0) => ({ hidden: { opacity: 0, y: 28 },  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } } });
const fadeLeft = (d = 0) => ({ hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } } });
const fadeRight= (d = 0) => ({ hidden: { opacity: 0, x: 28 },  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } } });

/* ─── SPOTLIGHT BLOCK ────────────────────────────────────── */
function SpotlightBlock({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon   = item.Icon;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-[#E2DDD5]">

      {/* Image — alternates sides */}
      <motion.div
        variants={isEven ? fadeLeft(0) : fadeRight(0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`relative h-64 lg:h-auto overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A1628]/55" />
        {/* Year badge */}
        <div className="absolute top-5 left-5">
          <span className="text-[0.58rem] font-black tracking-[0.22em] uppercase text-white/80 border border-white/25 px-3 py-1.5"
            style={{ fontFamily: "Raleway, sans-serif" }}>{item.year}</span>
        </div>
        {/* Pull quote overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[1.05rem] italic leading-[1.6]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e7e6" }}>
            "{item.pull}"
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={isEven ? fadeRight(0.1) : fadeLeft(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`relative bg-[#FDFAF5] p-8 md:p-10 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        {/* Left color bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: item.color }} />

        <div>
          {/* Label row */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 flex items-center justify-center border border-[#E2DDD5] bg-white"
              style={{ color: item.color }}>
              <Icon size={18} strokeWidth={1.5} />
            </div>
            <div>
              <span className="block text-[0.56rem] font-black tracking-[0.22em] uppercase"
                style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.label}</span>
              <span className="text-[0.54rem] font-bold tracking-[0.12em] text-[#8A8278]"
                style={{ fontFamily: "Raleway, sans-serif" }}>Spotlight Campaign</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[1.7rem] md:text-[2rem] font-black text-[#1A1410] leading-[1.05] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>

          {/* Body */}
          <p className="text-[0.9rem] italic text-[#4A4540] leading-[1.85] mb-7"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.body}</p>
        </div>

        {/* Stats row */}
        <div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {item.stats.map((s, i) => (
              <div key={i} className="border border-[#E8E4DC] bg-white p-3 text-center">
                <span className="block text-[1.3rem] font-black leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: item.color }}>{s.num}</span>
                <span className="text-[0.54rem] font-black tracking-[0.14em] uppercase text-[#6B6560]"
                  style={{ fontFamily: "Raleway, sans-serif" }}>{s.label}</span>
              </div>
            ))}
          </div>

          <button className="group flex items-center gap-2 text-[0.62rem] font-black tracking-[0.18em] uppercase transition-all duration-250"
            style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>
            <span>Read Full Report</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-250" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────── */
export default function CampaignHighlights() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section className="relative bg-[#F5F0E8] py-24 overflow-hidden">
      {/* Subtle dot texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: "radial-gradient(#D6D1C8 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div variants={fadeUp(0)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px]" style={{ background: "#fc8814" }} />
              <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase"
                style={{ fontFamily: "Raleway, sans-serif", color: "#fc8814" }}>Campaign Spotlights</span>
            </motion.div>
            <motion.h2 variants={fadeUp(0.07)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.6rem] font-black text-[#1A1410] leading-[0.92]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Campaigns That<br /><em style={{ color: "#fc8814" }} className="italic">Moved Bharat</em>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp(0.14)} initial="hidden" animate={headerInView ? "show" : "hidden"}
            className="text-[1rem] italic text-[#4A4540] leading-[1.9]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A deeper look at three landmark initiatives — their genesis, their ground-level execution,
            and the lives they transformed across Bharat.
          </motion.p>
        </div>

        {/* ── Spotlight blocks ── */}
        <div className="flex flex-col gap-8">
          {HIGHLIGHTS.map((item, i) => (
            <SpotlightBlock key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}