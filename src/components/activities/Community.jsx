import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Radio, BookOpen, Handshake, Globe, Mic2, UsersRound,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */
const MACROSTATS = [
  { num: "500+",  label: "Sampark Events",   color: "#fc8814" },
  { num: "28",    label: "States Covered",   color: "#fc8814" },
  { num: "35+",   label: "Yrs of Service",   color: "#138808" },
  { num: "10Cr+", label: "People Connected", color: "#fc8814" },
];

const TIMELINE = [
  { id: "01", color: "#fc8814", stat: "200+", statLabel: "Press Interactions", tag: "Media",        title: "Mann Ki Baat & Press Briefings",   desc: "National broadcast & structured press briefings communicating policy directly to citizens." },
  { id: "02", color: "#fc8814", stat: "50+",  statLabel: "Cultural Events",    tag: "Culture",      title: "Sahitya & Sanskriti Programmes",   desc: "Patron of literary & cultural events celebrating India's civilisational heritage." },
  { id: "03", color: "#138808", stat: "30+",  statLabel: "Countries Reached",  tag: "Diplomatic",   title: "Diaspora Connect Programmes",      desc: "Engaged Indian diaspora globally — strengthening cultural & economic ties." },
  { id: "04", color: "#fc8814", stat: "1Cr+", statLabel: "Citizens Engaged",   tag: "Digital India",title: "Cyber Awareness & Safety Drives",  desc: "National campaigns on cyber hygiene & digital literacy reaching millions." },
  { id: "05", color: "#fc8814", stat: "500+", statLabel: "Campus Visits",      tag: "Youth",        title: "ABVP & Student Union Dialogues",   desc: "Interactive sessions with student bodies — mentoring emerging public servants." },
  { id: "06", color: "#138808", stat: "800+", statLabel: "Villages Covered",   tag: "Tribal Welfare",title: "Vanvasi Kalyan Sampark",          desc: "Sustained outreach to tribal communities — welfare schemes reaching the last mile." },
];

const BOTTOM_CARDS = [
  {
    color: "#fc8814",
    Icon: Radio,
    stat: "200+", statLabel: "Media Interactions",
    tag: "Media Engagement",
    title: "Mann Ki Baat & Press Briefings",
    desc: "National broadcast programmes and structured press briefings communicating government policies directly to citizens across Bharat.",
    sub: {
      color: "#138808",
      Icon: Globe,
      stat: "1Cr+", statLabel: "Citizens Engaged",
      tag: "Digital India",
      title: "Cyber Awareness & Safety Drives",
      desc: "National campaigns on cyber hygiene & digital literacy reaching millions through schools and colleges.",
    },
  },
  {
    color: "#fc8814",
    Icon: UsersRound,
    stat: "800+", statLabel: "Villages Covered",
    tag: "Tribal Welfare",
    title: "Vanvasi Kalyan Sampark",
    desc: "Sustained outreach to tribal communities across Gujarat and Central India — welfare schemes reaching the last mile.",
    sub: {
      color: "#fc8814",
      Icon: Handshake,
      stat: "30+", statLabel: "Countries Reached",
      tag: "Diplomatic Outreach",
      title: "Diaspora Connect Programmes",
      desc: "Engaged Indian diaspora globally — building cultural and economic ties between NRIs and their motherland.",
    },
  },
];

/* ─── ANIMATION VARIANTS ────────────────────────────────── */
const fadeUp   = (d = 0) => ({ hidden: { opacity: 0, y: 28 },  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } } });
const fadeLeft = (d = 0) => ({ hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } } });
const fadeRight= (d = 0) => ({ hidden: { opacity: 0, x: 28 },  show: { opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } } });

/* ─── HELPERS ───────────────────────────────────────────── */
function Tag({ color, children }) {
  return (
    <span
      className="block text-[0.58rem] font-black tracking-[0.22em] uppercase mb-1.5"
      style={{ fontFamily: "Raleway, sans-serif", color }}
    >
      {children}
    </span>
  );
}

function EyebrowLine({ color }) {
  return <span className="w-7 h-[2px] rounded" style={{ background: color }} />;
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function CommunityOutreach() {
  const topRef      = useRef(null);
  const tlRef       = useRef(null);
  const bottomRef   = useRef(null);

  const topInView    = useInView(topRef,    { once: true, margin: "-60px" });
  const tlInView     = useInView(tlRef,     { once: true, margin: "-60px" });
  const bottomInView = useInView(bottomRef, { once: true, margin: "-60px" });

  return (
    <section
      id="community-outreach"
      className="relative bg-[#1a1a1a] overflow-hidden py-20 md:py-28"
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e8e7e6 1px,transparent 1px),linear-gradient(90deg,#e8e7e6 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow — bottom right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #138808, transparent 70%)" }}
      />

      {/* Watermark */}
      <div
        className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[11rem] font-black
          text-[#e8e7e6]/[0.02] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        OUTREACH
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ══ TOP STRIP ══ */}
        <div
          ref={topRef}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-14"
        >
          {/* Title block */}
          <div>
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate={topInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3"
            >
              <EyebrowLine color="#fc8814" />
              <span
                className="text-[0.62rem] font-black tracking-[0.3em] uppercase text-[#fc8814]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Sampark & Seva
              </span>
              <EyebrowLine color="#138808" />
            </motion.div>

            <motion.h2
              variants={fadeUp(0.07)}
              initial="hidden"
              animate={topInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[4rem] font-black text-[#e8e7e6] leading-[0.92]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Community
              <br />
              <em className="text-[#fc8814] not-italic italic">Outreach</em>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.14)}
              initial="hidden"
              animate={topInView ? "show" : "hidden"}
              className="mt-4 text-[0.95rem] text-[#e8e7e6]/40 italic leading-[1.9] max-w-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              From tribal hamlets to urban youth, from press briefings to diplomatic
              corridors — spanning every stratum of Indian society.
            </motion.p>
          </div>

          {/* Macro stat bar */}
          <motion.div
            variants={fadeRight(0.12)}
            initial="hidden"
            animate={topInView ? "show" : "hidden"}
            className="flex flex-col items-end gap-4"
          >
            {/* Tricolor stripe */}
            <div className="flex gap-[3px] h-[3px] w-20">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#e8e7e6]/20" />
              <div className="flex-1 bg-[#138808]" />
            </div>

            {/* Stats */}
            <div className="flex border border-[#e8e7e6]/[0.08]">
              {MACROSTATS.map((s, i) => (
                <div
                  key={i}
                  className="px-5 py-3 text-center border-r border-[#e8e7e6]/[0.07] last:border-r-0 min-w-[90px]"
                >
                  <span
                    className="block text-[1.4rem] font-black leading-none mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: s.color }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[0.55rem] font-black tracking-[0.16em] uppercase text-[#e8e7e6]/30"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ══ HORIZONTAL TIMELINE STRIP ══ */}
        <div ref={tlRef} className="mb-10">
          <div className="flex border border-[#e8e7e6]/20 overflow-hidden">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                initial="hidden"
                animate={tlInView ? "show" : "hidden"}
                className="group relative flex-1 p-5 border-r border-[#e8e7e6]/15 last:border-r-0
                  bg-white hover:bg-[#fafafa] transition-colors duration-300 overflow-hidden"
              >
                {/* Index + dot */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[0.55rem] font-black tracking-[0.18em] border border-[#d0d0d0]
                      text-[#8a8a8a] px-2 py-[3px]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {item.id}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  />
                </div>

                {/* Stat */}
                <div className="mb-3">
                  <span
                    className="block text-[1.6rem] font-black leading-none mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: item.color }}
                  >
                    {item.stat}
                  </span>
                  <span
                    className="text-[0.55rem] font-black tracking-[0.14em] uppercase text-[#6b6b6b]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {item.statLabel}
                  </span>
                </div>

                <Tag color={item.color}>{item.tag}</Tag>

                <h4
                  className="text-[0.82rem] font-black text-[#1a1a1a] leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h4>

                <p
                  className="text-[0.78rem] text-[#4a4a4a] italic leading-[1.75]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.desc}
                </p>

                {/* Hover bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left"
                  style={{ background: item.color }}
                />
              </motion.div>
            ))}
          </div>

          {/* Connector dots */}
          <div className="relative flex items-center justify-around h-7 mt-0">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#e8e7e6]/[0.07]" />
            {TIMELINE.map((item, i) => (
              <span
                key={i}
                className="relative z-10 w-[6px] h-[6px] rounded-full"
                style={{ background: item.color }}
              />
            ))}
          </div>
        </div>

        {/* ══ BOTTOM ZONE ══ */}
        <div ref={bottomRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Quote panel */}
          <motion.div
            variants={fadeLeft(0.1)}
            initial="hidden"
            animate={bottomInView ? "show" : "hidden"}
            className="relative bg-white border border-[#e8e7e6] p-8 flex flex-col justify-between overflow-hidden"
          >
            {/* Big quote mark */}
            <span
              className="absolute top-3 left-4 text-[6rem] leading-none text-[#fc8814]/12 select-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "
            </span>

            <p
              className="relative z-10 text-[1.2rem] italic text-[#2a2a2a] leading-[1.6] mt-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              My politics is not merely about winning elections. It is about ensuring
              that every last person — the tribesman in the forest, the farmer in the
              field, the student in the city — feels that the government is his own.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-8 h-[2px] bg-[#fc8814]" />
              <span
                className="text-[0.58rem] font-black tracking-[0.18em] uppercase text-[#6b6b6b]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Amit Shah — Jan Sampark Abhiyan, 2023
              </span>
            </div>

            {/* Bottom tricolor stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#e8e7e6]" />
              <div className="flex-1 bg-[#138808]" />
            </div>
          </motion.div>

          {/* Dual stacked cards × 2 cols */}
          {BOTTOM_CARDS.map((card, ci) => (
            <motion.div
              key={ci}
              variants={fadeUp(0.12 + ci * 0.08)}
              initial="hidden"
              animate={bottomInView ? "show" : "hidden"}
              className="flex flex-col gap-5"
            >
              <DualCard item={card} />
              <DualCard item={card.sub} small />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DUAL CARD SUB-COMPONENT ────────────────────────────── */
function DualCard({ item, small = false }) {
  const { color, Icon, stat, statLabel, tag, title, desc } = item;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="group relative bg-white border border-[#e8e7e6] overflow-hidden
        hover:border-[#d0d0d0] hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
        transition-all duration-300 p-5"
    >
      {/* Left color bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: color }}
      />

      {/* Icon + stat */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 flex items-center justify-center border border-[#e8e7e6] bg-white"
          style={{ color }}
        >
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <div className="text-right">
          <span
            className={`block font-black leading-none mb-[3px] ${small ? "text-[1.3rem]" : "text-[1.6rem]"}`}
            style={{ fontFamily: "'Playfair Display', serif", color }}
          >
            {stat}
          </span>
          <span
            className="text-[0.55rem] font-black tracking-[0.14em] uppercase text-[#6b6b6b]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {statLabel}
          </span>
        </div>
      </div>

      <Tag color={color}>{tag}</Tag>

      <h4
        className={`font-black text-[#1a1a1a] leading-snug mb-2 ${small ? "text-[0.88rem]" : "text-[1rem]"}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h4>

      <p
        className="text-[0.82rem] text-[#4a4a4a] italic leading-[1.78]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {desc}
      </p>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 15% 85%, ${color}18, transparent 65%)` }}
      />
    </motion.div>
  );
}