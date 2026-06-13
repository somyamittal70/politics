import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, delay, ease: "easeOut" } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

function SectionHeader({ label, title, accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="mb-12 md:mb-16">
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex items-center gap-3 mb-4"
      >
        <span className="w-8 h-[2px] bg-[#E8541A] rounded" />
        <span className="text-[0.7rem] font-black tracking-[0.35em] uppercase text-[#E8541A]">
          {label}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp(0.08)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-[2.4rem] md:text-[3.2rem] font-black text-[#080F22] leading-[1.15]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title} <em className="text-[#E8541A] not-italic italic">{accent}</em>
      </motion.h2>
    </div>
  );
}

export default function PersonalInfo() {
  const bioRef = useRef(null);
  const statsRef = useRef(null);

  const bioInView = useInView(bioRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const achievements = [
    { number: "30+", label: "Years in Public Service" },
    { number: "8+", label: "Major Electoral Victories" },
    { number: "100+", label: "Communities Served" },
    { number: "1M+", label: "People Impacted" },
  ];

  return (
    <section
      id="personal-info"
      className="relative bg-gradient-to-b from-white to-[#FAFAFA] overflow-hidden py-24 md:py-32"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #E8541A, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-32 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #080F22, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── MAIN BIO SECTION ── */}
        <div ref={bioRef} className="mb-24 md:mb-32">
          {/* Top decorative strip */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={bioInView ? "show" : "hidden"}
            className="flex items-center gap-4 mb-12 md:mb-16"
          >
            <div
              className="text-[0.65rem] font-black tracking-[0.35em] uppercase text-white bg-[#E8541A] px-4 py-2 rounded-[2px]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              About the Leader
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E8541A] to-transparent" />
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 md:gap-12 lg:gap-16 items-start">
            {/* ── LEFT: IMAGE SECTION ── */}
            <motion.div
              variants={scaleIn(0.1)}
              initial="hidden"
              animate={bioInView ? "show" : "hidden"}
              className="relative group"
            >
              {/* Decorative frame elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-t-[3px] border-l-[3px] border-[#E8541A]/40 z-0 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-[3px] border-r-[3px] border-[#080F22]/20 z-0 pointer-events-none" />

              {/* Tricolor accent bar */}
              <div
                className="absolute -left-5 top-[5%] bottom-[5%] w-1 rounded-full z-20"
                style={{
                  background:
                    "linear-gradient(to bottom, #E8541A 0%, #E8541A 35%, #FFFFFF 35%, #FFFFFF 65%, #138808 65%, #138808 100%)",
                  boxShadow: "0 8px 24px rgba(232, 84, 26, 0.15)",
                }}
              />

              {/* Image container */}
              <div className="relative z-10 overflow-hidden rounded-[4px] bg-white border border-[#080F22]/8 shadow-sm">
                <motion.img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=80"
                  alt="Political Leader"
                  className="w-full object-cover object-center"
                  style={{
                    height: "clamp(420px, 55vw, 640px)",
                    filter: "brightness(1.02) contrast(1.08)",
                  }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080F22]/70 via-[#080F22]/30 to-transparent" />

                {/* Badge overlay */}
                <motion.div
                  className="absolute bottom-6 left-6 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={bioInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <p className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-white/70 mb-2">
                    In Public Service Since
                  </p>
                  <p
                    className="text-[3rem] font-black text-[#E8541A] leading-none drop-shadow-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    1995
                  </p>
                </motion.div>
              </div>

              {/* Info card below image */}
              <motion.div
                variants={fadeUp(0.25)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="mt-6 p-5 bg-white border border-[#080F22]/10 rounded-[4px] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-[0.7rem] font-black tracking-[0.25em] uppercase text-[#E8541A] mb-2">
                  Key Focus Areas
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[0.75rem] text-[#080F22]/60 mb-1">
                      Public Service
                    </p>
                    <p className="text-[0.95rem] font-semibold text-[#080F22]">
                      30+ Years
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.75rem] text-[#080F22]/60 mb-1">
                      Communities
                    </p>
                    <p className="text-[0.95rem] font-semibold text-[#080F22]">
                      100+
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: CONTENT SECTION ── */}
            <div className="flex flex-col gap-8">
              {/* Main headline */}
              <motion.div
                variants={fadeUp(0.15)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
              >
                <p className="text-[0.7rem] font-black tracking-[0.35em] uppercase text-[#E8541A] mb-3">
                  Who He Is
                </p>
                <h2
                  className="text-[2.8rem] md:text-[3.6rem] font-black text-[#080F22] leading-[1.1] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  A Leader <br className="hidden md:block" />
                  Driven by{" "}
                  <em className="text-[#E8541A] not-italic italic">Purpose</em>
                </h2>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-[2px] bg-[#E8541A]" />
                  <span className="text-[0.75rem] font-bold tracking-[0.2em] uppercase text-[#080F22]/50">
                    Sandeep Singh Dhama
                  </span>
                </div>
              </motion.div>

              {/* Enhanced quote block */}
              <motion.blockquote
                variants={fadeUp(0.23)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="relative p-7 md:p-8 bg-gradient-to-br from-[#E8541A]/8 to-[#E8541A]/3 border-l-4 border-[#E8541A] rounded-[4px] backdrop-blur-sm"
              >
                <svg
                  className="absolute top-4 left-4 w-8 h-8 text-[#E8541A]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-8.333 4-8.333 4h4C2.25 2 5 4 6.002 4.972C6.5 6 6.667 8 5.999 9.5 5 11 3 12.222 3 15c0 4.667 3.667 6 7 6s6.5-2.333 6.5-5c-.023-.468-.203-1.234-.203-2.5s1.675-5.5 1.675-5.5c.43-1.745.693-3.521.693-5.5 0-1.792-.227-3.456-.904-5" />
                </svg>
                <p
                  className="text-[1.1rem] md:text-[1.25rem] text-[#080F22] leading-relaxed italic relative z-10"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Sandeep Singh Dhama is actively engaged in public service,
                  community development, and citizen-focused initiatives. With a
                  strong belief in the power of collective participation, he has
                  consistently worked towards bringing people together through
                  social, educational, environmental, and community-driven
                  programs.
                </p>
              </motion.blockquote>

              {/* Additional content paragraphs */}
              <motion.div
                variants={fadeUp(0.3)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="space-y-4"
              >
                <p className="text-[1rem] text-[#080F22]/75 leading-relaxed">
                  Over the years, he has been associated with various activities
                  aimed at encouraging public awareness, community engagement,
                  and social responsibility. His approach is centered on
                  understanding the concerns of citizens, promoting constructive
                  dialogue, and supporting initiatives that contribute to
                  positive change at the grassroots level.
                </p>
                <p className="text-[1rem] text-[#080F22]/75 leading-relaxed">
                  Education, youth participation, environmental awareness, and
                  community welfare remain among his key areas of focus. Through
                  regular outreach programs and social initiatives, he continues
                  to encourage greater involvement of citizens in activities
                  that strengthen society and foster shared responsibility.
                </p>
              </motion.div>

              {/* Author info highlight */}
              <motion.div
                variants={fadeUp(0.37)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="p-6 bg-white border border-[#E8541A]/20 rounded-[4px] hover:border-[#E8541A]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📚</div>
                  <div className="flex-1">
                    <p className="text-[0.7rem] font-black tracking-[0.25em] uppercase text-[#E8541A] mb-2">
                      Published Author
                    </p>
                    <p className="text-[0.95rem] font-semibold text-[#080F22] mb-2">
                      "Why Bharat Needs Modi: Now & Beyond"
                    </p>
                    <p className="text-[0.85rem] text-[#080F22]/65">
                      Through his writing, he seeks to contribute to discussions
                      on leadership, governance, and the future direction of
                      Bharat.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                variants={fadeUp(0.42)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="mt-2 flex items-center gap-2 px-6 py-4 bg-[#E8541A] hover:bg-[#F4712E] text-white 
                  font-black text-[0.9rem] tracking-[0.12em] uppercase rounded-[3px]
                  transition-all duration-300 shadow-sm hover:shadow-lg w-fit group"
              >
                Read His Vision
                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── ACHIEVEMENTS SECTION ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 pt-20 md:pt-24 border-t border-[#080F22]/10"
        >
          <div className="mb-12">
            <p className="text-[0.7rem] font-black tracking-[0.35em] uppercase text-[#E8541A] mb-3">
              Impact & Achievements
            </p>
            <h3
              className="text-[2.2rem] md:text-[3rem] font-black text-[#080F22] leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three Decades of{" "}
              <em className="text-[#E8541A] not-italic italic">Service</em>
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn(index * 0.08)}
                initial="hidden"
                animate={statsInView ? "show" : "hidden"}
                className="group relative p-6 md:p-8 bg-white border border-[#080F22]/10 rounded-[4px]
                  hover:border-[#E8541A]/40 hover:shadow-[0_12px_32px_rgba(232,84,26,0.08)]
                  transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-center">
                  <p
                    className="text-[2.4rem] md:text-[3rem] font-black text-[#E8541A] leading-none mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-[0.85rem] md:text-[0.95rem] font-semibold text-[#080F22]">
                    {stat.label}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8541A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
