import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CalendarDays,
  Trophy,
  HardHat,
  Flag,
  Scale,
  Mountain,
  ShieldCheck,
  Vote,
  ClipboardList,
  Building2,
} from "lucide-react";

const bigStats = [
  { icon: CalendarDays, num: 35,  suffix: "+",  label: "Years in Public Life" },
  { icon: Trophy,       num: 5,   suffix: "×",  label: "Times Elected" },
  { icon: HardHat,      num: 120, suffix: "+",  label: "Development Projects" },
  { icon: Flag,         num: 140, suffix: "Cr", label: "Indians Served" },
];

const achievements = [
  {
    icon: Scale,
    tag: "Legislation",
    title: "Historic CAA Enacted",
    desc: "Spearheaded the Citizenship Amendment Act — a landmark legislation granting citizenship to persecuted minorities from neighbouring countries.",
    year: "2019",
    color: "#fc8814",
  },
  {
    icon: Mountain,
    tag: "National Unity",
    title: "Article 370 Abrogation",
    desc: "Led the historic revocation of Article 370, integrating Jammu & Kashmir fully into the Indian Union, fulfilling a decades-long national aspiration.",
    year: "2019",
    color: "#fc8814",
  },
  {
    icon: ShieldCheck,
    tag: "Security",
    title: "Zero Tolerance on Terror",
    desc: "Oversaw the dismantling of multiple terror networks and implemented robust counter-insurgency measures across Northeast India and Kashmir.",
    year: "2020–24",
    color: "#138808",
  },
  {
    icon: Vote,
    tag: "Elections",
    title: "BJP to 303 Seats",
    desc: "As BJP President, architected the party's 2019 landslide victory — the largest majority for any party in over three decades.",
    year: "2019",
    color: "#fc8814",
  },
  {
    icon: ClipboardList,
    tag: "Policy",
    title: "NRC & UAPA Reform",
    desc: "Drove the National Register of Citizens process and strengthened UAPA to equip agencies with tools to combat terrorism more effectively.",
    year: "2019",
    color: "#fc8814",
  },
  {
    icon: Building2,
    tag: "Development",
    title: "Gandhinagar Transformation",
    desc: "As Gandhinagar MP, transformed the constituency with modern infrastructure, connectivity projects, and world-class urban development.",
    year: "2019–24",
    color: "#138808",
  },
];

// Animated counter
function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22,1,0.36,1] } },
});

export default function AchievementsSection() {
  const statsRef = useRef(null);
  const cardsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="relative bg-[#1a1a1a] overflow-hidden py-20 md:py-28">

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#e8e7e6 1px,transparent 1px),linear-gradient(90deg,#e8e7e6 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle,#fc8814,transparent 70%)" }} />

      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[12rem] font-black
          text-[#e8e7e6]/[0.025] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        LEGACY
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-[2px] bg-[#fc8814] rounded" />
            <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#fc8814]"
              style={{ fontFamily: "Raleway, sans-serif" }}>Key Accomplishments</span>
            <span className="w-7 h-[2px] bg-[#138808] rounded" />
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black text-[#e8e7e6] leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Milestones & <em className="text-[#fc8814] not-italic italic">Achievements</em>
          </h2>
          <p className="text-[1rem] text-[#e8e7e6]/40 mt-3 max-w-lg mx-auto leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A legacy built through decades of relentless public service, bold decisions, and unwavering commitment.
          </p>
        </motion.div>

        {/* ── BIG STATS ── */}
        <div ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-20">
          {bigStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.1)}
                initial="hidden"
                animate={statsInView ? "show" : "hidden"}
                className="group relative flex flex-col items-center justify-center gap-2
                  border border-[#e8e7e6]/[0.08] bg-[#252525]/60 py-8 px-4 overflow-hidden
                  hover:border-[#fc8814]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(252,136,20,0.06), transparent 70%)" }} />

                <Icon size={28} className="text-[#e8e7e6]/50" strokeWidth={1.5} />

                <span className="text-[2.6rem] md:text-[3rem] font-black text-[#fc8814] leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Counter target={s.num} suffix={s.suffix} inView={statsInView} />
                </span>
                <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#e8e7e6]/35 text-center"
                  style={{ fontFamily: "Raleway, sans-serif" }}>{s.label}</span>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fc8814] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* ── ACHIEVEMENT CARDS ── */}
        <div ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.09)}
                initial="hidden"
                animate={cardsInView ? "show" : "hidden"}
                className="group relative flex flex-col gap-4 bg-[#252525]/70 border border-[#e8e7e6]/[0.07]
                  p-6 overflow-hidden hover:border-[#fc8814]/30
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                whileHover={{ y: -4 }}
              >
                {/* Left color bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: a.color }} />

                {/* Year chip */}
                <div className="absolute top-4 right-4">
                  <span className="text-[0.58rem] font-black tracking-[0.18em] uppercase
                    text-[#e8e7e6]/25 border border-[#e8e7e6]/10 px-2 py-[3px]"
                    style={{ fontFamily: "Raleway, sans-serif" }}>{a.year}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center
                  bg-[#1a1a1a] border border-[#e8e7e6]/[0.08] rounded-sm"
                  style={{ color: a.color }}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Tag */}
                <span className="text-[0.58rem] font-black tracking-[0.22em] uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", color: a.color }}>{a.tag}</span>

                {/* Title */}
                <h3 className="text-[1.15rem] font-black text-[#e8e7e6] leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{a.title}</h3>

                {/* Desc */}
                <p className="text-[0.88rem] text-[#e8e7e6]/45 leading-[1.8] flex-1 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>{a.desc}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                  style={{ background: "radial-gradient(circle at 30% 50%,rgba(252,136,20,0.04),transparent 70%)" }} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}