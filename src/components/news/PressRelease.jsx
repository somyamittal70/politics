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
    <section className="py-20 bg-[#F7F2E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
            Official Updates
          </span>

          <h2
            className="mt-3 text-4xl md:text-5xl text-[#0D1B3E]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Press Releases
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay informed with official statements and important announcements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#E8541A] via-[#C8972B] to-[#E8541A]" />

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
              transition={{ duration: 0.5 }}
              className={`relative mb-6 md:mb-8 flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#E8541A] items-center justify-center shadow-md z-10">
                <FileText size={16} className="text-[#E8541A]" />
              </div>

              {/* Card */}
              <div
                className="
                  w-full md:w-[45%]
                  bg-white
                  border border-[#C8972B]/10
                  rounded-3xl
                  shadow-md
                  hover:shadow-xl
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Top Accent */}
                <div className="h-1 bg-gradient-to-r from-[#E8541A] to-[#C8972B]" />

                <div className="p-5 md:p-6">
                  {/* Date */}
                  <span className="inline-flex px-3 py-1 rounded-full bg-[#F7F2E8] text-[#C8972B] text-xs font-semibold">
                    {item.date}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-3 text-lg md:text-xl text-[#0D1B3E] leading-snug"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 text-sm leading-6 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button className="group mt-4 flex items-center gap-2 text-[#E8541A] text-sm font-medium hover:text-[#C8972B] transition">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button className="bg-[#0D1B3E] hover:bg-[#E8541A] text-white px-8 py-3 rounded-full transition-all duration-300">
            View All Press Releases
          </button>
        </motion.div>
      </div>
    </section>
  );
}
