import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const releases = [
  {
    id: 1,
    date: "15 Jun 2026",
    title: "National Infrastructure Development Initiative Announced",
    description:
      "A major infrastructure program has been launched to strengthen connectivity, create employment opportunities, and accelerate regional development.",
  },
  {
    id: 2,
    date: "10 Jun 2026",
    title: "Youth Employment & Skill Development Program",
    description:
      "A new skill enhancement initiative aims to empower young professionals through training, mentorship, and employment opportunities.",
  },
  {
    id: 3,
    date: "05 Jun 2026",
    title: "Public Welfare Outreach Campaign Expanded",
    description:
      "The outreach campaign has been extended to additional districts to ensure better access to government services and public support programs.",
  },
  {
    id: 4,
    date: "01 Jun 2026",
    title: "Healthcare Accessibility Initiative Introduced",
    description:
      "New healthcare measures have been introduced to improve access to quality medical services in underserved communities.",
  },
];

export default function PressRelease() {
  return (
    <section className="py-24 bg-[#F7F2E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
            Official Updates
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Press Releases
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            Stay informed with official statements, announcements,
            and important updates regarding ongoing initiatives,
            public programs, and future developments.
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
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className={`relative mb-12 flex items-center
              ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-[#E8541A] items-center justify-center shadow-lg z-10">
                <FileText
                  size={20}
                  className="text-[#E8541A]"
                />
              </div>

              {/* Card */}
              <div
                className={`
                w-full md:w-[46%]
                bg-white/80 backdrop-blur-xl
                border border-white/50
                rounded-[28px]
                shadow-xl
                hover:shadow-2xl
                transition-all duration-500
                overflow-hidden
                `}
              >
                {/* Top Strip */}
                <div className="h-2 bg-gradient-to-r from-[#E8541A] to-[#C8972B]" />

                <div className="p-8">

                  {/* Date */}
                  <div className="inline-flex px-4 py-2 rounded-full bg-[#F7F2E8] text-[#C8972B] font-semibold text-sm">
                    {item.date}
                  </div>

                  {/* Title */}
                  <h3
                    className="mt-5 text-2xl text-[#0D1B3E] leading-tight"
                    style={{
                      fontFamily:
                        "Playfair Display, serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-gray-600 leading-8">
                    {item.description}
                  </p>

                  {/* Read More */}
                  <button className="group mt-6 flex items-center gap-2 text-[#E8541A] font-medium hover:text-[#C8972B] transition">
                    Read Full Release

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-[#0D1B3E] hover:bg-[#E8541A] text-white px-10 py-4 rounded-full transition-all duration-300">
            View All Press Releases
          </button>
        </motion.div>

      </div>
    </section>
  );
}