import { useEffect, useRef, useState } from "react";
import { GraduationCap, Trees, Users, CalendarCheck, HandHeart, ShieldCheck } from "lucide-react";

/* ─── STATS DATA ──────────────────────────────────────────── */
const STATS = [
  { icon: GraduationCap, value: 1000, suffix: "+", title: "Students Felicitated" },
  { icon: Trees,         value: 5000, suffix: "+", title: "Trees Planted" },
  { icon: Users,         value: 10000,suffix: "+", title: "Citizens Reached" },
  { icon: CalendarCheck, value: 200,  suffix: "+", title: "Programs Conducted" },
  { icon: HandHeart,     value: 2500, suffix: "+", title: "Volunteers Participated" },
  { icon: ShieldCheck,   value: 3800, suffix: "+", title: "Assistance Cases Supported" },
];

/* ─── COUNTER HOOK ────────────────────────────────────────── */
function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

/* ─── STAT CARD ───────────────────────────────────────────── */
function StatCard({ stat, index, started }) {
  const count = useCounter(stat.value, 1800 + index * 100, started);
  const Icon = stat.icon;

  return (
    <div
      className="flex flex-col items-center justify-center gap-3
        bg-white rounded-2xl border border-[#ede9e2] px-6 py-8
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#fff4e8] flex items-center justify-center">
        <Icon size={24} className="text-[#fc8814]" strokeWidth={1.8} />
      </div>

      {/* Number */}
      <div className="flex items-end gap-0.5">
        <span
          className="text-[2.6rem] font-black leading-none text-[#1a1a1a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {count.toLocaleString()}
        </span>
        <span
          className="text-[1.8rem] font-black leading-none text-[#fc8814] mb-0.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Divider */}
      <div className="flex gap-[3px] h-[3px] w-[36px]">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-black/15" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* Title */}
      <p
        className="text-[13px] font-bold text-[#666] text-center leading-snug tracking-wide"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        {stat.title}
      </p>
    </div>
  );
}

/* ─── MAIN SECTION ────────────────────────────────────────── */
export default function ImpactReach() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafaf8] py-[72px] border-t border-[#ede9e2]"
      style={{ fontFamily: "Playfair Display, sans-serif" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-7">

        {/* Heading */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-7 h-0.5 bg-[#fc8814] rounded" />
          <span
            className="text-[10px] font-black tracking-[0.28em] uppercase text-[#fc8814]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Numbers That Matter
          </span>
        </div>

        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-black text-[#1a1a1a] leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Impact &amp; Community Reach
        </h2>

        <p
          className="text-[1rem] italic text-[#888] mt-2 max-w-xl leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Every number represents a life touched, a community strengthened
          and a promise kept."
        </p>

        <div className="flex gap-[3px] h-[3px] w-[52px] mt-3.5 mb-12">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-black/15" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} started={started} />
          ))}
        </div>

      </div>
    </section>
  );
}