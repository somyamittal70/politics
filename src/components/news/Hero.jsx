import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";

export default function News() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1B3E]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0D1B3E]/85" />

      {/* Decorative Blur */}
      <div className="absolute top-10 right-0 sm:right-10 lg:right-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-[#C8972B]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 sm:left-6 lg:left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-[#E8541A]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-28 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              sm:gap-3
              bg-white/10
              backdrop-blur-md
              border
              border-white/10
              px-4
              sm:px-5
              py-2
              rounded-full
              mb-6
              sm:mb-8
            "
          >
            <Newspaper
              size={16}
              className="text-[#C8972B] sm:w-[18px] sm:h-[18px]"
            />

            <span
              className="
                text-[#F5F5F5]
                text-[10px]
                sm:text-xs
                md:text-sm
                tracking-[0.18em]
                uppercase
              "
            >
              Latest News & Updates
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              text-[#F5F5F5]
              font-bold
              leading-[1.1]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Stay Updated With
            <span className="block text-[#C8972B] mt-1 sm:mt-2">
              Latest Announcements
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              mt-6
              sm:mt-8
              text-[#F5F5F5]/80
              text-base
              sm:text-lg
              md:text-xl
              leading-7
              sm:leading-8
              max-w-3xl
            "
          >
            Explore the latest speeches, press releases, campaign announcements,
            public initiatives, and important updates. Stay connected with every
            milestone and development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:gap-5
              mt-8
              sm:mt-10
            "
          >
            <button
              className="
                w-full
                sm:w-auto
                bg-[#E8541A]
                hover:bg-[#C8972B]
                text-white
                px-6
                sm:px-8
                py-4
                rounded-full
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Explore Updates
              <ArrowRight size={18} />
            </button>

            <button
              className="
                w-full
                sm:w-auto
                border
                border-[#C8972B]
                text-white
                hover:bg-[#C8972B]
                hover:text-black
                px-6
                sm:px-8
                py-4
                rounded-full
                transition-all
                duration-300
              "
            >
              View Media Center
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-4
              sm:gap-6
              mt-12
              sm:mt-16
            "
          >
            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-5">
              <h3 className="text-[#C8972B] text-2xl sm:text-3xl font-bold">
                250+
              </h3>
              <p className="text-white/70 text-sm mt-1">News Articles</p>
            </div>

            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-5">
              <h3 className="text-[#C8972B] text-2xl sm:text-3xl font-bold">
                120+
              </h3>
              <p className="text-white/70 text-sm mt-1">Press Releases</p>
            </div>

            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-5 col-span-2 md:col-span-1">
              <h3 className="text-[#C8972B] text-2xl sm:text-3xl font-bold">
                50+
              </h3>
              <p className="text-white/70 text-sm mt-1">Media Events</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
