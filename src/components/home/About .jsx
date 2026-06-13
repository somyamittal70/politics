import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import desktopImage from "../../assets/desktop_image.png";
import mobileImage from "../../assets/mobile_image.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-gradient-to-b from-white via-white to-[#FAFAFA] overflow-hidden py-24 md:py-32"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #E8541A, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #080F22, transparent 70%)",
          }}
        />
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* ── IMAGE COLUMN ── */}
          <motion.div
            variants={scaleIn(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[500px] group">
              {/* Top-right corner accent */}
              <div className="absolute -top-6 -right-6 w-16 h-16 border-t-[3px] border-r-[3px] border-[#E8541A]/40 z-20 pointer-events-none rounded-tr-lg" />

              {/* Bottom-left corner accent */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-[3px] border-l-[3px] border-[#080F22]/20 z-20 pointer-events-none rounded-bl-lg" />

              {/* Tricolor accent bar with glow */}
              <div
                className="absolute -left-5 top-[8%] bottom-[8%] w-1.5 rounded-full z-20"
                style={{
                  background:
                    "linear-gradient(to bottom, #E8541A 0%, #E8541A 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)",
                  boxShadow: "0 8px 24px rgba(232, 84, 26, 0.2)",
                }}
              />

              {/* Shadow/depth element */}
              <div className="absolute bottom-[-12px] right-[-12px] left-3 top-3 bg-[#E8541A]/10 rounded-[4px] z-0" />

              {/* Image container */}
              <div className="relative z-10 overflow-hidden rounded-[4px] bg-white border border-[#080F22]/8 shadow-sm">
                <div className="overflow-hidden">
                  {/* Desktop image */}
                  <img
                    src={desktopImage}
                    alt="About the Leader"
                    className="hidden md:block w-full h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Mobile image */}
                  <img
                    src={mobileImage}
                    alt="About the Leader"
                    className="block md:hidden w-full h-[380px] object-cover object-center"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080F22]/60 via-[#080F22]/20 to-transparent" />

                {/* Image badge */}
                <motion.div
                  className="absolute bottom-6 left-6 z-20"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-white/70 mb-2">
                    Decades of Impact
                  </p>
                  <p className="text-[2.5rem] font-black text-[#E8541A] leading-none drop-shadow-lg">
                    30+
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── CONTENT COLUMN ── */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:pl-4 order-1 lg:order-2"
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#E8541A] rounded" />
              <span className="text-[0.7rem] font-black tracking-[0.35em] uppercase text-[#E8541A]">
                About the Leader
              </span>
            </div>

            {/* Main heading */}
            <motion.h2
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-black text-[#080F22] leading-[1.15] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Journey{" "}
              <em className="text-[#E8541A] not-italic italic">Of Service</em>
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex items-center gap-4 my-7"
            >
              <div className="w-12 h-[2px] bg-[#E8541A] rounded" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8541A]/60" />
              <div className="flex-1 h-[1px] bg-[#080F22]/10" />
            </motion.div>

            {/* Body text */}
            <motion.p
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-[1.05rem] text-[#080F22]/80 leading-[1.75] mb-8 font-light"
            >
              Sandeep Singh Dham is actively involved in public service,
              community engagement, and social initiatives aimed at creating a
              positive impact in society. Through various outreach programs,
              citizen-focused activities, and community welfare efforts, he
              works towards strengthening public participation and promoting
              meaningful change. As the author of "Why Bharat Needs Modi: Now &
              Beyond", he combines grassroots engagement with a broader vision
              for national development, leadership, and social progress.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-10"
            >
              {/* Primary button */}
              <motion.a
                href="#biography"
                className="inline-flex items-center gap-3 px-8 py-4 
                  bg-[#E8541A] hover:bg-[#F4712E] active:bg-[#D74616]
                  text-white text-[0.85rem] font-black tracking-[0.15em] uppercase
                  rounded-[3px] no-underline
                  transition-all duration-300 shadow-sm hover:shadow-lg
                  group"
                whileHover={{ y: -2 }}
              >
                Full Biography
                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.a>

              {/* Secondary text link */}
              <motion.a
                href="#achievements"
                className="inline-flex items-center gap-2
                  text-[0.85rem] font-bold tracking-[0.15em] uppercase
                  text-[#E8541A] no-underline
                  border-b-2 border-transparent hover:border-[#E8541A] pb-1
                  transition-all duration-300
                  group"
                whileHover={{ x: 4 }}
              >
                View Achievements
                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </motion.a>
            </motion.div>

            {/* Additional trust element */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-12 pt-8 border-t border-[#080F22]/10"
            >
              <p className="text-[0.75rem] text-[#080F22]/50 font-bold tracking-[0.2em] uppercase mb-4">
                Recognition
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[1.8rem] font-black text-[#E8541A]">
                    30+
                  </span>
                  <span className="text-[0.75rem] text-[#080F22]/60 font-semibold">
                    Years in Service
                  </span>
                </div>
                <div className="w-[1px] h-12 bg-[#080F22]/10" />
                <div className="flex flex-col">
                  <span className="text-[1.8rem] font-black text-[#E8541A]">
                    100+
                  </span>
                  <span className="text-[0.75rem] text-[#080F22]/60 font-semibold">
                    Communities Served
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
