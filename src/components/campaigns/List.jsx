import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Shield, Wifi, Heart, BookOpen, Globe, Leaf, Landmark, Users } from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────── */
const CAMPAIGNS = [
  {
    id: 1, category: "National Security",
    color: "#fc8814", accent: "#FFF0EA",
    Icon: Shield,
    year: "2023",
    tag: "Flagship",
    title: "Nasha Mukt Bharat Abhiyan",
    subtitle: "Drug-Free India Movement",
    desc: "A nationwide crusade against drug abuse — mobilising 10 crore citizens, law enforcement, and youth organisations to build a drug-free India from grassroots level.",
    reach: "10Cr+", reachLabel: "Citizens Engaged",
    states: "28 States",
    featured: true,
  },
  {
    id: 2, category: "Digital India",
    color: "#1A6BB5", accent: "#EAF2FC",
    Icon: Wifi,
    year: "2022",
    tag: "Digital",
    title: "Cyber Suraksha Abhiyan",
    subtitle: "National Cyber Safety Drive",
    desc: "Empowering citizens with cyber hygiene awareness — reaching schools, colleges, and community centres with digital literacy workshops across urban and rural India.",
    reach: "1Cr+", reachLabel: "People Reached",
    states: "22 States",
    featured: false,
  },
  {
    id: 3, category: "Jan Kalyan",
    color: "#138808", accent: "#E8F5E9",
    Icon: Heart,
    year: "2023",
    tag: "Welfare",
    title: "Vanvasi Kalyan Sampark",
    subtitle: "Tribal Welfare Connect",
    desc: "Sustained door-to-door outreach to tribal communities — ensuring welfare schemes, healthcare, and education reach the last mile across Gujarat and Central India.",
    reach: "800+", reachLabel: "Villages Covered",
    states: "8 States",
    featured: false,
  },
  {
    id: 4, category: "Cultural",
    color: "#C9A84C", accent: "#FBF6E9",
    Icon: BookOpen,
    year: "2022",
    tag: "Heritage",
    title: "Ek Bharat Shreshtha Bharat",
    subtitle: "Cultural Unity Initiative",
    desc: "Celebrating India's civilisational diversity — literary festivals, kavi sammelans, and cultural exchange programmes fostering national unity through shared heritage.",
    reach: "50+", reachLabel: "Events Held",
    states: "All States",
    featured: false,
  },
  {
    id: 5, category: "National Security",
    color: "#fc8814", accent: "#FFF0EA",
    Icon: Landmark,
    year: "2021",
    tag: "Policy",
    title: "UAPA Awareness Campaign",
    subtitle: "Counter-Terrorism Policy Outreach",
    desc: "Informing citizens and institutions about strengthened anti-terror legislation — building public confidence in national security frameworks through direct engagement.",
    reach: "500+", reachLabel: "Briefings Held",
    states: "15 States",
    featured: false,
  },
  {
    id: 6, category: "Jan Kalyan",
    color: "#138808", accent: "#E8F5E9",
    Icon: Leaf,
    year: "2023",
    tag: "Environment",
    title: "Ek Ped Maa Ke Naam",
    subtitle: "Tree Plantation Drive",
    desc: "A massive green initiative honouring mothers — planting crores of saplings nationwide with the participation of citizens, schools, and local governance bodies.",
    reach: "5Cr+", reachLabel: "Trees Planted",
    states: "All States",
    featured: false,
  },
  {
    id: 7, category: "Digital India",
    color: "#1A6BB5", accent: "#EAF2FC",
    Icon: Globe,
    year: "2022",
    tag: "Diaspora",
    title: "Pravasi Bharatiya Connect",
    subtitle: "NRI Outreach Programme",
    desc: "Strengthening bonds with the Indian diaspora — dedicated outreach drives across 30+ countries to build economic and cultural bridges between NRIs and Bharat.",
    reach: "30+", reachLabel: "Countries",
    states: "Global",
    featured: false,
  },
  {
    id: 8, category: "Cultural",
    color: "#C9A84C", accent: "#FBF6E9",
    Icon: Users,
    year: "2021",
    tag: "Youth",
    title: "Yuva Shakti Samvad",
    subtitle: "Student & Youth Dialogue",
    desc: "Interactive campus sessions across 500+ universities — listening to youth concerns, mentoring emerging leaders, and inspiring the next generation of public servants.",
    reach: "500+", reachLabel: "Campus Visits",
    states: "All States",
    featured: false,
  },
];

const FILTERS = ["All", "National Security", "Digital India", "Jan Kalyan", "Cultural"];

/* ─── ANIMATIONS ─────────────────────────────────────────── */
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } },
});

/* ─── CARD ───────────────────────────────────────────────── */
function CampaignCard({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon   = item.Icon;

  if (item.featured) {
    return (
      <motion.div ref={ref} variants={fadeUp(0)} initial="hidden" animate={inView ? "show" : "hidden"}
        className="md:col-span-2 group relative overflow-hidden border border-[#E2DDD5]
          bg-[#FDFAF5] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-350">
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: item.color }} />
        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 flex items-center justify-center border border-[#E2DDD5] bg-white"
                style={{ color: item.color }}>
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-[0.56rem] font-black tracking-[0.22em] uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.tag}</span>
                <span className="text-[0.56rem] font-bold tracking-[0.14em] text-[#8A8278]"
                  style={{ fontFamily: "Raleway, sans-serif" }}>{item.year} · {item.states}</span>
              </div>
              <span className="ml-auto text-[0.52rem] font-black tracking-[0.18em] uppercase
                px-2.5 py-1 text-white" style={{ background: item.color, fontFamily: "Raleway, sans-serif" }}>
                Flagship
              </span>
            </div>
            <h3 className="text-[1.65rem] font-black text-[#1A1410] leading-[1.05] mb-1.5"
              style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
            <p className="text-[0.72rem] font-black tracking-[0.14em] uppercase mb-4"
              style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.subtitle}</p>
            <p className="text-[0.92rem] italic text-[#4A4540] leading-[1.82]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
          </div>
          {/* Right stat */}
          <div className="flex flex-col items-center justify-center gap-2 py-8 border border-[#E2DDD5] bg-white">
            <span className="text-[3.5rem] font-black leading-none"
              style={{ fontFamily: "'Playfair Display', serif", color: item.color }}>{item.reach}</span>
            <span className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#6B6560]"
              style={{ fontFamily: "Playfair Display, sans-serif" }}>{item.reachLabel}</span>
            <div className="mt-4 w-12 h-[2px]" style={{ background: item.color }} />
            <span className="text-[0.58rem] font-bold text-[#8A8278]"
              style={{ fontFamily: "Playfair Display, sans-serif" }}>{item.states} · {item.year}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
          transition-transform duration-400 origin-left" style={{ background: item.color }} />
      </motion.div>
    );
  }

  return (
    <motion.div ref={ref} variants={fadeUp(index * 0.06)} initial="hidden" animate={inView ? "show" : "hidden"}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden border border-[#E2DDD5] bg-[#FDFAF5]
        hover:border-[#C8C3BB] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300 p-6">
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: item.color }} />
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 flex items-center justify-center border border-[#E2DDD5] bg-white"
          style={{ color: item.color }}>
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <div className="text-right">
          <span className="block text-[0.56rem] font-black tracking-[0.2em] uppercase text-[#8A8278]"
            style={{ fontFamily: "Raleway, sans-serif" }}>{item.year}</span>
          <span className="text-[0.54rem] text-[#B0AAA2]" style={{ fontFamily: "Raleway, sans-serif" }}>{item.states}</span>
        </div>
      </div>
      {/* Tag */}
      <span className="block text-[0.56rem] font-black tracking-[0.22em] uppercase mb-2"
        style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.tag} · {item.category}</span>
      {/* Title */}
      <h3 className="text-[1.08rem] font-black text-[#1A1410] leading-snug mb-1.5"
        style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
      <p className="text-[0.65rem] font-black tracking-[0.12em] uppercase mb-3 opacity-70"
        style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.subtitle}</p>
      {/* Desc */}
      <p className="text-[0.84rem] italic text-[#4A4540] leading-[1.8] mb-5"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
      {/* Stat pill */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4DC]">
        <span className="text-[1.4rem] font-black leading-none"
          style={{ fontFamily: "'Playfair Display', serif", color: item.color }}>{item.reach}</span>
        <span className="text-[0.56rem] font-black tracking-[0.14em] uppercase text-[#6B6560]"
          style={{ fontFamily: "Raleway, sans-serif" }}>{item.reachLabel}</span>
      </div>
      {/* Hover bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
        transition-transform duration-300 origin-left" style={{ background: item.color }} />
    </motion.div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────── */
export default function CampaignsList() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? CAMPAIGNS : CAMPAIGNS.filter(c => c.category === active);

  return (
    <section className="relative bg-[#1a1a1a]/92 py-24 overflow-hidden">
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#FDFAF5 1px,transparent 1px),linear-gradient(90deg,#FDFAF5 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <motion.div variants={fadeUp(0)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px]" style={{ background: "#fc8814" }} />
              <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase"
                style={{ fontFamily: "Raleway, sans-serif", color: "#fc8814" }}>All Campaigns</span>
              <span className="w-7 h-[2px] bg-[#138808]" />
            </motion.div>
            <motion.h2 variants={fadeUp(0.07)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.6rem] font-black text-[#FDFAF5] leading-[0.92]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Every Campaign,<br /><em style={{ color: "#fc8814" }} className="italic">A Promise Kept</em>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp(0.14)} initial="hidden" animate={headerInView ? "show" : "hidden"}
            className="text-[0.95rem] italic leading-[1.9] max-w-xs"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e7e6", opacity: 0.45 }}>
            From tribal welfare to national security — a comprehensive record of campaigns driving change across Bharat.
          </motion.p>
        </div>

        {/* ── Filter tabs ── */}
        <motion.div variants={fadeUp(0.18)} initial="hidden" animate={headerInView ? "show" : "hidden"}
          className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className="relative px-5 py-2 text-[0.6rem] font-black tracking-[0.18em] uppercase
                transition-all duration-250 overflow-hidden"
              style={{ fontFamily: "Playfair Display, sans-serif" }}>
              {active === f
                ? <><span className="relative z-10 text-white">{f}</span><span className="absolute inset-0" style={{ background: "#fc8814" }} /></>
                : <><span className="relative z-10" style={{ color: "#e8e7e6", opacity: 0.5 }}>{f}</span><span className="absolute inset-0 border border-white/14" /></>}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((item, i) => <CampaignCard key={item.id} item={item} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}