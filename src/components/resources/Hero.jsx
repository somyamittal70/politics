import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import {
  FaMicrophone,
  FaNewspaper,
  FaFileAlt,
  FaImages,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

const quickLinks = [
  {
    label: "Speeches",
    href: "#speeches",
    icon: <FaMicrophone />,
  },
  {
    label: "Press Release",
    href: "#press-release",
    icon: <FaNewspaper />,
  },
  {
    label: "Documents",
    href: "#documents",
    icon: <FaFileAlt />,
  },
  {
    label: "Media Kit",
    href: "#media-kit",
    icon: <FaImages />,
  },
  {
    label: "Newsletter",
    href: "#newsletter",
    icon: <FaEnvelope />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ResourcesHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const ySpring = useSpring(yRaw, {
    stiffness: 80,
    damping: 22,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#080F22]"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 h-[130%] -top-[15%]"
        style={{ y: ySpring }}
      >
        <img
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1800&q=80"
          alt="Resources"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.22) saturate(0.65)",
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(110deg, rgba(8,15,34,0.95) 0%, rgba(8,15,34,0.55) 55%, rgba(8,15,34,0.85) 100%)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 md:h-56 z-[2]"
        style={{
          background: "linear-gradient(to top,#080F22,transparent)",
        }}
      />

      {/* Tricolor */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{
          background: "linear-gradient(90deg,#E8541A,#FDFAF5 50%,#138808)",
        }}
        initial={{
          scaleX: 0,
          originX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1,
        }}
      />

      {/* Rings */}
      {[520, 380, 240].map((size, i) => (
        <motion.div
          key={i}
          className="absolute right-[6%] top-1/2 -translate-y-1/2 rounded-full hidden xl:block"
          style={{
            width: size,
            height: size,
            border: `1px solid rgba(253,250,245,${0.03 + i * 0.015})`,
          }}
          initial={{
            scale: 0.6,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          min-h-screen
          flex
          items-center
          py-24
        "
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6 flex-wrap"
          >
            <span className="w-8 h-[2px] bg-[#E8541A]" />

            <span
              className="
                text-[10px]
                sm:text-xs
                font-black
                uppercase
                tracking-[0.35em]
                text-[#E8541A]
              "
            >
              Official Resources
            </span>

            <span className="w-8 h-[2px] bg-[#138808]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="
              font-black
              text-[#FDFAF5]
              leading-[1.05]
              mb-6
              text-4xl
              sm:text-5xl
              lg:text-7xl
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Media &
            <br />
            <span className="text-[#E8541A]">Resources</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
              text-base
              sm:text-lg
              text-white/70
              leading-relaxed
              max-w-xl
              mb-10
            "
          >
            Access official speeches, press releases, downloadable documents,
            newsletters, and media assets — all in one place.
          </motion.p>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {quickLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/80
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  hover:border-[#E8541A]
                  hover:bg-[#E8541A]/10
                  hover:text-white
                  transition-all
                "
              >
                <span className="text-[#E8541A] text-sm">{item.icon}</span>

                {item.label}
              </motion.a>
            ))}
          </motion.div>

          
        </motion.div>
      </motion.div>
    </section>
  );
}
