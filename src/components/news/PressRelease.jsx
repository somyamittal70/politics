import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const releases = [
  {
    id: 1,
    date: "15 Jun 2026",
    title: "National Infrastructure Development Initiative Announced",
    description:
      "Major infrastructure projects approved to improve connectivity and economic growth.",
  },
  {
    id: 2,
    date: "10 Jun 2026",
    title: "Youth Employment & Skill Development Program",
    description:
      "New training and employment opportunities launched for young professionals.",
  },
  {
    id: 3,
    date: "05 Jun 2026",
    title: "Public Welfare Outreach Campaign Expanded",
    description:
      "Additional districts added to improve access to public services and support.",
  },
  {
    id: 4,
    date: "01 Jun 2026",
    title: "Healthcare Accessibility Initiative Introduced",
    description:
      "Improving healthcare access and quality medical services for communities.",
  },
];

export default function PressRelease() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span
            className="uppercase tracking-[0.3em] text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Official Updates
          </span>

          <h2
            className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl text-[#333333] leading-tight"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Press <em className="text-[#FC8814] not-italic italic">Releases</em>
          </h2>

          <p
            className="mt-4 md:mt-5 text-[#666666] max-w-2xl mx-auto text-sm md:text-base leading-7"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Stay informed with official statements and important announcements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#FC8814] via-[#FC8814]/50 to-[#FC8814]" />

          {releases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-6 md:mb-10 flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot - Desktop */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFFFFF] border-2 border-[#FC8814] items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-10"
              >
                <FileText
                  size={18}
                  className="text-[#FC8814]"
                  strokeWidth={2}
                />
              </motion.div>

              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute -left-5 top-0 w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#FC8814] flex items-center justify-center shadow-md z-10">
                <div className="w-2 h-2 rounded-full bg-[#FC8814]" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  shadow: "0 20px 40px rgba(252, 136, 20, 0.15)",
                }}
                className="
                  w-full md:w-[45%]
                  bg-[#FFFFFF]
                  border border-[#E8E7E6]
                  rounded-2xl md:rounded-3xl
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  overflow-hidden
                  md:ml-6
                "
              >
                {/* Top Accent Bar */}
                <div className="h-[2px] bg-[#FC8814]" />

                <div className="p-5 md:p-6 lg:p-7">
                  {/* Date Badge */}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex px-3 py-1.5 rounded-full bg-[#FC8814]/8 text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black tracking-wider uppercase border border-[#FC8814]/20"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {item.date}
                  </motion.span>

                  {/* Title */}
                  <h3
                    className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-[#333333] leading-snug font-black"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-3 md:mt-4 text-[#666666] text-[0.85rem] md:text-sm leading-6 line-clamp-2"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {item.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="group mt-4 md:mt-5 flex items-center gap-2 text-[#FC8814] text-[0.7rem] md:text-[0.75rem] font-black tracking-[0.08em] uppercase hover:text-[#333333] transition-colors duration-200"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Read More
                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FC8814] via-[#FC8814]/50 to-[#E8E7E6]" />
        </div>

        
      </div>
    </section>
  );
}
