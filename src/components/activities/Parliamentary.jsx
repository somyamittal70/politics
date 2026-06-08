import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ScrollText, Mic, FileCheck, ShieldCheck, BookOpen, ChevronDown, ArrowRight } from "lucide-react";

const stats = [
  { num: "370",  label: "Article Abrogated",       icon: ShieldCheck, suffix: "" },
  { num: "500+", label: "Speeches in Parliament",  icon: Mic,         suffix: "" },
  { num: "18+",  label: "Bills Piloted",            icon: FileCheck,   suffix: "" },
  { num: "100%", label: "Attendance Record",        icon: BookOpen,    suffix: "" },
];

const legislations = [
  {
    index: "01",
    year: "2019",
    title: "Citizenship Amendment Act (CAA)",
    house: "Lok Sabha & Rajya Sabha",
    tag: "Landmark Legislation",
    color: "#E8541A",
    icon: ScrollText,
    desc: "Granted Indian citizenship to persecuted religious minorities — Hindus, Sikhs, Jains, Buddhists, Parsis, and Christians — from Afghanistan, Bangladesh, and Pakistan. A historic step in India's humanitarian policy.",
  },
  {
    index: "02",
    year: "2019",
    title: "Article 370 Abrogation",
    house: "Rajya Sabha",
    tag: "Constitutional Amendment",
    color: "#C9A84C",
    icon: ShieldCheck,
    desc: "Moved the resolution to abrogate Article 370, ending the special status of Jammu & Kashmir and fully integrating it with the Indian Union. Fulfilled a decades-long national aspiration of the BJP and RSS.",
  },
  {
    index: "03",
    year: "2019",
    title: "UAPA Amendment Act",
    house: "Lok Sabha & Rajya Sabha",
    tag: "Security Legislation",
    color: "#138808",
    icon: ShieldCheck,
    desc: "Strengthened the Unlawful Activities Prevention Act, empowering agencies to designate individuals as terrorists — a crucial tool in dismantling terror networks operating within and across Indian borders.",
  },
  {
    index: "04",
    year: "2020",
    title: "National Forensic Sciences University Act",
    house: "Lok Sabha",
    tag: "Institution Building",
    color: "#E8541A",
    icon: BookOpen,
    desc: "Established India's first national university dedicated to forensic sciences, strengthening the country's criminal justice infrastructure and scientific investigation capabilities.",
  },
  {
    index: "05",
    year: "2023",
    title: "Three Criminal Law Reform Bills",
    house: "Lok Sabha & Rajya Sabha",
    tag: "Justice Reform",
    color: "#C9A84C",
    icon: FileCheck,
    desc: "Spearheaded three landmark bills replacing the colonial-era IPC, CrPC, and Indian Evidence Act with the Bharatiya Nyaya Sanhita, Nagarik Suraksha Sanhita, and Sakshya Adhiniyam — the most comprehensive criminal law overhaul since independence.",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

function LegislationItem({ item, index, inView }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.09)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="border-b border-[#FDFAF5]/[0.07] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 md:gap-6 py-5 text-left focus:outline-none group"
      >
        <span className="shrink-0 text-[0.6rem] font-black tracking-[0.15em] text-[#FDFAF5]/20 w-5"
          style={{ fontFamily: "Raleway, sans-serif" }}>{item.index}</span>

        <span className="shrink-0 text-[0.6rem] font-black tracking-[0.18em] uppercase px-3 py-[4px] border"
          style={{ fontFamily: "Raleway, sans-serif", color: item.color, borderColor: item.color + "50", background: item.color + "15" }}>
          {item.year}
        </span>

        <span className="flex-1 text-[1rem] md:text-[1.1rem] font-black text-[#FDFAF5]/85 group-hover:text-[#FDFAF5] transition-colors duration-200 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {item.title}
        </span>

        <span className="hidden md:block shrink-0 text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[#FDFAF5]/25 mr-3"
          style={{ fontFamily: "Raleway, sans-serif" }}>
          {item.house}
        </span>

        <div className="shrink-0 w-8 h-8 border border-[#FDFAF5]/10 group-hover:border-[#E8541A]/40 flex items-center justify-center transition-colors duration-200"
          style={{ color: item.color }}>
          <Icon size={14} strokeWidth={1.6} />
        </div>

        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
          <ChevronDown size={15} className="text-[#FDFAF5]/25" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-[4.5rem] pr-4 pb-5 flex gap-4">
              <div className="shrink-0 w-[2px] self-stretch rounded" style={{ background: item.color }} />
              <div>
                <span className="text-[0.58rem] font-black tracking-[0.22em] uppercase block mb-2"
                  style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.tag}</span>
                <p className="text-[0.93rem] text-[#FDFAF5]/50 leading-[1.85] italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ParliamentaryWork() {
  const headerRef = useRef(null);
  const statsRef  = useRef(null);
  const listRef   = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const statsInView  = useInView(statsRef,  { once: true, margin: "-80px" });
  const listInView   = useInView(listRef,   { once: true, margin: "-80px" });

  return (
    <section id="parliamentary-work" className="relative bg-[#0D1B3E] overflow-hidden py-20 md:py-28">

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(#FDFAF5 1px,transparent 1px),linear-gradient(90deg,#FDFAF5 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* Saffron glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E8541A, transparent 70%)" }} />

      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[12rem] font-black
          text-[#FDFAF5]/[0.025] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        PARLIAMENT
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14 md:mb-16">
          <div>
            <motion.div variants={fadeUp(0)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
              <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]"
                style={{ fontFamily: "Raleway, sans-serif" }}>Legislature</span>
              <span className="w-7 h-[2px] bg-[#138808] rounded" />
            </motion.div>
            <motion.h2 variants={fadeUp(0.08)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black text-[#FDFAF5] leading-[0.93]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Parliamentary<br /><em className="text-[#E8541A] not-italic italic">Work</em>
            </motion.h2>
          </div>
          <div>
            <motion.div variants={fadeUp(0.14)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex gap-[3px] mb-4 h-[3px] w-24">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#FDFAF5]/20" />
              <div className="flex-1 bg-[#138808]" />
            </motion.div>
            <motion.p variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[1.05rem] text-[#FDFAF5]/40 leading-[1.9] italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              As Union Home Minister and a formidable presence in both Houses, Amit Shah has
              piloted some of India's most historic legislation — reshaping the nation's legal,
              constitutional, and security architecture.
            </motion.p>
          </div>
        </div>

        {/* ── STATS ── */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-16 md:mb-20 border border-[#FDFAF5]/[0.08]">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.09)}
                initial="hidden"
                animate={statsInView ? "show" : "hidden"}
                className={`group relative flex flex-col gap-2 p-6 md:p-8
                  bg-[#162547]/50 hover:bg-[#162547] transition-colors duration-300 overflow-hidden
                  ${i < 3 ? "border-r border-[#FDFAF5]/[0.07]" : ""}
                  ${i < 2 ? "border-b border-[#FDFAF5]/[0.07] lg:border-b-0" : ""}`}
              >
                <Icon size={20} className="text-[#E8541A] mb-1" strokeWidth={1.5} />
                <span className="text-[2.8rem] md:text-[3.2rem] font-black text-[#E8541A] leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</span>
                <span className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#FDFAF5]/30"
                  style={{ fontFamily: "Raleway, sans-serif" }}>{s.label}</span>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8541A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* ── LEGISLATION ACCORDION ── */}
        <div ref={listRef}>
          <motion.div variants={fadeUp(0)} initial="hidden" animate={listInView ? "show" : "hidden"}
            className="flex items-center gap-4 mb-2">
            <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#FDFAF5]/20"
              style={{ fontFamily: "Raleway, sans-serif" }}>Key Legislation — Click to expand</span>
            <div className="flex-1 h-[1px] bg-[#FDFAF5]/[0.07]" />
          </motion.div>

          <div className="border border-[#FDFAF5]/[0.07] bg-[#162547]/40 px-4 md:px-8">
            {legislations.map((item, i) => (
              <LegislationItem key={i} item={item} index={i} inView={listInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}