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
      className="relative w-full overflow-hidden bg-white"
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

      
       {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/32" />
     

      {/* Tricolor top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[4px] z-10"
        style={{
          background: "linear-gradient(90deg,#fc8814,#e8e7e6 50%,#138808)",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
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
                <span className="w-6 sm:w-8 h-[2px] bg-[#fc8814] rounded" />
                <span
                  className="text-[0.6rem] sm:text-[0.65rem] font-black tracking-[0.28em] sm:tracking-[0.32em] uppercase text-[#fc8814]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  About the Leader
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="font-black text-white leading-[0.95] sm:leading-[1.0] mb-2 sm:mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 6vw, 6rem)",
                }}
              >
                Amit <em className="text-[#fc8814] not-italic italic">Shah</em>
                <br />
              </motion.h1>

              {/* Designation */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <span className="w-8 sm:w-12 h-[2px] bg-[#fc8814] rounded" />
                <span
                  className="text-[0.65rem] sm:text-[0.78rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#fc8814]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Union Home Minister of India
                </span>
              </motion.div>

              {/* Quote */}
              <motion.p
                variants={fadeUp}
                className="text-[0.85rem] sm:text-[1.05rem] md:text-[1.2rem] text-[#1a1a1a]/60 leading-[1.6] sm:leading-[1.8] max-w-2xl mb-6 sm:mb-10"
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
                  className="inline-flex items-center justify-center sm:justify-start gap-2 bg-[#fc8814] text-white
                    text-[0.7rem] sm:text-[0.78rem] font-black tracking-[0.14em] sm:tracking-[0.16em] uppercase px-5 sm:px-7 py-3 sm:py-4 no-underline w-full sm:w-auto
                    hover:bg-[#e07610] transition-colors duration-200"
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
                  className="inline-flex items-center justify-center sm:justify-start border border-[#fc8814]/45 text-[#fc8814]
                    text-[0.7rem] sm:text-[0.78rem] font-black tracking-[0.14em] sm:tracking-[0.16em] uppercase px-5 sm:px-7 py-3 sm:py-4 no-underline w-full sm:w-auto
                    hover:bg-[#fc8814]/10 hover:border-[#fc8814] transition-all duration-200"
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 right-6 md:right-10 flex flex-col items-center gap-2 z-20 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-[#1a1a1a]/30 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          className="text-[0.55rem] font-bold tracking-[0.22em] uppercase text-[#1a1a1a]/25"
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