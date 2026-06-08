import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function FeaturedNews() {
  return (
    <section className="py-20 bg-[#F7F2E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
            Featured Story
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Highlighted News & Announcements
          </h2>

          <div className="w-24 h-1 bg-[#E8541A] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 overflow-hidden bg-white rounded-[32px] shadow-xl"
        >
          {/* Image */}
          <div className="relative h-[350px] lg:h-auto overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3881113/pexels-photo-3881113.jpeg"
              alt="Featured News"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

            <div className="absolute top-6 left-6">
              <span className="bg-[#E8541A] text-white px-5 py-2 rounded-full text-sm font-medium">
                Featured Update
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[#C8972B] mb-4">
              <CalendarDays size={18} />
              <span className="text-sm font-medium">June 10, 2026</span>
            </div>

            <h3
              className="text-3xl md:text-4xl text-[#0D1B3E] leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Major Infrastructure Development Initiative Approved For Regional
              Growth
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              A landmark development initiative has been approved to strengthen
              infrastructure, improve public services, generate employment
              opportunities, and support long-term economic growth across
              multiple regions.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              The project focuses on transportation, education, healthcare, and
              sustainable urban development to improve quality of life for
              citizens and create new opportunities for future generations.
            </p>

            <div className="mt-8">
              <button className="group bg-[#E8541A] hover:bg-[#C8972B] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                Read Full Story
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
