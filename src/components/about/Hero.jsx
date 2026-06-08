import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const stats = [
  { num: "35+", label: "Years of\nService" },
  { num: "5×", label: "Times\nElected" },
  { num: "120+", label: "Projects\nDelivered" },
  { num: "140Cr", label: "Indians\nServed" },
];

export default function AboutHero() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const springY = useSpring(yImg, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Stagger container
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#080F22]"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Parallax BG image ── */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: springY }}
      >
        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1800&q=80"
          alt="background"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.28) saturate(0.7)" }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(8,15,34,0.92) 0%, rgba(8,15,34,0.5) 55%, rgba(8,15,34,0.75) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2]"
        style={{ background: "linear-gradient(to top, #080F22, transparent)" }}
      />

      {/* Tricolor top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{
          background: "linear-gradient(90deg,#E8541A,#FDFAF5 50%,#138808)",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />

      {/* Decorative circle */}
      <motion.div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#FDFAF5]/[0.04] z-[2] hidden lg:block"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      <motion.div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#E8541A]/[0.07] z-[2] hidden lg:block"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      />

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16
          flex flex-col justify-center"
        style={{ minHeight: "100svh", y: yText, opacity }}
      >
        <AnimatePresence>
          {loaded && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-full max-w-3xl -mt-10 pt-16 sm:pt-20 md:pt-28 pb-32 sm:pb-40 md:pb-20"
            >
              {/* Label */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <span className="w-6 sm:w-8 h-[2px] bg-[#E8541A] rounded" />
                <span
                  className="text-[0.6rem] sm:text-[0.65rem] font-black tracking-[0.28em] sm:tracking-[0.32em] uppercase text-[#E8541A]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  About the Leader
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="font-black text-[#FDFAF5] leading-[0.95] sm:leading-[1.0] mb-2 sm:mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 6vw, 6rem)",
                }}
              >
                Amit <em className="text-[#E8541A] not-italic italic">Shah</em>
                <br />
                
              </motion.h1>

              {/* Designation */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <span className="w-8 sm:w-12 h-[2px] bg-[#C9A84C] rounded" />
                <span
                  className="text-[0.65rem] sm:text-[0.78rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#C9A84C]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Union Home Minister of India
                </span>
              </motion.div>

              {/* Quote */}
              <motion.p
                variants={fadeUp}
                className="text-[0.85rem] sm:text-[1.05rem] md:text-[1.2rem] text-[#FDFAF5]/55 leading-[1.6] sm:leading-[1.8] max-w-2xl mb-6 sm:mb-10"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                "A nationalist to the core — serving every citizen of Bharat
                with unwavering resolve, discipline, and dedication."
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <motion.a
                  href="#personal-info"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 bg-[#E8541A] text-[#FDFAF5]
                    text-[0.7rem] sm:text-[0.78rem] font-black tracking-[0.14em] sm:tracking-[0.16em] uppercase px-5 sm:px-7 py-3 sm:py-4 no-underline w-full sm:w-auto
                    hover:bg-[#F4712E] transition-colors duration-200"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    clipPath:
                      "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Story
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="hidden sm:block"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#achievements"
                  className="inline-flex items-center justify-center sm:justify-start border border-[#C9A84C]/45 text-[#E2C06A]
                    text-[0.7rem] sm:text-[0.78rem] font-black tracking-[0.14em] sm:tracking-[0.16em] uppercase px-5 sm:px-7 py-3 sm:py-4 no-underline w-full sm:w-auto
                    hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-200"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Achievements
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Stats bar ── */}
        {/* <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 lg:left-16 lg:right-16
            grid grid-cols-2 sm:grid-cols-4 gap-0 border border-[#FDFAF5]/[0.07]
            bg-[#0D1B3E]/50 backdrop-blur-sm"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-4 sm:py-5 px-2 sm:px-4
                ${i < stats.length - 1 ? "border-r border-[#FDFAF5]/[0.07]" : ""}`}
            >
              <span
                className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.2rem] font-black text-[#E8541A] leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </span>
              <span
                className="text-[0.48rem] sm:text-[0.58rem] font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-[#FDFAF5]/35 mt-0.5 sm:mt-1 text-center whitespace-pre-line leading-snug"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 right-6 md:right-10 flex flex-col items-center gap-2 z-20 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-[#FDFAF5]/30 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          className="text-[0.55rem] font-bold tracking-[0.22em] uppercase text-[#FDFAF5]/25"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
