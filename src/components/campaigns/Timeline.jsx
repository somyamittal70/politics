import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Wifi, Heart, BookOpen, Globe, Leaf, Landmark, Users, Star } from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────── */
const TIMELINE_DATA = [
  {
    year: "2024",
    items: [
      { color: "#fc8814", Icon: Star,     tag: "Flagship",       title: "Viksit Bharat Sampark Yatra",     desc: "Nationwide outreach connecting citizens to the vision of a developed India by 2047 — gram sabhas, town halls, and digital connects." },
      { color: "#138808", Icon: Leaf,      tag: "Environment",    title: "Ek Ped Maa Ke Naam — Phase II",   desc: "Extended the landmark tree plantation drive with a target of 5 crore additional saplings across urban and rural India." },
    ],
  },
  {
    year: "2023",
    items: [
      { color: "#fc8814", Icon: Shield,   tag: "Security",       title: "Nasha Mukt Bharat Abhiyan",        desc: "India's largest anti-narcotics campaign mobilising 10 crore citizens across 272 identified districts." },
      { color: "#138808", Icon: Heart,    tag: "Tribal Welfare", title: "Vanvasi Kalyan Sampark",            desc: "Sustained sampark to 800+ villages ensuring last-mile delivery of central welfare schemes." },
    ],
  },
  {
    year: "2022",
    items: [
      { color: "#1A6BB5", Icon: Wifi,     tag: "Digital India",  title: "Cyber Suraksha Abhiyan",           desc: "Nationwide cyber literacy drive training 1 crore citizens through 5000+ workshops." },
      { color: "#e8e7e6", Icon: Globe,    tag: "Diaspora",       title: "Pravasi Bharatiya Connect",        desc: "Cultural and economic outreach to the Indian diaspora across 30+ countries." },
    ],
  },
  {
    year: "2021",
    items: [
      { color: "#fc8814", Icon: Landmark, tag: "Policy",         title: "UAPA Awareness Campaign",          desc: "Informing citizens and institutions about strengthened counter-terrorism legislation." },
      { color: "#e8e7e6", Icon: Users,    tag: "Youth",          title: "Yuva Shakti Samvad",               desc: "Campus dialogues across 500+ universities mentoring emerging leaders and public servants." },
    ],
  },
  {
    year: "2020",
    items: [
      { color: "#138808", Icon: Heart,    tag: "COVID Relief",   title: "Covid Sewa Abhiyan",               desc: "Mass relief mobilisation — distributing rations, medicines, and essentials to 2 crore families during the pandemic." },
      { color: "#fc8814", Icon: Shield,   tag: "Security",       title: "Border Area Development Drive",    desc: "Direct engagement with communities in border districts — infrastructure, connectivity, and security awareness." },
    ],
  },
];

/* ─── ANIMATIONS ─────────────────────────────────────────── */
const fadeUp   = (d = 0) => ({ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } } });
const fadeLeft = (d = 0) => ({ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } } });

/* ─── TIMELINE ITEM CARD ─────────────────────────────────── */
function TLCard({ item, delay }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon   = item.Icon;
  return (
    <motion.div ref={ref} variants={fadeLeft(delay)} initial="hidden" animate={inView ? "show" : "hidden"}
      whileHover={{ x: 4 }}
      className="group relative bg-[#FDFAF5] border border-[#E2DDD5] p-5 overflow-hidden
        hover:border-[#C8C3BB] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300">
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: item.color }} />
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-[#E2DDD5] bg-white"
          style={{ color: item.color }}>
          <Icon size={15} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <span className="block text-[0.54rem] font-black tracking-[0.2em] uppercase mb-1"
            style={{ fontFamily: "Raleway, sans-serif", color: item.color }}>{item.tag}</span>
          <h4 className="text-[0.95rem] font-black text-[#1A1410] leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>
        </div>
      </div>
      <p className="text-[0.82rem] italic text-[#4A4540] leading-[1.78] pl-11"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
        transition-transform duration-300 origin-left" style={{ background: item.color }} />
    </motion.div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────── */
export default function CampaignTimeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="relative bg-[#0D1B3E] py-24 overflow-hidden">
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#FDFAF5 1px,transparent 1px),linear-gradient(90deg,#FDFAF5 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Orange glow top-left */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #fc8814, transparent 70%)" }} />

      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2
        text-[9rem] md:text-[14rem] font-black text-[#FDFAF5]/[0.018] whitespace-nowrap leading-none"
        style={{ fontFamily: "'Playfair Display', serif" }}>TIMELINE</div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div variants={fadeUp(0)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px]" style={{ background: "#fc8814" }} />
              <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase"
                style={{ fontFamily: "Raleway, sans-serif", color: "#fc8814" }}>Campaign Chronicle</span>
              <span className="w-7 h-[2px] bg-[#138808]" />
            </motion.div>
            <motion.h2 variants={fadeUp(0.07)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.6rem] font-black text-[#FFFFFF] leading-[0.92]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              A Decade of<br /><em style={{ color: "#fc8814" }} className="italic">Decisive Action</em>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp(0.14)} initial="hidden" animate={headerInView ? "show" : "hidden"}
            className="text-[1rem] italic leading-[1.9]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e7e6", opacity: 0.45 }}>
            A year-by-year chronicle of campaigns, movements, and initiatives — each one a milestone in the journey towards a stronger, more unified Bharat.
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[88px] md:left-[108px] top-0 bottom-0 w-px bg-[#FDFAF5]/[0.08]" />

          <div className="flex flex-col gap-14">
            {TIMELINE_DATA.map((group, gi) => {
              const gRef    = useRef(null);
              const gInView = useInView(gRef, { once: true, margin: "-40px" });
              return (
                <div key={gi} ref={gRef} className="relative flex gap-8 md:gap-12">

                  {/* Year label */}
                  <motion.div variants={fadeUp(gi * 0.05)} initial="hidden" animate={gInView ? "show" : "hidden"}
                    className="flex-shrink-0 w-[72px] md:w-[92px] text-right">
                    <span className="text-[1.6rem] md:text-[2rem] font-black leading-none"
                      style={{ fontFamily: "'Playfair Display', serif", color: gi === 0 ? "#fc8814" : "#e8e7e6", opacity: gi === 0 ? 1 : 0.35 }}>
                      {group.year}
                    </span>
                  </motion.div>

                  {/* Spine dot */}
                  <div className="absolute left-[88px] md:left-[108px] top-2 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full border-2 border-[#0D1B3E]"
                      style={{ background: gi === 0 ? "#fc8814" : "#e8e7e6", opacity: gi === 0 ? 1 : 0.3 }} />
                  </div>

                  {/* Cards */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                    {group.items.map((item, ii) => (
                      <TLCard key={ii} item={item} delay={gi * 0.05 + ii * 0.07} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}