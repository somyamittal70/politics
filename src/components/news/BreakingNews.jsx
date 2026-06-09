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
    <section className="bg-white border-y border-[#E8E7E6] overflow-hidden">
      <div className="flex items-center min-h-[56px] md:min-h-[64px]">
        {/* Breaking Label */}
        <div
          className="
            shrink-0
            bg-[#FC8814]
            px-4
            sm:px-5
            md:px-6
            py-4
            flex
            items-center
            gap-2
            h-full
          "
        >
          <Megaphone size={18} className="text-white flex-shrink-0" />

          <span
            className="
              text-white
              font-bold
              uppercase
              tracking-wider
              text-[11px]
              sm:text-xs
              md:text-sm
              whitespace-nowrap
            "
          >
            Breaking News
          </span>
        </div>

        {/* News Ticker */}
        <div className="relative overflow-hidden flex-1">
          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  px-6
                  md:px-10
                  py-4
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#FC8814]
                    mr-4
                    flex-shrink-0
                  "
                />

                <span
                  className="
                    text-[#4B5563]
                    font-medium
                    text-sm
                    md:text-[15px]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
