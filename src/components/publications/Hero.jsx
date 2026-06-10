import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FaMicrophone,
  FaNewspaper,
  FaFileAlt,
  FaImages,
  FaEnvelope,
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
      duration: 0.8,
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

  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const ySpring = useSpring(yRaw, {
    stiffness: 80,
    damping: 22,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden "
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" >
        <img
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1800&q=80"
          alt="Resources"
          className="w-full h-full object-cover"
         
        />
      </motion.div>

      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/98" />

      

      
      {/* Top Accent Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{
          background:
            "linear-gradient(90deg,#FC8814 0%,#FFFFFF 50%,#FC8814 100%)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Decorative Rings */}
      {[500, 350, 220].map((size, i) => (
        <motion.div
          key={i}
          className="absolute right-[5%] top-1/2 -translate-y-1/2 rounded-full hidden xl:block"
          style={{
            width: size,
            height: size,
            border: `1px solid rgba(252,136,20,${0.08 + i * 0.04})`,
          }}
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
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
          px-5
          sm:px-6
          lg:px-10
          min-h-screen
          flex
          items-center
          py-20
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
            <span className="w-8 h-[2px] bg-[#FC8814]" />

            <span
              className="
                text-[10px]
                sm:text-xs
                font-black
                uppercase
                tracking-[0.35em]
                text-[#FC8814]
              "
            >
              Official Resources
            </span>

            <span className="w-8 h-[2px] bg-[#FC8814]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="
              font-black
              text-[#ffffff]
              leading-[1.05]
              mb-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Media &
            <br />
            <span className="text-[#FC8814]">Resources</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
              text-base
              sm:text-lg
              md:text-xl
              text-gray-400
              leading-relaxed
              max-w-2xl
              mb-10
            "
          >
            Access official speeches, press releases, downloadable documents,
            newsletters, and media assets — all in one place.
          </motion.p>

          {/* Mobile Scroll + Desktop Wrap */}
          <motion.div variants={fadeUp}>
            <div
              className="
                flex
                gap-3
                overflow-x-auto
                lg:flex-wrap
                scrollbar-hide
                pb-2
              "
            >
              {quickLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    shrink-0
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-[#FC8814]/20
                    bg-white
                    text-gray-700
                    text-xs
                    sm:text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                    shadow-sm
                    hover:border-[#FC8814]
                    hover:bg-[#FC8814]
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-[#FC8814] group-hover:text-white">
                    {item.icon}
                  </span>

                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
