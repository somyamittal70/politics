import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function InitiativesHero() {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true, margin: "-40px" });

  const BG_IMAGE =
    "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1800&q=80";

  // ── Subheading block ka background photo ──
  // Aap is URL ko apni marzi ki community/grassroots photo se replace kar sakte ho
  const SUB_BG_IMAGE =
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=70";

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "Playfair Display, sans-serif" }}
    >
      {/* ── BACKGROUND IMAGE + OVERLAYS ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* dark primary overlay */}
        <div className="absolute inset-0 bg-[#1a1a1a]/90" />
        {/* left-side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,26,26,0.97) 0%, rgba(26,26,26,0.82) 45%, rgba(26,26,26,0.30) 100%)",
          }}
        />
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#e8e7e6 1px,transparent 1px),linear-gradient(90deg,#e8e7e6 1px,transparent 1px)",
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
          <span className="w-8 h-[2px] bg-[#fc8814] rounded" />
          <span
            className="text-[0.65rem] font-black tracking-[0.32em] uppercase text-[#fc8814]"
            style={{ fontFamily: "Playfair Display, sans-serif" }}
          >
            Activities &amp; Initiatives
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={fadeUp(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]
            font-black leading-[0.88] text-[#e8e7e6] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Initiatives
        </motion.h1>

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

        {/* ── SUBHEADING BLOCK WITH OWN PHOTO BACKGROUND ── */}
        <motion.div
          variants={fadeUp(0.34)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative overflow-hidden border-l-2 border-[#fc8814] mb-8"
        >
          {/* Photo background for this block */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${SUB_BG_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              filter: "brightness(0.22) saturate(0.7)",
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(90deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.55) 100%)",
            }}
          />

          {/* Block content */}
          <div className="relative z-[2] py-7 px-8">
            {/* Section label */}
            <p
              className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#fc8814] mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Community Initiatives &amp; Public Participation
            </p>

            {/* Sub heading title */}
            <h2
              className="text-[1.15rem] md:text-[1.55rem] font-bold leading-[1.3] text-[#e8e7e6] mb-3 max-w-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Working Together for Community Development, Citizen Engagement,
              Youth Empowerment and Public Welfare
            </h2>

            {/* Italics tagline */}
            <p
              className="text-[0.95rem] md:text-[1.05rem] italic text-white/55 leading-[1.8] max-w-xl mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Grassroots action, inclusive governance and empowered citizens —
              the foundations of a stronger Bharat."
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Community Development",
                "Citizen Engagement",
                "Youth Empowerment",
                "Public Welfare",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.58rem] font-black tracking-[0.2em] uppercase
                    px-3 py-1 border border-[#fc8814]/35 text-[#fc8814]/80 bg-[#fc8814]/06"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
