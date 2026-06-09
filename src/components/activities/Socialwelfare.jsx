import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Droplets, GraduationCap, Home, Leaf, Stethoscope } from "lucide-react";

const impactNumbers = [
  { num: 80,  suffix: "L+", label: "Beneficiaries Reached",    icon: Heart },
  { num: 500, suffix: "+",  label: "Villages Covered",         icon: Home },
  { num: 120, suffix: "+",  label: "Health Camps Organised",   icon: Stethoscope },
  { num: 40,  suffix: "Cr", label: "Funds Mobilised (₹)",      icon: Leaf },
];

const initiatives = [
  {
    index: "01",
    icon: Droplets,
    color: "#fc8814",
    tag: "Water & Sanitation",
    title: "Jal Jeevan in Gandhinagar",
    impact: "3L+ Households",
    desc: "Facilitated 100% piped water connection to every household in Gandhinagar constituency under the Jal Jeevan Mission — ensuring safe drinking water to lakhs of families.",
    year: "2020–22",
  },
  {
    index: "02",
    icon: GraduationCap,
    color: "#fc8814",
    tag: "Education",
    title: "Vidya Sahay Scholarship Drive",
    impact: "12,000+ Students",
    desc: "Championed scholarship programmes for meritorious students from underprivileged families in Gujarat, enabling access to quality higher education and skill development.",
    year: "2018–23",
  },
  {
    index: "03",
    icon: Stethoscope,
    color: "#138808",
    tag: "Healthcare",
    title: "Jan Arogya Health Camps",
    impact: "80L+ Patients",
    desc: "Organised over 120 free health camps across Gujarat and Delhi NCR, providing medical consultations, medicines, and diagnostics to marginalised communities.",
    year: "2015–24",
  },
  {
    index: "04",
    icon: Home,
    color: "#fc8814",
    tag: "Housing",
    title: "PM Awas Urban — Gandhinagar Push",
    impact: "15,000+ Homes",
    desc: "Actively monitored and accelerated PM Awas Yojana implementation in Gandhinagar, ensuring timely delivery of affordable housing units to the urban poor.",
    year: "2016–24",
  },
  {
    index: "05",
    icon: Leaf,
    color: "#fc8814",
    tag: "Environment",
    title: "Green Gujarat Plantation Drive",
    impact: "10L+ Trees",
    desc: "Led mass plantation drives across constituencies, partnering with NGOs, schools, and local bodies to restore green cover and promote ecological awareness.",
    year: "2019–23",
  },
  {
    index: "06",
    icon: Heart,
    color: "#138808",
    tag: "Women Empowerment",
    title: "Shakti Kendras & SHG Support",
    impact: "8,000+ SHGs",
    desc: "Strengthened Self-Help Groups and Shakti Kendras for women across Gujarat — providing microfinance, skill training, and market linkages to empower women entrepreneurs.",
    year: "2014–24",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function SocialWelfare() {
  const headerRef = useRef(null);
  const statsRef  = useRef(null);
  const cardsRef  = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const statsInView  = useInView(statsRef,  { once: true, margin: "-80px" });
  const cardsInView  = useInView(cardsRef,  { once: true, margin: "-80px" });

  return (
    <section id="social-welfare" className="relative bg-white overflow-hidden py-20 md:py-28">

      {/* Subtle line texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(#1a1a1a 1px,transparent 1px)", backgroundSize: "100% 40px" }} />

      {/* Green glow — bottom left */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #138808, transparent 70%)" }} />

      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[12rem] font-black
          text-[#1a1a1a]/[0.03] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        SEVA
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14 md:mb-16">
          <div>
            <motion.div variants={fadeUp(0)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#fc8814] rounded" />
              <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#fc8814]"
                style={{ fontFamily: "Raleway, sans-serif" }}>Jan Seva</span>
              <span className="w-7 h-[2px] bg-[#138808] rounded" />
            </motion.div>
            <motion.h2 variants={fadeUp(0.08)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black text-[#1a1a1a] leading-[0.93]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Social<br /><em className="text-[#fc8814] not-italic italic">Welfare</em>
            </motion.h2>
          </div>
          <div>
            <motion.div variants={fadeUp(0.14)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex gap-[3px] mb-4 h-[3px] w-24">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#e8e7e6] border-t border-b border-[#e8e7e6]" />
              <div className="flex-1 bg-[#138808]" />
            </motion.div>
            <motion.p variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[1.05rem] text-[#3a3a3a]/60 leading-[1.9] italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Beyond legislation and politics, Amit Shah has championed grassroots welfare
              initiatives — from clean water and healthcare to education and women empowerment —
              touching millions of lives across Bharat.
            </motion.p>
          </div>
        </div>

        {/* ── IMPACT NUMBERS ── */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e8e7e6] mb-16 md:mb-20">
          {impactNumbers.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.09)}
                initial="hidden"
                animate={statsInView ? "show" : "hidden"}
                className={`group relative flex flex-col gap-2 p-6 md:p-8
                  bg-[#f5f5f5] hover:bg-white transition-colors duration-300 overflow-hidden
                  ${i < 3 ? "border-r border-[#e8e7e6]" : ""}
                  ${i < 2 ? "border-b border-[#e8e7e6] lg:border-b-0" : ""}`}
              >
                <Icon size={20} className="text-[#138808] mb-1" strokeWidth={1.5} />
                <span className="text-[2.8rem] md:text-[3.2rem] font-black text-[#1a1a1a] leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Counter target={s.num} suffix={s.suffix} inView={statsInView} />
                </span>
                <span className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#3a3a3a]/45"
                  style={{ fontFamily: "Raleway, sans-serif" }}>{s.label}</span>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#138808] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* ── INITIATIVE CARDS ── */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {initiatives.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.09)}
                initial="hidden"
                animate={cardsInView ? "show" : "hidden"}
                whileHover={{ y: -4 }}
                className="group relative bg-[#f5f5f5] border border-[#e8e7e6] p-6 overflow-hidden
                  hover:border-[#fc8814]/25 hover:shadow-[0_10px_32px_rgba(0,0,0,0.07)]
                  transition-all duration-300"
              >
                {/* Left color bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: item.color }} />

                {/* Year chip */}
                <div className="absolute top-4 right-4">
                  <span className="text-[0.55rem] font-black tracking-[0.15em] uppercase
                    text-[#1a1a1a]/20 border border-[#1a1a1a]/10 px-2 py-[3px]"
                    style={{ fontFamily: "Raleway, sans-serif" }}>{item.year}</span>
                </div>

                {/* Icon + index */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center border border-[#e8e7e6] bg-white"
                    style={{ color: item.color }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[0.6rem] font-black tracking-[0.2em] text-[#1a1a1a]/20"
                    style={{ fontFamily: "Raleway, sans-serif" }}>{item.index}</span>
                </div>

                {/* Tag */}
                <span className="text-[0.58rem] font-black tracking-[0.22em] uppercase block mb-2"
                  style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.tag}</span>

                {/* Title */}
                <h4 className="text-[1.08rem] font-black text-[#1a1a1a] leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>

                {/* Impact badge */}
                <div className="inline-flex items-center gap-1 mb-3 px-2 py-[3px] border"
                  style={{ borderColor: item.color + "40", background: item.color + "0d" }}>
                  <span className="text-[0.6rem] font-black tracking-[0.15em] uppercase"
                    style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>Impact:</span>
                  <span className="text-[0.7rem] font-bold text-[#1a1a1a]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>{item.impact}</span>
                </div>

                {/* Desc */}
                <p className="text-[0.88rem] text-[#3a3a3a]/60 leading-[1.8] italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                  style={{ background: `radial-gradient(circle at 20% 80%, ${item.color}07, transparent 60%)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}