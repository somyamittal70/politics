import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiTrendingUp,
  FiAward,
  FiBook,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

const JourneyTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / windowHeight;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: "30+",
      label: "Years of Public Life",
      icon: FiCalendar,
    },
    {
      number: "8+",
      label: "Major Elections",
      icon: FiTrendingUp,
    },
    {
      number: "5",
      label: "Leadership Roles",
      icon: FiAward,
    },
    {
      number: "4",
      label: "Books Published",
      icon: FiBook,
    },
  ];

  const milestones = [
    {
      year: 1995,
      title: "Political Journey Begins",
      description:
        "Started serving the nation with a vision for development and progress.",
      featured: true,
      content:
        "Founded the political career with grassroots engagement in Gujarat.",
    },
    {
      year: 1997,
      title: "Elected to State Assembly",
      description: "Won first legislative election with overwhelming support.",
      featured: false,
      content:
        "Began legislative work focusing on education and infrastructure.",
    },
    {
      year: 2002,
      title: "Rise in State Politics",
      description: "Took on significant state-level responsibilities.",
      featured: false,
      content:
        "Led various developmental initiatives across multiple constituencies.",
    },
    {
      year: 2004,
      title: "Expanded Influence",
      description: "Extended political reach across regions.",
      featured: false,
      content:
        "Worked on national-level policy matters and inter-state cooperation.",
    },
    {
      year: 2012,
      title: "Chief Minister Designation",
      description: "Appointed as Chief Minister of Gujarat",
      featured: true,
      content:
        "Led significant economic and social transformation in the state.",
    },
    {
      year: 2014,
      title: "Union Minister Portfolio",
      description: "Elevated to national government as Union Minister",
      featured: true,
      content:
        "Took charge of critical national portfolios with reform agenda.",
    },
    {
      year: 2016,
      title: "Expanded Ministerial Duties",
      description: "Increased responsibilities in multiple portfolios",
      featured: true,
      content: "Managed major national security and governance initiatives.",
    },
    {
      year: 2020,
      title: "COVID-19 Service",
      description: "Led pandemic response and relief efforts",
      featured: false,
      content:
        "Coordinated national response ensuring public safety and welfare.",
    },
    {
      year: "2020-22",
      title: "Seva During Crisis",
      description: "Served the nation during unprecedented health emergency",
      featured: true,
      content:
        "Supervised medical infrastructure and humanitarian relief operations.",
    },
    {
      year: 2024,
      title: "Book Publication",
      description: "Published political memoir and vision document",
      featured: true,
      content:
        "Shared three decades of experiences and future blueprint for development.",
    },
    {
      year: 2025,
      title: "District Level Leadership",
      description: "Appointed District Mahamantri",
      featured: true,
      content:
        "Leading grassroots development and strengthening local governance.",
    },
    {
      year: 2026,
      title: "National War Room Command",
      description: "Overseeing strategic national initiatives",
      featured: true,
      content:
        "Directing major policy implementation and coordination at highest level.",
    },
  ];

  return (
    <section
      className="relative bg-white overflow-hidden py-24 md:py-32"
      id="journey"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #E8541A, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #080F22, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── HEADER ── */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E8541A]" />
            <span className="text-[0.7rem] font-black tracking-[0.35em] uppercase text-[#E8541A]">
              My Journey
            </span>
            <span className="w-8 h-[2px] bg-[#080F22]" />
          </div>
          <h1 className="text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] font-black text-[#080F22] leading-[1.15] mb-3">
            Three Decades of Service
          </h1>
          <p className="text-[1rem] md:text-[1.15rem] text-gray-600 max-w-2xl mx-auto mb-2 italic">
            Leadership, Public Engagement & National Development
          </p>
          <p className="text-[0.9rem] text-gray-500">1995 – Present</p>
        </motion.div>

        {/* ── STATISTICS BOXES ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white border border-[#080F22]/10 rounded-[4px] p-6 md:p-8
                  hover:border-[#E8541A]/40 hover:shadow-[0_12px_32px_rgba(232,84,26,0.08)]
                  transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 text-[#E8541A] flex justify-center">
                    <IconComponent size={36} />
                  </div>
                  <div className="text-[2.2rem] md:text-[2.8rem] font-black text-[#E8541A] mb-2 leading-none">
                    {stat.number}
                  </div>
                  <p className="text-[0.85rem] md:text-[0.9rem] font-semibold text-[#080F22]">
                    {stat.label}
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8541A] to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── TIMELINE ── */}
        <div className="relative">
          {/* Center Line - Behind cards */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8541A] via-[#E8541A] to-[#080F22] transform -translate-x-1/2 z-0" />

          {/* Progress Line - Behind cards */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-[#E8541A] transform -translate-x-1/2 z-0"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 relative z-20">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const isFeatured = milestone.featured;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex gap-8 items-center relative z-20">
                    {/* Left Content */}
                    <div
                      className={`flex-1 ${isLeft ? "text-right pr-12" : "hidden"}`}
                    >
                      {isLeft && (
                        <motion.div
                          className={`p-6 rounded-[4px] border transition-all duration-300 ${
                            isFeatured
                              ? "bg-[#E8541A]/5 border-[#E8541A]/40 shadow-[0_8px_24px_rgba(232,84,26,0.12)]"
                              : "bg-white border-[#080F22]/10 hover:border-[#E8541A]/30"
                          }`}
                          whileHover={{ scale: 1.02, translateY: -4 }}
                        >
                          <div className="flex items-center justify-end gap-2 mb-2">
                            <p
                              className={`text-[0.7rem] font-black tracking-[0.25em] uppercase ${
                                isFeatured ? "text-[#E8541A]" : "text-gray-500"
                              }`}
                            >
                              {isFeatured ? "MILESTONE" : "YEAR"}
                            </p>
                          </div>
                          <h3 className="text-[1.2rem] md:text-[1.4rem] font-black text-[#080F22] mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-[0.9rem] text-gray-600 mb-3">
                            {milestone.description}
                          </p>
                          <p className="text-[0.85rem] text-gray-500 italic">
                            {milestone.content}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Center Marker */}
                    <div className="relative flex flex-col items-center z-30">
                      <motion.div
                        className={`relative flex items-center justify-center transition-all duration-300 ${
                          isFeatured
                            ? "w-12 h-12 bg-[#E8541A] rounded-full shadow-[0_0_20px_rgba(232,84,26,0.4)]"
                            : "w-8 h-8 bg-white border-3 border-[#080F22] rounded-full hover:border-[#E8541A] hover:shadow-[0_0_12px_rgba(232,84,26,0.3)]"
                        }`}
                        whileHover={{ scale: isFeatured ? 1.15 : 1.25 }}
                      >
                        {isFeatured ? (
                          <FiStar size={20} className="text-white fill-white" />
                        ) : (
                          <div className="w-3 h-3 bg-[#080F22] rounded-full" />
                        )}
                      </motion.div>

                      {/* Year Badge */}
                      <div
                        className={`mt-4 px-3 py-1 rounded-full text-[0.75rem] font-black tracking-[0.15em] ${
                          isFeatured
                            ? "bg-[#E8541A] text-white"
                            : "bg-gray-100 text-[#080F22]"
                        }`}
                      >
                        {milestone.year}
                      </div>
                    </div>

                    {/* Right Content */}
                    <div
                      className={`flex-1 ${!isLeft ? "text-left pl-12" : "hidden"}`}
                    >
                      {!isLeft && (
                        <motion.div
                          className={`p-6 rounded-[4px] border transition-all duration-300 ${
                            isFeatured
                              ? "bg-[#E8541A]/5 border-[#E8541A]/40 shadow-[0_8px_24px_rgba(232,84,26,0.12)]"
                              : "bg-white border-[#080F22]/10 hover:border-[#E8541A]/30"
                          }`}
                          whileHover={{ scale: 1.02, translateY: -4 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <p
                              className={`text-[0.7rem] font-black tracking-[0.25em] uppercase ${
                                isFeatured ? "text-[#E8541A]" : "text-gray-500"
                              }`}
                            >
                              {isFeatured ? "MILESTONE" : "YEAR"}
                            </p>
                          </div>
                          <h3 className="text-[1.2rem] md:text-[1.4rem] font-black text-[#080F22] mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-[0.9rem] text-gray-600 mb-3">
                            {milestone.description}
                          </p>
                          <p className="text-[0.85rem] text-gray-500 italic">
                            {milestone.content}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden relative z-20">
                    <div className="flex gap-4 items-start">
                      {/* Mobile Marker */}
                      <div className="flex flex-col items-center mt-1 z-30 relative">
                        <motion.div
                          className={`flex items-center justify-center transition-all ${
                            isFeatured
                              ? "w-10 h-10 bg-[#E8541A] rounded-full shadow-[0_0_16px_rgba(232,84,26,0.3)]"
                              : "w-7 h-7 bg-white border-2 border-[#080F22] rounded-full"
                          }`}
                        >
                          {isFeatured ? (
                            <FiStar
                              size={18}
                              className="text-white fill-white"
                            />
                          ) : (
                            <div className="w-2 h-2 bg-[#080F22] rounded-full" />
                          )}
                        </motion.div>
                        {/* Mobile connector */}
                        <div className="w-1 h-12 bg-gradient-to-b from-[#080F22]/30 to-transparent mt-1" />
                      </div>

                      {/* Mobile Content */}
                      <motion.div
                        className={`flex-1 p-4 rounded-[3px] border ${
                          isFeatured
                            ? "bg-[#E8541A]/5 border-[#E8541A]/40"
                            : "bg-white border-[#080F22]/10"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p
                            className={`text-[0.65rem] font-black tracking-[0.2em] uppercase ${
                              isFeatured ? "text-[#E8541A]" : "text-gray-500"
                            }`}
                          >
                            {milestone.year}
                          </p>
                          <p
                            className={`text-[0.6rem] font-black tracking-[0.15em] uppercase ${
                              isFeatured ? "text-[#E8541A]" : "text-gray-400"
                            }`}
                          >
                            {isFeatured ? "KEY" : ""}
                          </p>
                        </div>
                        <h3 className="text-[1rem] font-black text-[#080F22] mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-[0.8rem] text-gray-600 mb-2">
                          {milestone.description}
                        </p>
                        <p className="text-[0.75rem] text-gray-500 italic">
                          {milestone.content}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── CTA SECTION ── */}
        <motion.div
          className="mt-24 md:mt-32 p-8 md:p-12 bg-gradient-to-r from-[#080F22] to-[#080F22]/90 rounded-[4px] text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #E8541A 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-[1.8rem] md:text-[2.2rem] font-black text-white mb-3">
              A Legacy of Dedicated Service
            </h3>
            <p className="text-[1rem] text-white/80 max-w-2xl mx-auto mb-6">
              Three decades of commitment to nation-building, public welfare,
              and strengthening democratic institutions.
            </p>
            <button
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8541A] hover:bg-[#F4712E] text-white
                font-black text-[0.9rem] tracking-[0.15em] uppercase rounded-[3px]
                transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About the Vision
              <FiArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
