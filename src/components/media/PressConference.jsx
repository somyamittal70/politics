import { motion } from "framer-motion";
import { Mic, CalendarDays, MapPin, ArrowRight, Play } from "lucide-react";

const conferences = [
  {
    id: 1,
    title: "National Development Vision 2026",
    date: "15 June 2026",
    location: "New Delhi",
    speaker: "Amit Shah",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600",
    description:
      "A comprehensive briefing covering national development priorities, infrastructure expansion, youth empowerment, and future growth initiatives.",
  },
  {
    id: 2,
    title: "Public Welfare & Infrastructure Update",
    date: "10 June 2026",
    location: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
  },
  {
    id: 3,
    title: "Youth Leadership Summit Media Briefing",
    date: "05 June 2026",
    location: "Lucknow",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },
  {
    id: 4,
    title: "National Security & Governance Update",
    date: "01 June 2026",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200",
  },
];

export default function PressConference() {
  const featured = conferences[0];

  return (
    <section className="py-24 bg-[#F7F2E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
            Official Media Briefings
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Press Conferences
          </h2>
        </motion.div>

        {/* Featured Conference */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 bg-white rounded-[32px] overflow-hidden shadow-xl mb-16"
        >
          {/* Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#E8541A] flex items-center justify-center hover:scale-110 transition">
                <Play size={28} fill="white" className="text-white ml-1" />
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#E8541A] font-semibold">
              <Mic size={18} />
              Featured Conference
            </div>

            <h3
              className="mt-4 text-3xl md:text-4xl text-[#0D1B3E]"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              {featured.title}
            </h3>

            <div className="flex flex-wrap gap-6 mt-5 text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {featured.date}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {featured.location}
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              {featured.description}
            </p>

            <button className="mt-8 bg-[#0D1B3E] hover:bg-[#E8541A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition w-fit">
              Watch Full Conference
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Recent Conferences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-[#E8541A] text-white text-xs px-3 py-1 rounded-full">
                  Press Briefing
                </div>
              </div>

              <div className="p-6">
                <h4
                  className="text-xl text-[#0D1B3E]"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {item.title}
                </h4>

                <div className="flex flex-col gap-2 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    {item.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                </div>

                <button className="mt-5 text-[#E8541A] flex items-center gap-2 hover:text-[#C8972B] transition">
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
