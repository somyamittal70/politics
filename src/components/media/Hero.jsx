import { motion } from "framer-motion";
import { Play, Camera, Video, Newspaper, ArrowRight, Megaphone, Image } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      number: "150+",
      label: "Videos",
      icon: Video,
    },
    {
      number: "200+",
      label: "Posters & Images",
      icon: Image,
    },
    {
      number: "100+",
      label: "Press Notes",
      icon: Newspaper,
    },
    {
      number: "50+",
      label: "Announcements",
      icon: Megaphone,
    },
  ];

  const categories = [
    "Videos",
    "Announcements",
    "Posters",
    "Press Notes",
    "Campaign Updates",
    "Event Highlights",
    "Public Information",
  ];

  return (
    <section className="relative overflow-hidden bg-[#1a1a1a]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#1a1a1a]" />

      {/* Blur Effects */}
      <div className="absolute top-10 right-0 w-40 sm:w-64 lg:w-[500px] h-40 sm:h-64 lg:h-[500px] bg-[#FC8814]/10 blur-[80px] lg:blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-40 sm:w-64 lg:w-[400px] h-40 sm:h-64 lg:h-[400px] bg-[#FC8814]/10 blur-[80px] lg:blur-[120px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-1 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FC8814]" />
              <span className="uppercase tracking-[0.25em] text-[#FC8814] text-xs sm:text-sm font-semibold">
                Media Centre
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Media
              <span className="block text-[#FC8814]">Centre</span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-sm sm:text-base lg:text-lg text-white/70 leading-7 lg:leading-8 max-w-xl"
            >
              Videos, announcements, campaign updates, press coverage, event
              highlights and important public information at one place.
            </motion.p>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-2 mt-5"
            >
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60 bg-white/5 hover:border-[#FC8814] hover:text-[#FC8814] transition-all duration-200 cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button className="w-full sm:w-auto bg-[#FC8814] hover:opacity-90 text-white px-6 lg:px-8 py-3.5 lg:py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300">
                Browse All Media
                <ArrowRight size={18} />
              </button>

              <button className="w-full sm:w-auto border border-[#FC8814] text-white hover:bg-[#FC8814] px-6 lg:px-8 py-3.5 lg:py-4 rounded-full transition-all duration-300">
                Press Notes
              </button>
            </motion.div>

            {/* Stats — 2x2 grid on mobile, 4-col on large */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 lg:mt-14">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 lg:p-5"
                  >
                    <Icon size={20} className="text-[#FC8814]" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white mt-3">
                      {item.number}
                    </h3>
                    <p className="text-white/60 text-xs mt-1">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/35743103/pexels-photo-35743103.jpeg"
                alt="Media Centre"
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/90 via-transparent to-transparent" />

              {/* Featured Video Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FC8814] flex items-center justify-center hover:scale-110 transition">
                      <Play size={18} fill="white" className="text-white ml-1" />
                    </button>
                    <div>
                      <p className="text-[#FC8814] text-xs uppercase tracking-wider">
                        Featured Video
                      </p>
                      <h4 className="text-white text-sm sm:text-base lg:text-lg font-semibold mt-1">
                        Latest Campaign Highlights 2026
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="hidden xl:block absolute -left-10 top-20 bg-white rounded-3xl p-6 shadow-xl"
            >
              <p className="text-[#FC8814] text-4xl font-bold">1M+</p>
              <p className="text-gray-600 mt-1">Monthly Views</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}