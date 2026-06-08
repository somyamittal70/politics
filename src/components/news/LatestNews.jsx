import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Youth Empowerment Initiative Reaches New Milestone",
    date: "June 12, 2026",
    category: "Initiative",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Public Interaction Program Conducted Successfully",
    date: "June 10, 2026",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Infrastructure Development Projects Announced",
    date: "June 08, 2026",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "National Conference Scheduled For Next Month",
    date: "June 05, 2026",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        >
          <div>
            <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
              Latest Updates
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              News From The Ground
            </h2>
          </div>

          <button className="mt-6 md:mt-0 text-[#E8541A] flex items-center gap-2 font-medium hover:text-[#C8972B] transition">
            View All News
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group"
          >
            <div className="overflow-hidden rounded-[32px] bg-[#F7F2E8] shadow-xl">

              <div className="overflow-hidden h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 md:p-10">

                <span className="bg-[#E8541A] text-white px-5 py-2 rounded-full text-sm">
                  Featured
                </span>

                <div className="flex items-center gap-3 text-[#C8972B] mt-6">
                  <CalendarDays size={18} />
                  <span>June 15, 2026</span>
                </div>

                <h3
                  className="mt-5 text-3xl md:text-4xl text-[#0D1B3E] leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Transforming Communities Through
                  Sustainable Development Programs
                </h3>

                <p className="mt-6 text-gray-600 leading-8">
                  New initiatives focused on education,
                  healthcare, infrastructure, and youth
                  empowerment are creating long-term
                  opportunities and improving lives across
                  multiple regions.
                </p>

                <button className="mt-8 bg-[#0D1B3E] hover:bg-[#E8541A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition">
                  Read Full Story
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Side News */}
          <div className="space-y-6">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-[#C8972B]/10 rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="flex">

                  <div className="w-32 h-32 overflow-hidden flex-shrink-0">
                    <img
                      src={news.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-center">

                    <span className="text-xs uppercase tracking-wider text-[#E8541A] font-semibold">
                      {news.category}
                    </span>

                    <h4
                      className="mt-2 text-[#0D1B3E] font-semibold line-clamp-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {news.title}
                    </h4>

                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                      <CalendarDays size={14} />
                      {news.date}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}