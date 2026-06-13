import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Handshake, Flag } from "lucide-react";

function Vision() {
  const visionItems = [
    {
      id: 1,
      icon: Users,
      title: "Public Service",
      description:
        "Working towards initiatives that improve the lives of citizens and strengthen community welfare.",
      color: "#FC8814",
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Youth Empowerment",
      description:
        "Encouraging young minds through education, participation, and leadership opportunities.",
      color: "#FC8814",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Community Development",
      description:
        "Supporting programs that bring people together and contribute to social progress.",
      color: "#FC8814",
    },
    {
      id: 4,
      icon: Flag,
      title: "Nation First",
      description:
        "Believing in responsible citizenship, national development, and collective growth.",
      color: "#FC8814",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#FFFFFF] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FC8814]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FC8814]/6 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span
            className="inline-block uppercase tracking-[0.3em] text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black px-4 py-2 bg-[#FC8814]/10 rounded-lg border border-[#FC8814]/20"
            style={{ fontFamily: "Playfair Display,sans-serif" }}
          >
            Our Vision & Values
          </span>

          <h2
            className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-5xl text-[#333333] leading-tight font-black"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Pillars of{" "}
            <em className="text-[#FC8814] not-italic italic">Change</em>
          </h2>

          <p
            className="mt-4 md:mt-5 text-[#666666] max-w-2xl mx-auto text-sm md:text-base leading-7"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
             Together, we can turn Vision & Values into reality
          </p>
        </motion.div>

        {/* Vision Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7"
        >
          {visionItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 48px rgba(252, 136, 20, 0.12)",
                }}
                className="group relative bg-[#FFFFFF] border border-[#E8E7E6] rounded-2xl md:rounded-3xl p-6 md:p-7 lg:p-8 hover:border-[#FC8814]/40 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FC8814] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#FC8814]/12 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#FC8814]/20 transition-colors duration-300"
                >
                  <IconComponent
                    size={28}
                    className="text-[#FC8814]"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-lg md:text-xl text-[#333333] font-black leading-snug"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-3 md:mt-4 text-[#666666] text-sm md:text-base leading-6 md:leading-7 group-hover:text-[#333333] transition-colors duration-300"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  {item.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 md:mt-5 flex items-center gap-2 text-[#FC8814] font-black text-sm uppercase tracking-wider"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  Learn More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* Decorative Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FC8814]/0 to-[#FC8814]/5 rounded-full -mr-16 -mt-16 group-hover:from-[#FC8814]/5 group-hover:to-[#FC8814]/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

       
      </div>
    </section>
  );
}

export default Vision;
