import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const quickLinks = [
  { label: "Speeches",      href: "#speeches",      icon: "🎙" },
  { label: "Press Release", href: "#press-release",  icon: "📰" },
  { label: "Documents",     href: "#documents",      icon: "📄" },
  { label: "Media Kit",     href: "#media-kit",      icon: "🖼" },
  { label: "Newsletter",    href: "#newsletter",     icon: "✉️" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.18 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

export default function ResourcesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yRaw   = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const ySpring = useSpring(yRaw, { stiffness: 80, damping: 22 });
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#080F22]" style={{ minHeight: "92svh" }}>

      {/* Parallax BG */}
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: ySpring }}>
        <img
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1800&q=80"
          alt="Resources background"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.22) saturate(0.6)" }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(110deg,rgba(8,15,34,0.95) 0%,rgba(8,15,34,0.55) 55%,rgba(8,15,34,0.8) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[2]"
        style={{ background: "linear-gradient(to top,#080F22,transparent)" }} />

      {/* Tricolor top bar */}
      <motion.div className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#E8541A,#FDFAF5 50%,#138808)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22,1,0.36,1], delay: 0.1 }} />

      {/* Decorative rings */}
      {[520, 380, 240].map((size, i) => (
        <motion.div key={i}
          className="absolute right-[6%] top-1/2 -translate-y-1/2 rounded-full hidden lg:block"
          style={{ width: size, height: size, border: `1px solid rgba(253,250,245,${0.03 + i * 0.015})` }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: [0.22,1,0.36,1] }} />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col justify-center"
        style={{ minHeight: "92svh", opacity }}
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl pt-24 pb-16">

          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
            <span className="text-[0.65rem] font-black tracking-[0.32em] uppercase text-[#E8541A]"
              style={{ fontFamily: "Raleway, sans-serif" }}>Official Resources</span>
            <span className="w-7 h-[2px] bg-[#138808] rounded" />
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp}
            className="font-black text-[#FDFAF5] leading-[1.05] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.6rem,7vw,5.2rem)" }}>
            Media &amp; <br /><em className="text-[#E8541A] not-italic italic">Resources</em>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp}
            className="text-[1.05rem] md:text-[1.18rem] text-[#FDFAF5]/50 leading-[1.8] max-w-lg mb-10 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Access official speeches, press releases, downloadable documents, and media assets — all in one place.
          </motion.p>

          {/* Quick link pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {quickLinks.map((ql) => (
              <motion.a key={ql.label} href={ql.href}
                className="inline-flex items-center gap-2 border border-[#FDFAF5]/15
                  text-[#FDFAF5]/65 text-[0.75rem] font-semibold tracking-[0.1em]
                  uppercase px-4 py-[9px] no-underline rounded-sm
                  hover:border-[#E8541A] hover:text-[#FDFAF5] hover:bg-[#E8541A]/10
                  transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif" }}
                whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <span>{ql.icon}</span>{ql.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom search bar */}
        <motion.div
          className="absolute bottom-8 left-5 right-5 md:left-10 md:right-10 lg:left-16 lg:right-16
            flex items-center gap-0 border border-[#FDFAF5]/[0.08] bg-[#0D1B3E]/60 backdrop-blur-sm overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22,1,0.36,1] }}>
          <div className="flex items-center gap-3 px-5 py-4 flex-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDFAF5" strokeWidth="2" opacity="0.3">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search speeches, documents, press releases..."
              className="flex-1 bg-transparent text-[#FDFAF5] placeholder-[#FDFAF5]/25 text-[0.88rem] outline-none"
              style={{ fontFamily: "Raleway, sans-serif" }} />
          </div>
          <button
            className="flex-shrink-0 bg-[#E8541A] hover:bg-[#F4712E] text-[#FDFAF5]
              text-[0.75rem] font-black tracking-[0.18em] uppercase px-7 py-4
              transition-colors duration-200 self-stretch flex items-center"
            style={{ fontFamily: "Raleway, sans-serif" }}>
            Search
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}