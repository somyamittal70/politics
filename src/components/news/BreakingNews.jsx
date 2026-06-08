import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

export default function BreakingNews() {
  const newsItems = [
    "Major Development Initiative Announced For Rural Communities",
    "Public Outreach Program Successfully Completed Across Multiple Districts",
    "New Employment Opportunities Launched For Youth Development",
    "Upcoming National Conference Scheduled For Next Month",
    "Special Infrastructure Project Approved For Regional Growth",
  ];

  return (
    <section className="bg-[#0D1B3E] overflow-hidden border-y border-[#C8972B]/20">
      <div className="flex items-center">
        {/* Left Label */}
        <div className="bg-[#E8541A] px-6 py-4 flex items-center gap-2 shrink-0">
          <Megaphone size={18} className="text-white" />

          <span className="text-white font-semibold uppercase tracking-wider text-sm">
            Breaking News
          </span>
        </div>

        {/* Ticker */}
        <div className="relative overflow-hidden flex-1">
          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center text-[#F5F5F5] px-10 py-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#C8972B] mr-4" />

                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
